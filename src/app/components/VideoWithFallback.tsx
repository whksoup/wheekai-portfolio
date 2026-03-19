"use client";

import { useRef, useState, useEffect } from "react";

interface VideoWithFallbackProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  "aria-label"?: string;
}

export default function VideoWithFallback({
  src,
  poster,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  controls = false,
  "aria-label": ariaLabel,
}: VideoWithFallbackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  // Only mount the <video> element once the container is near the viewport.
  // This prevents off-screen videos from consuming memory on mobile.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // only need to trigger once
        }
      },
      { rootMargin: "200px" }, // start loading 200px before entering viewport
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden rounded-lg bg-gray-200"
    >
      {/* Shimmer — shown until video is ready */}
      {!videoReady && (
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] animate-shimmer"
        />
      )}

      {/* Poster — shown if provided, until video is ready */}
      {poster && !videoReady && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt={ariaLabel ?? ""}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
      )}

      {/* Video — only rendered once in viewport, fades in on canPlay */}
      {isInView && (
        <video
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          controls={controls}
          preload="none"
          aria-label={ariaLabel}
          onCanPlay={() => setVideoReady(true)}
          className={`w-full h-full object-cover rounded-lg transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          } ${className}`}
        />
      )}
    </div>
  );
}
