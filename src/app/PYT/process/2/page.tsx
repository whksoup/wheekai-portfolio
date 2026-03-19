// /app/PYT/process/2/page.tsx — process part 2

import dynamic from "next/dynamic";
import Link from "next/link";
import { ErrorBoundary } from "@/app/components/Errorboundary";
import HeaderText from "@/app/components/LeadHeader";
import SystemDesignText from "@/app/components/SystemDesignText";
import Insight from "@/app/components/insight";
import FullBleedImage from "@/app/components/FullBleedImage";
import YouMightLike from "@/app/components/YouMightLike";
import { projects } from "@/app/Data/projects";

const Prototyping = dynamic(() => import("@/app/components/prototyping"));
const SingleColumnImageGray = dynamic(
  () => import("@/app/components/SingleColumnImageGray"),
);
const ImageGalleryGray = dynamic(
  () => import("@/app/components/imageGalleryGray"),
);

export default function PYTProcessPart2() {
  return (
    <ErrorBoundary>
      <>
        <HeaderText>PYT: Process — Part 2 of 2</HeaderText>

        {/* Nav */}
        <div className="flex justify-center gap-4 mb-8">
          <Link
            href="/PYT/process"
            className="px-6 py-3 border border-gray-300 rounded-full text-gray-600 hover:border-gray-500 hover:text-gray-800 transition-colors duration-200 text-sm"
          >
            ← Part 1
          </Link>
          <Link
            href="/PYT"
            className="px-6 py-3 border border-gray-300 rounded-full text-gray-600 hover:border-gray-500 hover:text-gray-800 transition-colors duration-200 text-sm"
          >
            Back to Outcome
          </Link>
        </div>

        <SystemDesignText
          column="right"
          sectionTitle="I found out that..."
          heading="The proxy, when framed as a guiding tool, vastly influenced how users thought about the making process"
          paragraph={
            "e.g, Flat surfaces encouraging planar building, e.g, faceting or padding. Curved surfaces encouraging fluid surfaces and destructive operations; \n\nBy using a proxy's geometry like a '3d ruler', users could intuitively control surfacing with much higher accuracy vs normal VR control systems, and pick it up more quickly."
          }
        />
        <Prototyping
          subtitle="Prototyping 3"
          title="Finding design parameters in a new interactive space"
          description={
            "I developed 1 addition, 1 subtraction and 1 fine-surface interaction to greater depth.\n \nUsers were evaluated on simple mesh manipulation tasks against quantitative metrics like speed and accuracy of completion, and qualitative. \n\ne.g, if proxy material enhanced the experience, if particular shapes were more useful."
          }
          mediaType="image"
          mediaSrc="/Assets/PYT/ShapePrototypes.webp"
          alt=""
          caption="Shape typologies in categories: Polygons, Convex, Circular, Concave."
          objectFit="contain"
        />
        <ImageGalleryGray
          rows={3}
          images={[
            {
              type: "video",
              src: "/Assets/PYT/ShapeRefine_1.webm",
              alt: "User testing with a modular head brush",
              poster: "/Assets/PYT/ShapeRefine_1_poster.webp",
            },
            {
              type: "video",
              src: "/Assets/PYT/ShapeRefine2.webm",
              alt: "",
              poster: "/Assets/PYT/ShapeRefine2_poster.webp",
            },
            {
              type: "video",
              src: "/Assets/PYT/ShapeRefine3.webm",
              alt: "User producing a clean blended surface with a sphere proxy",
              poster: "/Assets/PYT/ShapeRefine3_poster.webp",
            },
            {
              type: "image",
              src: "/Assets/PYT/MaterialTest.webp",
              alt: "A totem used to evaluate different materials for convex proxies.",
            },
            {
              type: "video",
              src: "/Assets/PYT/ShapeRefine5.webm",
              alt: "User grabbing different physical brushes to change brush",
              poster: "/Assets/PYT/ShapeRefine5_poster.webp",
            },
            {
              type: "video",
              src: "/Assets/PYT/AmeliaShape.webm",
              alt: "Users had fun exploring how the stranger shapes might be used! Most remarked on how their 'movesets' expanded.",
              poster: "/Assets/PYT/AmeliaShape_poster.webp",
            },
          ]}
          summaryCaption="Prototypes evaluated on efficiency of task completion, affordances, and versatility in surfacing scenarios."
        />
        <ImageGalleryGray
          rows={4}
          images={[
            {
              type: "image",
              src: "/Assets/PYT/Shape5.webp",
              alt: "Multi faceted 'dices' were less effective than a simple block for flat surfacing",
            },
            {
              type: "image",
              src: "/Assets/PYT/Shape7.webp",
              alt: "Sharp edges felt unfriendly to users, even when blended",
            },
            {
              type: "image",
              src: "/Assets/PYT/Shape3.webp",
              alt: "2 Blended convex surfaces exploring multi-grip proxies",
            },
            {
              type: "image",
              src: "/Assets/PYT/Shape6.webp",
              alt: "Complex, non-symmetrical geometry was harder to use in general",
            },
            {
              type: "image",
              src: "/Assets/PYT/Shape1.webp",
              alt: "A slightly curved tube could be used to produce highly concave surfaces.",
            },
            {
              type: "image",
              src: "/Assets/PYT/Shape4.webp",
              alt: "A Hollow ring was naturally used as a guide for 'drilling holes' of different sizes.",
            },
            {
              type: "image",
              src: "/Assets/PYT/Shape8.webp",
              alt: "A subdivided cube surface mounted on an ergonomic grip felt easy to use",
            },
            {
              type: "image",
              src: "/Assets/PYT/Shape2.webp",
              alt: "A Dupin Cyclide, with a high variation of gaussian curvature arranged neatly, was the most versatile tool for curves",
            },
          ]}
          summaryCaption="Research on the affordances of shape proxies is currently ongoing!"
          backgroundColor="bg-gray-50"
        />
        <FullBleedImage
          src="/Assets/PYT/Fruit_Bowl.webp"
          alt=""
          caption="Models coated in Silicone EcoFlex-0030, demonstrating early design principles in proxy geometry uncovered during user testing."
          aspectRatio="aspect-[16/7]"
          className="my-16"
          overlayIntensity="from-black/70"
          captionClassName="text-center"
        />
        <Insight
          title="'The shape and material of the proxy, and it's interface with the active tool were the largest determinants for user experience.'"
          highlightColorClass={["text-green-500", "text-blue-500"]}
          insights={[
            {
              label: "TRUE",
              headline: "Soft textures work best for subtractive operations",
              description:
                "Lightly deformable surfaces could be pressed into when performing digging/cutting/destructive operations, which enhances the believability of the sculpting simulation greatly.",
            },
            {
              label: "INTERESTING",
              headline:
                "Using simple shapes as guides integrates naturally with the natural workflow of 3d artists",
              description:
                "Considering the sculpture through different primitive geometries, and positioning the proxy in 3d space: These actions conceptually mirror the classical education of sculpting, where students are taught to break complex forms down into basic shapes and masses.",
            },
          ]}
        />
        <Prototyping
          subtitle="Discovery 2"
          title="Active relationships between tool ergonomics and active brush parameters"
          description={
            "If physical tools had an AR component, could the way we hold them change how they function? \n\nOne promising research outcome was the design of active tools that modified their outputs (brush shape, size, intensity) based on how they were handled."
          }
          mediaSrc="/Assets/PYT/Toolheads.webp"
          alt=""
          mediaWidth={undefined}
          mediaHeight={undefined}
        />
        <SingleColumnImageGray
          marginBottom="mb-8"
          images={[
            {
              src: "/Assets/PYT/ConeDemo.webm",
              alt: "",
              poster: "/Assets/PYT/SensorPrototyping_poster.webp",
            },
          ]}
          autoplay={true}
          paddingTop="pt-8"
          paddingBottom="pb-8"
          imageMaxWidth="max-w-md"
          summaryCaption="A conical 'file' tool: As the user's hand climbs the cone, grip diameter changes. At the cone base, larger arm muscles are activated for rough, large strokes. At the tip, fine control hand muscles are used for fine detailing."
        />
        <ImageGalleryGray
          images={[
            {
              type: "image",
              src: "/Assets/PYT/Cone0.webp",
              alt: "Functional file removal 1",
            },
            {
              type: "image",
              src: "/Assets/PYT/Cone1.webp",
              alt: "V1 with a grounded pivot, and various surfaces for texture/different interfaces",
            },
            {
              type: "image",
              src: "/Assets/PYT/Cone2.webp",
              alt: "Found potential relationship between ergonomics and tool parameters",
            },
            {
              type: "image",
              src: "/Assets/PYT/Cone3.webp",
              alt: "1D Handle gradation",
            },
            {
              type: "image",
              src: "/Assets/PYT/Cone4.webp",
              alt: "Flat 'mating' surface with proxy'",
            },
            {
              type: "image",
              src: "/Assets/PYT/Cone5.webp",
              alt: "Curved mating interface (flat side)",
            },
            {
              type: "image",
              src: "/Assets/PYT/Cone7.webp",
              alt: "2 Criteria established: a linear handle gradation & flat active interface",
            },
            {
              type: "image",
              src: "/Assets/PYT/Cone8.webp",
              alt: "...Iterated towards inevitability",
            },
          ]}
          rows={4}
          backgroundColor="bg-gray-50"
        />
        <ImageGalleryGray
          images={[
            { type: "image", src: "/Assets/PYT/Misc1.webp", alt: "" },
            { type: "image", src: "/Assets/PYT/Misc2.webp", alt: "" },
            {
              type: "image",
              src: "/Assets/PYT/Misc3.webp",
              alt: "A pinch and pull interaction",
            },
            {
              type: "image",
              src: "/Assets/PYT/Misc4.webp",
              alt: "A stylus with a blob nib",
            },
            {
              type: "image",
              src: "/Assets/PYT/Misc5.webp",
              alt: "A pom for brushing",
            },
            { type: "image", src: "/Assets/PYT/Misc6.webp", alt: "A file" },
            { type: "image", src: "/Assets/PYT/Misc7.webp", alt: "A hammer" },
            {
              type: "image",
              src: "/Assets/PYT/Misc8.webp",
              alt: "A toolhead 'brush' with an adjustable ridge profile",
            },
          ]}
          rows={4}
          summaryCaption="Other miscellaneous tool explorations"
          backgroundColor="bg-gray-50"
        />

        {/* Bottom nav */}
        <div className="flex flex-col items-center gap-3 mb-48 mt-16">
          <div className="flex gap-4">
            <Link
              href="/PYT/process"
              className="px-6 py-3 border border-gray-300 rounded-full text-gray-600 hover:border-gray-500 hover:text-gray-800 transition-colors duration-200 text-sm"
            >
              ← Part 1
            </Link>
            <Link
              href="/PYT"
              className="px-6 py-3 border border-gray-300 rounded-full text-gray-600 hover:border-gray-500 hover:text-gray-800 transition-colors duration-200 text-sm"
            >
              Back to Outcome
            </Link>
          </div>
        </div>

        <YouMightLike projects={projects} currentHref="/PYT" />
        <div className="pb-24 md:pb-32" />
      </>
    </ErrorBoundary>
  );
}
