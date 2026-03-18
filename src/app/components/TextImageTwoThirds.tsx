import Image from "next/image";
import VideoWithFallback from "@/app/components/VideoWithFallback";

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
  /** Optional still frame shown while the video is buffering */
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
  const isVideo = imageSrc?.match(/\.(webm|mp4)$/i);

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
              {imageSrc ? (
                isVideo ? (
                  // VideoWithFallback handles shimmer → poster → video
                  <VideoWithFallback
                    src={imageSrc}
                    poster={poster}
                    aria-label={alt}
                    className="absolute inset-0"
                  />
                ) : (
                  <Image
                    src={imageSrc}
                    alt={alt}
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4="
                    className="object-cover rounded-lg"
                  />
                )
              ) : (
                // Empty state — matches the shimmer colour so it looks intentional
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
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
}
