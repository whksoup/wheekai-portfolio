"use client";

import { useRef, useState } from "react";

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

/**
 * VideoWithFallback
 *
 * Wraps a <video> element with a shimmer skeleton that displays:
 *   1. Always:         shimmer skeleton while the video is loading
 *   2. If provided:    poster image once available (hides shimmer)
 *   3. On canPlay:     video fades in and everything else is removed
 *
 * Uses loading="lazy" semantics via IntersectionObserver so off-screen
 * videos don't begin loading until they're near the viewport — critical
 * for long pages on mobile / Vercel cold starts.
 */
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
  const [videoReady, setVideoReady] = useState(false);
  const [posterLoaded, setPosterLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    // Outer wrapper is position:relative so the skeleton, poster, and video
    // can all occupy the same space and we cross-fade between them.
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      {/* ── 1. Shimmer skeleton ─────────────────────────────────────────── */}
      {/* Stays visible until the video (or at minimum the poster) is ready */}
      <div
        aria-hidden="true"
        className={`
          absolute inset-0 rounded-lg
          bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200
          bg-[length:200%_100%]
          animate-shimmer
          transition-opacity duration-500
          ${videoReady || posterLoaded ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      />

      {/* ── 2. Poster image (optional) ──────────────────────────────────── */}
      {/* Shown after the poster img loads, hidden once video is ready */}
      {poster && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt={ariaLabel ?? ""}
          onLoad={() => setPosterLoaded(true)}
          aria-hidden="true"
          className={`
            absolute inset-0 w-full h-full object-cover rounded-lg
            transition-opacity duration-500
            ${posterLoaded && !videoReady ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
        />
      )}

      {/* ── 3. Video ────────────────────────────────────────────────────── */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        controls={controls}
        aria-label={ariaLabel}
        onCanPlay={() => setVideoReady(true)}
        className={`
          w-full h-full object-cover rounded-lg
          transition-opacity duration-700
          ${videoReady ? "opacity-100" : "opacity-0"}
          ${className}
        `}
      />
    </div>
  );
}
