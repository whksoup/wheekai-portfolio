import React from "react";

interface SingleColumnHeaderTextProps {
  title: string;
  subtitle?: string;
  tags?: string[];
  paragraphs?: string[];
}

const SingleColumnHeaderText: React.FC<SingleColumnHeaderTextProps> = ({
  title,
  subtitle,
  tags = [],
  paragraphs = [],
}) => {
  return (
    <section className="mb-16 flex justify-center p-4 md:p-8">
      <div className="max-w-screen-xl w-full flex flex-col gap-6 px-4 md:px-8">
        {/* Inner content with 2/3 width, left aligned */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-center md:text-left">
            {title}
            {subtitle && (
              <>
                <br />
                {subtitle}
              </>
            )}
          </h1>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
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

          {/* Paragraphs */}
          <div className="space-y-4 text-gray-800 text-lg md:text-xl leading-relaxed text-center md:text-left whitespace-pre-line">
            {paragraphs.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleColumnHeaderText;
