import VideoWithFallback from "@/app/components/VideoWithFallback";

export default function VideoPage({
  src,
  poster = undefined,
  style,
  className = "",
}) {
  return (
    <div
      className={`flex justify-center items-center p-0 m-0 ${className}`}
      style={style}
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
