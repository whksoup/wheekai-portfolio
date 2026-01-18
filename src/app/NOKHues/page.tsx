import HeaderText from "@/app/components/LeadHeader";
//import TitleCard from "@/app/components/TitleCard";
//import ProcessBrief from "@/app/components/ProcessBrief";
import ProjectDescriptor from "@/app/components/ProjectDescriptor";
import FullBleedImage from "@/app/components/FullBleedImage";
import VideoPage from "@/app/components/VideoPage";
import SingleColumnHeaderText from "@/app/components/SingleColumnHeaderText";

import { projects } from "@/app/Data/projects";
import YouMightLike from "@/app/components/YouMightLike";

export default function Home() {
  return (
    <>
      <HeaderText>Visualizing Travel Data as Art</HeaderText>
      <FullBleedImage
        src="/Assets/NOK/NOKHues.webp"
        alt=""
        caption=""
        aspectRatio="aspect-[16/9]"
        className="my-16"
        overlayIntensity="from-black/70"
        captionClassName="text-center"
      />
      {/* Section 1: Two-column layout */}
      <SingleColumnHeaderText
        title="KPMG’s cognitive design exhibition at Singapore Design Week 2024"
        tags={[
          "INTERACTION DESIGN",
          "DESIGN RESEARCH",
          "SERVICE DESIGN",
          "SCHOOL PROJECT",
        ]}
        paragraphs={[
          "In this 5 month design project, I worked with NOK to produce Horizon Hues for KPMG's Singapore Design Week Exhibition 2024.\n\nHorizon Hues is an interactive data visualization of KPMG employee travel data: Emissions, trips per year, travel sentiments, etc.",
        ]}
      />
      <div className="flex justify-center mt-8">
        <p className="text-center text-50 opacity-100">
          See it{" "}
          <a
            href="https://kpmg.com/sg/en/insights/ai-and-innovation/horizon-hues.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-500 hover:opacity-100"
          >
            here
          </a>
        </p>
      </div>
      {/* Section 2: Three-column layout */}
      <ProjectDescriptor
        team={["NOK Creative Tech Team", "Wong He Kai, Creative Tech Intern"]}
        responsibilities={["Designed visuals, sensors, and art concepts"]}
        results={[
          "A set of sensor solutions & digital prototypes presented to clients in KPMG",
          "One of several concepts made it to the final pass, as one of the 2 visualizations in the final exhibit.",
        ]}
      />
      <VideoPage
        src="/Assets/Intro/Dataviz.webm"
        className="mb-16"
        style={""}
      />
      <VideoPage src="/Assets/NOK/yinYang.webm" className="mb-16" style={""} />
      <VideoPage
        src="/Assets/NOK/venomm_black.webm"
        className="mb-16"
        style={""}
      />

      <YouMightLike projects={projects} currentHref="/Sphinx" />
    </>
  );
}
