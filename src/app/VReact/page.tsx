import ImageGridSection from "@/app/components/image-grid-section";
import TextImageTwoThirds from "@/app/components/TextImageTwoThirds";
import Insight from "@/app/components/insight";
import ScrollButton from "@/app/components/ScrollButton.client"; // Import the client component
import Prototyping from "@/app/components/prototyping";
import ImageGalleryGray from "@/app/components/imageGalleryGray";
import SystemDesignText from "@/app/components/SystemDesignText";
import HeaderText from "@/app/components/LeadHeader";
import TitleCard from "@/app/components/TitleCard";
//import ProcessBrief from "@/app/components/ProcessBrief";
import ProjectDescriptor from "@/app/components/ProjectDescriptor";
import FullBleedImage from "@/app/components/FullBleedImage";

import { projects } from "@/app/Data/projects";
import YouMightLike from "@/app/components/YouMightLike";
import VideoWithFallback from "@/app/components/VideoWithFallback";
export default function Home() {
  return (
    <>
      <HeaderText>VR for medical practice</HeaderText>
      {/* Section 1: Two-column layout */}
      <TitleCard
          title="VReact:"
          subtitle="Simulating On-Call Scenarios for Junior Doctors"
          tags={["UX RESEARCH", "SPATIAL UI DESIGN", "PROTOTYPING", "THESIS"]}
          description={
            <>
              My current work involves collaborating with medical professionals to co-develop tools simulating medical procedures and live environments.
              <br />
              <br />
              VReact is a simulation of a night shift, on-call environment, where doctors are expected to develop task management and priority skills, and knowledge application under duress. 
              <br />
              <br />
              My role as UI/X Designer involved building interaction flows and interfaces in liason with NUH doctors and our developers.
            </>
          }
        >
          <div className="rounded-xl aspect-square max-w-[600px] w-full overflow-hidden shadow-inner">
            <VideoWithFallback
              src="/Assets/VReact/UIUXDemo.webm"
              poster=""
              className="object-contain"
            />
          </div>
        </TitleCard>

      {/* Section 2: Three-column layout */}
      <ProjectDescriptor
        team={["Keio-NUS CUTE Center"]}
        responsibilities={[
          "Interviewed clinicians to abstract patient flow and recreate a nursing ward night on-call scenario",
          "Designed diegetic UI systems replicating real hospital EMR interfaces (Epic) for VR simulation",
          "Wireframed NPC interaction panels with multi-state flows for medication ordering, vitals requests, and tool handoff",
        ]}
        results={[
          "A VR simulation replicating a hospital night on-call scenario, validated against clinician workflows",
          "Diegetic in-simulation UI screens — EMR panels, nurse NPC menus, handover notes — grounded in real hospital conventions",
          "Piloted 2 new experimental workflows for VR iteration",
        ]}
      />
      <FullBleedImage
        src="/Assets/VReact/NurseWard.webp"
        alt=""
        caption=""
        aspectRatio="aspect-[16/9]"
        className="my-16"
        overlayIntensity="from-black/70"
        captionClassName="text-center"
      />
      <div className="mb-16 flex justify-center">
        <ScrollButton targetId="finalOutcome">To Project Outcome</ScrollButton>
      </div>
      <SystemDesignText
        column="right"
        sectionTitle="Intro"
        heading="Designing the clinical UX layer for Singapore's first real-time AR medical simulation"
        paragraph="Making a high-stakes clinical environment feel intuitive to first-time VR users, without sacrificing fidelity or testability."
      />
      <TextImageTwoThirds
        marginBottom="mb-16"
        title="Traditionally..."
        heading="Real-world medical training is slow and obtuse"
        imageSrc="/Assets/VReact/InterviewSheet.webp"
        body="Before designing anything, we broke down clinical training scenarios into discrete, recordable interactions — the foundation for a verifiable, scalable system."
        imageAspectRatio="aspect-16/8"
        alt="Placeholder graphic"
      />
      <TextImageTwoThirds
        title=""
        heading="Co-designing a scalable interaction system"
        imageSrc="/Assets/VReact/GameFlow.webp"
        body={`As the translator between clinicians and developers, the challenge was distilling complex medical workflows into an interaction system:
          
          Desirable, buildable within scope, and iterable in code.`}
        reverse
        imageAspectRatio="aspect-16/10"
        alt="Placeholder graphic"
        caption=""
      />


      <ImageGalleryGray
        images={[
          {
            type: "image",
            src: "/Assets/VReact/blur.webp",
            alt: "",
          },
          {
            type: "image",
            src: "/Assets/VReact/Criteria.webp",
            alt: "",
          },
          {
            type: "image",
            src: "/Assets/VReact/Bed.webp",
            alt: "",
          },
          {
            type: "image",
            src: "/Assets/VReact/Cabinet.webp",
            alt: "",
          },

       
        ]}
        summaryCaption="On site studies & interviews"
        rows={2}
        // Smaller cells to fit more content
        backgroundColor="bg-gray-50" // Lighter background
      />

      <ImageGridSection
        marginBottom="mb-12"
        images={[
          {
            src: "/Assets/VReact/PhoCall.webm",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "video",
          },
          {
            src: "/Assets/VReact/OpTable.webm",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "video",
          },
          
        ]}
      />
      <SystemDesignText
        marginTop="mb-12"
        column="middle"
        sectionTitle="2 New Workflows"
        heading="What if we co-created user experiences with our stakeholders?"
        paragraph="I used a VR 3D modelling app as a low-code Figma equivalent — aligning clinicians, designers, and developers on interaction flows early, before any Unity builds were needed."
      />
      <ImageGridSection
        marginBottom="mb-12"
        images={[
          
          {
            src: "/Assets/VReact/Stitch2.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-8/7",
            type: "image",
          },
          {
            src: "/Assets/VReact/Stitch6.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-8/7",
            type: "image",
          },
        ]}
      />

      <SystemDesignText
        marginTop="mb-12"
        column="middle"
        sectionTitle="Workflow 2"
        heading="Figma to css"
        paragraph="I experimented with new AI tools like Google Stitch to build high fidelity wireframes for user feedback. Hosting these prototypes allowed our stakeholders to access and share prototypes easily, which could fit the busy schedules of doctors flexibly."
      />
      <ImageGridSection
        images={[
          {
            src: "/Assets/VReact/StateDiagram.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
          {
            src: "/Assets/VReact/USSPrototype.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
          {
            src: "/Assets/VReact/Nurse.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
          {
            src: "/Assets/VReact/EpicTerminalVR.webm",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "video",
          },
          
        ]}
      />


      <Prototyping
        subtitle=""
        title="That's all I can share!"
        description={
          "Further capability steps include incorporating telemetry into css prototypes, building more UI tooling, and architectural decisions on the information flow."
        }
        mediaSrc="/Assets/VReact/Monitor2.webp"
        mediaType="image"
        alt=""
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
      headline: "What does Figma look like for 3D and VR experiences?",
      description:
        "How do you prototype spatial UI without building in engine? What tools bridge the gap between 2D design and immersive environments — and what gets lost in translation?",
    },
    {
      label: "",
      headline: "How do you design a UI that a doctor trusts in 30 seconds?",
      description:
        "Clinical interfaces carry high stakes. How do you balance fidelity to real hospital systems with the simplifications needed for a training simulation?\n\nWhat makes a first-time VR user feel oriented rather than lost?",
    },
    {
      label: "",
      headline: "How do you make a simulation verifiable?",
      description:
        "How do you translate a clinical scenario into discrete, recordable interactions?\n\nWhat does 'passing' a simulation actually mean — and how do you design for that measurability from the start?",
    },
  ]}
/>


      <section id="finalOutcome" className="h-0 w-0 p-0 m-0" />



      <YouMightLike projects={projects} currentHref="/Quiver" />
    </>
  );
}
