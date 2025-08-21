"use client";
import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const BouncingBall = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const ballRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // Only initialize once
    if (engineRef.current) return;

    const { Engine, Render, World, Bodies, Body } = Matter;

    // 1. Create engine with more aggressive settings
    const engine = Engine.create({
      gravity: { x: 0, y: 0.5 },
      enableSleeping: false,
    });
    engineRef.current = engine;

    // 2. Create renderer - CRUCIAL: set pixel ratio for Next.js
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: 600,
        height: 400,
        wireframes: false,
        background: "#f0f0f0",
        pixelRatio: typeof window !== "undefined" ? window.devicePixelRatio : 1,
      },
    });
    renderRef.current = render;

    // 3. Create physics bodies
    const ground = Bodies.rectangle(300, 390, 600, 20, {
      isStatic: true,
      render: { fillStyle: "#333333" },
    });

    const ball = Bodies.circle(300, 100, 30, {
      restitution: 0.8,
      friction: 0.01,
      render: {
        fillStyle: "#ff0000",
        strokeStyle: "#000000",
        lineWidth: 1,
      },
    });
    ballRef.current = ball;

    // 4. Add to world
    World.add(engine.world, [ground, ball]);

    // 5. Run engine and renderer
    Engine.run(engine);
    Render.run(render);

    // 6. CRUCIAL: Manual animation loop for Next.js
    const animate = () => {
      // Force render update each frame
      Render.world(render);

      // Apply continuous left force to keep it moving
      Body.applyForce(ball, ball.position, {
        x: -0.0005,
        y: 0,
      });

      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);

    // 7. Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      Render.stop(render);
      Engine.clear(engine);
      if (render.canvas) {
        render.canvas.remove();
      }
      engineRef.current = null;
      renderRef.current = null;
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      style={{
        width: "600px",
        height: "400px",
        border: "2px solid #333",
        borderRadius: "8px",
        margin: "20px auto",
      }}
    />
  );
};

export default BouncingBall;
