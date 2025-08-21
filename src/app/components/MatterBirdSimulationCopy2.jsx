"use client";
import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

const BirdSimulation = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const birdsRef = useRef([]);
  const animationRef = useRef(null);
  const [resetKey, setResetKey] = useState(0); // Add a reset key

  // Dynamic canvas sizing based on screen size
  const getCanvasDimensions = () => {
    const screenWidth =
      typeof window !== "undefined" ? window.innerWidth : 1200;
    const screenHeight =
      typeof window !== "undefined" ? window.innerHeight : 600;

    // For large desktops (>1400px), use 1200px width
    if (screenWidth > 1400) {
      return { width: 1200, height: 600 };
    }
    // For medium screens (800-1400px), use 90% of screen width
    else if (screenWidth > 800) {
      return {
        width: Math.floor(screenWidth * 0.9),
        height: Math.floor(screenHeight * 0.7),
      };
    }
    // For small screens (<800px), use 95% of screen width
    else {
      return {
        width: Math.floor(screenWidth * 0.95),
        height: Math.floor(screenHeight * 0.6),
      };
    }
  };

  const [dimensions, setDimensions] = useState(getCanvasDimensions());
  const mapWidth = dimensions.width;
  const mapHeight = dimensions.height;

  // Cleanup function
  const cleanupSimulation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    if (renderRef.current) {
      Render.stop(renderRef.current);
      if (sceneRef.current) {
        sceneRef.current.removeEventListener("click", handleClick);
      }
    }
    if (engineRef.current) {
      Engine.clear(engineRef.current);
      engineRef.current = null;
    }
    if (renderRef.current?.canvas) {
      renderRef.current.canvas.remove();
    }
    birdsRef.current = [];
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newDimensions = getCanvasDimensions();
      if (
        newDimensions.width !== dimensions.width ||
        newDimensions.height !== dimensions.height
      ) {
        setDimensions(newDimensions);
        cleanupSimulation();
        setResetKey((prev) => prev + 1); // Trigger reinitialization
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dimensions]);

  // Initialize or reinitialize simulation
  useEffect(() => {
    // Module aliases
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Body = Matter.Body;
    const Composite = Matter.Composite;
    const Constraint = Matter.Constraint;

    // Create engine with halved gravity
    const engine = Engine.create({
      gravity: { x: 0, y: 0.25 },
      enableSleeping: false,
    });
    engineRef.current = engine;

    // Create renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: mapWidth,
        height: mapHeight,
        wireframes: false,
        background: "#f4f4f8",
        showSleeping: false,
      },
    });
    renderRef.current = render;

    // Categories for collision filtering
    const greenCategory = 0x0002;
    const redCategory = 0x0004;
    const blueCategory = 0x0008;
    const floorCategory = 0x0010;

    class Bird {
      constructor(torsoX, torsoY, holdItem, flying) {
        this.t = 0;
        this.speed = 0;
        this.boosted = 0;
        this.initialCoordsX = torsoX;
        this.initialCoordsY = torsoY;
        this.snared = 0;
        this.delayPosX = 0;
        this.flying = flying;
        this.torsoX = torsoX;
        this.torsoY = torsoY;
        this.holdItem = holdItem;
        this.existence = 1;
        this.mapWidth = mapWidth;
        this.mapHeight = mapHeight;

        // Create bird parts (same as before)
        this.birdHead = Bodies.circle(torsoX, torsoY - 20, 20, {
          density: 0.1,
          restitution: 0.5,
          collisionFilter: {
            category: greenCategory,
            mask: floorCategory | greenCategory,
          },
        });

        this.birdTorso1 = Bodies.circle(torsoX - 20, torsoY, 30, {
          restitution: 0,
          density: 10,
          inertia: Infinity,
          collisionFilter: {
            category: greenCategory,
            mask: floorCategory | greenCategory,
          },
        });

        this.birdTorso2 = Bodies.circle(torsoX + 60, torsoY + 10, 20, {
          restitution: 0.2,
          density: 80,
          friction: 0,
          frictionStatic: 1,
          collisionFilter: {
            category: redCategory,
            mask: floorCategory | redCategory,
          },
        });

        this.birdWing = Bodies.circle(torsoX + 90, torsoY, 5, {
          density: 0.01,
          restitution: 0,
          collisionFilter: {
            category: greenCategory,
            mask: floorCategory | greenCategory,
          },
          inertia: Infinity,
        });

        this.birdWingRect = Bodies.rectangle(torsoX + 75, torsoY + 12, 2, 3, {
          density: 0.02,
          restitution: 0,
          collisionFilter: {
            category: blueCategory,
            mask: floorCategory | blueCategory,
          },
        });

        this.newItem = Bodies.circle(torsoX - 20, torsoY - 20, 20, {
          density: 0.001,
          collisionFilter: {
            category: blueCategory,
            mask: floorCategory | blueCategory,
          },
        });

        // Create constraints (same as before)
        this.birdMidPivot = Constraint.create({
          bodyA: this.birdTorso1,
          pointA: { x: 20, y: 12 },
          bodyB: this.birdTorso2,
          pointB: { x: 30, y: 10 },
          stiffness: 0.8,
          length: 10,
          render: {
            type: "line",
            strokeStyle: "#000000",
            lineWidth: 2,
          },
        });

        this.birdConstraint3 = Constraint.create({
          bodyA: this.birdTorso1,
          pointA: { x: -5, y: 33 },
          bodyB: this.birdTorso2,
          pointB: { x: -25, y: -10 },
          stiffness: 0.8,
          length: 30,
          render: {
            type: "line",
            strokeStyle: "#000000",
            lineWidth: 2,
          },
        });

        this.birdConstraint1 = Constraint.create({
          bodyA: this.birdTorso1,
          pointA: { x: 0, y: -32 },
          bodyB: this.birdHead,
          pointB: { x: 0, y: 12 },
          length: 8,
          render: {
            type: "line",
            strokeStyle: "#000000",
            lineWidth: 2,
          },
        });

        this.newItemConstraint = Constraint.create({
          bodyA: this.birdHead,
          pointA: { x: -20, y: 3 },
          bodyB: this.newItem,
          pointB: { x: 0, y: 0 },
          stiffness: 0.5,
          length: 10,
          render: {
            type: "line",
            strokeStyle: "#000000",
            lineWidth: 2,
          },
        });

        this.birdWingConnect1 = Constraint.create({
          bodyA: this.birdTorso1,
          pointA: { x: 10, y: -27 },
          bodyB: this.birdWingRect,
          pointB: { x: -1, y: 1 },
          stiffness: 0.8,
          friction: 0,
          length: 20,
          render: {
            type: "line",
            strokeStyle: "#000000",
            lineWidth: 2,
          },
        });

        this.birdWingConnect2 = Constraint.create({
          bodyA: this.birdWingRect,
          pointA: { x: 1, y: 1 },
          bodyB: this.birdWing,
          pointB: { x: 2, y: -8 },
          stiffness: 0.8,
          friction: 0.1,
          length: 20,
          render: {
            type: "line",
            strokeStyle: "#000000",
            lineWidth: 2,
          },
        });

        this.birdConstraint6 = Constraint.create({
          bodyA: this.birdTorso1,
          pointA: { x: 20, y: 20 },
          bodyB: this.birdWing,
          pointB: { x: 2, y: -8 },
          stiffness: 0.1,
          friction: 0,
          length: 30,
          damping: 0,
          render: {
            type: "line",
            strokeStyle: "#000000",
            lineWidth: 2,
          },
        });

        // Create bird composite
        this.birdComposite = Composite.create({
          bodies: [
            this.birdTorso2,
            this.birdTorso1,
            this.birdHead,
            this.birdWing,
            this.birdWingRect,
            this.newItem,
          ],
          constraints: [
            this.birdWingConnect1,
            this.birdWingConnect2,
            this.birdConstraint1,
            this.birdConstraint3,
            this.birdConstraint6,
            this.birdMidPivot,
            this.newItemConstraint,
          ],
        });

        Composite.add(engine.world, [this.birdComposite]);

        this.flyAwayTimer = 500;
      }

      // ... (rest of the Bird class methods remain the same)
      flyAwayTimerDown() {
        this.flyAwayTimer--;
      }

      flapWing() {
        const forceMagnitude = 40;
        Body.setVelocity(this.birdWing, {
          x: -forceMagnitude * 2,
          y: forceMagnitude + forceMagnitude,
        });
      }

      boostUp() {
        Body.setVelocity(this.birdTorso2, {
          x: 0,
          y: -6,
        });
      }

      fly() {
        if (this.flyAwayTimer % 8 === 0) {
          this.flapWing();
        }
        if (this.flyAwayTimer % 3 === 0) {
          this.boostUp();
        }
      }

      isOffScreen() {
        const pos = this.birdTorso1.position;
        return pos.y < -500 || pos.x > this.mapWidth + 200 || pos.x < -200;
      }

      removeFromWorld() {
        Composite.remove(engine.world, [
          this.birdComposite,
          this.birdTorso2,
          this.birdTorso1,
          this.birdHead,
          this.birdWingRect,
          this.birdWing,
          this.newItem,
          this.birdWingConnect1,
          this.birdWingConnect2,
          this.birdConstraint1,
          this.birdConstraint3,
          this.birdConstraint6,
          this.birdMidPivot,
          this.newItemConstraint,
        ]);
        this.existence = 0;
      }

      flyCheck() {
        if (this.flyAwayTimer <= 1 && this.flyAwayTimer > 0) {
          this.fly();
        } else if (this.flyAwayTimer <= 0 && this.flyAwayTimer >= -121) {
          this.fly();
        } else if (this.flyAwayTimer < -122) {
          this.flyAwayTimer = 200;
        }
      }

      boostSide() {
        let horizontalX = (Math.random() * 7 + 3) * 0.5;
        if (this.boosted <= 1) {
          if (this.initialCoordsX < mapWidth * 0.2) {
            horizontalX = -horizontalX;
          }
          Body.setVelocity(this.birdTorso2, {
            x: -horizontalX,
            y: (Math.random() * 4 - 2) * 0.5,
          });
          this.boosted++;
        }
      }

      birdHome() {
        const anchorX = mapWidth * 0.2;
        const anchorY = this.mapHeight - 88;

        this.homeDist = Math.sqrt(
          Math.pow(Math.abs(this.birdTorso1.position.x - anchorX), 2) +
            Math.pow(Math.abs(this.birdTorso1.position.y - anchorY), 2)
        );

        if (this.homeDist <= 1500 && this.snared === 0) {
          Body.applyForce(this.birdTorso2, this.birdTorso2.position, {
            x: (anchorX - this.birdTorso2.position.x) * 0.25,
            y: 0,
          });
        }

        if (this.homeDist <= 550 && this.snared <= 1) {
          this.snared = 1;
          Body.applyForce(this.birdTorso2, this.birdTorso2.position, {
            x: (anchorX - this.birdTorso1.position.x) * 0.45,
            y: (anchorX - this.birdTorso1.position.y) * 0.15,
          });
        }

        if (this.homeDist <= 350 && this.snared <= 2) {
          this.snared = 2;
          Body.applyForce(this.birdTorso2, this.birdTorso2.position, {
            x: (anchorX - this.birdTorso1.position.x) * 0.25,
            y: -(1 / (anchorY - this.birdTorso2.position.y)) * 1.5,
          });
        }

        if (this.homeDist <= 120 && this.snared <= 3) {
          this.snared = 3;
          if (this.t < 20) {
            this.t++;
          } else {
            this.snared = 6;
            this.t = 0;
          }
          Body.setVelocity(this.birdTorso2, {
            x: (anchorX - this.birdTorso2.position.x) * 0.01,
            y: (anchorY - this.birdTorso2.position.y) * 0.01,
          });
        }
      }

      update() {
        this.boostSide();
        this.flyAwayTimerDown();
        this.flyCheck();
        this.birdHome();

        if (this.isOffScreen()) {
          this.removeFromWorld();
          return false;
        }
        return true;
      }
    }

    // Create boundaries
    const ground = Bodies.rectangle(
      mapWidth / 2,
      mapHeight + 10,
      mapWidth + 10,
      60,
      {
        isStatic: true,
        render: { fillStyle: "#333333" },
        collisionFilter: {
          category: floorCategory,
          mask: redCategory | blueCategory | greenCategory,
        },
      }
    );

    // Load perch image
    const perchImage = new Image();
    perchImage.src = "/Assets/Intro/HKTest.png";

    const perch = Bodies.rectangle(
      mapWidth / 2,
      mapHeight / 2,
      Math.min(200, mapWidth * 0.15),
      20,
      {
        isStatic: true,
        render: {
          fillStyle: "transparent",
        },
        collisionFilter: {
          category: floorCategory,
          mask: redCategory | blueCategory | greenCategory,
        },
      }
    );

    Composite.add(engine.world, [ground, perch]);

    // Start the engine and renderer
    Engine.run(engine);
    Render.run(render);

    // Custom rendering for perch image
    const customRender = () => {
      const ctx = render.canvas.getContext("2d");

      // Draw the perch image
      if (perchImage.complete) {
        const perchWidth = Math.min(200, mapWidth * 0.15);
        const perchHeight = 20;
        const perchX = mapWidth / 2 - perchWidth / 2;
        const perchY = mapHeight / 2 - perchHeight / 2;

        ctx.drawImage(perchImage, perchX, perchY, perchWidth, perchHeight);
      }
    };

    // Random XY position generator
    const randomXY = () => {
      const randomX = (Math.random() < 0.5 ? -1 : 1) * Math.random() * 80;
      let x, y;

      if (randomX >= 0) {
        x = mapWidth + randomX;
      } else {
        x = 0 + randomX;
      }

      y = Math.random() * (mapHeight - 122);

      return { x, y };
    };

    // Create a new bird
    const makeBird = () => {
      const { x, y } = randomXY();
      const holdItem = Math.random() < 0.5;
      const bird = new Bird(x, y, holdItem, false);
      birdsRef.current.push(bird);
    };

    // Add event listeners
    const handleClick = (e) => {
      makeBird();
    };

    sceneRef.current.addEventListener("click", handleClick);

    // Animation loop
    const animate = () => {
      Matter.Engine.update(engine, (1000 / 60) * 0.5);

      // Update all birds
      const activeBirds = [];
      for (let i = 0; i < birdsRef.current.length; i++) {
        const bird = birdsRef.current[i];
        if (bird.existence === 1) {
          const shouldKeep = bird.update();
          if (shouldKeep) {
            activeBirds.push(bird);
          }
        }
      }
      birdsRef.current = activeBirds;

      // Random wing flaps
      birdsRef.current.forEach((bird) => {
        if (Math.random() < 0.015) {
          bird.flapWing();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start the animation loop
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cleanupSimulation();
    };
  }, [mapWidth, mapHeight, resetKey]); // Add resetKey to dependencies

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          marginBottom: "10px",
          textAlign: "center",
          fontSize: "14px",
          color: "#666",
        }}
      ></div>
      <div
        ref={sceneRef}
        style={{
          width: `${mapWidth}px`,
          height: `${mapHeight}px`,
          border: "1px solid #ccc",
          borderRadius: "8px",
          cursor: "pointer",
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      />
      <div
        style={{
          marginTop: "10px",
          fontSize: "12px",
          color: "#888",
          textAlign: "center",
        }}
      >
        Canvas: {mapWidth} × {mapHeight}px
      </div>
    </div>
  );
};

export default BirdSimulation;
