import ImageGridSection from "@/app/components/image-grid-section";
import TextImageTwoThirds from "@/app/components/TextImageTwoThirds";
import Insight from "@/app/components/insight";
import ScrollButton from "@/app/components/ScrollButton.client"; // Import the client component
import Prototyping from "@/app/components/prototyping";
import ImageGalleryGray from "@/app/components/imageGalleryGray";

import SystemDesignText from "@/app/components/SystemDesignText";
import HeaderText from "@/app/components/LeadHeader";

import ProjectDescriptor from "@/app/components/ProjectDescriptor";
import FullBleedImage from "@/app/components/FullBleedImage";
//import ProjectCard from "@/app/components/ProjectCard";

import { projects } from "@/app/Data/projects";
import YouMightLike from "@/app/components/YouMightLike";
import SingleColumnHeaderText from "../components/SingleColumnHeaderText";
import VideoPage from "../components/VideoPage";
export default function Home() {
  return (
    <>
      <HeaderText>
        Singapore Playgrounds are like prescriptions: safe, measured...
      </HeaderText>
      <FullBleedImage
        src="/Assets/CanningClimb/level1Obstacle.webp"
        alt=""
        caption=""
        aspectRatio="aspect-[16/8]"
        className="my-16"
        overlayIntensity="from-black/70"
        captionClassName="text-center"
      />
      {/* Section 1: Two-column layout */}
      <SingleColumnHeaderText
        title="HMW challenge Singapore's notion of safety in play?"
        tags={[
          "INTERACTION DESIGN",
          "DESIGN RESEARCH",
          "SERVICE DESIGN",
          "SCHOOL PROJECT",
        ]}
        paragraphs={[
          "In this 3 month Design Platform, my groupmates and I were tasked to challenge Singapore's notions around play space design. \n\nInspired by recent research studies in Europe about risk in adolescent play,  and the idea of open improvisation a la lego and music, we conceptualized Canning Climb, a cultural playground hewn into Singapore's Fort Canning Park. ",
        ]}
      />
      {/* Section 2: Three-column layout */}
      <ProjectDescriptor
        team={[
          "Ms Grace Tan Sze Ern, Platform Supervisor",
          "Nazurah Rohayat, Designer",
          "Pauline Young, Designer",
          "Wong He Kai, Me",
        ]}
        responsibilities={[
          "Site Analysis",
          "Primary User Research (Playing with kids!)(in the playground, with their parents nearby)",
          "Secondary Research into the genealogy, and modern ideas around play",
          "Conceptualized the main idea",
          "Designed a generative modeller in grasshopper based on various safety parameters/anthropometrics",
          "Modelled and rendered the site, based on accurate topological data",
          "CMF",
        ]}
        results={[
          "A full render concept of the final playground",
          "A document of codified space-risk relationships",
          "A generative template for describing risk thresholds in play space design (for 12 year olds and up)",
        ]}
      />
      <VideoPage
        src="/Assets/CanningClimb/Teaser.webm"
        className="mb-16"
        style={""}
      />

      <div className="mb-16 flex justify-center">
        <ScrollButton targetId="finalOutcome">To Project Outcome</ScrollButton>
      </div>
      <SystemDesignText
        column="right"
        sectionTitle="Intro"
        heading="Singapore Playgrounds are boring and too safe"
        paragraph=""
        marginBottom="mb-8"
      />
      <TextImageTwoThirds
        title="Safe?"
        heading="Every element is designed to minimize injury"
        imageSrc="/Assets/CanningClimb/ExamplePlayground.webp"
        body="Studies show that the average height of unrailed platforms is half that of our european playmates."
        imageAspectRatio="aspect-video"
        alt="Placeholder graphic"
        marginBottom="mb-16"
      />
      <TextImageTwoThirds
        title="Boring!"
        marginBottom="mb-8"
        heading="1 Structure = 1 Interaction"
        imageSrc="/Assets/CanningClimb/Suntec.webp"
        body={`Structures in Singapore's playgrounds are generally 'prescriptive': Each element has a clearly defined function and 'way to play'.
          
          They are often also generic.`}
        reverse
        imageAspectRatio="aspect-video"
        alt="Placeholder graphic"
        caption=""
      />

      <SystemDesignText
        column="right"
        sectionTitle=""
        heading="Where's a good place to make a statement?"
        paragraph="As a more discursive project, I wanted to find a site that looked 'too hostile' for play habitation. "
        marginBottom="mb-8"
      />

      <Prototyping
        subtitle="Site Research"
        title="Finding Fort Canning"
        description={
          "As a site, Fort Canning had all the ingredients for an exciting challenge:\n\nIt had a steep topography, resulting in current playgrounds lying only at the base of the beautiful park.\n\nIt had heritage trees and spots that couldn't be destroyed.\n\nIt had an incoherent architectural language stemming from 3 different eras of history."
        }
        mediaSrc="/Assets/CanningClimb/Topography.webp"
        mediaType="image"
        alt="Topography of Canning"
        caption=""
        mediaWidth={"500"}
        mediaHeight={undefined}
      />
      <ImageGalleryGray
        images={[
          {
            type: "image",
            src: "/Assets/CanningClimb/CulturalCollage.webp",
            alt: "Layout of different cultural spaces in Fort Canning",
          },

          {
            type: "image",
            src: "/Assets/CanningClimb/UserBehaviours.webp",
            alt: "Map showing the population demographic changes up the hill; Kids generally stay around the bottom due to the physical demand.",
          },

          {
            type: "image",
            src: "/Assets/CanningClimb/TreeHistory.webp",
            alt: "We documented the different heritage trees in the space, realizing that they reflected the changing history of the space",
          },

          {
            type: "image",
            src: "/Assets/CanningClimb/KidsObserved.webp",
            alt: "We interacted with a group of families that were regulars to the park. The kids' favourite games didn't revolve around the park equipment, but the materials in the space, citing all the different shapes and textures produced by the wide variety of flora.",
          },
        ]}
        summaryCaption="User Research"
        rows={2}
        // Smaller cells to fit more content
        backgroundColor="bg-gray-50" // Lighter background
      />
      <ImageGalleryGray
        images={[
          {
            type: "image",
            src: "/Assets/CanningClimb/book1.webp",
            alt: "Modern kids are often sensory-deprived. The 'bad behavior' we see in classrooms is frequently a deficit of vestibular and proprioceptive input, which is only fixed by unstructured, vigorous outdoor play.",
          },

          {
            type: "image",
            src: "/Assets/CanningClimb/book2.webp",
            alt: "Play's primary function isn't always positive or productive. It is inherently ambiguous, serving as a brain's way to simulate and become resilient to randomness, fear, and the unpredictable nature of existence.",
          },

          {
            type: "image",
            src: "/Assets/CanningClimb/book3.webp",
            alt: "A great playground isn't a catalogue of equipment, but a dynamic landscape that invites a child's own story-making and discovery.",
          },

          {
            type: "image",
            src: "/Assets/CanningClimb/book4.webp",
            alt: "The most powerful social play emerges not from rules dictated by technology, but from digital environments designed to create shared, unpredictable experiences.",
          },
          {
            type: "image",
            src: "/Assets/CanningClimb/book5.webp",
            alt: "The risk-averse, rubber-floor playground is a scientific failure; children's cognitive and physical development requires managed risk and complex problem-solving.",
          },
          {
            type: "image",
            src: "/Assets/CanningClimb/book6.webp",
            alt: "Design play that allows a child to complete the stress cycle—not by removing challenge, but by providing a clear path to mastery and resolution.",
          },
        ]}
        summaryCaption={
          "As someone who insists on validating design decisions on objectivity, I personally struggled with the critical nature, unresolved nature of this project. \n\nI read books so this project could have a foundation to build upon. (And I love reading)"
        }
        rows={3}
        // Smaller cells to fit more content
        backgroundColor="bg-gray-50" // Lighter background
      />
      <Insight
        title="Building an alternative vision of Fort Canning's features"
        highlightColorClass={["text-blue-500", "text-blue-500"]}
        insights={[
          {
            label: "INTERESTING",

            headline:
              "Terrain and elevation could be reframed as a challenge, sparking engagement through mastery",
            description:
              "Climbing up a structure is an essential act in most playgrounds; Could we turn Fort Canning's elevation as an obstacle to be challenged and surpassed?",
          },
          {
            label: "INTERESTING",
            headline:
              "Instead of designing specific interactions, we could design for emergence.",
            description:
              "Designing for emergence is not a new concept, but it's a scary thing for a designer used to defined user flows. To counteract the ambiguity, we could quantify emergent design by the number of interaction typologies unlocked when elements in a system are combined. ",
          },
        ]}
      />

      <Prototyping
        subtitle="Prototyping"
        title="Designing provocative prototypes"
        description={
          "Under a critical framework, we designed concepts that were max 1 or 2 abstractions from normal play behaviour.\n\nI figured that this would allow the concepts to preserve believability while still sparking discourse."
        }
        mediaSrc="/Assets/CanningClimb/StationSketches.webp"
        mediaType="image"
        alt=""
        mediaWidth={undefined}
        mediaHeight={undefined}
      />

      <ImageGalleryGray
        images={[
          {
            type: "image",
            src: "/Assets/CanningClimb/ChosenSite.webp",
            alt: "The site we settled on had 3 levels of increasing steepness, which we thought could form a difficulty curve",
          },

          {
            type: "image",
            src: "/Assets/CanningClimb/TreeSnipe.webp",
            alt: "It would also intersect a couple of heritage trees with unique material 'shedding'",
          },

          {
            type: "video",
            src: "/Assets/CanningClimb/PlayArtefacts.webm",
            alt: "A set of tools were designed to enable a wide variety of roleplay and material engagement.",
          },

          {
            type: "image",
            src: "/Assets/CanningClimb/Sketch1.webp",
            alt: "Sketches for an early design direction. The triangular facets were a potentially modular way to iterate object heights for difficulty, risk etc. quickly.",
          },
          {
            type: "image",
            src: "/Assets/CanningClimb/ClayProto.webp",
            alt: "Early clay prototype with interactions overlayed.",
          },

          {
            type: "image",
            src: "/Assets/CanningClimb/EarlyRender.webp",
            alt: "Early Render. By 'depressing' the structure into the hill, and elevating the sides with stairs, parents and bystanders would have easy sightlines and access to the children during emergencies",
          },
        ]}
        summaryCaption="Concept Illustrations"
        rows={3}
        // Smaller cells to fit more content
        backgroundColor="bg-gray-50" // Lighter background
      />

      <SystemDesignText
        column="right"
        sectionTitle="With a fairly modular set-up, informed by height dimensions, etc..."
        heading="Could we make it parametric?"
        paragraph={"This didn't fit the design brief, but I was curious."}
      />
      <Prototyping
        subtitle="And yes!"
        title="We can make it parametric."
        description={
          "This made the design process much faster in some respects. \n\nNow we could generate designs based on parameters such as fall height, facet angles, and freely adapt the play space's dimensions."
        }
        mediaType="image"
        mediaSrc="/Assets/CanningClimb/Grasshopper.webp"
        alt=""
        mediaWidth={"200"}
        mediaHeight={"200"}
      />
      <ImageGalleryGray
        rows={3}
        images={[
          {
            type: "image",
            src: "/Assets/CanningClimb/Materials.webp",
            alt: "",
          },
          {
            type: "image",
            src: "/Assets/CanningClimb/MockUp.webp",
            alt: "",
          },
          {
            type: "image",
            src: "/Assets/CanningClimb/L3Schematic.webp",
            alt: "",
          },
          {
            type: "image",
            src: "/Assets/CanningClimb/L2Illustration.webp",
            alt: "Safety was evaluated simultaneously with visualizations of people interacting with the play space. Colors marked 'visibility', a subjective visualization of the 'secrecy' afforded in different spaces, which was a metric discussed in many critical theories of play.",
          },
          {
            type: "image",
            src: "/Assets/CanningClimb/PhysicalPrototype1.webp",
            alt: "",
          },
          {
            type: "image",
            src: "/Assets/CanningClimb/PhysicalPrototypes.webp",
            alt: "Material samples from the selected site.",
          },
        ]}
        summaryCaption=""
      />
      <section id="finalOutcome" className="h-0 w-0 p-0 m-0" />
      <ImageGridSection
        rows={2}
        imageScale={1.0}
        imageGap="gap--10"
        images={[
          {
            src: "/Assets/CanningClimb/L1Illustration.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
          {
            src: "/Assets/CanningClimb/L3Illustration.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
          {
            src: "/Assets/CanningClimb/TreeLayout.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
          {
            src: "/Assets/CanningClimb/SquareBirdsEye.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
        ]}
      />

      <FullBleedImage
        src="/Assets/CanningClimb/HeroShot.webp"
        alt=""
        caption="Models coated in Silicone EcoFlex-0030, demonstrating early design principles in proxy geometry uncovered during user testing."
        aspectRatio="aspect-[16/9]"
        className="my-16"
        overlayIntensity="from-black/70"
        captionClassName="text-center"
      />
      <SystemDesignText
        column="left"
        sectionTitle=""
        heading="Canning Climb is a play space designed with risk in mind."
        paragraph="Designed in accordance with the European EN 1176 safety guidelines, the design aims to create an environment of age-appropriate 'danger' to help kids develop. "
      />
      <TextImageTwoThirds
        heading="Angled for deceptive safety"
        body={
          "Falls occur around angled impact attenuation surfaces designed to cushion injury, never overreaching the 3 meter freefall height limit.\n\nThe angles also obscure areas above, creating elements of discovery for children climbing upwards."
        }
        imageAspectRatio="aspect-video"
        //alt="Placeholder graphic"
        marginBottom="mb-16"
        imageSrc="/Assets/CanningClimb/level1Obstacle.webp"
      />
      <TextImageTwoThirds
        heading="A natural mastery (and age) filter"
        body={
          "Split into 3 zones with increasing average inclines, the space provides different ages with increasing levels of difficulty that they can manage, creating a gradual mastery curve.\n\nThis also allows for the designs to accommodate different age-based play behaviours: The first level, for example, has a 'kitchenette' typology, with activity nodes encouraging role play."
        }
        reverse
        imageAspectRatio="aspect-video"
        alt="Placeholder graphic"
        marginBottom="mb-16"
        imageSrc="/Assets/CanningClimb/GroundRelation.webp"
      />
      <TextImageTwoThirds
        heading="Bridging 3 cultural spaces"
        body={
          "The design language of the base is inspired by clay sculptures excavated in the area, which gradually transitions into the clay terracing of British Imperial Singapore. \n\nBy playing with the semantics of clay in the different eras of Fort Canning, the space is an intervention that respects and harmonizes its environment."
        }
        marginBottom="mb-64"
        imageAspectRatio="aspect-16/6"
        alt="Placeholder graphic"
        imageSrc="/Assets/CanningClimb/SemanticInversion.webp"
      />
      <ImageGridSection
        rows={3}
        imageScale={1.0}
        imageGap="gap--10"
        images={[
          {
            src: "/Assets/CanningClimb/zoomOut.webm",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-16/9",
            type: "video",
          },
          {
            src: "/Assets/CanningClimb/L2Render.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-16/9",
            type: "image",
          },
          {
            src: "/Assets/CanningClimb/L3Render.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-16/9",
            type: "image",
          },
          {
            src: "/Assets/CanningClimb/L1Render.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-16/9",
            type: "image",
          },
          {
            src: "/Assets/CanningClimb/Layout.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-16/16",
            type: "image",
          },
          {
            src: "/Assets/CanningClimb/L3Render2.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-16/16",
            type: "image",
          },
        ]}
      />

      <Insight
        title="'Reflections'"
        highlightColorClass={["text-red-500", "text-red-500", "text-blue-500"]}
        insights={[
          {
            label: "TO BE IMPROVED",

            headline: "I wish we validated more.",
            description:
              "Maybe it's the nature of a critical inquiry project and how it's conducted, but I wish we took time to test our assertions, instead of arguing from theory. The design outcomes were evaluated on imaginativeness and discursiveness, but I think I could have done more on validation.",
          },
          {
            label: "TO BE IMPROVED",
            headline:
              "Creativity isn't the bottleneck in Singapore, it's manufacturing cost.",
            description:
              "This was something I realized towards the end, when talking to people in the industry; Local playgrounds are limited by a quota of custom parts which are used in combination with recycled, or pre-built templates. A better 'designing with materials' project could have involved innovating how we might design around the current 'dictionary' of available parts.",
          },
          {
            label: "INTERESTING",
            headline: "Critical Inquiry: Books impact design decisions",
            description:
              "Designing to ask questions about society like this seem to benefit a lot more from reading! Critical frameworks are an interesting criteria to design around (but maybe all design benefits from more reading in general...)",
          },
        ]}
      />

      <YouMightLike projects={projects} currentHref="/CanningClimb" />
    </>
  );
}
