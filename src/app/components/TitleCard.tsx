import React, { ReactNode, isValidElement, Children } from "react";
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

/**
 * Recursively walks children and replaces any raw <video> element with
 * VideoWithFallback, preserving all props (src, className, poster, etc).
 * This means page.tsx never needs to change — pass a raw <video> as before.
 */
function upgradeVideoChildren(children: ReactNode): ReactNode {
  return Children.map(children, (child) => {
    if (!isValidElement(child)) return child;

    // If this element is a <video>, swap it out
    if (child.type === "video") {
      const {
        src,
        poster,
        className,
        "aria-label": ariaLabel,
        autoPlay,
        loop,
        muted,
        playsInline,
        controls,
      } = child.props as React.VideoHTMLAttributes<HTMLVideoElement> & {
        "aria-label"?: string;
      };

      return (
        <VideoWithFallback
          src={src || ""}
          poster={poster}
          aria-label={ariaLabel}
          className={className}
          autoPlay={autoPlay ?? true}
          loop={loop ?? true}
          muted={muted ?? true}
          playsInline={playsInline ?? true}
          controls={controls ?? false}
        />
      );
    }

    // Otherwise recurse into its children in case video is nested
    if (child.props?.children) {
      return React.cloneElement(child, {
        ...child.props,
        children: upgradeVideoChildren(child.props.children),
      });
    }

    return child;
  });
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

        {/* Right Column — raw <video> children are auto-upgraded */}
        <div className="w-full md:w-[60%] flex justify-center">
          {children ? (
            upgradeVideoChildren(children)
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
          ) : videoSrc ? (
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <VideoWithFallback
                src={videoSrc}
                poster={videoPoster}
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
