"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface SlideItem {
  src: string;
  alt?: string;
  caption?: string;
  type?: "image" | "video";
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
}

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

  const slides = hasSlideshow
    ? slideshow
    : [{ src, alt, caption, type: "image" as const }];

  return (
    <div
      className={`relative w-full ${aspectRatio} ${className} overflow-hidden`}
    >
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        const style = {
          transition: `opacity ${transitionDuration}ms ease-in-out`,
        };

        const content =
          slide.type === "video" ? (
            <video
              ref={(el) => {
                videoRefs.current[index] = el; // assignment is fine
              }}
              src={slide.src}
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={slide.src}
              alt={slide.alt || ""}
              className="w-full h-full object-cover"
              width={1920} // fallback width
              height={1080} // fallback height
            />
          );

        const wrapper = slide.link ? (
          <a
            key={index}
            href={slide.link}
            className={`absolute inset-0 ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={style}
          >
            {content}
          </a>
        ) : (
          <div
            key={index}
            className={`absolute inset-0 ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={style}
          >
            {content}
          </div>
        );

        return wrapper;
      })}

      {/* Overlay */}
      {overlayIntensity && (
        <div
          className={`absolute inset-0 bg-gradient-to-t ${overlayIntensity}`}
        ></div>
      )}

      {/* Caption */}
      {slides[currentIndex]?.caption && (
        <div
          className={`absolute bottom-0 left-0 w-full p-4 text-white ${captionClassName}`}
        >
          {slides[currentIndex].caption}
        </div>
      )}
    </div>
  );
};

export default FullBleedImage;
