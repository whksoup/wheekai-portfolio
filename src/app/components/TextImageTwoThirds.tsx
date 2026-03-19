"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=";

interface TextImageTwoThirdsProps {
  title?: string;
  heading: string;
  body: string;
  imageSrc?: string;
  alt?: string;
  imageAspectRatio?: string;
  reverse?: boolean;
  marginTop?: string;
  marginBottom?: string;
  className?: string;
  caption?: string;
  poster?: string;
}

export default function TextImageTwoThirds({
  title,
  heading,
  body,
  imageSrc,
  alt = "Visual",
  imageAspectRatio = "aspect-video",
  reverse = false,
  marginTop = "mt-0",
  marginBottom = "mb-48",
  className = "",
  caption,
  poster,
}: TextImageTwoThirdsProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [tapped, setTapped] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setIsMounted(true);
  }, []);

  // Unload when scrolled out of view — same as ImageGalleryGray
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

  const isVideo = imageSrc?.match(/\.(webm|mp4)$/i);

  const renderMedia = () => {
    if (!imageSrc) {
      return (
        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
          {alt}
        </div>
      );
    }

    if (isVideo) {
      // Before mount: grey placeholder — identical server/client, no mismatch
      if (!isMounted) {
        return <div className="w-full h-full bg-gray-200" />;
      }

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
            src={imageSrc}
            poster={poster}
            autoPlay
            loop={!isMobile}
            muted
            playsInline
            controls={isMobile}
            className="w-full h-full object-cover rounded-lg"
            aria-label={alt}
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
        src={imageSrc}
        alt={alt}
        fill
        loading="lazy"
        placeholder="blur"
        blurDataURL={BLUR_PLACEHOLDER}
        className="object-cover rounded-lg"
      />
    );
  };

  return (
    <section
      className={`flex justify-center p-4 md:p-8 ${marginTop} ${marginBottom} ${className}`}
    >
      <div
        className={`max-w-screen-xl w-full px-4 md:px-8 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text Column */}
        <div className="w-full md:w-1/3 space-y-4 text-gray-800 whitespace-pre-line">
          {title && <h4 className="font-semibold">{title}</h4>}
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            {heading}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700 whitespace-pre-line">
            {body}
          </p>
        </div>

        {/* Media Column */}
        <div className="w-full md:w-2/3">
          <div className="space-y-2">
            <div
              className={`relative ${imageAspectRatio} bg-gray-200 rounded-lg shadow-inner w-full overflow-hidden`}
            >
              {renderMedia()}
            </div>
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
}
