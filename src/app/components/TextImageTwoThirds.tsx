import Image from "next/image";
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
}: TextImageTwoThirdsProps) {
  const isVideo = imageSrc?.match(/\.(webm|mp4|webm)$/i); // Check if video file

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
          <p className=" text-base md:text-lg leading-relaxed text-gray-700 whitespace-pre-line">
            {body}
          </p>
        </div>

        {/* Media Column */}
        <div className="w-full md:w-2/3">
          <div className="space-y-2">
            <div
              className={`relative ${imageAspectRatio} bg-gray-300 rounded-lg shadow-inner w-full`}
            >
              {imageSrc ? (
                isVideo ? (
                  <video
                    src={imageSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-lg"
                    aria-label={alt}
                  />
                ) : (
                  <Image
                    src={imageSrc}
                    alt={alt}
                    fill
                    className="w-full h-full object-cover rounded-lg"
                  />
                )
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
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
