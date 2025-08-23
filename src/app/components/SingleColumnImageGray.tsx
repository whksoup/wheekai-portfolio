import React from "react";
import Image from "next/image";
interface MediaItem {
  src: string;
  alt?: string;
}

interface SingleColumnMediaGrayProps {
  backgroundColor?: string;
  images?: MediaItem[]; // ✅ allow multiple
  marginBottom?: string;
  containerPadding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  summaryCaption?: string;
  imageMaxWidth?: string;
  imageClassName?: string;
  aspectRatio?: string;
  autoplay?: boolean;
  rows?: number; // ✅ new
  rowGap?: string; // ✅ new
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
  return (
    <section
      className={`${marginBottom} flex justify-center ${containerPadding}`}
    >
      <div className="max-w-screen-xl w-full px-4 md:px-8">
        <div
          className={`${backgroundColor} rounded-lg ${paddingTop} ${paddingBottom}`}
        >
          {/* Single or multi-row media container */}
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
                          <video
                            src={image.src}
                            className={`w-full h-full ${imageClassName} rounded-md`}
                            controls={!autoplay}
                            autoPlay={autoplay}
                            muted={autoplay}
                            loop={autoplay}
                            playsInline
                          >
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <Image
                            src={image.src}
                            alt={image.alt || ""}
                            width={800}
                            height={600}
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
                      className={`w-full ${
                        aspectRatio || "aspect-video"
                      } bg-gray-300 rounded-md`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Summary caption */}
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
