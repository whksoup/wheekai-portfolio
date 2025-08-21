// components/Intro.tsx
type IntroProps = {
  subtitle?: string;
  text: string;
  bgColor?: string;
  align?: "left" | "center" | "right";
  marginBottom?: string;
};

export default function Intro({
  subtitle = "Introduction",
  text,
  bgColor = "",
  align = "left",
  marginBottom = "mb-48",
}: IntroProps) {
  // choose grid column span based on align
  const alignClass =
    align === "center"
      ? "col-start-2 col-end-6" // spans 2–5
      : align === "right"
      ? "col-start-3 col-end-7" // spans 3–6
      : "col-start-1 col-end-5"; // spans 1–4 (default left)

  return (
    <section className={`flex justify-center ${marginBottom} ${bgColor}`}>
      <div className="mt-16 md:mt-24 grid grid-cols-6 w-full max-w-6xl">
        <div className={`${alignClass} flex flex-col`}>
          {subtitle && (
            <div className="flex items-center gap-4 mb-2">
              <span className="text-xs uppercase tracking-wider text-gray-500">
                {subtitle}
              </span>
              <div className="flex-1 border-t border-gray-300" />
            </div>
          )}
          <p className="text-xl text-gray-700 leading-relaxed whitespace-pre-line">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
