"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface MediaItem {
  src: string;
  alt?: string;
  poster?: string;
}

interface SingleColumnMediaGrayProps {
  backgroundColor?: string;
  images?: MediaItem[];
  marginBottom?: string;
  containerPadding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  summaryCaption?: string;
  imageMaxWidth?: string;
  imageClassName?: string;
  aspectRatio?: string;
  autoplay?: boolean;
  rows?: number;
  rowGap?: string;
}

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=";

interface VideoItemProps {
  image: MediaItem;
  aspectRatio: string;
  imageClassName: string;
  autoplay: boolean;
  isMounted: boolean;
  isMobile: boolean;
}

function VideoItem({
  image,
  aspectRatio,
  imageClassName,
  autoplay,
  isMounted,
  isMobile,
}: VideoItemProps) {
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

  // Before mount
  if (!isMounted) {
    return (
      <div
        className={`w-full ${aspectRatio || "aspect-video"} bg-gray-200 rounded-md`}
      />
    );
  }

  // Mobile pre-tap
  if (isMobile && !tapped) {
    return (
      <div ref={containerRef} className="relative w-full">
        <button
          onClick={() => setTapped(true)}
          className={`relative w-full rounded-md overflow-hidden bg-gray-200 block ${aspectRatio || "aspect-video"}`}
          aria-label={`Play ${image.alt || ""}`}
        >
          {image.poster ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image.poster}
              alt={image.alt || ""}
              className={`w-full h-full object-cover ${imageClassName}`}
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
    <div ref={containerRef} className="w-full">
      <video
        ref={videoRef}
        src={image.src}
        poster={image.poster}
        autoPlay={autoplay}
        muted={autoplay}
        loop={autoplay && !isMobile}
        controls={!autoplay || isMobile}
        playsInline
        className={`w-full h-auto rounded-md ${imageClassName}`}
        onCanPlay={(e) => {
          if (tapped) (e.target as HTMLVideoElement).play().catch(() => {});
        }}
      />
    </div>
  );
}

const SingleColumnMediaGray: React.FC<SingleColumnMediaGrayProps> = ({
  backgroundColor = "bg-gray-100",
  images = [{ src: "", alt: "" }],
  marginBottom = "mb-48",
  containerPadding = "p-4 md:p-8",
  paddingTop = "pt-32",
  paddingBottom = "pb-32",
  summaryCaption = "",
  imageMaxWidth = "max-w-3xl",
  imageClassName = "object-contain",
  aspectRatio = "",
  autoplay = true,
  rows = 1,
  rowGap = "gap-y-16",
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setIsMounted(true);
  }, []);

  return (
    <section
      className={`${marginBottom} flex justify-center ${containerPadding}`}
    >
      <div className="max-w-screen-xl w-full px-4 md:px-8">
        <div
          className={`${backgroundColor} rounded-lg ${paddingTop} ${paddingBottom}`}
        >
          <div className={`flex flex-col items-center ${rowGap}`}>
            {images.slice(0, rows).map((image, idx) => {
              const isVideo =
                image?.src?.endsWith(".webm") || image?.src?.endsWith(".mp4");

              return (
                <div key={idx} className={`${imageMaxWidth} w-full`}>
                  {image.src ? (
                    <div className="flex flex-col items-center">
                      <div className={`relative w-full ${aspectRatio}`}>
                        {isVideo ? (
                          <VideoItem
                            image={image}
                            aspectRatio={aspectRatio}
                            imageClassName={imageClassName}
                            autoplay={autoplay}
                            isMounted={isMounted}
                            isMobile={isMobile}
                          />
                        ) : (
                          <Image
                            src={image.src}
                            alt={image.alt || ""}
                            width={800}
                            height={600}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={BLUR_PLACEHOLDER}
                            className={`w-full h-auto ${imageClassName}`}
                          />
                        )}
                      </div>
                      {image.alt && (
                        <p className="mt-4 text-sm text-center text-gray-600">
                          {image.alt}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div
                      className={`w-full ${aspectRatio || "aspect-video"} bg-gray-200 rounded-md`}
                    />
                  )}
                </div>
              );
            })}
          </div>
          {summaryCaption && (
            <div className="mt-16 text-center">
              <p className="text-base text-gray-700 max-w-2xl mx-auto">
                {summaryCaption}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SingleColumnMediaGray;
