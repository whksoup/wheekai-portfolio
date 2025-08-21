import React from "react";

interface ProjectDescriptorProps {
  team?: string[];
  responsibilities?: string[];
  results?: string[];
}

const ProjectDescriptor: React.FC<ProjectDescriptorProps> = ({
  team = [],
  responsibilities = [],
  results = [],
}) => {
  return (
    <section className="mb-24 flex justify-center p-4 md:p-8">
      <div className="max-w-screen-xl w-full px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base text-gray-800">
          {/* Column 1: Team */}
          <div className="space-y-2">
            <h3 className="font-semibold italic">Team</h3>
            {team.map((member, idx) => (
              <p key={idx}>{member}</p>
            ))}
          </div>

          {/* Column 2: What I did */}
          <div className="space-y-2">
            <h3 className="font-semibold italic">What I did</h3>
            <ul className="list-none space-y-5">
              {responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 3: Results */}
          <div className="space-y-2">
            <h3 className="font-semibold italic">Results</h3>
            <ul className="list-disc pl-5 space-y-2">
              {results.map((result, idx) => (
                <li key={idx}>{result}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescriptor;
