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
import ProcessBrief from "@/app/components/ProcessBrief";
import ProjectDescriptor from "@/app/components/ProjectDescriptor";
import FullBleedImage from "@/app/components/FullBleedImage";
//import ProjectCard from "@/app/components/ProjectCard";
import VideoEmbed from "@/app/components/VideoEmbed";
import { projects } from "@/app/Data/projects";
import YouMightLike from "@/app/components/YouMightLike";
export default function Home() {
  return (
    <>
      <HeaderText>
        A more scalable approach to haptics in Augmented Reality...
      </HeaderText>
      {/* Section 1: Two-column layout */}
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
        <video
          src="/Assets/PYT/EyeSculpt.webm"
          autoPlay
          loop
          muted
          playsInline
          className="rounded-xl aspect-square max-w-[600px] w-full h-full object-contain shadow-inner"
        />
      </TitleCard>

      {/* Section 2: Three-column layout */}
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

      <div className="mb-16 flex justify-center">
        <ScrollButton targetId="finalOutcome">To Project Outcome</ScrollButton>
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
        body={`This results in disengagement and inaccuracies when working.

              Currently, VR haptic peripherals align physical surfaces to virtual ones, resulting in expensive, overengineered solutions. 
              
              These currently demand complicated backend architectures and/or robotics.`}
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
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-square",
            type: "video",
          },
          {
            src: "/Assets/PYT/AndrewTest.webm",
            alt: "Timelapse Footage",
            type: "video",
            poster: "/media/clip1-thumb.webp",
            aspectRatio: "aspect-square",
          },
          {
            src: "/Assets/PYT/RogerTest.webm",
            alt: "Mountain View",
            type: "video",
            aspectRatio: "aspect-square",
          },
          {
            src: "/Assets/PYT/ClaytonUserTest.webm",
            alt: "Research Interview",
            type: "video",
            poster: "/media/clip2-thumb.webp",
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
          "Users tested different functional prototypes based around subtraction, addition and surface manipulation operations. \n\nDifferent sensors, mesh manipulation engines, and interactions were developed and evaluated on intuitivity, sense of control, and compute latency. "
        }
        mediaSrc="/Assets/PYT/Interactive_Prototyping.webm"
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
          { type: "video", src: "/Assets/PYT/bern_Ears.webm", alt: "" },
          {
            type: "video",
            src: "/Assets/PYT/AbrarPositiveMold.webm",
            alt: "",
          },
          { type: "video", src: "/Assets/PYT/Pulling.webm", alt: "" },
          { type: "image", src: "/Assets/PYT/BernHorse1.webp", alt: "" },
          {
            type: "video",
            src: "/Assets/PYT/AbrarTriangleChamfer.webm",
            alt: "",
          },
          {
            type: "video",
            src: "/Assets/PYT/HammerDavidProto.webm",
            alt: "Alternative deformation engines were still tested at this stage",
          },
        ]}
        summaryCaption="Prototypes evaluated on functionality and intuitivity foremost. Users performed extremely basic tasks like chamfering or blending 2 surfaces, adding protrusions, making indents"
      />

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
        mediaWidth={undefined}
        mediaHeight={undefined}
      />
      <ImageGalleryGray
        rows={3}
        images={[
          {
            type: "video",
            src: "/Assets/PYT/ShapeRefine_1.webm",
            alt: "User testing with a modular head brush",
          },
          {
            type: "video",
            src: "/Assets/PYT/ShapeRefine2.webm",
            alt: "",
          },
          {
            type: "video",
            src: "/Assets/PYT/ShapeRefine3.webm",
            alt: "User producing a clean blended surface with a sphere proxy",
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
          },
          {
            type: "video",
            src: "/Assets/PYT/AmeliaShape.webm",
            alt: "Users had fun exploring how the stranger shapes might be used! Most remarked on how their 'movesets' expanded.",
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
            alt: "A slightly curved tube could be used to produce highly concave surfaces, demonstrating how tiny surfaces could be 'extrapolated' to great effect.",
          },

          {
            type: "image",
            src: "/Assets/PYT/Shape4.webp",
            alt: "A Hollow ring was naturally used as a guide for 'drilling holes' of different sizes, even without any prompts",
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
        // Smaller cells to fit more content
        backgroundColor="bg-gray-50" // Lighter background
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
          },
        ]}
        autoplay={true}
        paddingTop="pt-8"
        paddingBottom="pb-8"
        imageMaxWidth="max-w-md"
        summaryCaption="A conical 'file' tool: As the user's hand climbs the cone, grip diameter changes. At the cone base, larger arm muscles are activated for rough, large strokes. At the tip, fine control hand muscles are used for fine detailing. "
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
        // Smaller cells to fit more content
        backgroundColor="bg-gray-50" // Lighter background
      />
      <ImageGalleryGray
        images={[
          {
            type: "image",
            src: "/Assets/PYT/Misc1.webp",
            alt: "",
          },
          {
            type: "image",
            src: "/Assets/PYT/Misc2.webp",
            alt: "",
          },
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

          {
            type: "image",
            src: "/Assets/PYT/Misc6.webp",
            alt: "A file",
          },
          {
            type: "image",
            src: "/Assets/PYT/Misc7.webp",
            alt: "A hammer",
          },
          {
            type: "image",
            src: "/Assets/PYT/Misc8.webp",
            alt: "A toolhead 'brush' with an adjustable ridge profile",
          },
        ]}
        rows={4}
        // Smaller cells to fit more content
        summaryCaption="Other miscellaneous tool explorations"
        backgroundColor="bg-gray-50" // Lighter background
      />
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
        heading=" Instead of designing physical objects that align to virtual
            surfaces.."
        paragraph="Project Your Touch explores interactions that
            use known physical geometry to control virtual surfaces, finding that this new way of interaction:"
      />

      <TextImageTwoThirds
        heading="Has more intuitive input dimensions than regular VR"
        body="... leveraging pressure, shear force, brush angles, brush contact area, etc, in a manner that mirrors how we manipulate plastic matter in real life."
        imageAspectRatio="aspect-video"
        //alt="Placeholder graphic"
        marginBottom="mb-16"
        imageSrc="/Assets/PYT/FiveMoreInputs.webm"
      />
      <TextImageTwoThirds
        heading="Has higher accuracy & potentially lower compute costs,"
        body="as the system operates by projecting preloaded surface geometry at a position/rotation of a user's choice. "
        reverse
        imageAspectRatio="aspect-video"
        alt="Placeholder graphic"
        marginBottom="mb-16"
        imageSrc="/Assets/PYT/DonutSrfDemo.webm"
      />
      <TextImageTwoThirds
        heading="..And provides designers with tools to developing more versatile tactile experiences"
        body="by providing applications with a) physical force receptors that can vary in material, haptics, or geometry, and b) new typologies of 'active controllers' "
        marginBottom="mb-64"
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
          "At a whopping 27 joints, the human hand is a versatile form that both we, and computer vision models today, are intimately familiar with. This allows for an easily understandable, yet powerful tool for form manipulation.\n\nWhen users tested this interaction, I observed 2 interesting things: \n\n1) People were able to 'think through moving', using their hands to decide how to move forward.\n 2) The motions of making were remarkably similar to the movements of clay sculptors, who would use the crooks of their hands to shape their sculpture. "
        }
        mediaType="webm"
        mediaSrc="/Assets/PYT/AmeliaHands.webm"
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
    </>
  );
}
