"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface SlideItem {
  src: string;
  alt?: string;
  caption?: string;
  type?: "image" | "video";
  link?: string;
}

interface FullBleedImageProps {
  src?: string;
  alt?: string;
  caption?: string;
  aspectRatio?: string;
  className?: string;
  captionClassName?: string;
  overlayIntensity?: string;
  slideshow?: SlideItem[];
  interval?: number;
  transitionDuration?: number;
}

const FullBleedImage: React.FC<FullBleedImageProps> = ({
  src,
  alt,
  caption,
  aspectRatio = "aspect-[16/6]",
  className = "",
  captionClassName = "",
  overlayIntensity = "from-black/80",
  slideshow = [], // { src, alt?, caption?, type?: "image"|"video", link?: string }
  interval = 5000,
  transitionDuration = 1000,
}) => {
  const hasSlideshow = Array.isArray(slideshow) && slideshow.length > 0;
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // auto advance slideshow
  useEffect(() => {
    if (!hasSlideshow) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideshow.length);
    }, interval);
    return () => clearInterval(timer);
  }, [hasSlideshow, interval, slideshow.length]);

  // restart video when it becomes active
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

  const currentSlide = hasSlideshow
    ? slideshow[currentIndex]
    : { src, alt, caption, type: "image" as const, link: undefined };

  return (
    <div
      className={`relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden ${aspectRatio} ${className}`}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {(hasSlideshow ? slideshow : [currentSlide]).map((slide, index) => {
          const isActive = index === currentIndex;
          const commonClasses = `w-full h-full object-cover absolute inset-0 transition-opacity ease-in-out ${
            isActive ? "opacity-100" : "opacity-0"
          }`;
          const durationClass = `duration-[${transitionDuration}ms]`;

          const content =
            slide.type === "video" ? (
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={slide.src}
                className={`${commonClasses} ${durationClass}`}
                muted
                playsInline
              />
            ) : (
              <img
                src={slide.src}
                alt={slide.alt || ""}
                className={`${commonClasses} ${durationClass}`}
              />
            );

          return slide.link ? (
            <Link key={index} href={slide.link}>
              {content}
            </Link>
          ) : (
            <div key={index}>{content}</div>
          );
        })}
      </div>

      {/* Caption */}
      {currentSlide.caption && (
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${overlayIntensity} to-transparent p-6`}
        >
          <div className={`text-white max-w-4xl mx-auto ${captionClassName}`}>
            <p className="text-xl md:text-2xl font-medium">
              {currentSlide.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullBleedImage;
