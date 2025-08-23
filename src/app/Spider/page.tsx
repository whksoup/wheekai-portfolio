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
            alt: "Hypersketch, a sketch to AI app developed by our platform supervisor, converting sketches into renders of different form/photo typologies. These were really useful for rapid image generation.",
          },
        ]}
        summaryCaption=""
        rows={2}
        // Smaller cells to fit more content
        backgroundColor="bg-gray-50" // Lighter background
      />
      <Prototyping
        subtitle="Prototyping 2"
        title="Linking AI to real world production methods"
        description={
          "How might AI output be converted into functional, mechanical designs? \n\nWe explored different ways of translating AI, as well as multi-phase (AI>Physical>AI) processes of iteration."
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
            alt: "The widgets in this prototype made it 'too' engaging, resulting in it breaking by some forceful users",
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
            alt: "We took photos of prototypes at particular angles and had image-gen 'fill' areas of the image, which resulted in more 'actionable' informatiion. Ah!  A spider!",
          },
          {
            type: "image",
            src: "/Assets/Spider/Stake.webp",
            alt: "A marble trapping game",
          },
          {
            type: "image",
            src: "/Assets/Spider/Crucifix.webp",
            alt: "A balancing game on a cross",
          },

          {
            type: "image",
            src: "/Assets/Spider/Chandelier.webp",
            alt: "A really fun (but engineering nightmare) game about building an island for marbles using swing strings.",
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
        // Smaller cells to fit more content
        backgroundColor="bg-gray-50" // Lighter background
      />
      <SystemDesignText
        column="left"
        sectionTitle="Making AI into real prototypes was brain bending."
        heading="We eventually realized that we could simplify AI input by building around a specific object relationship in an AI image. "
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
        title="So simple I could cry!"
        description={
          "A ball, guided along a rail system you control using your hands as pivots!\n\nThe interaction felt simple yet dynamic, and incredibly tactile. \n\nThere was an exciting visual element and a unique structural language."
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
        paragraph={
          "We had a mechanism (e.g, Mario could jump on goombas). Now what is the game (World 1)? What are first goals, what is the mastery, where is the replayability? \nHow is the game communicated through the toy's design?"
        }
      />
      <ImageGalleryGray
        images={[
          {
            type: "image",
            src: "/Assets/Spider/Inspo.webp",
            alt: "The idea originally came when Hillary built around the relationship of the balls to the planks sandwiching them, asking how they might be suspended realistically.",
          },
          {
            type: "video",
            src: "/Assets/Spider/Whoops.webm",
            alt: "A GPT answer described a rube goldberg machine ''travelling backwards''. So we tried making the ball go up!",
          },
          {
            type: "image",
            src: "/Assets/Spider/Proto1.webp",
            alt: "There were no real affordances in the early prototypes, which had some sort of appeal, from user feedback.",
          },

          {
            type: "video",
            src: "/Assets/Spider/JointIteration.webm",
            alt: "30+ Iterations on a hinge design: We wanted a hinge that maximized a range of motion along one axis while being constrained tightly along the other two. It had to be easily printed/injection molded, and modular.",
          },

          {
            type: "video",
            src: "/Assets/Spider/Proto2.webm",
            alt: "Acrylic was rigid like metal, yet more pliable, cheaper for prototyping. It gave a 'science experiment' aesthetic which we enjoyed exploring!",
          },
          {
            type: "video",
            src: "/Assets/Spider/Winners.webm",
            alt: "With a hoop addition, there was a satisfying and achievable goal to the toy. But it also made the play binary, creating clear winners and losers (which discouraged experimentation), and restricted creative expression.",
          },
        ]}
        summaryCaption=""
        rows={3}
        // Smaller cells to fit more content
        backgroundColor="bg-gray-50" // Lighter background
      />

      <SystemDesignText
        column="left"
        sectionTitle="The key issue now was the difficulty."
        heading="We saw potential to reach the expressiveness of a lego set, the tactility of a yoyo, as well as the simplicity of a 2x2 cube..."
        paragraph={""}
      />
      <TextImageTwoThirds
        title=""
        heading="Creating something that preserved the open-ended discovery of this..."
        imageSrc="/Assets/Spider/AdamDiscovery.webm"
        body="He managed to keep the ball moving while the toy was turned on its side!"
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
          "8 of 8 users could replicate the move consistently within 20 tries, which we took as a sign to proceed forward. \n\nWe settled on a '3 height' level design, with a non linear path of 'easy wins' (rolling the ball without tipping it on its side, balancing momentum)\n\nMedium wins (getting from lower to middle, middle to top) \n\nAnd hard (Lower to top instantly), on top of many variations in between."
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
            alt: "Tweaking the rail profiles and lengths, the strength/haptic profile of the action, the height of the horizontal levels etc.",
          },
        ]}
        imageMaxWidth="max-w-xl"
        aspectRatio="aspect-video"
        autoplay={true}
        backgroundColor="bg-gray-100"
        summaryCaption=""
      />

      <SystemDesignText
        column="left"
        sectionTitle="Form Refinement"
        heading="It's the last 3 weeks. From this point, we didn't use too much AI."
        paragraph={
          "There were enough design conditions that we felt like we could iterate towards inevitability. The next section will be geeking out about some cool design details, that you can skip with the button below. "
        }
      />
      <div className="mb-16 flex justify-center">
        <ScrollButton targetId="finalOutcome">To Project Outcome</ScrollButton>
      </div>
      <ImageGridSection
        rows={3}
        imageScale={1.0}
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
          "With a combination of the above and a 1.8mm snap fit joint mechanism (also relentlessly prototyped), we managed to produce a robust mechanical toy that sustained 6 hours of continuous play in its exhibition \n\n(the exhibition ended. Spider is still alive.)"
        }
        mediaSrc="/Assets/Spider/SnapFit.webp"
        mediaWidth="60%"
        mediaType="image"
        alt=""
        caption=""
        reverse
      />
      <Prototyping
        subtitle="Detail 4"
        title="The materiality of PLA printing"
        description={
          "In some wooden japanese toys, the natural grain and texture of the wood is allowed to express itself in the form of growth patterns. \n\nI wanted to see if a 3D print could express a similar 'growth materiality'; By designing with respect to the print direction/nozzle resolution, PLA gets a 'grain' of its own."
        }
        mediaSrc="/Assets/Spider/TreeRings.webp"
        mediaWidth="60%"
        mediaType="image"
        alt=""
        caption=""
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
        rows={2}
        imageScale={1.0}
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
            src: "/Assets/Spider/SpiderRender1.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-16/9",
            type: "image",
          },
          {
            src: "/Assets/Spider/SpiderRender2.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-16/9",
            type: "image",
          },
        ]}
      />

      <Insight
        title="A crazy 12 weeks! What I've Learned: "
        highlightColorClass={[
          "text-green-500",
          "text-red-500",
          "text-blue-500",
        ]}
        insights={[
          {
            label: "TRUE",

            headline: "Designing with AI goes so much deeper than a prompt",
            description:
              "Between images, videos, photoshops as inputs, AI shouldn't just be seen as a starting point, but another iterative tool that should be valued for its high resolution, its ability to draw from wide subcultures and form languages, and above all its inconsistencies with reality.",
          },
          {
            label: "TO BE IMPROVED",
            headline: "Much more to explore: AI in the late stages of design",
            description:
              "Circling the final submission, I had so many ideas on using AI in the refining process (e.g, feeding the modelling software live feed into stable diffusion), but time was so short.",
          },
          {
            label: "INTERESTING",
            headline: "Non-linear/Open Play Design Processes",
            description:
              "From other UX projects, user flows and tasks are well defined, and the designer is like a traffic conductor placing cues and cones to direct energy towards specific places. \n\nDesigning open interactions as in a physical toy felt more like cooking at a Ramen restaurant, dicing components and ingredients into a soup, with the goal of maximizing valuable potential connections between components, which is really cool!",
          },
        ]}
      />
      <YouMightLike projects={projects} currentHref="/Spider" />
    </>
  );
}
