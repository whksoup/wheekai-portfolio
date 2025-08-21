import React from "react";

interface InsightItem {
  label?: string;
  headline: string;
  description: string;
}

interface InsightProps {
  title: string;
  insights: InsightItem[];
  containerClassName?: string;
  highlightColorClass?: string | string[]; // Can be a string or array
}

const Insight: React.FC<InsightProps> = ({
  title,
  insights,
  containerClassName = "mb-48",
  highlightColorClass = "text-red-500",
}) => {
  return (
    <section className={`${containerClassName} flex justify-center p-4 md:p-8`}>
      <div className="max-w-screen-xl w-full px-4 md:px-8 flex flex-col md:flex-row gap-16 md:gap-24">
        {/* Left column: Big title */}
        <div className="w-full md:w-1/3 text-2xl md:text-4xl font-light text-black leading-snug">
          {title}
        </div>

        {/* Right column: Insight blocks */}
        <div className="w-full md:w-2/3 flex flex-col space-y-12 text-gray-800">
          {insights.map((insight, index) => {
            const colorClass = Array.isArray(highlightColorClass)
              ? highlightColorClass[index] || "text-red-500"
              : highlightColorClass;

            const borderClass = colorClass.replace("text-", "border-");

            return (
              <div key={index} className="space-y-2">
                {insight.label && (
                  <span
                    className={`inline-block px-4 py-1 text-sm border rounded-full font-medium ${borderClass} ${colorClass}`}
                  >
                    {insight.label}
                  </span>
                )}
                <h3
                  className={`${colorClass} text-lg md:text-xl font-medium whitespace-pre-line`}
                >
                  {insight.headline}
                </h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed whitespace-pre-line">
                  {insight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Insight;
