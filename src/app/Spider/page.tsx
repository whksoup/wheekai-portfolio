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

export default function Home() {
  return (
    <>
      <HeaderText>
        ClaudeGPT, design me a new [Yoyo, Rubik&apos;s Cube, Kendama]...
      </HeaderText>
      <FullBleedImage
        src="/Assets/Spider/HeroWide.webp"
        alt=""
        caption=""
        aspectRatio="aspect-[16/6]"
        className="my-16"
        overlayIntensity="from-black/70"
        captionClassName="text-center"
      />
      {/* Section 1: Two-column layout */}
      <SingleColumnHeaderText
        title="Can AI find new typologies for skill toys?"
        tags={[
          "INTERACTION DESIGN",
          "DESIGN RESEARCH",
          "PROCESS RESEARCH",
          "GAME DESIGN",
          "SCHOOL PROJECT",
          "AI",
        ]}
        paragraphs={[
          "In this 3 month design platform, my groupmate and I were tasked to design and manufacture a toy <strong> with 1 caveat:\n\n</strong> To invent and incorporate new generative AI workflows where possible.\n\nOur team wanted to create something only AI could lead to, and we landed on something unexpectedly tactile.",
        ]}
      />
      {/* Section 2: Three-column layout */}
      <ProjectDescriptor
        team={[
          "Hirari Haniuda, Designer",
          "Wong He Kai, Designer",
          "Donn Koh, Platform Supervisor",
        ]}
        responsibilities={[
          "Prototyped new workflows using AI for physical prototyping and interaction design",
          "Prototyped various mechanical interactions for play",
          "Developed and refined the final concept that was conceptualized by my group mate Hillary",
        ]}
        results={[
          "A document of new AI workflow techniques",
          "A toy prototype that is currently in talks for manufacture/exhibition",
        ]}
      />
      <VideoPage
        src="/Assets/Spider/Basil_Playing.webm"
        className="mb-16"
        style={""}
      />
      <div className="mb-16 flex justify-center">
        <ScrollButton targetId="finalOutcome">To Project Outcome</ScrollButton>
      </div>
      <SystemDesignText
        column="right"
        sectionTitle="'Designing' with AI can be easy..."
        heading="But can AI design something mechanical?"
        paragraph={
          "AI can make pretty (and pretty crazy) things, but their ideas often violate >0 laws of physics. \n\nDesigning a toy, on the other hand, is hard work. Often requiring some engineering, and more importantly, an instinct for 'fun', which is intangible and unbounded."
        }
      />
      <Prototyping
        subtitle="Prototyping 1"
        title="Playing with AI"
        description={
          "No 'research' needed! \n\nUnlike most product design projects, we jumped right into making things with, and out of AI.\n\n2 Goals: We wanted to identify potential generative tools (evaluated on cost, versatility, fidelity) and codify tool typologies."
        }
        mediaSrc="/Assets/Spider/2Wolves.webp"
        mediaWidth="60%"
        mediaType="image"
        alt=""
        caption="Prompt: A wolf puppet toy. > Fed into a language model > Fed output into image model"
      />
      <ImageGalleryGray
        images={[
          {
            type: "video",
            src: "/Assets/Spider/PointCloud.webm",
            alt: "A point cloud, fed through stable diffusion for an early building board game concept",
          },

          {
            type: "image",
            src: "/Assets/Spider/Prompt1.webp",
            alt: "We experimented with different prompt formats for concept generation, with various language models",
          },

          {
            type: "image",
            src: "/Assets/Spider/Prompt2.webp",
            alt: "Different prompt formats for straightforward text>image models",
          },

          {
            type: "image",
            src: "/Assets/Spider/Hypersketch1.webp",
            alt: "Hypersketch, a sketch to AI app developed by our platform supervisor, converting sketches into renders of different form/photo typologies",
          },
        ]}
        summaryCaption=""
        rows={2}
        gridCellSize="50vh" // Smaller cells to fit more content
        backgroundColor="bg-gray-50" // Lighter background
      />
      <Prototyping
        subtitle="Prototyping 2"
        title="Linking AI to real world production methods"
        description={
          "How might AI output be converted into functional, mechanical designs? \n\nWe explored different ways of translating AI, as well as multi-phase (AI>Physical>AI) processes of iteration"
        }
        mediaSrc="/Assets/Spider/PuzzleBox1.webm"
        mediaWidth="100%"
        mediaType="webm"
        alt=""
        caption="A puzzle box you disassemble with a 'wand'"
      />
      <SingleColumnImageGray
        rows={5}
        rowGap="gap-y-8"
        images={[
          {
            src: "/Assets/Spider/PuzzleBoxAI.webp",
            alt: "The image that inspired the above concept. We approached the design by asking, 'How does this cube close? How are the pieces hovering?'",
          },
          {
            src: "/Assets/Spider/PuzzleBoxAI15.webp",
            alt: "''Make the cube 50% more interactive, with widget components and more obvious affordances''",
          },
          {
            src: "/Assets/Spider/PuzzleBox15.webp",
            alt: "",
          },
          {
            src: "/Assets/Spider/PuzzleBoxAI2.webp",
            alt: "We realized we could gather more ideas for mechanisms by adding phrases like 'joints between...' or 'strings that brace...'.",
          },
          {
            src: "/Assets/Spider/PuzzleBox2.webm",
            alt: "The 'cross' brace string in the previous image set, for example, inspired this cube, which was a puzzle box that folded into a gift that could be lifted from the top.",
          },
        ]}
        imageClassName="object-scale-down"
        aspectRatio="aspect-auto"
        backgroundColor="bg-gray-100"
        imageMaxWidth="max-w-xs"
        summaryCaption=""
        marginBottom="mb-48"
        containerPadding="p-0 md:p-0"
        paddingTop="pt-24"
        paddingBottom="pb-24"
      />
      <ImageGalleryGray
        images={[
          {
            type: "image",
            src: "/Assets/Spider/SpiderMunComparison.webp",
            alt: "We took photos of prototypes at particular angles and had image-gen 'fill' areas of the image, which resulted in more 'actionable' informatiion. ",
          },
          {
            type: "image",
            src: "/Assets/Spider/Stake.webp",
            alt: "",
          },
          {
            type: "image",
            src: "/Assets/Spider/Crucifix.webp",
            alt: "",
          },

          {
            type: "image",
            src: "/Assets/Spider/Chandelier.webp",
            alt: "",
          },
          {
            type: "video",
            src: "/Assets/Spider/Golf.webm",
            alt: "",
          },
          {
            type: "video",
            src: "/Assets/Spider/Spacer.webm",
            alt: "",
          },
        ]}
        summaryCaption=""
        rows={3}
        gridCellSize="50vh" // Smaller cells to fit more content
        backgroundColor="bg-gray-50" // Lighter background
      />
      <SystemDesignText
        column="left"
        sectionTitle="Making AI into real prototypes was brain bending."
        heading="We eventually realized that we could simplify by building around a specific object relationship in an AI image."
        paragraph={
          "e.g, Just solving how a ball related to the cross underneath it in an AI image unleashed a wealth of mechanical relationships to explore."
        }
      />
      <Insight
        title="AI's utility in early prototyping:"
        highlightColorClass={[
          "text-green-500",
          "text-blue-500",
          "text-blue-500",
        ]}
        insights={[
          {
            label: "GOOD",

            headline: "AI gets a team onto the same page, fast.",
            description:
              "I realized that my group mate and I were able to build towards prototypes way faster, as we had a high resolution ground truth to work from.",
          },
          {
            label: "INTERESTING",
            headline:
              "Unusual /ambiguous relationships in an image easily lead to new interaction outcomes.",
            description:
              "First, we choose different AI models based on their training sets (e.g, anime girls), and use it to image fill to 'patch' a mechanical relationship in our prototype. \n\n AI then creates an evocative, half plausible result that is related to images in said image set (e.g, a magical girl love beam) that we can re-translate (e.g, light beam mechanism).",
          },
          {
            label: "INTERESTING",
            headline: "We get to stranger outcomes faster",
            description:
              "I realized in retrospect how unusual the things we built were in relation to our typical styles! The prototypes seem parametric, and naturally more 'essential': i.e, usually prototypes have more ideas in them early on, for better or worse.",
          },
        ]}
      />
      <Prototyping
        subtitle="Breakthrough"
        title="Simple, yet never done before"
        description={
          "A ball, guided along a rail system you control using your hands as pivots!\n\nThe interaction felt simple yet dynamic, and incredibly tactile. \n\nThere was an exciting visual element and an interesting structural language."
        }
        mediaSrc="/Assets/Spider/FirstSpider.webm"
        mediaWidth="100%"
        mediaType="webm"
        alt=""
        caption="Inspired by a mechanism we observed in the first image below."
      />
      <SystemDesignText
        column="left"
        sectionTitle="Cool, so..."
        heading="How can we / AI push this further?"
        paragraph={""}
      />
      <ImageGalleryGray
        images={[
          {
            type: "image",
            src: "/Assets/Spider/Inspo.webp",
            alt: "Hillary built around the relationship of the balls to the planks sandwiching them, asking how they might be suspended realistically.",
          },
          {
            type: "video",
            src: "/Assets/Spider/Whoops.webm",
            alt: "A GPT answer described a rube goldberg machine ''travelling backwards''. So we tried making the ball go up!",
          },
          {
            type: "image",
            src: "/Assets/Spider/Proto1.webp",
            alt: "",
          },

          {
            type: "video",
            src: "/Assets/Spider/JointIteration.webm",
            alt: "30+ Iterations on a hinge design: We wanted a hinge that maximized a range of motion along one axis while being constrained tightly along the other two. It had to be easily printed/injection molded, and modular.",
          },

          {
            type: "video",
            src: "/Assets/Spider/Proto2.webm",
            alt: "",
          },
          {
            type: "video",
            src: "/Assets/Spider/Winners.webm",
            alt: "With a hoop addition, there was a satisfying and achievable goal to the toy. But it also made the play binary, creating clear winners and losers, and restricted creative expression.",
          },
        ]}
        summaryCaption=""
        rows={3}
        gridCellSize="60vh" // Smaller cells to fit more content
        backgroundColor="bg-gray-50" // Lighter background
      />

      <SystemDesignText
        column="left"
        sectionTitle="The key issue was the difficulty."
        heading="We saw potential to reach the expressiveness of a lego set, the tactility of a yoyo, as well as the simplicity of a 2x2 cube..."
        paragraph={""}
      />
      <TextImageTwoThirds
        title=""
        heading="Creating something that preserved the open-ended discovery of this..."
        imageSrc="/Assets/PYT/BrushMenu_3.webp"
        body=""
        imageAspectRatio="aspect-video"
        alt="Placeholder graphic"
        marginBottom="mb-16"
      />
      <TextImageTwoThirds
        reverse
        title=""
        heading="And the emotional satisfaction of this!"
        imageSrc="/Assets/Spider/JaredHappy.webm"
        body=""
        imageAspectRatio="aspect-video"
        alt="Placeholder graphic"
        marginBottom="mb-16"
      />
      <SingleColumnImageGray
        images={[
          {
            src: "/Assets/Spider/eureka.webp",
            alt: " ",
          },
        ]}
        imageMaxWidth="max-w-md"
        aspectRatio="aspect-video"
        autoplay={false}
        backgroundColor="bg-gray-100"
        summaryCaption="One set of images triggered the eureka moment. Could a drawbridge pulley mechanism be integrated to hoist the ball up?"
      />
      <Prototyping
        subtitle="Yup."
        title="This provided an easy 'level 2' for a first time user."
        description={
          "8 of 8 users could replicate the move consistently within 20 tries, which we took as a sign to proceed forward."
        }
        mediaSrc="/Assets/Spider/MeHappy2.webm"
        mediaType="webm"
        mediaHeight={"600"}
        objectFit="contain"
        alt=""
        caption=""
      />
      <SingleColumnImageGray
        images={[
          {
            src: "/Assets/Spider/DrawbridgePrototyping.webm",
            alt: " ",
          },
        ]}
        imageMaxWidth="max-w-xl"
        aspectRatio="aspect-video"
        autoplay={true}
        backgroundColor="bg-gray-100"
        summaryCaption=""
      />
      <ImageGridSection
        rows={3}
        imageScale={0.7}
        imageGap="gap--10"
        images={[
          {
            src: "/Assets/Spider/FormFinding1.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
          {
            src: "/Assets/Spider/FormFinding2.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
          {
            src: "/Assets/Spider/FormFinding3.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
          {
            src: "/Assets/Spider/FormFinding5.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
          {
            src: "/Assets/Spider/FormFinding6.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
          {
            src: "/Assets/Spider/FormFinding7.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
        ]}
      />
      <SystemDesignText
        column="left"
        sectionTitle="Form Refinement"
        heading="From this point, we didn't use too much AI."
        paragraph={
          "There were enough design conditions that we felt like we could iterate towards inevitability. The next section will be geeking out about some cool design details, that you can skip with the button below. "
        }
      />
      <div className="mb-16 flex justify-center">
        <ScrollButton targetId="finalOutcome">To Project Outcome</ScrollButton>
      </div>

      <Prototyping
        subtitle="Detail 1"
        title="How did we achieve consistently straight rails in manufacturing?"
        description={
          "Acrylic had the right tensile / cost qualities for a rail, that did not require 300C heat like metal to ply into a rigid shape. \n\nHowever, there was a lot of difficulty in heat bending acrylic to a consistent width."
        }
        mediaSrc="/Assets/Spider/FormFinding5.webp"
        mediaWidth="60%"
        mediaType="image"
        alt=""
        caption=""
      />
      <Prototyping
        subtitle="Detail 1"
        title="By putting a string through a hollow acrylic tube, we could accurately constrain the shape and diameter of the tube under heat!"
        description={
          "This also had the added benefit of the string functioning as a linkage/hinge for the mechanism."
        }
        mediaSrc="/Assets/Spider/HeatBending.webm"
        mediaWidth="60%"
        mediaType="webm"
        alt=""
        caption=""
        reverse
      />

      <Prototyping
        subtitle="Detail 2"
        title="How did we constrain the motion of the joints?"
        description={
          "We attached a bead to the string! By controlling its surface profile in relation to the acrylic tubes, we could create explosive movement profiles for the lower rail, and more delicate ones for the upper rail."
        }
        mediaSrc="/Assets/Spider/Beads.webp"
        mediaWidth="60%"
        mediaType="image"
        alt=""
        caption=""
      />
      <Prototyping
        subtitle="Detail 3"
        title="It's entirely glueless!"
        description={
          "With a combination of the above and a 1.8mm snap fit joint mechanism, we managed to produce a robust mechanical toy that sustained 6 hours of continuous play."
        }
        mediaSrc="/Assets/Spider/SnapFit.webp"
        mediaWidth="60%"
        mediaType="image"
        alt=""
        caption=""
        reverse
      />
      <section id="finalOutcome" className="h-0 w-0 p-0 m-0" />
      <FullBleedImage
        src="/Assets/Spider/HeroShot2.webp"
        alt=""
        caption=""
        aspectRatio="aspect-[16/8]"
        className="my-16"
        overlayIntensity="from-black/70"
        captionClassName="text-center"
      />
      <SystemDesignText
        column="left"
        sectionTitle=""
        heading="Spider is a tiny rube goldberg machine you control with your hands"
        paragraph={
          "With the tactility, expressiveness and depth rivalling the yoyo and lego block. Here's a video:"
        }
      />

      <VideoEmbed videoId="SK-UOPVvEDk" maxWidth="max-w-screen-md" />

      <ImageGridSection
        rows={3}
        imageScale={0.7}
        imageGap="gap--10"
        images={[
          {
            src: "/Assets/Spider/SpiderFolded.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
          {
            src: "/Assets/Spider/SpiderHeld.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
          {
            src: "/Assets/Sphinx/TroubleBasket 2.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
          {
            src: "/Assets/Sphinx/FoldableBasket.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
          {
            src: "/Assets/Sphinx/FisherBasket.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
          {
            src: "/Assets/Sphinx/Basket.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
        ]}
      />
      <SingleColumnImageGray
        images={[
          {
            src: "/Assets/Sphinx/RailSchema.webp",
            alt: " ",
          },
        ]}
        imageClassName="object-scale-down"
        aspectRatio="aspect-auto"
        backgroundColor="bg-gray-100"
        imageMaxWidth="max-w-2xl"
        summaryCaption=""
        marginBottom="mb-48"
        containerPadding="p-0 md:p-0"
        paddingTop="pt-0"
        paddingBottom="pb-0"
      />

      <FullBleedImage
        src="/Assets/Sphinx/HeroShot.webp"
        alt=""
        caption=""
        aspectRatio="aspect-[16/8]"
        className="my-16"
        overlayIntensity="from-black/70"
        captionClassName="text-center"
      />
      <SystemDesignText
        column="left"
        sectionTitle=""
        heading="Say hi to Sphinx!"
        paragraph={
          "Inspired by reed fields, a dot pattern leverages an elderly's motion sensitivity to co-locate interactive elements on a plant interface, as motion sensitivity declines significantly slower than vision with age.\n\nThe dots similarly aid the CV depth model in triangulating leaf/hand depth."
        }
      />
      <SystemDesignText
        column="right"
        sectionTitle=""
        heading="Sphinx is a health management interface that grows with its user"
        paragraph="Habit stacking onto common daily rituals around gardening, Sphinx is an approachable interface for the elderly towards digital health services."
      />
      <TextImageTwoThirds
        heading="It grows with its user..."
        body="Eliminating the choice/menu paralysis of current systems in favor of personalized options that evolve gradually."
        imageAspectRatio="aspect-16/5"
        alt="Placeholder graphic"
        marginBottom="mb-16"
        imageSrc="Assets/Sphinx/AGrowingInterface.webp"
      />
      <TextImageTwoThirds
        heading="Has higher interaction rates vs current interfaces"
        body={
          "Big leafy buttons flicker on when the plant is watered, turning a primed positive moment (watering, cleaning plants) into productive action.\n\nResulting in an increase in digital communication when we deployed it in small user tests, the interface demands minimal dexterity and technology-knowledge."
        }
        reverse
        imageAspectRatio="aspect-video"
        alt="Placeholder graphic"
        marginBottom="mb-16"
        imageSrc="Assets/Sphinx/PhotoAlbum.webp"
      />
      <TextImageTwoThirds
        heading="A lightweight, scalable interface language"
        body="A lightweight GPU particle system and a variety of sensors allow for a variety of creative visual elements that feel responsive and gentle for sensitive eyes."
        marginBottom="mb-24"
        imageAspectRatio="aspect-full"
        alt="Placeholder graphic"
        imageSrc="Assets/Sphinx/VoiceDemo.webm"
      />
      <FullBleedImage
        src="/Assets/Sphinx/Riddle.webp"
        alt=""
        caption=""
        aspectRatio="aspect-[16/5]"
        className="mb-48"
        overlayIntensity="from-black/70"
        captionClassName="text-center"
      />
      <SingleColumnImageGray
        images={[
          {
            src: "/Assets/Sphinx/Schematic.webp",
            alt: "The final form is designed like a gift basket, for ease of carrying and assembly. ",
          },
        ]}
        imageClassName="object-fit"
        aspectRatio="aspect-[16/3]"
        autoplay={true}
        backgroundColor="bg-gray-100"
        summaryCaption=""
        marginBottom="mb-48"
        containerPadding="p-0 md:p-0"
        paddingTop="pt-16"
        paddingBottom="pb-16"
      />

      <VideoEmbed
        videoId="YxCmR1P7PwY"
        aspectRatio="4/3"
        marginTop="mt-8"
        marginBottom="mb-16"
        rounded="rounded-xl"
        className="bg-gray-100"
      />

      <Insight
        title="What I've Learned: "
        highlightColorClass={["text-green-500", "text-red-500"]}
        insights={[
          {
            label: "TRUE",

            headline: "Design for specific ecosystems",
            description:
              "As my first overseas design experience, I was surprised by how much culture could influence user behaviour, as well as how different service/manufacturing infrastructures could be. This project was very much about abandoning personal instincts in favour of user feedback.",
          },
          {
            label: "TO BE IMPROVED",
            headline: "Dichotomize! Research =/= Value",
            description:
              "While the project outcome turned out well, the final outcome did not aid the people we interviewed in the immediate future, which was what we initially had set out to do. I think this project needed more time in high fidelity user testing to see if we could ground the project to a nearer future.",
          },
          {
            label: "TO BE IMPROVED",
            headline: "Interviewing with empathy",
            description:
              "My groupmate, a service designer, was able to get so much out of our users in a way I don't think I can do (at the moment). I think it has something to do with body cues, and a general desire to listen to the life stories of others (patience and commiseration).",
          },
        ]}
      />
      <div className="w-full aspect-[16/6] bg-gray-300"></div>
    </>
  );
}
