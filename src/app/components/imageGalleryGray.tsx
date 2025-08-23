import React from "react";
import Image from "next/image";

interface GalleryItem {
  src?: string;
  alt?: string; // optional
  caption?: string;
  type?: "video" | "image";
}

interface ImageGalleryGrayProps {
  backgroundColor?: string;
  images?: GalleryItem[];
  rows?: number;
  marginBottom?: string;
  containerPadding?: string;
  columnGap?: string;
  rowGap?: string;
  gridCellSize?: string; // Tailwind classes now, not raw CSS
  paddingTop?: string;
  paddingBottom?: string;
  showCaptions?: boolean;
  summaryCaption?: string;
}

const ImageGalleryGray: React.FC<ImageGalleryGrayProps> = ({
  backgroundColor = "bg-gray-100",
  images = [],
  rows = 2,
  marginBottom = "mb-32",
  containerPadding = "p-4 md:p-8",
  columnGap = "gap-x-6 md:gap-x-8",
  rowGap = "gap-y-24 md:gap-y-24",
  gridCellSize = "h-[40vh] w-[40vh] md:h-[60vh] md:w-[60vh]",
  paddingTop = "pt-32",
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
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`relative flex justify-center items-center ${gridCellSize}`}
                >
                  {item.type === "video" && item.src ? (
                    <video
                      src={item.src}
                      muted
                      autoPlay
                      loop
                      playsInline
                      className="w-full h-full object-contain"
                    />
                  ) : item.src ? (
                    <Image
                      src={item.src}
                      alt={item.alt || ""}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-300 rounded-md"></div>
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
            <div className="mt-24 text-center">
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

export default ImageGalleryGray;
