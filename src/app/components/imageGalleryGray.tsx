import React from "react";
import Image from "next/image";
import VideoWithFallback from "@/app/components/VideoWithFallback";

interface GalleryItem {
  src?: string;
  alt?: string;
  caption?: string;
  type?: "video" | "image";
  /** Optional still frame shown while the video is buffering */
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
  /**
   * Size of each grid cell.
   * Default: w-full + aspect-square at all breakpoints — the grid column
   * constrains the width, so cells never overflow at any viewport width.
   * Override with Tailwind classes if you need a different shape.
   */
  gridCellSize?: string;
  paddingTop?: string;
  paddingBottom?: string;
  showCaptions?: boolean;
  summaryCaption?: string;
}

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=";

const ImageGalleryGray: React.FC<ImageGalleryGrayProps> = ({
  backgroundColor = "bg-gray-100",
  images = [],
  rows = 2,
  marginBottom = "mb-32",
  containerPadding = "p-4 md:p-8",
  columnGap = "gap-x-6 md:gap-x-8",
  rowGap = "gap-y-16 md:gap-y-24",
  // w-full so the cell is always bounded by its grid column — never by
  // viewport height. aspect-square preserves the square shape without
  // needing fixed vh units that overflow at narrow window widths.
  gridCellSize = "w-full aspect-square",
  paddingTop = "pt-16 md:pt-32",
  paddingBottom = "pb-16",
  showCaptions = true,
  summaryCaption = "",
}) => {
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
              // Always w-full — item tracks its grid column at every width
              <div key={index} className="flex flex-col items-center w-full">
                <div
                  className={`relative overflow-hidden flex justify-center items-center ${gridCellSize}`}
                >
                  {item.type === "video" && item.src ? (
                    <VideoWithFallback
                      src={item.src}
                      poster={item.poster}
                      aria-label={item.alt}
                      className="object-contain"
                    />
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
                    <div
                      className="absolute inset-0 bg-gray-200 rounded-md animate-shimmer
                      bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200
                      bg-[length:200%_100%]"
                    />
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
