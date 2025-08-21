import React from "react";

interface PrototypingProps {
  subtitle?: string;
  title?: string;
  description?: string;
  mediaSrc?: string;
  alt?: string;
  caption?: string;
  mediaType?: "image" | "mp4" | "webm";
  reverse?: boolean;

  // NEW props for controlling media size and fit
  mediaWidth?: string; // e.g. "75%", "400px"
  mediaHeight?: string; // e.g. "auto", "300px"
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

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
}) => {
  const isVideo = mediaType === "mp4" || mediaType === "webm";

  const videoStyle: React.CSSProperties = {
    maxWidth: mediaWidth || "75%",
    height: mediaHeight || "auto",
    objectFit,
    borderRadius: "0.5rem",
  };

  const imgStyle: React.CSSProperties = {
    width: mediaWidth || "100%",
    height: mediaHeight || "100%",
    objectFit,
    borderRadius: "0.5rem",
  };

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
        <div className="w-full md:w-2/3">
          <div className="space-y-2">
            <div className="w-full rounded-lg overflow-hidden flex justify-center">
              {mediaSrc ? (
                isVideo ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={videoStyle}
                    className="h-auto rounded-lg"
                  >
                    <source src={mediaSrc} type={`video/${mediaType}`} />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={mediaSrc} alt={alt} style={imgStyle} />
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
};

export default Prototyping;
