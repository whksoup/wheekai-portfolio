"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface GalleryItem {
  src?: string;
  alt?: string;
  caption?: string;
  type?: "video" | "image";
  poster?: string;
}

interface ImageGalleryGrayProps {
  backgroundColor?: string;
  images?: GalleryItem[];
  rows?: number;
  marginBottom?: string;
  containerPadding?: string;
  columnGap?: string;
  rowGap?: string;
  gridCellSize?: string;
  paddingTop?: string;
  paddingBottom?: string;
  showCaptions?: boolean;
  summaryCaption?: string;
}

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=";

interface GalleryVideoCellProps {
  src: string;
  alt?: string;
  poster?: string;
  isMobile: boolean;
}

function GalleryVideoCell({
  src,
  alt = "",
  poster,
  isMobile,
}: GalleryVideoCellProps) {
  const [tapped, setTapped] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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
        className="w-full h-full object-contain rounded-lg"
        onCanPlay={(e) => {
          (e.target as HTMLVideoElement).play().catch(() => {});
        }}
      />
    </div>
  );
}

const ImageGalleryGray: React.FC<ImageGalleryGrayProps> = ({
  backgroundColor = "bg-gray-100",
  images = [],
  rows = 2,
  marginBottom = "mb-32",
  containerPadding = "p-4 md:p-8",
  columnGap = "gap-x-6 md:gap-x-8",
  rowGap = "gap-y-16 md:gap-y-24",
  gridCellSize = "w-full aspect-square",
  paddingTop = "pt-16 md:pt-32",
  paddingBottom = "pb-16",
  showCaptions = true,
  summaryCaption = "",
}) => {
  // isMounted gates ALL video rendering until we're on the client.
  // This means server always renders grey placeholders for videos —
  // no hydration mismatch possible since server and first client
  // render are identical (both show placeholders).
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setIsMounted(true);
  }, []);

  const imagesToShow = rows * 2;
  const displayedImages: GalleryItem[] = images.slice(0, imagesToShow);
  while (displayedImages.length < imagesToShow) {
    displayedImages.push({});
  }

  return (
    <section
      className={`${marginBottom} flex justify-center ${containerPadding}`}
    >
      <div className="max-w-screen-xl w-full px-4 md:px-8">
        <div
          className={`${backgroundColor} rounded-lg ${paddingTop} ${paddingBottom}`}
        >
          <div
            className={`grid grid-cols-1 md:grid-cols-2 ${columnGap} ${rowGap} justify-items-center`}
          >
            {displayedImages.map((item, index) => (
              <div key={index} className="flex flex-col items-center w-full">
                <div
                  className={`relative overflow-hidden flex justify-center items-center ${gridCellSize}`}
                >
                  {item.type === "video" && item.src ? (
                    // Before mount: grey placeholder — identical on server and client
                    // After mount: real video cell with correct mobile/desktop behaviour
                    !isMounted ? (
                      <div className="w-full h-full bg-gray-200 rounded-lg" />
                    ) : (
                      <GalleryVideoCell
                        src={item.src}
                        alt={item.alt}
                        poster={item.poster}
                        isMobile={isMobile}
                      />
                    )
                  ) : item.src ? (
                    <Image
                      src={item.src}
                      alt={item.alt || ""}
                      fill
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER}
                      className="object-contain"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-200 rounded-md" />
                  )}
                </div>
                {showCaptions && (item.caption || item.alt) && (
                  <p className="mt-2 text-sm text-center text-gray-600 max-w-[90%]">
                    {item.caption || item.alt}
                  </p>
                )}
              </div>
            ))}
          </div>
          {summaryCaption && (
            <div className="mt-16 md:mt-24 text-center">
              <p className="text-base text-gray-700 max-w-2xl mx-auto whitespace-pre-line">
                {summaryCaption}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageGalleryGray;
