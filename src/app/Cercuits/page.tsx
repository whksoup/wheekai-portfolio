import ImageGridSection from "@/app/components/image-grid-section";
import TextImageTwoThirds from "@/app/components/TextImageTwoThirds";
import Insight from "@/app/components/insight";
import ScrollButton from "@/app/components/ScrollButton.client"; // Import the client component
import Prototyping from "@/app/components/prototyping";
import ImageGalleryGray from "@/app/components/imageGalleryGray";
import SingleColumnImageGray from "@/app/components/SingleColumnImageGray";
import SystemDesignText from "@/app/components/SystemDesignText";
import HeaderText from "@/app/components/LeadHeader";
import TitleCard from "@/app/components/TitleCard";
//import ProcessBrief from "@/app/components/ProcessBrief";
import ProjectDescriptor from "@/app/components/ProjectDescriptor";
//import FullBleedImage from "@/app/components/FullBleedImage";
import VideoPage from "@/app/components/VideoPage";
//import SingleColumnHeaderText from "@/app/components/SingleColumnHeaderText";
import VideoEmbed from "@/app/components/VideoEmbed";
import YouMightLike from "@/app/components/YouMightLike";
import { projects } from "@/app/Data/projects";
export default function Home() {
  return (
    <>
      <HeaderText>Ming Vase x Dieter Rams = ...</HeaderText>
      <TitleCard
        title="Ceramic Circuits:"
        subtitle="Everyday Objects as Computational Interfaces"
        tags={["UX RESEARCH", "INTERACTION DESIGN", "MATERIAL EXPLORATION"]}
        description={
          <>
            In this 11 Week design platform, we explored the potential of
            embedding electronic circuits into ceramic objects, based on
            research developed by the Interactive Materials Lab.
            <br />
            <br />
            What if our precious pots and plates were tactile, or squishable?
            <br />
            <br />
            My team saw the opportunity to turn craft ceramics, traditionally
            pristine and fragile, into something more interactive and modern.
          </>
        }
      >
        <video
          src="/Assets/Cercuits/IntroVideo.webm"
          autoPlay
          loop
          muted
          playsInline
          className="rounded-xl aspect-square max-w-[600px] w-full h-full object-contain shadow-inner"
        />
      </TitleCard>
      {/* Section 1: Two-column layout */}

      {/* Section 2: Three-column layout */}
      <ProjectDescriptor
        team={[
          "Gan Jie Lin, Designer",
          "Wong He Kai, Designer",
          "Xin Xin, Designer",
          "Clement Zheng, Platform Supervisor",
        ]}
        responsibilities={[
          "Prototyped new workflows for physical prototyping with ceramics and conductive material",
          "Prototyped various mechanical x digital interactions",
          "Developed surface analysis/pattern solutions for 3D geometry in Grasshopper",
        ]}
        results={[
          "A design research document about new techniques in ceramic crafts",
          "A set of functional household electronic-ceramic products",
        ]}
      />
      <VideoPage
        src="/Assets/Cercuits/ToProject.webm"
        className="mb-16"
        style={""}
      />
      <div className="mb-16 flex justify-center">
        <ScrollButton targetId="finalOutcome">To Project Outcome</ScrollButton>
      </div>
      <SystemDesignText
        column="right"
        sectionTitle="Starting Point"
        heading="So we can slap circuits onto a plate. What now?"
        paragraph={
          "This project spun out of previous research about techniques for grafting basic circuits onto ceramics.\n (https://dl.acm.org/doi/10.1145/3544548.3580836) \n\nGiven these techniques, we were tasked as designers to expand on its design potential in household objects, and produce desirable products."
        }
      />
      <Prototyping
        subtitle="Individual Exploration 1"
        title="Understanding the Material & Sandblasting"
        description={
          "The first 3 weeks involved individually exploring the research with the aim of discovering new techniques or applications.\n\nAs a data nerd, this meant quick but controlled experiments on all parameters imaginable, which meant grasshopper!"
        }
        mediaSrc="/Assets/Cercuits/GradatedFragments2.webp"
        mediaWidth="100%"
        mediaType="image"
        alt=""
        caption="An 'unwrapped' bowl print featuring fragments gradating in density, area, spaces between."
      />
      <ImageGalleryGray
        images={[
          {
            type: "image",
            src: "/Assets/Cercuits/InitialProcess.webp",
            alt: "A standard process involves cutting a pattern with vinyl, masking the ceramic with it, sandblasting the pattern, and painting conductive ink onto the inset.",
          },

          {
            type: "image",
            src: "/Assets/Cercuits/GrasshopperResult.webp",
            alt: "The outcome of the pattern shown above. Some things translate poorly in reality: pattern details erode at thin areas, straight edges deform when stretched too far along a concave surface.",
          },

          {
            type: "image",
            src: "/Assets/Cercuits/FishScales_1.webp",
            alt: "I was also interested in visual fidelity: how fine can the marks made be, and how do they vary in outcome relative to the direction of the sandblasting?",
          },

          {
            type: "image",
            src: "/Assets/Cercuits/FishScales_1_Outcome.webp",
            alt: "I learned that sandblasting was in large part an exercise in skill and patience: varying where the sand is blasted, how long, how close, in relation to what topology, all mattered significantly. ",
          },
        ]}
        summaryCaption=""
        rows={2}
        // Smaller cells to fit more content
        backgroundColor="bg-gray-50" // Lighter background
      />
      <Prototyping
        subtitle="Individual Exploration 2"
        title="Striking new ground"
        description={
          "Still in the individual phase of the platform, a few prototypes sparked with new potential, both conceptually and practically.\n\n I realized that we were creating functional patterns across 3d surfaces: Like a circuit board, there had to be some connection logic to it, which became more complex the more complicated the function.\n\nThe intersection of craft, circuitry, and affordance became the focus of these next prototypes."
        }
        mediaSrc="/Assets/Cercuits/SwarmSimulation.webm"
        mediaWidth="100%"
        mediaType="webm"
        alt=""
        caption="Prototype of a 'self wiring' boid simulation, connecting particular wires at particular points."
      />
      <ImageGalleryGray
        images={[
          {
            type: "image",
            src: "/Assets/Cercuits/ChaoticBoids.webp",
            alt: "A boid simulation around a polka dot patterned dish. Tuning the speed of the simulation up created a frenetic zig pattern to the particles.",
          },

          {
            type: "image",
            src: "/Assets/Cercuits/VaseBoids_3.webp",
            alt: "Simulated around more complex topology. I wanted to find out if it could link particular diamonds together, while keeping other lines separate.",
          },

          {
            type: "image",
            src: "/Assets/Cercuits/Grasshopper_1_Outcome.webp",
            alt: "A looping pattern",
          },

          {
            type: "image",
            src: "/Assets/Cercuits/VaseBoids_Product.webp",
            alt: "The pattern above. Featuring my team mate, Jie Lin, behind in the photo!",
          },
          {
            type: "image",
            src: "/Assets/Cercuits/Matching_Topology.webp",
            alt: "A separate prototype with a 'button' on a complex 3d surface. How was this possible?",
          },

          {
            type: "image",
            src: "/Assets/Cercuits/Gaussian_CurvatureAnalysis.webp",
            alt: "> By analyzing the curvature of a piece of found ceramic, we can identify areas in other ceramic pieces that are similar in gaussian curvature. This allows me to 'graft' an offset of the surface onto the parent ceramic.",
          },
        ]}
        summaryCaption=""
        rows={3}
        // Smaller cells to fit more content
        backgroundColor="bg-gray-50" // Lighter background
      />
      <Prototyping
        subtitle="Breakthrough Concept"
        title="'Superflat'"
        description={
          "By embedding circuits onto the surface of objects, the object becomes the circuit!\n\nBy layering circuitry deep enough, an interface might not need a casing.\n\nBy layering circuits conscientiously, they form the 'patterns' of the ceramic, which simultaneously inform users of the ceramic's function and handling (affordances).\n\nPattern = Function = Affordances = Surface."
        }
        mediaSrc="/Assets/Cercuits/ScentDiffuser.webm"
        mediaWidth="100%"
        mediaType="webm"
        alt=""
        caption="Inspired by a mechanism we observed in the first image below."
      />

      <ImageGalleryGray
        images={[
          {
            type: "image",
            src: "/Assets/Cercuits/Sliders.webp",
            alt: "A slider on a flat surface",
          },
          {
            type: "image",
            src: "/Assets/Cercuits/DoubleCurvature_Slider.webp",
            alt: "A double curvature slider on a tiny dish. ",
          },
          {
            type: "image",
            src: "/Assets/Cercuits/Silicone_Haptics.webp",
            alt: "A set of push buttons actuated via a thinly casted silicone membrane.",
          },

          {
            type: "image",
            src: "/Assets/Cercuits/Thread_1.webp",
            alt: "An evocative throwaway piece that incorporates a string element, which gave us a few ideas for interactions and affordances.",
          },
          {
            type: "image",
            src: "/Assets/Cercuits/ThreadHaptics.webp",
            alt: "",
          },
          {
            type: "image",
            src: "/Assets/Cercuits/Dials.webp",
            alt: "A teapot lid repurposed as a slide dial.",
          },
        ]}
        summaryCaption=""
        rows={3}
        // Smaller cells to fit more content
        backgroundColor="bg-gray-50" // Lighter background
      />
      <VideoPage
        src="/Assets/Cercuits/Typology.webm"
        className="mb-16"
        style={""}
      />
      <SystemDesignText
        column="left"
        sectionTitle="We developed a typology of interactions that were pleasant, unique, evocative."
        heading="Now we had to devise a set of products to communicate the value of these interactions. "
        paragraph={
          "In designing these, we found potential in playing with the cultural nuances of chinese ceramics. Could we repurpose historical artefacts into tasteful, trendy design objects?"
        }
      />
      <ImageGridSection
        rows={2}
        imageScale={1.0}
        imageGap="gap--10"
        images={[
          {
            src: "/Assets/Cercuits/Upres.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-16/9",
            type: "image",
          },
          {
            src: "/Assets/Cercuits/Intro.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-16/9",
            type: "image",
          },
          {
            src: "/Assets/Cercuits/ButtonInterior.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-16/9",
            type: "image",
          },
          {
            src: "/Assets/Cercuits/Process.webm",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-16/9",
            type: "video",
          },
        ]}
      />
      <SingleColumnImageGray
        images={[
          {
            src: "/Assets/Cercuits/Iterations.webp",
            alt: "We found that a chinese tea set had interesting cultural significance in addition to a variety of iconic geometries. Design sketches were essentially collages of different set parts.",
          },
        ]}
        imageMaxWidth="max-w-xl"
        aspectRatio="aspect-video"
        autoplay={true}
        backgroundColor="bg-gray-100"
        summaryCaption=""
      />
      <SingleColumnImageGray
        images={[
          {
            src: "/Assets/Cercuits/UI.webp",
            alt: "Iterating button designs",
          },
        ]}
        imageMaxWidth="max-w-xl"
        aspectRatio="aspect-video"
        autoplay={true}
        backgroundColor="bg-gray-100"
        summaryCaption=""
      />

      <VideoEmbed
        videoId="7qPS80oVu1c"
        aspectRatio="4/3"
        marginTop="mt-8"
        marginBottom="mb-16"
        rounded="rounded-xl"
        className="bg-gray-100"
      />

      <SystemDesignText
        column="left"
        sectionTitle="Product Concept"
        heading="In a chinese marriage, a Ceremonial Tea Set is exchanged between families to represent everlasting stability."
        paragraph={
          "...but they often remain on a shelf collecting dust.  Imagine Repiece: a service that converts these 'useless' heirlooms into modern utility devices, turning these austere, pristine objects into pragmatic interactables."
        }
      />
      <TextImageTwoThirds
        title=""
        heading="Reframing object affordances"
        imageSrc="/Assets/Cercuits/HeroShot.webp"
        body="Parts of the teapot significant to tea ceremonies, like the main rib of the body and the pot rim, are recontextualized as controller interactions. e.g, the pot's body, traced with fingers before pouring the tea, adapts the same interaction in the form of a volume slider. "
        imageAspectRatio="aspect-video"
        alt="Placeholder graphic"
        marginBottom="mb-16"
      />
      <TextImageTwoThirds
        reverse
        title=""
        heading="Embedded circuits as a new paradigm"
        imageSrc="/Assets/Cercuits/Final_Concept.webp"
        body="As opposed to having electronic components in a casing, Repiece proposes embedding circuits along the material's surface, as a method of repurposing old objects for new interactive products/experiences."
        imageAspectRatio="aspect-video"
        alt="Placeholder graphic"
        marginBottom="mb-16"
      />

      <TextImageTwoThirds
        title=""
        heading="Superflat"
        imageSrc="/Assets/Cercuits/Asset 9.webp"
        body="When patterns, mechanisms and circuitry are folded to share the same surfaces, complex electronics can be built thinner and lighter, even in maker-space facilities."
        imageAspectRatio="aspect-video"
        alt="Placeholder graphic"
        marginBottom="mb-16"
      />

      <Insight
        title="A dust-filled 11 weeks! Reflections:"
        highlightColorClass={[
          "text-green-500",
          "text-red-500",
          "text-blue-500",
        ]}
        insights={[
          {
            label: "TRUE",

            headline:
              "Working in multiple modalities at once is a skill to learn by itself!",
            description:
              "Typically, an interaction design project's roles are fairly divided (code, hardware, UX), but this project's 'flat' nature meant I had to wear multiple hats at once, which often meant going down multiple checklists in a single iterative pass (code scalability + aesthetics, for example). \n\nI wonder if there are established workflows for this?",
          },
          {
            label: "TO BE IMPROVED",
            headline: "Pivoting from research project to product design",
            description:
              "Initially scoped as a research project, my early to mid prototypes gauged success on user interaction feedback and new-craft-method potential. \n\nI think the transition to making an electronic product was not handled too well, as many interesting findings from the early weeks did not make it into the final products, even though on reflecting these additional features could have integrated nicely.",
          },
          {
            label: "INTERESTING",
            headline: "Form/Function dichotomies in electronic products",
            description:
              "Form follows function as a maxim; I realized they never really applied it to the electronic components within. Perhaps due to industrial process limitations at the time, in most electronics there is a 'casing and component' division. \n\nWith newer tools available to us, like 3d printing, could an integration of circuits along product surfaces lead to cheaper, leaner, and more aesthetic electronics?",
          },
        ]}
      />
      <YouMightLike projects={projects} currentHref="/Cercuits" />
    </>
  );
}
