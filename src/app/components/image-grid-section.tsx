import Image from "next/image";
import VideoWithFallback from "@/app/components/VideoWithFallback";

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
    /** Optional still frame shown while the video is buffering */
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
                    // VideoWithFallback handles shimmer → poster → video
                    <VideoWithFallback
                      src={image.src}
                      poster={image.poster}
                      aria-label={image.alt}
                      controls
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
