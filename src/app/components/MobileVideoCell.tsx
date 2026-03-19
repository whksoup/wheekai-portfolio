"use client";

import { useState, useEffect, useRef } from "react";

interface MobileVideoCellProps {
  src: string;
  alt?: string;
  poster?: string;
  isMobile: boolean;
  className?: string;
  loop?: boolean;
}

/**
 * Shared video cell used by ImageGridSection, ImageGalleryGray, Prototyping.
 *
 * Desktop: autoplay, no controls, loops
 * Mobile:  static poster/grey + play button until tapped,
 *          then loads + plays with controls.
 *          Unloads when scrolled out of view to free memory.
 */
export default function MobileVideoCell({
  src,
  alt = "",
  poster,
  isMobile,
  className = "w-full h-full object-cover rounded-lg",
  loop = true,
}: MobileVideoCellProps) {
  const [tapped, setTapped] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Unload video when scrolled out of view
  useEffect(() => {
    if (!tapped) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
          videoRef.current.src = "";
          videoRef.current.load();
          setTapped(false);
        }
      },
      { rootMargin: "100px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [tapped]);

  // Mobile pre-tap: poster + play button
  if (isMobile && !tapped) {
    return (
      <div ref={containerRef} className="relative w-full h-full">
        <button
          onClick={() => setTapped(true)}
          className="relative w-full h-full rounded-lg overflow-hidden bg-gray-200 block"
          aria-label={`Play ${alt}`}
        >
          {poster ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={poster}
              alt={alt}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200" />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/50 rounded-full w-14 h-14 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      </div>
    );
  }

  // Desktop or post-tap
  return (
    <div ref={containerRef} className="w-full h-full">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        loop={!isMobile && loop}
        muted
        playsInline
        controls={isMobile}
        className={className}
        onCanPlay={(e) => {
          (e.target as HTMLVideoElement).play().catch(() => {});
        }}
      />
    </div>
  );
}
