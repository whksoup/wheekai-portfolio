import React from "react";

export default function SystemDesignText({
  marginTop = "mt-0",
  marginBottom = "mb-32",
  column = "center", // 'left', 'center', or 'right'
  sectionTitle = "Designing a System",
  heading = "We explored simplifying Digital Actions through building usability-focused DIY physical modules.",
  paragraph = "We ended up with a system of logical actions and reactions of Physical Modules and Marker Detection Logic. This fundamental system essentially serves as a common ground for one to design their own controls by building their own physical modules using their imagination.",
}) {
  // Adjust width and position for each column layout
  const columnClass =
    {
      left: "w-3/4", // Left-aligned, takes up 3/4 width
      center: "w-full", // Center-aligned, full width
      right: "w-3/4 ml-auto", // Right-aligned, takes up 3/4 width and is pushed right
    }[column] || "w-full";

  return (
    <section
      className={`${marginTop} ${marginBottom} flex justify-center p-4 md:p-8`}
    >
      <div className="max-w-screen-xl w-full px-4 md:px-8">
        <div className={`text-left space-y-6 ${columnClass}`}>
          {/* Section Title */}
          <h3 className="italic font-semibold text-sm text-gray-800">
            {sectionTitle}
          </h3>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black">
            {heading}
          </h2>

          {/* Paragraph */}
          <p className="text-3x1 md:text-2xl text-gray-800 leading-relaxed whitespace-pre-line">
            {paragraph}
          </p>
        </div>
      </div>
    </section>
  );
}
