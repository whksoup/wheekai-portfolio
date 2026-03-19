// /app/PYT/page.tsx — outcome page only, links to /PYT/process

import dynamic from "next/dynamic";
import Link from "next/link";
import { ErrorBoundary } from "@/app/components/Errorboundary";
import HeaderText from "@/app/components/LeadHeader";
import TitleCard from "@/app/components/TitleCard";
import ProjectDescriptor from "@/app/components/ProjectDescriptor";
import SystemDesignText from "@/app/components/SystemDesignText";
import Insight from "@/app/components/insight";
import FullBleedImage from "@/app/components/FullBleedImage";
import VideoEmbed from "@/app/components/VideoEmbed";
import YouMightLike from "@/app/components/YouMightLike";
import { projects } from "@/app/Data/projects";
import VideoWithFallback from "@/app/components/VideoWithFallback";

const TextImageTwoThirds = dynamic(
  () => import("@/app/components/TextImageTwoThirds"),
);
const Prototyping = dynamic(() => import("@/app/components/prototyping"));

export default function Home() {
  return (
    <ErrorBoundary>
      <>
        <HeaderText>
          A more scalable approach to haptics in Augmented Reality...
        </HeaderText>

        <TitleCard
          title="PYT:"
          subtitle="Intuitive Controls for VR Sculpting"
          tags={["UX RESEARCH", "SPATIAL UI DESIGN", "PROTOTYPING", "THESIS"]}
          description={
            <>
              For my Undergrad Thesis, I redesigned control interactions for
              organic form modelling in VR, targeted towards new VR users.
              <br />
              <br />
              This project lasted 9 months, in collaboration with professional
              sculptors and creatives based in Singapore.
            </>
          }
        >
          <div className="rounded-xl aspect-square max-w-[600px] w-full overflow-hidden shadow-inner">
            <VideoWithFallback
              src="/Assets/PYT/EyeSculpt.webm"
              poster="/Assets/PYT/EyeSculpt_poster.webp"
              className="object-contain"
            />
          </div>
        </TitleCard>

        <ProjectDescriptor
          team={[
            "Dr Clement Zheng, Thesis Professor",
            "Dr Yen Chin Chuan, Thesis Professor",
            "Wong He Kai, Me",
          ]}
          responsibilities={[
            "Competitive Analysis / VR Research",
            "Primary User Research",
            "Designed Mesh Modelling Engines in Unity",
            "Low, Mid, High-Fidelity Prototyping of sensor architecture and novel interactions",
            "Designed Functional VR Sculpting Prototype presenting the research",
          ]}
          results={[
            "Research plan became a template for future studies within the team.",
            "Uncovered qualitative insights that validated existing data (from data-analysis team).",
            "Synthesised data and re-designed UI components.",
          ]}
        />

        {/* Process links */}
        <div className="flex flex-col items-center gap-3 mb-16 mt-4">
          <p className="text-gray-400 text-sm">Interested in the process?</p>
          <div className="flex gap-3 flex-wrap justify-center">
            <Link
              href="/PYT/process"
              className="px-6 py-3 border border-gray-300 rounded-full text-gray-600 hover:border-gray-500 hover:text-gray-800 transition-colors duration-200 text-sm"
            >
              Part 1: Research →
            </Link>
            <Link
              href="/PYT/process/2"
              className="px-6 py-3 border border-gray-300 rounded-full text-gray-600 hover:border-gray-500 hover:text-gray-800 transition-colors duration-200 text-sm"
            >
              Part 2: Evaluation →
            </Link>
          </div>
        </div>

        {/* Outcome */}
        <section id="finalOutcome" className="h-0 w-0 p-0 m-0" />
        <FullBleedImage
          src="/Assets/PYT/PYT_HERO_L.webp"
          alt=""
          caption=""
          aspectRatio="aspect-[16/7]"
          className="my-16"
          overlayIntensity="from-black/70"
          captionClassName="text-center"
        />
        <SystemDesignText
          column="right"
          sectionTitle="TLDR"
          heading=" Instead of designing physical objects that align to virtual surfaces.."
          paragraph="Project Your Touch explores interactions that use known physical geometry to control virtual surfaces, finding that this new way of interaction:"
        />
        <TextImageTwoThirds
          heading="Has more intuitive input dimensions than regular VR"
          body="... leveraging pressure, shear force, brush angles, brush contact area, etc, in a manner that mirrors how we manipulate plastic matter in real life."
          imageAspectRatio="aspect-video"
          marginBottom="mb-16"
          imageSrc="/Assets/PYT/FiveMoreInputs.webm"
          poster="/Assets/PYT/FiveMoreInputs_poster.webp"
        />
        <TextImageTwoThirds
          heading="Has higher accuracy & potentially lower compute costs,"
          body="as the system operates by projecting preloaded surface geometry at a position/rotation of a user's choice."
          reverse
          imageAspectRatio="aspect-video"
          alt="Placeholder graphic"
          marginBottom="mb-16"
          imageSrc="/Assets/PYT/DonutSrfDemo.webm"
          poster="/Assets/PYT/DonutSrfDemo_poster.webp"
        />
        <TextImageTwoThirds
          heading="..And provides designers with tools to developing more versatile tactile experiences"
          body="by providing applications with a) physical force receptors that can vary in material, haptics, or geometry, and b) new typologies of 'active controllers'"
          marginBottom="mb-16"
          imageAspectRatio="aspect-16/9"
          alt="Placeholder graphic"
          imageSrc="/Assets/PYT/DonutComponentVisual.webp"
        />
        <SystemDesignText
          column="left"
          sectionTitle=""
          heading="3 Interaction Artefacts:"
          paragraph=""
        />
        <Prototyping
          subtitle="Addition Interaction"
          title="Hold out your hands and have it 'print into mesh'"
          description={
            "At a whopping 27 joints, the human hand is a versatile form that both we, and computer vision models today, are intimately familiar with. This allows for an easily understandable, yet powerful tool for form manipulation.\n\nWhen users tested this interaction, I observed 2 interesting things: \n\n1) People were able to 'think through moving', using their hands to decide how to move forward.\n 2) The motions of making were remarkably similar to the movements of clay sculptors, who would use the crooks of their hands to shape their sculpture."
          }
          mediaType="webm"
          mediaSrc="/Assets/PYT/AmeliaHands.webm"
          poster="/Assets/PYT/AmeliaHands_poster.webp"
          alt=""
        />
        <Prototyping
          subtitle="Subtraction Interaction"
          title="File away the rough surface into finer geometry"
          description={
            "Using the conical file tool in combination with a geometric proxy, users carve away parts of the sculpture. \n\nBy pressing into the proxy at its different surfaces, the application projects said surface information into the sculpting system, allowing for high resolution surfacing.\n\nThe tools are sensitive to pressure, shear forces, which part of the tool is in contact and how the tool is being held-all in a manner that is intuitive to anyone who has worked with their hands."
          }
          mediaType="webm"
          mediaSrc="/Assets/PYT/SubtractionDemo.webm"
          poster="/Assets/PYT/SubtractionDemo_poster.webp"
          alt=""
        />
        <Prototyping
          subtitle="Detailing Interaction"
          title="Use an array of brushheads to texture and detail"
          description={
            "With a current functional set of 5 brushes, users may draw lines, texture, and mark at the surface level of the mesh. \n\nChanging a brush is as simple as replacing the tool head, and each head provides its own haptic profile.\n\nCurrently WIP, exploring other relevant design parameters."
          }
          mediaType="webm"
          mediaSrc="/Assets/PYT/DetailingDemo.webm"
          poster="/Assets/PYT/DetailingDemo_poster.webp"
          alt=""
        />
        <SystemDesignText
          column="right"
          sectionTitle=""
          heading="Demo Video (Thesis Defence)"
          paragraph=""
        />
        <VideoEmbed
          videoId="qNjgUXDs1mo"
          aspectRatio="4/3"
          marginTop="mt-8"
          marginBottom="mb-16"
          rounded="rounded-xl"
          className="bg-gray-100"
        />
        <Insight
          title="'Reflections TLDR: I'm really glad I did this thesis!'"
          highlightColorClass={["text-green-500", "text-blue-500"]}
          insights={[
            {
              label: "TRUE",
              headline:
                "We can explore crazy ambitious ideas if we chunk them down",
              description:
                "Wild projects can focus and deliver concrete value if we isolate the golden insights and validate them. These in turn build confidence with stakeholders (and yourself!) to invest more resources in the right areas.",
            },
            {
              label: "INTERESTING",
              headline: "Spatial Computing is only just beginning.",
              description:
                "Designing experiences where sight, touch and feeling are disentangled and 'rewirable', and getting to test these and get a range of feedback has made me realize humanity once again gets to design things without precedent. Sort of like the skeuomorphic language of early 2d interaction design, how do we design things that bridge the known, towards the more abstract, but systematically more efficient?",
            },
            {
              label: "INTERESTING",
              headline:
                "The most consistent way to good outcomes is through robust processes",
              description:
                "This 'industrial design' project was one where I had no idea where I was going: Compare this to designing a traditional experience, or a playground; Success came when instead of designing solutions, I focused on designing metrics, designing to reduce iteration cycle times, designing for clear and efficient user testing sessions.",
            },
          ]}
        />

        <YouMightLike projects={projects} currentHref="/PYT" />
        <div className="pb-24 md:pb-32" />
      </>
    </ErrorBoundary>
  );
}
