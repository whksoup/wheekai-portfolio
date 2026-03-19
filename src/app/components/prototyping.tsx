"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=";

interface PrototypingProps {
  subtitle?: string;
  title?: string;
  description?: string;
  mediaSrc?: string;
  alt?: string;
  caption?: string;
  mediaType?: "image" | "mp4" | "webm";
  reverse?: boolean;
  mediaWidth?: string;
  mediaHeight?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  poster?: string;
}

const Prototyping: React.FC<PrototypingProps> = ({
  subtitle = "Prototyping 1",
  title = "Finding the right users and parameters",
  description = "",
  mediaSrc,
  alt = "Prototyping visual",
  caption = "",
  mediaType = "image",
  reverse = false,
  mediaWidth,
  mediaHeight,
  objectFit = "cover",
  poster,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [tapped, setTapped] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Unload when scrolled away
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

  const isVideo = mediaType === "mp4" || mediaType === "webm";

  const renderMedia = () => {
    if (!mediaSrc) {
      return (
        <div className="w-full flex items-center justify-center text-gray-400 text-sm">
          {alt}
        </div>
      );
    }

    if (isVideo) {
      // Mobile pre-tap
      if (isMobile && !tapped) {
        return (
          <div
            ref={containerRef}
            className="rounded-lg overflow-hidden"
            style={{
              width: mediaWidth || "100%",
              maxWidth: "100%",
              height: mediaHeight || "auto",
            }}
          >
            <button
              onClick={() => setTapped(true)}
              className="relative w-full rounded-lg overflow-hidden bg-gray-200 block"
              style={{ aspectRatio: "16/9" }}
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
        <div
          ref={containerRef}
          className="rounded-lg overflow-hidden"
          style={{
            width: mediaWidth || "100%",
            maxWidth: "100%",
            height: mediaHeight || "auto",
          }}
        >
          <video
            ref={videoRef}
            src={mediaSrc}
            poster={poster}
            autoPlay
            loop={!isMobile}
            muted
            playsInline
            controls={isMobile}
            className={`w-full h-full object-${objectFit} rounded-lg`}
            onCanPlay={(e) => {
              (e.target as HTMLVideoElement).play().catch(() => {});
            }}
          />
        </div>
      );
    }

    // Image
    return (
      <Image
        src={mediaSrc}
        alt={alt}
        width={0}
        height={0}
        sizes="(max-width: 768px) 100vw, 66vw"
        loading="lazy"
        placeholder="blur"
        blurDataURL={BLUR_PLACEHOLDER}
        className="rounded-lg"
        style={{
          width: mediaWidth || "100%",
          maxWidth: "100%",
          height: mediaHeight || "auto",
          objectFit,
        }}
      />
    );
  };

  return (
    <section className="mb-24 flex justify-center p-4 md:p-8">
      <div
        className={`max-w-screen-xl w-full px-4 md:px-8 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text */}
        <div className="w-full md:w-1/3 space-y-4 text-gray-800">
          <h4 className="font-semibold">{subtitle}</h4>
          <h2 className="text-2xl md:text-3xl font-medium leading-snug">
            {title}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700 whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* Media */}
        <div className="w-full md:w-2/3 min-w-0">
          <div className="space-y-2">
            <div className="w-full flex justify-center">{renderMedia()}</div>
            {caption && (
              <p className="text-sm text-gray-400 px-2 text-center md:text-left">
                {caption}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prototyping;
