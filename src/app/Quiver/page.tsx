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
import FullBleedImage from "@/app/components/FullBleedImage";
import VideoPage from "@/app/components/VideoPage";

export default function Home() {
  return (
    <>
      <HeaderText>What?</HeaderText>
      {/* Section 1: Two-column layout */}
      <TitleCard
        title="Quiver:"
        subtitle="A Contactless, Sensitive $5 Motion Sensor"
        youtubeId="56ENhw9ZmXc"
        tags={["TECHNOLOGY", "SPATIAL DESIGN", "INTERACTION"]}
        description={
          <>
            Tribo-electric Nanogenerators (TENGs) are relatively new devices
            that can detect and harvest static electricity. Given this low cost
            technology, I had to design a device that expanded on its energy
            harvesting and detection mechanisms, and discover new product
            applications.
            <br />
            <br />
            This was a 3 month project under NUS&apos;s Industrial Design
            Undergraduate Programme.
          </>
        }
      ></TitleCard>

      {/* Section 2: Three-column layout */}
      <ProjectDescriptor
        team={["Dr Yen Chin Chuan, Professor", "Wong He Kai, Me"]}
        responsibilities={[
          "Prototyped Detection Mechanisms using TENG",
          "Low, Mid, High-Fidelity Prototyping of sensor architecture and novel interactions",
          "Prototyped the form and manufacture of the final sensor system, optimized for cost & scalability in Singapore",
        ]}
        results={[
          "A Proof of concept sensor & system demonstrating the sensor's resilience in various environments, its sensitivity to 3 kinds of inputs, and its low cost.",
          "Developed a multiplayer game for the sensor, that was displayed for exhibition",
          "Researched and developed an architecture of physical-digital interactions.",
        ]}
      />
      <FullBleedImage
        src="/Assets/Quiver/Quiver_HeroShotWide.png"
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
        heading="Think rubbing a balloon on your hair."
        paragraph="When two materials come into contact and then separate, electrons transfer from one material to the other based on their triboelectric polarity"
      />
      <TextImageTwoThirds
        marginBottom="mb-16"
        title="Currently(2022).."
        heading="Commercial TENG Mechanisms are fairly straightforward"
        imageSrc="/Assets/Quiver/TengSchematic.png"
        body="They involve a rubbery material rubbing against a metal to generate electric signals"
        imageAspectRatio=""
        alt="Placeholder graphic"
      />
      <TextImageTwoThirds
        title=""
        heading="They're also facing issues with durability and scalability"
        imageSrc="/Assets/Quiver/TengMaterial.png"
        body={`The materials typically used require fabrication techniques that are currently lab scale. 
            
            Even then, the reliance on material friction for signals result in comparatively higher wear and tear to conventional detectors.`}
        reverse
        imageAspectRatio="aspect-16/7"
        alt="Placeholder graphic"
        caption=""
      />

      <Prototyping
        subtitle="Prototyping 1"
        title="Exploring sensor mechanisms"
        description={
          "I had to verify that TENG could work with store-bought materials in a temperate environment. \n\nThen, new mechanisms were prototyped and evaluated on signal cleanliness, range, and potential interactions in the health/wellness space."
        }
        mediaSrc="/Assets/Quiver/TengMoodboard.jpg"
        mediaType="image"
        alt=""
        caption=""
      />
      <ImageGalleryGray
        images={[
          {
            type: "image",
            src: "/Assets/Quiver/FirstExplo_1.jpg",
            alt: "",
          },

          {
            type: "image",
            src: "/Assets/Quiver/FirstExploResult_1.jpg",
            alt: "First simplifying the classical TENG mechanism with store bought materials. The signals are predictably messier and difficult to work with",
          },
          {
            type: "image",
            src: "/Assets/Quiver/FirstExplo_3.jpg",
            alt: "",
          },

          {
            type: "image",
            src: "/Assets/Quiver/FirstExploResult_3.jpg",
            alt: "A contactless prototype using a PET roll. The signals were surprisingly noticeable.",
          },
          {
            type: "image",
            src: "/Assets/Quiver/FirstExplo_5.jpg",
            alt: "",
          },

          {
            type: "image",
            src: "/Assets/Quiver/FirstExploResult_5.jpg",
            alt: "A foldable ladder configuration of alternating silicone and aluminium layers generated a clean and predictable signal. ",
          },
          {
            type: "image",
            src: "/Assets/Quiver/FirstExplo_7.jpg",
            alt: "",
          },

          {
            type: "image",
            src: "/Assets/Quiver/FirstExploResult_7.jpg",
            alt: "Generating a clean signal was a combination of the right materials and introducing tiny slacking between the layers.",
          },
          {
            type: "image",
            src: "/Assets/Quiver/FirstExplo_6.png",
            alt: "",
          },

          {
            type: "image",
            src: "/Assets/Quiver/FirstExploResult_6.jpg",
            alt: "By increasing the slack between layers, the prototype began registering signals from around the device. But why?",
          },
        ]}
        summaryCaption="Early prototypes leading to the final mechanical concept."
        rows={5}
        gridCellSize="50vh" // Smaller cells to fit more content
        backgroundColor="bg-gray-50" // Lighter background
      />
      <SystemDesignText
        column="middle"
        sectionTitle="Discovery"
        heading="What if we made a 'sail' out of the plastic material?"
        paragraph="TENG works by detecting changes in the relationship between metallic and non-metallic layers. A sail works by catching wind, which warps it in relation to its pole."
      />
      <SingleColumnImageGray
        images={[
          {
            src: "/Assets/Quiver/TengMechanism.webm",
            alt: " ",
          },
        ]}
        imageClassName="object-fill"
        aspectRatio="aspect-video"
        autoplay={true}
        backgroundColor="bg-gray-100"
        summaryCaption="Sail Mechanism"
        marginBottom="mb-48"
        containerPadding="p-0 md:p-0"
        paddingTop="pt-32"
        paddingBottom="pb-32"
      />

      <Prototyping
        subtitle="Prototyping 2"
        title="Visual Refinement"
        description={
          "Subsequent iterations explored how different forms:\n\n1) affected signal sensitivity\n\n2) affected percieved interactive affordances\n\n3) harmonized visually in urban environments\n\n4) communicated the DIY nature of the project and its materials"
        }
        mediaSrc="/Assets/Quiver/Sketches.png"
        mediaType="image"
        alt=""
      />

      <ImageGridSection
        images={[
          {
            src: "/Assets/Quiver/ProtoZoom1.png",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
          {
            src: "/Assets/Quiver/ProtoZoom2.png",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
          {
            src: "/Assets/Quiver/ProtoZoom3.png",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
          {
            src: "/Assets/Quiver/ProtoZoom4.png",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
        ]}
      />

      <FullBleedImage
        src="/Assets/Quiver/PrototypeSplash.png"
        alt=""
        caption=""
        aspectRatio="aspect-[16/9]"
        className="my-16"
        overlayIntensity="from-black/70"
        captionClassName="text-center"
      />

      <SystemDesignText
        column="right"
        sectionTitle="I found out that..."
        heading="Different sail designs did not influence the sensitivity of the detection to a large extent"
        paragraph="Barring a few mechanical principles, this meant that the design could focus on aesthetics, manufacturing simplicity, and modularity."
      />
      <SingleColumnImageGray
        images={[
          {
            src: "/Assets/Quiver/TengFindings.webm",
            alt: " ",
          },
        ]}
        imageClassName="object-fill"
        aspectRatio="aspect-video"
        autoplay={true}
        backgroundColor="bg-gray-100"
        summaryCaption="General Principles of Sail Design"
        marginBottom="mb-48"
        containerPadding="p-0 md:p-0"
        paddingTop="pt-32"
        paddingBottom="pb-32"
      />

      <ImageGridSection
        images={[
          {
            src: "/Assets/Quiver/FinalDimensions.png",
            alt: "Beautiful Landscape",
            type: "image",
            aspectRatio: "aspect-square",
          },
          {
            src: "/Assets/Quiver/TENGtris.webm",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-square",
            type: "video",
          },
          {
            src: "/Assets/Quiver/HeroSquare.png",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-square",
            type: "image",
          },
          {
            src: "/Assets/Quiver/Assembly.png",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-square",
            type: "image",
          },
        ]}
        marginBottom="mb-8"
      />
      <section id="finalOutcome" className="h-0 w-0 p-0 m-0" />
      <SystemDesignText
        column="left"
        sectionTitle="Final Design"
        heading=""
        paragraph="Bent from a single sheet of metal, a flat PLA print, and a corkboard, Quiver's hull mounts a wide configuration of sails for different contexts."
      />

      <Prototyping
        subtitle="Use Concept"
        title="Fidgeting in public spaces"
        description={
          "What if fidgeting could be reframed in public spaces? \n\nIt's looked down upon in Asian countries -> Can we make it socially acceptable?\n\n It's a sign of discomfort -> Can we use fidgeting to identify and comfort users?\n\nIt quintuples static caloric burn -> Can we make it more fun?"
        }
        mediaSrc="/Assets/Quiver/RandomToDirected.png"
        alt=""
      />
      <Prototyping
        reverse
        subtitle="It's sensitive."
        title="Capable of distinguishing a step, from a tap, from a jog,"
        description={
          "Quiver was able to run seamlessly, and consistently for 6 hours of play. \n\nThese 3 inputs can be calibrated for different environments and action contexts."
        }
        mediaSrc="/Assets/Quiver/OrangeAndGreen.webm"
        mediaType="webm"
        alt=""
      />
      <Prototyping
        subtitle=""
        title="And it's cheap!"
        description="Affordable for less than $5 SGD, with materials you can find in a convenient store (and a microcontroller), Quiver is a proof of concept, deployable application of TENG technology for public spaces in the future."
        mediaSrc="/Assets/Quiver/BusStop.png"
        alt=""
      />

      <VideoPage
        src="Assets/Quiver/Quiver_Icon.webm"
        style={{
          width: "307",
          height: "307",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />

      <Insight
        title="What I've Learned: "
        highlightColorClass={["text-green-500", "text-blue-500"]}
        insights={[
          {
            label: "TRUE",

            headline:
              "Conceptualize/Design with competitive advantages in mind",
            description:
              "Other motion sensors are more reliable and accurate, but mine was cheaper and incredibly (almost too) sensitive.\n\nI utilized the noise: data output to 3 states created a reliable controller with some application, and its cheap materials led potential to the DIY marker.",
          },
          {
            label: "INTERESTING",
            headline: "It's okay to start messy. But essentialize what works!",
            description:
              "The idea that a contactless TENG sensor (without external substrates/devices) was declaratively impossible at the start of the platform! When I arrived at the mechanism, I did not understand how it worked, as the plastic sail barely moved during the interaction. \n\nIsolating the effect took a lot of time, but clarified which design parameters were important to research further.",
          },
        ]}
      />

      <div className="w-full aspect-[16/6] bg-gray-300"></div>
    </>
  );
}
