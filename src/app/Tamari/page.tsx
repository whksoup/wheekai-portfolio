import ImageGridSection from "@/app/components/image-grid-section";
import TextImageTwoThirds from "@/app/components/TextImageTwoThirds";
import Insight from "@/app/components/insight";
import ScrollButton from "@/app/components/ScrollButton.client"; // Import the client component
import Prototyping from "@/app/components/prototyping";
import ImageGalleryGray from "@/app/components/imageGalleryGray";
import SingleColumnImageGray from "@/app/components/SingleColumnImageGray";
import SystemDesignText from "@/app/components/SystemDesignText";
import HeaderText from "@/app/components/LeadHeader";
//import TitleCard from "@/app/components/TitleCard";
//import ProcessBrief from "@/app/components/ProcessBrief";
import ProjectDescriptor from "@/app/components/ProjectDescriptor";
import FullBleedImage from "@/app/components/FullBleedImage";
import VideoPage from "@/app/components/VideoPage";
import SingleColumnHeaderText from "@/app/components/SingleColumnHeaderText";
import VideoEmbed from "@/app/components/VideoEmbed";
import YouMightLike from "@/app/components/YouMightLike";
import { projects } from "@/app/Data/projects";
export default function Home() {
  return (
    <>
      <HeaderText>For Singapore's first AVP Hackathon...</HeaderText>
      <FullBleedImage
        aspectRatio="aspect-[16/6]"
        className="my-16"
        overlayIntensity="from-black/70"
        slideshow={[
          {
            src: "/Assets/Tamari/IntroVideo.webm",
            type: "video",
          },
        ]}
        src={""}
      />
      {/* Section 1: Two-column layout */}
      <SingleColumnHeaderText
        title="What can the AVP do for healthcare/therapy?"
        tags={[
          "INTERACTION DESIGN",
          "DESIGN RESEARCH",
          "PROCESS RESEARCH",
          "HACKATHON",
        ]}
        paragraphs={[
          "In this 3 day hackathon, we were tasked to explore new ways the Apple Vision Pro could be used in healthcare.\n\nInspired by MEMI Therapy, Tamari adapts clinically tested eye movement patterns into interactive, shape-based visual flows that extend far beyond the confines of a traditional 2D screen.\n\nWinning Best Design of the hackathon, Tamari leverages the unique capabilities of the AVP, recognizing and responding to architectural features of a space, tracking gaze/focus of the user's eyes/breath to provide a full FOV experience no other headset currently provides.",
        ]}
      />
      {/* Section 2: Three-column layout */}
      <ProjectDescriptor
        team={[
          "Huang Kai Xing, Researcher, Validation/Feasibility, Story",
          "Lai Zheng Hui Carey, Frontend Developer",
          "Vina Setiawan, UI / UX Designer",
          "Wong He Kai, Product Lead, Backend Developer",
        ]}
        responsibilities={[
          "Lead the concept development, translating user needs into product requirements, defining MVP boundaries",
          "Designed the basic data capture models, app structure, spatial recognition logic",
          "Designed the scalable 'entity' structure, allowing experience designers to quickly iterate the rhythm, sound, and movement paths towards a pleasant and unique VR experience.",
        ]}
        results={[
          "Produced a convincing app prototype that raised questions about new sensory typologies for spatial app design",
          "A clear problem/solution narrative attracting NUH doctors and research spaces for future potential development",
          "Learnt Swift, Apple's programming language, despite starting from 0 day one!",
        ]}
      />

      <div className="mb-16 flex justify-center">
        <ScrollButton targetId="finalOutcome">To Project Outcome</ScrollButton>
      </div>
      <SystemDesignText
        column="right"
        sectionTitle="VR Meditation Apps have been around forever..."
        heading="But most involve creating 'fake environments' to evoke a sense of calm."
        paragraph={
          "What if, with gaze tracking, we could create more clinically proven therapeutic experiences?"
        }
      />
      <Prototyping
        subtitle="(Multichannel Eye Movement Integration)"
        title="Introducing MEMI Therapy"
        description={
          "Used in PTSD treatment, MEMI therapy uses guided eye movements across different axes to stimulate neural pathways for various benefits.\n\nLike yoga for the eyes, this is typically conducted with a machine or a human holding the object of focus. "
        }
        mediaSrc="/Assets/Tamari/MEMIExample.webp"
        mediaWidth="100%"
        mediaType="image"
        alt=""
        caption="A doctor holding a torchlight to guide his patient."
      />
      <Prototyping
        subtitle=""
        title="What if MEMI paths could be traced in the spaces around us?"
        description={
          "Unlike the other headsets currently on market, the eye and plane tracking functionalities were more exposed and performant. \n\nNow imagine if spatial apps could respond and grow around your environment and attention.  \n\nTamari asks, 'What would that look like?'"
        }
        mediaSrc="/Assets/Tamari/Imagine.webp"
        mediaWidth="100%"
        mediaType="image"
        alt=""
        caption="Like a wallflower on a grate."
        reverse
      />

      <section id="finalOutcome" className="h-0 w-0 p-0 m-0" />
      <VideoEmbed
        videoId="pKUKSDK7dv8"
        aspectRatio="4/3"
        marginTop="mt-8"
        marginBottom="mb-16"
        rounded="rounded-xl"
        className="bg-gray-100"
      />

      <Prototyping
        subtitle="Feature 1"
        title="Traditional Gaze Practices & New Sensations"
        description={
          "Tamari blends MEMI patternry with spatial meditation practices used in yogic gazing.\n\nWe found the act of tracing a path through a 3d space physiologically different from tracing a path in 2D, a sensation enabled by VR and noted by healthcare professionals during judging as worth further medical study."
        }
        mediaSrc="/Assets/Tamari/TamariData.webm"
        mediaWidth="60%"
        mediaType="webm"
        alt=""
        caption=""
      />
      <Prototyping
        subtitle="Feature 2"
        title="A lightweight, private data system"
        description={
          "Tamari challenges current industry practices around data privacy (eye data collection) by abstracting score and rhythm events from the interactive experience, with heartrate/apple watch sensor fusion (given a few more days).\n\nThis allowed the app prototype to gather use feedback during demo day, proving its scalability. "
        }
        mediaSrc="/Assets/Tamari/stats.webp"
        mediaWidth="60%"
        mediaType="image"
        alt=""
        caption="Green dots corresponding with time (consistent rhythm), path constructed generatively on wall planes."
        reverse
      />

      <Prototyping
        subtitle="Feature 3"
        title="Our polished UI/UX!"
        description={
          "Our team, having 0 Swift experience day 1, was able to produce fairly polished UI by day 3!\n\nModelled out of Apple's Liquid Glass-morphism, Tamari's visual and sound elements echo water droplets and ripple trails. \n\nShout-out to Vina for the design!"
        }
        mediaSrc="/Assets/Tamari/UISketch.webp"
        mediaWidth="100%"
        mediaType="image"
        alt=""
        caption=""
      />
      <div className="flex flex-col items-center justify-center gap-3">
        <img
          src="/Assets/Tamari/slidesPage.webp"
          alt="Preview"
          className="w-100 h-auto"
        />

        <a
          href="https://drive.google.com/file/d/1Lwp9hBwb4hO5CXuFUzPcHwYfjTowZVIQ/view"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-80"
        >
          View our presentation deck
        </a>
      </div>

      <FullBleedImage
        src="/Assets/Tamari/TeamPhoto2.webp"
        alt=""
        caption=""
        className="my-8"
        overlayIntensity="from-black/70"
        captionClassName="text-center"
      />
      <SystemDesignText
        column="left"
        sectionTitle="A wild 3 days..."
        heading="Yup, that's it!"
        paragraph={
          "Having slept less than 10 hours total over the 72, it's a testament to the organizers and assistants that every team had a thought provoking final outcome.\n\nSpecial thanks to my team, for making it soo fun all the way to the end! \nSomeone fund me an apple vision pro, it's also really fun to work with..."
        }
      />

      <ImageGridSection
        rows={2}
        imageScale={1.0}
        imageGap="gap--10"
        images={[
          {
            src: "/Assets/Tamari/fun1.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
          {
            src: "/Assets/Tamari/fun2.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
          {
            src: "/Assets/Tamari/fun3.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-16/9",
            type: "image",
          },
          {
            src: "/Assets/Tamari/fun5.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-16/9",
            type: "image",
          },
        ]}
      />

      <Insight
        title="A cool 3 days! What I learned: "
        highlightColorClass={[
          "text-green-500",
          "text-red-500",
          "text-blue-500",
        ]}
        insights={[
          {
            label: "TRUE",

            headline:
              "The AVP seems sufficiently differentiated from other headsets feature-wise, enough that new experiential design is enabled.",
            description:
              "All this to say that the combination of focus tracking, it's 30 meter (?+) IR/spatial mapping range, hand tracking, high resolution and FOV, allow designers to create and explore new experiences not possible in other (consumer viable) headsets on the current market.",
          },
          {
            label: "TO BE IMPROVED",
            headline: "Object Tracking with AVP!",
            description:
              "We wanted to implement custom object tracking for pathing between specific objects (e.g, your bed, a painting), to explore using meaningful objects as nodes. We only figured out on thirdday morning training a custom model would take a day.",
          },
          {
            label: "INTERESTING",
            headline:
              "How might virtual objects imprint onto physical reality, lending significance after the headset has been taken off?",
            description:
              "I felt that, in the limited time testing the prototypes, I was able to 'see' and trace the MEMI paths even after taking off the headset, as virtual nodes became landmarked to the spaces around me.\n\nI think that is one space in VR that is richly unexplored: How can digital objects augment our interactions even without a tangible digital layer? Worth exploring further.",
          },
        ]}
      />
      <YouMightLike projects={projects} currentHref="/Tamari" />
    </>
  );
}
