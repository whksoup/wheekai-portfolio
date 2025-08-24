import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

const BirdSimulation = () => {
  const sceneRef = useRef(null);
  const containerRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const birdsRef = useRef([]);
  const animationRef = useRef(null);
  const clickHandlerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
  });

  // Dynamic canvas sizing based on container size
  const getCanvasDimensions = (containerWidth, containerHeight) => {
    if (!containerWidth || !containerHeight) {
      // Fallback dimensions - increased by 1.5x
      return { width: 1800, height: 900 };
    }

    const padding = 40; // Account for container padding
    const availableWidth = containerWidth - padding;
    const availableHeight = containerHeight - padding;

    // Base dimensions increased by 1.5x
    const baseWidth = 1800; // was 1200
    const baseHeight = 900; // was 600

    // Maintain aspect ratio while fitting in container
    const maxWidth = Math.min(baseWidth, availableWidth);
    const maxHeight = Math.min(baseHeight, availableHeight);

    // If container is very wide, limit height and adjust width proportionally
    const aspectRatio = baseWidth / baseHeight;
    let width = maxWidth;
    let height = width / aspectRatio;

    if (height > maxHeight) {
      height = maxHeight;
      width = height * aspectRatio;
    }

    return {
      width: Math.floor(width),
      height: Math.floor(height),
    };
  };

  const [dimensions, setDimensions] = useState({ width: 1800, height: 900 });
  const mapWidth = dimensions.width;
  const mapHeight = dimensions.height;

  // Measure container dimensions
  useEffect(() => {
    const measureContainer = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerDimensions({
          width: rect.width,
          height: rect.height,
        });
      }
    };

    // Use ResizeObserver for more accurate container size detection
    let resizeObserver;
    if (containerRef.current && window.ResizeObserver) {
      resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const { width, height } = entry.contentRect;
          setContainerDimensions({ width, height });
        }
      });
      resizeObserver.observe(containerRef.current);
    } else {
      // Fallback to window resize
      measureContainer();
      const handleResize = () => measureContainer();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  // Update dimensions when container size changes
  useEffect(() => {
    if (containerDimensions.width > 0 && containerDimensions.height > 0) {
      const newDimensions = getCanvasDimensions(
        containerDimensions.width,
        containerDimensions.height
      );
      setDimensions(newDimensions);
    }
  }, [containerDimensions]);

  // Delay initialization until component is fully mounted and dimensions are set
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      const initTimer = setTimeout(() => {
        setIsReady(true);
      }, 150); // Slightly longer delay to ensure everything is settled

      return () => clearTimeout(initTimer);
    }
  }, [dimensions]);

  useEffect(() => {
    // Only initialize when ready and dimensions are set
    if (
      !isReady ||
      engineRef.current ||
      !dimensions.width ||
      !dimensions.height
    )
      return;

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
      gravity: { x: 0, y: 0.25 }, // Halved from 0.5 to 0.25
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

        // Create bird parts
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

        // Create constraints
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
            //this.newItem,
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

      flyAwayTimerDown() {
        this.flyAwayTimer--;
      }

      flapWing() {
        const forceMagnitude = 40; // Halved from 80 to 40
        Body.setVelocity(this.birdWing, {
          x: -forceMagnitude * 2,
          y: forceMagnitude + forceMagnitude,
        });
      }

      boostUp() {
        Body.setVelocity(this.birdTorso2, {
          x: 0,
          y: -6, // Halved from -12 to -6
        });
      }
      boostSideways() {
        Body.setVelocity(this.birdTorso2, {
          x: Math.random(-1, 1),
        });
      }

      fly() {
        if (this.flyAwayTimer % 8 === 0) {
          this.flapWing();
        }
        if (this.flyAwayTimer % 3 === 0) {
          this.boostUp();
          // this.boostSideways();
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
        let horizontalX = (Math.random() * 3 + 3) * 0.25; // Halved horizontal speed
        if (this.boosted <= 1) {
          if (this.initialCoordsX < mapWidth * 0.2) {
            // Scale with canvas width
            horizontalX = -horizontalX;
          }
          Body.setVelocity(this.birdTorso2, {
            x: -horizontalX,
            y: (Math.random() * 4 - 2) * 0.5, // Halved vertical movement
          });
          this.boosted++;
        }
      }

      birdHome() {
        const anchorX = mapWidth * 0.2; // Scale anchor with canvas width
        const anchorY = this.mapHeight - 88;

        this.homeDist = Math.sqrt(
          Math.pow(Math.abs(this.birdTorso1.position.x - anchorX), 2) +
            Math.pow(Math.abs(this.birdTorso1.position.y - anchorY), 2)
        );

        if (this.homeDist <= 1500 && this.snared === 0) {
          Body.applyForce(this.birdTorso2, this.birdTorso2.position, {
            x: (anchorX - this.birdTorso2.position.x) * 0.125, // Halved force
            y: 0,
          });
        }

        if (this.homeDist <= 550 && this.snared <= 1) {
          this.snared = 1;
          Body.applyForce(this.birdTorso2, this.birdTorso2.position, {
            x: (anchorX - this.birdTorso1.position.x) * 0.45, // Halved force
            y: (anchorX - this.birdTorso1.position.y) * 0.15, // Halved force
          });
        }

        if (this.homeDist <= 350 && this.snared <= 2) {
          this.snared = 2;
          Body.applyForce(this.birdTorso2, this.birdTorso2.position, {
            x: (anchorX - this.birdTorso1.position.x) * 0.25, // Halved force
            y: -(1 / (anchorY - this.birdTorso2.position.y)) * 1.5, // Halved force
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
            x: (anchorX - this.birdTorso2.position.x) * 0.01, // Halved velocity
            y: (anchorY - this.birdTorso2.position.y) * 0.01, // Halved velocity
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
          return false; // Indicate this bird should be removed
        }
        return true; // Bird is still active
      }
    }

    // Create boundaries
    const ground = Bodies.rectangle(
      mapWidth / 2,
      mapHeight + 30,
      mapWidth + 10,
      60,
      {
        isStatic: true,
        render: { fillStyle: "#000000ff" },
        collisionFilter: {
          category: floorCategory,
          mask: redCategory | blueCategory | greenCategory,
        },
      }
    );

    // Load perch image (placeholder for now)
    const perchImage = new Image();
    perchImage.src =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='20'%3E%3Crect width='200' height='20' fill='%23654321'/%3E%3C/svg%3E";

    const perch = Bodies.rectangle(
      mapWidth / 2, // center X
      mapHeight / 2, // middle Y
      Math.min(200, mapWidth * 0.15), // Scale perch width with canvas
      20, // height
      {
        isStatic: true,
        render: {
          fillStyle: "transparent", // Make the rectangle transparent
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

    // Add event listeners with proper cleanup handling
    const handleClick = (e) => {
      makeBird();
    };

    // Store the handler reference for cleanup
    clickHandlerRef.current = handleClick;

    if (sceneRef.current) {
      sceneRef.current.addEventListener("click", handleClick);
    }

    // Animation loop with halved timestep
    const animate = () => {
      // Update engine with halved timestep for slower simulation
      Matter.Engine.update(engine, (1000 / 60) * 0.5); // Half the normal timestep

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

      // Random wing flaps (reduced frequency for slower pace)
      birdsRef.current.forEach((bird) => {
        if (Math.random() < 0.015) {
          // Halved from 0.03 to 0.015
          bird.flapWing();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Initial birds and interval
    let birdInterval;
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        makeBird();
      }
    }, 1000);

    birdInterval = setInterval(() => {
      makeBird();
    }, 3000);

    // Start the animation loop
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup function with proper null checks
    return () => {
      // Stop animation
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }

      // Clear bird interval
      if (birdInterval) {
        clearInterval(birdInterval);
      }

      // Remove event listener with null check
      if (sceneRef.current && clickHandlerRef.current) {
        try {
          sceneRef.current.removeEventListener(
            "click",
            clickHandlerRef.current
          );
        } catch (error) {
          // Silently handle the error if element is already removed
          console.warn("Could not remove event listener:", error);
        }
      }
      clickHandlerRef.current = null;

      // Stop renderer
      if (renderRef.current) {
        try {
          Render.stop(renderRef.current);
        } catch (error) {
          console.warn("Could not stop renderer:", error);
        }
        renderRef.current = null;
      }

      // Clear engine
      if (engineRef.current) {
        try {
          Engine.clear(engineRef.current);
        } catch (error) {
          console.warn("Could not clear engine:", error);
        }
        engineRef.current = null;
      }

      // Remove canvas if it exists
      try {
        const canvas = document.querySelector("canvas");
        if (canvas && canvas.parentNode) {
          canvas.parentNode.removeChild(canvas);
        }
      } catch (error) {
        console.warn("Could not remove canvas:", error);
      }

      // Clear birds array
      birdsRef.current = [];
    };
  }, [mapWidth, mapHeight, isReady]);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        width: "100%",
        height: "100%",
        minHeight: "700px", // Ensure minimum height
      }}
    >
      <div
        style={{
          marginBottom: "10px",
          textAlign: "center",
          fontSize: "14px",
          color: "#ccc",
        }}
      ></div>
      <div
        ref={sceneRef}
        style={{
          width: `${mapWidth}px`,
          height: `${mapHeight}px`,
          border: "1px solid #ffffffff",
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
          color: "#ccc",
          textAlign: "center",
        }}
      ></div>
    </div>
  );
};

export default BirdSimulation;
