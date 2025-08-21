export default function VideoPage({ src, style, className = "" }) {
  return (
    <div className={`flex justify-center items-center p-0 m-0 ${className}`}>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="block p-0 m-0"
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "100%",
          maxHeight: "100%",
          backgroundColor: "transparent",
          ...style, // allows you to pass custom padding/margin if needed
        }}
      />
    </div>
  );
}
