import Image from "next/image";
interface ImageGridSectionProps {
  marginBottom?: string;
  containerPadding?: string;
  imageGap?: string;
  rows?: number;
  imageScale?: number; // NEW: scale factor for all images (1 = default size)
  images?: Array<{
    src?: string;
    alt: string;
    type?: "image" | "video";
    poster?: string;
    aspectRatio?: string;
  }>;
}

export default function ImageGridSection({
  marginBottom = "mb-48",
  containerPadding = "p-4 md:p-8",
  imageGap = "gap-6 md:gap-8",
  rows = 2,
  imageScale = 1, // default = no scaling
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
                } bg-gray-300 rounded-lg shadow-inner w-full`}
                role="img"
                aria-label={image.alt}
              >
                {image.src ? (
                  image.type === "video" ? (
                    <video
                      className="w-full h-full object-cover rounded-lg"
                      src={image.src}
                      poster={image.poster}
                      controls
                      autoPlay
                      loop
                      muted
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
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
