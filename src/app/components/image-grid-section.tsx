"use client";

import Image from "next/image";

import { useState, useEffect, useRef } from "react";

interface GridVideoProps {
  src: string;
  alt: string;
  poster?: string;
  isMobile: boolean;
}

function GridVideo({ src, alt, poster, isMobile }: GridVideoProps) {
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
          setTapped(false); // reset to thumbnail state
        }
      },
      { rootMargin: "100px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [tapped]);

  // Mobile: show thumbnail + play button until tapped
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
          {/* Play button overlay */}
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

  // Desktop, or mobile after tap: play video
  return (
    <div ref={containerRef} className="w-full h-full">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        loop={!isMobile}
        muted
        playsInline
        controls={isMobile}
        className="w-full h-full object-cover rounded-lg"
        onCanPlay={(e) => {
          (e.target as HTMLVideoElement).play().catch(() => {});
        }}
      />
    </div>
  );
}

interface ImageGridSectionProps {
  marginBottom?: string;
  containerPadding?: string;
  imageGap?: string;
  rows?: number;
  imageScale?: number;
  images?: Array<{
    src?: string;
    alt: string;
    type?: "image" | "video";
    poster?: string;
    aspectRatio?: string;
  }>;
}

export default function ImageGridSection({
  marginBottom = "mb-48",
  containerPadding = "p-4 md:p-8",
  imageGap = "gap-6 md:gap-8",
  rows = 2,
  imageScale = 1,
  images = [
    { alt: "Research Image 1", aspectRatio: "aspect-video" },
    { alt: "Research Image 2", aspectRatio: "aspect-video" },
    { alt: "Research Image 3", aspectRatio: "aspect-video" },
    { alt: "Research Image 4", aspectRatio: "aspect-video" },
  ],
}: ImageGridSectionProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const visibleImages = images.slice(0, rows * 2);

  return (
    <section
      className={`${marginBottom} flex justify-center ${containerPadding}`}
    >
      <div className="max-w-screen-xl w-full px-4 md:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 ${imageGap} w-full`}>
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className="w-full"
              style={{
                transform: `scale(${imageScale})`,
                transformOrigin: "center",
              }}
            >
              <div
                className={`${
                  image.aspectRatio || "aspect-video"
                } bg-gray-200 rounded-lg shadow-inner w-full overflow-hidden`}
                role="img"
                aria-label={image.alt}
              >
                {image.src ? (
                  image.type === "video" ? (
                    <GridVideo
                      src={image.src}
                      alt={image.alt}
                      poster={image.poster}
                      isMobile={isMobile}
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4="
                        className="object-cover rounded-lg"
                      />
                    </div>
                  )
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                    {image.alt}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
