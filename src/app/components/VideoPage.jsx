import VideoWithFallback from "@/app/components/VideoWithFallback";

export default function VideoPage({
  src,
  poster = undefined,
  style,
  className = "",
}) {
  // Guard against style being passed as a string (e.g. style={""})
  // React requires style to be an object — silently ignore if not
  const safeStyle = typeof style === "object" && style !== null ? style : {};

  return (
    <div
      className={`flex justify-center items-center p-0 m-0 ${className}`}
      style={safeStyle}
    >
      <div
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
        className="w-full"
      >
        <VideoWithFallback
          src={src}
          poster={poster}
          className="object-contain"
        />
      </div>
    </div>
  );
}
