import React from "react";

const ProcessBrief = () => {
  return (
    <section className="mb-32 flex justify-center p-4 md:p-8">
      <div className="max-w-screen-xl w-full px-4 md:px-8 text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Header Row */}
          <div className="md:col-span-1 font-semibold text-lg">Process</div>
          <div className="font-semibold text-lg">1. Research</div>
          <div className="font-semibold text-lg">2. Finding Opportunities</div>
          {/* Descriptors Row */}
          <div></div> {/* Empty cell for alignment */}
          <div className="text-sm text-gray-600">
            Understand context, existing problems, and motivations through desk
            research and field work.
          </div>
          <div className="text-sm text-gray-600">
            Identify gaps and latent needs by synthesizing findings into
            actionable insights.
          </div>
          {/* Second Step Row */}
          <div></div>
          <div className="font-semibold text-lg">
            3. User Testing & Analysis
          </div>
          <div className="font-semibold text-lg">
            3. Refinement & Research Hypothesis
          </div>
          {/* Second Step Descriptors */}
          <div></div>
          <div className="text-sm text-gray-600">
            Observe user interaction with prototypes to assess usability and
            validate assumptions.
          </div>
          <div className="text-sm text-gray-600">
            Refine tools and processes based on feedback, forming the basis of a
            structured hypothesis.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessBrief;
