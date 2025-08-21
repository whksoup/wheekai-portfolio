// components/MatterSketch.tsx
"use client";
import { useEffect, useRef } from "react";

export default function MatterSketch() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamic import avoids SSR issues
    const loadSketch = async () => {
      const { default: Matter } = await import("matter-js");
      const { Engine, Render, World, Bodies } = Matter;

      // Your existing setup code
      const engine = Engine.create();
      const render = Render.create({
        element: containerRef.current!,
        engine: engine,
        options: { width: 800, height: 600 },
      });

      // Add your existing bodies/world setup
      const box = Bodies.rectangle(400, 200, 80, 80);
      World.add(engine.world, [box]);

      // Run the engine
      Engine.run(engine);
      Render.run(render);

      return () => {
        Render.stop(render);
        World.clear(engine.world, false);
        Engine.clear(engine);
        render.canvas.remove();
      };
    };

    loadSketch();
  }, []);

  return <div ref={containerRef} className="mx-auto" />;
}
