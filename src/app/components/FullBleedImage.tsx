"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import VideoWithFallback from "@/app/components/VideoWithFallback";

interface SlideItem {
  src: string;
  alt?: string;
  caption?: string;
  type?: "image" | "video";
  poster?: string;
  link?: string;
}

interface FullBleedImageProps {
  src: string;
  alt?: string;
  caption?: string;
  aspectRatio?: string;
  className?: string;
  captionClassName?: string;
  overlayIntensity?: string;
  slideshow?: SlideItem[];
  interval?: number;
  transitionDuration?: number;
  /** Treat the single src as above-the-fold (skips lazy loading) */
  priority?: boolean;
}

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=";

const FullBleedImage: React.FC<FullBleedImageProps> = ({
  src,
  alt,
  caption,
  aspectRatio = "aspect-[16/6]",
  className = "",
  captionClassName = "",
  overlayIntensity = "from-black/80",
  slideshow = [],
  interval = 5000,
  transitionDuration = 1000,
  priority = false,
}) => {
  const hasSlideshow = slideshow.length > 0;
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (!hasSlideshow) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideshow.length);
    }, interval);
    return () => clearInterval(timer);
  }, [hasSlideshow, interval, slideshow.length]);

  useEffect(() => {
    const currentSlide = hasSlideshow ? slideshow[currentIndex] : null;
    if (currentSlide?.type === "video" && videoRefs.current[currentIndex]) {
      const vid = videoRefs.current[currentIndex];
      if (vid) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      }
    }
  }, [currentIndex, hasSlideshow, slideshow]);

  const slides: SlideItem[] = hasSlideshow
    ? slideshow
    : [{ src, alt, caption, type: "image" as const }];

  return (
    <div
      className={`relative w-full ${aspectRatio} ${className} overflow-hidden bg-gray-200`}
    >
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        // Only the first/active slide loads eagerly — the rest wait
        const isEager = priority ? index === 0 : false;

        const style = {
          transition: `opacity ${transitionDuration}ms ease-in-out`,
        };

        const content =
          slide.type === "video" ? (
            // Raw video here (not VideoWithFallback) because the slide
            // container itself handles visibility — we just need the ref
            // for manual play() on slide change.
            // The bg-gray-200 on the outer wrapper acts as the skeleton.
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              src={slide.src}
              poster={slide.poster}
              muted
              autoPlay
              loop
              playsInline
              preload={isEager ? "auto" : "none"}
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={slide.src}
              alt={slide.alt || ""}
              fill
              priority={isEager}
              loading={isEager ? "eager" : "lazy"}
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
              className="object-cover"
            />
          );

        const sharedClasses = `absolute inset-0 ${
          isActive ? "opacity-100 z-10" : "opacity-0 z-0"
        }`;

        return slide.link ? (
          <a
            key={index}
            href={slide.link}
            className={sharedClasses}
            style={style}
          >
            {content}
          </a>
        ) : (
          <div key={index} className={sharedClasses} style={style}>
            {content}
          </div>
        );
      })}

      {/* Overlay */}
      {overlayIntensity && (
        <div
          aria-hidden="true"
          className={`absolute inset-0 z-20 bg-gradient-to-t ${overlayIntensity} pointer-events-none`}
        />
      )}

      {/* Caption */}
      {slides[currentIndex]?.caption && (
        <div
          className={`absolute bottom-0 left-0 w-full z-30 p-4 text-white ${captionClassName}`}
        >
          {slides[currentIndex].caption}
        </div>
      )}
    </div>
  );
};

export default FullBleedImage;
