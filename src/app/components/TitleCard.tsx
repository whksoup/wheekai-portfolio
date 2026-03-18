import React, { ReactNode } from "react";
import VideoWithFallback from "@/app/components/VideoWithFallback";

interface TitleCardProps {
  title: string;
  subtitle?: string;
  description: string | ReactNode;
  tags?: string[];
  children?: ReactNode;
  videoSrc?: string;
  videoPoster?: string;
  youtubeId?: string;
}

const TitleCard: React.FC<TitleCardProps> = ({
  title,
  subtitle,
  description,
  tags = [],
  children,
  videoSrc,
  videoPoster,
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
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : typeof videoSrc === "string" && videoSrc ? (
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <VideoWithFallback
                src={videoSrc}
                poster={
                  typeof videoPoster === "string" ? videoPoster : undefined
                }
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-full max-w-[400px] md:max-w-none aspect-square bg-gray-200 rounded-xl shadow-inner flex items-center justify-center">
              <span className="text-gray-400 text-sm">No media</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TitleCard;
