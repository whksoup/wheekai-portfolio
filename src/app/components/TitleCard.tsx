import React, { ReactNode } from "react";

interface TitleCardProps {
  title: string;
  subtitle?: string;
  description: string | ReactNode;
  tags?: string[];
  children?: ReactNode;
  videoSrc?: string; // For local video files
  youtubeId?: string; // For YouTube embeds
}

const TitleCard: React.FC<TitleCardProps> = ({
  title,
  subtitle,
  description,
  tags = [],
  children,
  videoSrc,
  youtubeId,
}) => {
  return (
    <section className="mb-16 flex justify-center p-4 md:p-8">
      <div className="max-w-screen-xl w-full flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start px-4 md:px-8">
        {/* Left Column */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            {title}
            {subtitle && (
              <>
                <br />
                {subtitle}
              </>
            )}
          </h1>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="text-lg md:text-2xl text-gray-800 leading-relaxed text-center md:text-left">
            {description}
          </p>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-[60%] flex justify-center">
          {children ? (
            children
          ) : youtubeId ? (
            // YouTube Embed
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : videoSrc ? (
            // Local Video Player
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
              >
                <source
                  src={videoSrc}
                  type={`video/${videoSrc.split(".").pop() || "mp4"}`}
                />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            // Default placeholder
            <div className="w-full max-w-[400px] md:max-w-none aspect-square bg-gray-300 rounded-xl shadow-inner flex items-center justify-center">
              <span className="text-gray-500 text-sm">Margin Debugger</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TitleCard;
