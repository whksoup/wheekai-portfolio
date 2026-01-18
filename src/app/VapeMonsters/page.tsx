import Insight from "@/app/components/insight";

import SystemDesignText from "@/app/components/SystemDesignText";
import HeaderText from "@/app/components/LeadHeader";
import TitleCard from "@/app/components/TitleCard";
//import ProcessBrief from "@/app/components/ProcessBrief";
import ProjectDescriptor from "@/app/components/ProjectDescriptor";
import { projects } from "@/app/Data/projects";
import YouMightLike from "@/app/components/YouMightLike";

export default function Home() {
  return (
    <>
      <HeaderText>
        An Interactive Exhibit in collaboration with Singapore&apos;s Health
        Promotion Board
      </HeaderText>
      <TitleCard
        title="The First Public Voice Interaction Game in SG:"
        subtitle="Vape Monsters Vending Machine"
        tags={["UX RESEARCH", "SPATIAL UI DESIGN", "PROTOTYPING", "THESIS"]}
        youtubeId="itKzqjRwuLs"
        description={
          <>
            In 2026, I worked with SERIAL_CO to design and implement a public
            interactive exhibit for Singapore&apos;s 2025 Anti-Vaping Campaign.
            <br />
            <br />
            This involved designing new sensor/architecture solutions for a
            voice-integrated, public, low latency interaction system.
          </>
        }
      />

      {/* Section 2: Three-column layout */}
      <ProjectDescriptor
        team={[
          "Wong He Kai, Designer (under SERIAL_CO)",
          "MooveMedia",
          "Health Promotion Board",
        ]}
        responsibilities={[
          "Prototyped machine-learning modules for voice and pose detection",
          "Design Research, Physical, Interaction & Game Prototyping",
          "Implemented and debugged the final solution for implementation on site in several public spaces.",
        ]}
        results={[
          "A game that achieved peak engagement, running out of dispense item inventory (max dispenses) in 3 days.",
          "Developed a set of tools for future implementation of public voice controls for interactive exhibits",
          "Developed tools for data collection for Health Promotion Board to tweak and evaluate future games",
        ]}
      />
      <div className="w-full flex justify-center py-8">
        <div className="w-full md:w-[60%] max-w-[700px] aspect-square overflow-hidden rounded-xl shadow-lg">
          <iframe
            src="https://www.instagram.com/p/DMhGeodyVto/embed"
            className="w-full h-full"
            frameBorder="0"
            scrolling="no"
            allowTransparency
          />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <p className="text-center text-50 opacity-100">
          Read more about the campaign{" "}
          <a
            href="https://www.adobomagazine.com/campaign-spotlight/singapores-health-promotion-board-and-tbwasingapore-launch-nationwide-anti-vape-campaign/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-500 hover:opacity-100"
          >
            here
          </a>
        </p>
      </div>
      <SystemDesignText
        column="left"
        sectionTitle="Designing for novel interactions in public"
        heading="Teaching strangers in public to say 'No'."
        paragraph={
          "In designing the first voice command based public interactive exhibit in SG, we had to tackle a few unique challenges, and learnt a lot out of it!"
        }
      />

      <Insight
        title="I'm not sure what I'm allowed to share! So here's some questions you can think about in designing this:"
        highlightColorClass={[
          "text-purple-500",
          "text-purple-500",
          "text-purple-500",
        ]}
        insights={[
          {
            label: "",
            headline: "How do we get people to shout at a screen in public?",
            description:
              "We found that a) Users felt naturally shy, too shy to shout in public, and b) People didn't know how to ",
          },
          {
            label: "",
            headline:
              "How do we achieve a low latency for machine learning querying in public?",
            description:
              "As the commands had to be parsed through an ML model, how could we design an interaction with the right level of responsiveness and playability?\n\nHow could we design a game at the right difficulty, so users could enjoy a sense of mastery/satisfaction given an unusual control scheme?",
          },
          {
            label: "",
            headline:
              "How do we train a voice recognition model to parse commands in a crowded environment?",
            description:
              "How do we design for pose/voice reading in a crowded environment? \n\nHow can we design the space and sensors to get clear desired signals.",
          },
        ]}
      />
      <YouMightLike projects={projects} currentHref="/VapeMonsters" />
    </>
  );
}
