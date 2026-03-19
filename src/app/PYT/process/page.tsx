// /app/PYT/process/page.tsx — process part 1

import dynamic from "next/dynamic";
import Link from "next/link";
import { ErrorBoundary } from "@/app/components/Errorboundary";
import HeaderText from "@/app/components/LeadHeader";
import SystemDesignText from "@/app/components/SystemDesignText";
import Insight from "@/app/components/insight";
import YouMightLike from "@/app/components/YouMightLike";
import { projects } from "@/app/Data/projects";

const TextImageTwoThirds = dynamic(
  () => import("@/app/components/TextImageTwoThirds"),
);
const Prototyping = dynamic(() => import("@/app/components/prototyping"));
const ImageGridSection = dynamic(
  () => import("@/app/components/image-grid-section"),
);
const SingleColumnImageGray = dynamic(
  () => import("@/app/components/SingleColumnImageGray"),
);
const ImageGalleryGray = dynamic(
  () => import("@/app/components/imageGalleryGray"),
);
const ProcessBrief = dynamic(() => import("@/app/components/ProcessBrief"));

export default function PYTProcessPart1() {
  return (
    <ErrorBoundary>
      <>
        <HeaderText>PYT: Process — Part 1: Research</HeaderText>

        {/* Nav */}
        <div className="flex justify-center gap-4 mb-8">
          <Link
            href="/PYT"
            className="px-6 py-3 border border-gray-300 rounded-full text-gray-600 hover:border-gray-500 hover:text-gray-800 transition-colors duration-200 text-sm"
          >
            ← Back to Outcome
          </Link>
        </div>

        <SystemDesignText
          column="right"
          sectionTitle="Intro"
          heading="Sculpting in VR should be more popular."
          paragraph="Being able to evaluate, process and manipulate 3D Form in real-space should be a dream come true! But for most people, it isn't quite there yet..."
          marginBottom="mb-8"
        />
        <TextImageTwoThirds
          title="Problem 1"
          heading="VR controls for complex, spatial applications are convoluted"
          imageSrc="/Assets/PYT/BrushMenu_3.webp"
          body="Options are hidden in nested 2D menus or abstract contextual button presses, resulting in 3× actions needed to achieve modelling tasks (e.g., blend 2 surfaces) vs other workflows (e.g., clay, Blender)."
          imageAspectRatio="aspect-video"
          alt="Placeholder graphic"
          marginBottom="mb-16"
        />
        <TextImageTwoThirds
          title="Problem 2"
          marginBottom="mb-16"
          heading="We can't really feel what we're doing in VR."
          imageSrc="/Assets/PYT/VR_Competitors.webp"
          body={`This results in disengagement and inaccuracies when working.\n\nCurrently, VR haptic peripherals align physical surfaces to virtual ones, resulting in expensive, overengineered solutions.\n\nThese currently demand complicated backend architectures and/or robotics.`}
          reverse
          imageAspectRatio="aspect-video"
          alt="Placeholder graphic"
          caption="Current VR Haptics, including lever action, motors, autonomous drones, and BCIs(Brain Computer Interfacing), oh my!"
        />
        <SystemDesignText
          column="right"
          sectionTitle=""
          heading="How might we make VR Sculpting more intuitive, more 'feeling' for new VR users?"
          paragraph=""
          marginBottom="mb-8"
        />
        <ProcessBrief />
        <Prototyping
          subtitle="Prototyping 1"
          title="Finding the right users and parameters"
          description={
            "8 Artists/Art Students were assessed while completing basic tasks in Shapelabs, a VR modelling app. \n\nInterviewed afterwards for pain points, and worked with props and wizard of oz prototypes to find intuitive gestures and new interaction frameworks."
          }
          mediaSrc="/Assets/PYT/wOz_1.webm"
          poster="/Assets/PYT/wOz_1_poster.webp"
          mediaType="webm"
          alt="Artists using VR modeling app"
          caption="POV: Getting interviewed by me."
          mediaWidth={undefined}
          mediaHeight={undefined}
        />
        <ImageGridSection
          images={[
            {
              src: "/Assets/PYT/wOz_2.webm",
              alt: "User testing session",
              aspectRatio: "aspect-square",
              type: "video",
              poster: "/Assets/PYT/wOz_2_poster.webp",
            },
            {
              src: "/Assets/PYT/AndrewTest.webm",
              alt: "Timelapse Footage",
              type: "video",
              poster: "/Assets/PYT/AndrewTest_poster.webp",
              aspectRatio: "aspect-square",
            },
            {
              src: "/Assets/PYT/RogerTest.webm",
              alt: "Mountain View",
              type: "video",
              aspectRatio: "aspect-square",
              poster: "/Assets/PYT/RogerTest_poster.webp",
            },
            {
              src: "/Assets/PYT/ClaytonUserTest.webm",
              alt: "Research Interview",
              type: "video",
              poster: "/Assets/PYT/ClaytonUserTest_poster.webp",
              aspectRatio: "aspect-square",
            },
          ]}
        />
        <Insight
          title="'Modelling with my tools and hands feels instinctive and familiar.'"
          highlightColorClass={["text-green-500", "text-red-500"]}
          insights={[
            {
              label: "TRUE",
              headline:
                "Operating through tool and proxy is way more tactile and satisfying, and seems more intuitive.",
              description:
                "When asked how to 'remove or add' material, answers converged towards extremely similar interactions. All participants responded positively to the haptic proxy.",
            },
            {
              label: "UNTRUE",
              headline:
                "Hypothesis: Users would intuitively treat the haptic proxy as a substitute for the sculpture/model, manipulating it like a voodoo doll.",
              description:
                "The relationship between proxy and how it represented the model heavily relied on how users were 'primed', either by the visuals of the simulation or prior experiences with plastic material (clay or wood,etc.)",
            },
          ]}
        />
        <Prototyping
          subtitle="Prototyping 2"
          title="Benchmarking interactive prototypes"
          description={
            "Users tested different functional prototypes based around subtraction, addition and surface manipulation operations. \n\nDifferent sensors, mesh manipulation engines, and interactions were developed and evaluated on intuitivity, sense of control, and compute latency."
          }
          mediaSrc="/Assets/PYT/Interactive_Prototyping.webm"
          poster="/Assets/PYT/Interactive_Prototyping_poster.webp"
          mediaType="webm"
          alt=""
          mediaWidth={undefined}
          mediaHeight={undefined}
        />
        <SingleColumnImageGray
          images={[
            {
              src: "/Assets/PYT/SensorPrototyping.webm",
              alt: " ",
              poster: "/Assets/PYT/SensorPrototyping_poster.webp",
            },
          ]}
          aspectRatio="aspect-video"
          autoplay={true}
          backgroundColor="bg-gray-100"
          summaryCaption="Initial prototypes exploring software architecture / latency"
        />
        <ImageGalleryGray
          rows={3}
          images={[
            {
              type: "video",
              src: "/Assets/PYT/bern_Ears.webm",
              alt: "",
              poster: "/Assets/PYT/bern_Ears_poster.webp",
            },
            {
              type: "video",
              src: "/Assets/PYT/AbrarPositiveMold.webm",
              alt: "",
              poster: "/Assets/PYT/AbrarPositiveMold_poster.webp",
            },
            {
              type: "video",
              src: "/Assets/PYT/Pulling.webm",
              alt: "",
              poster: "/Assets/PYT/Pulling_poster.webp",
            },
            { type: "image", src: "/Assets/PYT/BernHorse1.webp", alt: "" },
            {
              type: "video",
              src: "/Assets/PYT/AbrarTriangleChamfer.webm",
              alt: "",
              poster: "/Assets/PYT/AbrarTriangleChamfer_poster.webp",
            },
            {
              type: "video",
              src: "/Assets/PYT/HammerDavidProto.webm",
              alt: "Alternative deformation engines were still tested at this stage",
              poster: "/Assets/PYT/HammerDavidProto_poster.webp",
            },
          ]}
          summaryCaption="Prototypes evaluated on functionality and intuitivity foremost."
        />

        {/* Bottom nav — continue to part 2 */}
        <div className="flex flex-col items-center gap-3 mb-48 mt-16">
          <p className="text-gray-400 text-sm">Continue to evaluation</p>
          <Link
            href="/PYT/process/2"
            className="px-6 py-3 border border-gray-300 rounded-full text-gray-600 hover:border-gray-500 hover:text-gray-800 transition-colors duration-200 text-sm"
          >
            Part 2: Evaluation →
          </Link>
        </div>

        <YouMightLike projects={projects} currentHref="/PYT" />
        <div className="pb-24 md:pb-32" />
      </>
    </ErrorBoundary>
  );
}
