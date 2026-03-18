import React from "react";
import Image from "next/image";
import VideoWithFallback from "@/app/components/VideoWithFallback";

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
  /** Optional still frame shown while the video is buffering */
  poster?: string;
}

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=";

const Prototyping: React.FC<PrototypingProps> = ({
  subtitle = "Prototyping 1",
  title = "Finding the right users and parameters",
  description = "8 Artists/Art Students were assessed while completing basic tasks in Shapelabs, a VR modelling app, as a baseline. They were interviewed afterwards for pain points, and interviewed with props and wizard of oz prototypes to find intuitive gestures for different interaction frameworks.",
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
  const isVideo = mediaType === "mp4" || mediaType === "webm";

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
            <div className="w-full flex justify-center">
              {mediaSrc ? (
                isVideo ? (
                  // VideoWithFallback normalises <source src> → src attribute,
                  // which is equivalent and required for the onCanPlay fallback.
                  // mediaWidth/mediaHeight are applied via a wrapping div so the
                  // VideoWithFallback's internal layout (position:relative,
                  // w-full h-full) still works correctly.
                  <div
                    className="rounded-lg overflow-hidden"
                    style={{
                      width: mediaWidth || "100%",
                      maxWidth: "100%",
                      height: mediaHeight || "auto",
                    }}
                  >
                    <VideoWithFallback
                      src={mediaSrc}
                      poster={poster}
                      aria-label={alt}
                      className={`object-${objectFit}`}
                    />
                  </div>
                ) : (
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
                )
              ) : (
                <div className="w-full flex items-center justify-center text-gray-400 text-sm">
                  {alt}
                </div>
              )}
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
};

export default Prototyping;
