import React from "react";
import Image from "next/image";
import VideoWithFallback from "@/app/components/VideoWithFallback";

interface MediaItem {
  src: string;
  alt?: string;
  /** Optional still frame shown while the video is buffering */
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
                          // VideoWithFallback handles shimmer → poster → video.
                          // controls/autoPlay/muted/loop are forwarded based on
                          // the autoplay prop — matching original behaviour.
                          <VideoWithFallback
                            src={image.src}
                            poster={image.poster}
                            aria-label={image.alt}
                            autoPlay={autoplay}
                            muted={autoplay}
                            loop={autoplay}
                            controls={!autoplay}
                            className={`rounded-md ${imageClassName}`}
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
                    // Empty slot with shimmer instead of flat grey
                    <div
                      className={`w-full ${
                        aspectRatio || "aspect-video"
                      } bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200
                        bg-[length:200%_100%] animate-shimmer rounded-md`}
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
