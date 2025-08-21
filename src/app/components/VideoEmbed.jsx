import React from "react";

const VideoEmbed = ({
  videoId,
  aspectRatio = "16/9",
  maxWidth = "screen-md",
  marginTop = "mb-32",
  marginBottom = "",
  rounded = "rounded-lg",
  padding = "p-4 md:p-8",
  className = "",
}) => {
  const aspectRatioParts = aspectRatio.split("/");
  const aspectRatioPercent = (aspectRatioParts[1] / aspectRatioParts[0]) * 100;

  return (
    <section
      className={`flex justify-center ${padding} ${marginTop} ${marginBottom} ${className}`}
    >
      <div className={`max-w-${maxWidth} w-full px-4 md:px-8`}>
        <div
          className="w-full mx-auto relative"
          style={{ paddingBottom: `${aspectRatioPercent}%` }}
        >
          <iframe
            className={`absolute top-0 left-0 w-full h-full ${rounded}`}
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

// This was missing in the original code:
export default VideoEmbed;
