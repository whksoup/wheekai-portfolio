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
import { projects } from "@/app/Data/projects";
import YouMightLike from "@/app/components/YouMightLike";

export default function Home() {
  return (
    <>
      <HeaderText>
        What form can an AI Companion take for single living elderly in Taiwan?
      </HeaderText>
      <FullBleedImage
        src="/Assets/Sphinx/Title.webp"
        alt=""
        caption=""
        aspectRatio="aspect-[16/5]"
        className="my-16"
        overlayIntensity="from-black/70"
        captionClassName="text-center"
      />
      {/* Section 1: Two-column layout */}
      <SingleColumnHeaderText
        title="Sphinx: A healthcare planner that grows with its elderly patient"
        tags={[
          "INTERACTION DESIGN",
          "DESIGN RESEARCH",
          "SERVICE DESIGN",
          "SCHOOL PROJECT",
        ]}
        paragraphs={[
          "In this 3 month Design Platform in Taiwan, my groupmates and I were tasked to design a product that could integrate with its 2030 digitized healthcare ecosystem for the Elderly. This could take any form, from a wheelchair, to a workshop, to an app.\n\nOur product is Sphinx, a plant-based AI management interface that grows with its user. \n\nThrough projection mapping, the custom application turns plant features (leaves, stems, flowers) into widgets that promote and habit-stack therapist/health service interactions at key points of an elderly's day. ",
        ]}
      />
      {/* Section 2: Three-column layout */}
      <ProjectDescriptor
        team={[
          "Geraldine Tong, Designer",
          "Nelli, Designer",
          "Wong He Kai, Designer",
          "Dr Chien-Hsu Chen, Platform Supervisor",
        ]}
        responsibilities={[
          "Prototyped interactions with elderly in Tainan",
          "Design Research, Physical, Digital Prototyping",
          "Physical Prototyping, Form Design",
          "Built a Javascript app with Computer Vision, Depth Mapping functionalities",
          "Product rendering / CMF",
        ]}
        results={[
          "A Proof of concept sensor & system demonstrating the prototype",
          "A UX research document with evidence for the viability of projection based interfaces for elderly rehab",
          "Developed an architecture of physical-to-digital interfaces, including how an AI might communicate with older generations.",
          "Won 2 awards: Best Product for NCKU Design Exhibition (Yr 3), Best Product at NCKU Design Exhibition",
        ]}
      />
      <VideoPage
        src="/Assets/Sphinx/WaveIntro.webm"
        className="mb-16"
        style={""}
      />
      <div className="mb-16 flex justify-center">
        <ScrollButton targetId="finalOutcome">To Project Outcome</ScrollButton>
      </div>
      <SystemDesignText
        column="right"
        sectionTitle="Elderly focused projects love to mention Taiwan's super-aging population future, "
        heading="But of Tainan's elderly now, 45% don't confide in help when in trouble."
        paragraph={
          " >50% of Tainan's elderly don't attend social activities . \n 75% of Tainan's elderly have no clear contingencies for injury/accidents\n>60% of them rely solely on personal/community services, as opposed to government provisions"
        }
      />
      <Prototyping
        subtitle="Primary Research"
        title="Exploring problem spaces"
        description={
          "As the only 3 exchange students in the platform, we had to be crafty with how we gathered data. \n\nWe got in contact with local community leaders, engaged with elderly care centers, and befriended uncles and aunties on the streets."
        }
        mediaSrc="/Assets/Sphinx/Interview_1.webp"
        mediaWidth="60%"
        mediaType="image"
        alt=""
        caption=""
      />
      <ImageGalleryGray
        images={[
          {
            type: "image",
            src: "/Assets/Sphinx/Interviews_1.webp",
            alt: "Interviews first began with anyone we could get; Probing broad topics across lifestyles, mobility, social habits",
          },

          {
            type: "image",
            src: "/Assets/Sphinx/DiscussionGuide_1.webp",
            alt: "Between phases, we prepared discussion guides, which honed in on key problems identified from previous rounds",
          },

          {
            type: "image",
            src: "/Assets/Sphinx/Interviewees.webp",
            alt: "We eventually worked further with 8 individuals who fit the criteria of single living, retired, aged 65+",
          },

          {
            type: "image",
            src: "/Assets/Sphinx/Interviews_2.webp",
            alt: "Super grateful for my charismatic groupmate Geraldine, who got us welcomed into their homes & spaces where we really got to experience their lifestyles",
          },
        ]}
        summaryCaption="User Research"
        rows={2}
        // Smaller cells to fit more content
        backgroundColor="bg-gray-50" // Lighter background
      />
      <Insight
        title="Social Isolation is prevalent, but most elderly accept it."
        highlightColorClass={["text-green-500", "text-blue-500"]}
        insights={[
          {
            label: "TRUE",

            headline: "The isolated begin as empty nesters ",
            description:
              "In Taiwan's culture, working to support family is a common goal in life that disappears when the children become adults and leave, which builds into feelings of loneliness and a lack of purpose.",
          },
          {
            label: "INTERESTING",
            headline:
              "They don't think to look for help, because they think they don't need it.",
            description:
              "Most of the isolated report feelings of betrayal, anguish towards their children, but refuse to communicate this to them out of pride or other emotions. Their daily routines, like gardening, cooking, exercise, reinforce their identities of independence.",
          },
        ]}
      />
      <TextImageTwoThirds
        marginBottom="mb-0"
        title="So the healthcare resources do exist..."
        heading="But they aren't accessed"
        imageSrc="/Assets/Sphinx/Blurb.webp"
        body="We realized that most single living elderly had personal reasons (pride, bad experiences, gossip) that prevented them from reaching out."
        imageAspectRatio="aspect-16/12"
        alt="Placeholder graphic"
      />
      <TextImageTwoThirds
        marginBottom="mb-16"
        title="And deterioration usually begins... "
        heading="When their kids leave."
        imageSrc="/Assets/Sphinx/IsolationTimeline.webp"
        body={`And their social and work habits are uprooted .
          
          Learning to live alone compounds with physical and mental deterioration from aging, leading to shame and isolation.`}
        reverse
        imageAspectRatio="aspect-16/6"
        alt="Placeholder graphic"
        caption=""
      />
      <TextImageTwoThirds
        marginBottom="mb-48"
        title="But we could also identify..."
        heading="Some overlapping routines"
        imageSrc="/Assets/Sphinx/Behaviours.webp"
        body="Like gardening, which was reported in 90% of our 20 interviews."
        imageAspectRatio="aspect-16/6"
        alt="Placeholder graphic"
      />
      <SystemDesignText
        column="left"
        sectionTitle="In our interviews, elderly Taiwanese were too scared to think about the future.  "
        heading="But plants? Plants reframed the future as one of growth and nurture."
        paragraph={
          "They sustained the emotional need of caring while being something they looked forward to every day.  "
        }
      />
      <Prototyping
        subtitle="Prototyping"
        title="Could we build something around their gardening habits?"
        description={
          "Using the plant cycle as touchpoints, we built prototypes that explored how they could be used for healthcare/communication."
        }
        mediaSrc="/Assets/Sphinx/Phone.webp"
        mediaType="image"
        mediaHeight={"300"}
        mediaWidth="300"
        objectFit="contain"
        alt=""
        caption=""
      />
      <ImageGalleryGray
        images={[
          {
            type: "image",
            src: "/Assets/Sphinx/Prototype_1.webp",
            alt: "We first began with UX paper prototypes to test what functions might resonate with the elderly",
          },

          {
            type: "image",
            src: "/Assets/Sphinx/App_Mockup_1.webp",
            alt: "We tested basic mobile mockups to verify UX flows",
          },
          {
            type: "image",
            src: "/Assets/Sphinx/Projection_1.webp",
            alt: "We explored projection mapping as a proof of concept",
          },

          {
            type: "image",
            src: "/Assets/Sphinx/VR_Modelling.webp",
            alt: "...With the projection matrix mathed out in VR!",
          },
          {
            type: "image",
            src: "/Assets/Sphinx/CardboardPlant.webp",
            alt: "A cardboard plant was used for user testing.",
          },

          {
            type: "image",
            src: "/Assets/Sphinx/IconTest.webp",
            alt: "Different UI elements and leaves",
          },
        ]}
        summaryCaption="Prototyping"
        rows={3}
        // Smaller cells to fit more content
        backgroundColor="bg-gray-50" // Lighter background
      />
      <SystemDesignText
        column="left"
        sectionTitle="Bridging towards a feasible prototype "
        heading="The plant interface worked..."
        paragraph={
          "While several functionalities were well recieved by users (like time tracking or photo albums), the interaction schemes had to be refined further.  "
        }
      />
      <Insight
        title="Leaves > Buttons"
        highlightColorClass={["text-green-500", "text-blue-500"]}
        insights={[
          {
            label: "TRUE",

            headline:
              "Users interacted with the app through the plant interface more than other digital devices",
            description:
              "Playing a cue through the app after detecting activity around the plant (watering, cleaning, etc.) was enough to get elderly users to use the app productively (reporting progress, reading messages).",
          },
          {
            label: "INTERESTING",
            headline:
              "The leaves could be simple buttons that respond when tapped",
            description:
              "While the buttons being leaves made them far more user friendly for tech illiterate users, the textures of the leaves and the icon design/sizes still had to be heavily iterated for users with mild vision impairment.",
          },
        ]}
      />
      <ImageGalleryGray
        images={[
          {
            type: "image",
            src: "/Assets/Sphinx/Midas1.webp",
            alt: "",
          },

          {
            type: "image",
            src: "/Assets/Sphinx/Midas2.webp",
            alt: "",
          },
          {
            type: "image",
            src: "/Assets/Sphinx/Midas3.webp",
            alt: "",
          },

          {
            type: "image",
            src: "/Assets/Sphinx/Midas5.webp",
            alt: "Shoutout to Bin, my vietnamese roommate while I was in Taiwan!",
          },
        ]}
        columnGap="gap-x-6 md:gap-x-8"
        rowGap="gap-y-0 md:gap-y-0"
        summaryCaption="Playing with different versions of MiDAS, a CV model for depth detection, with another model for hand tracking. Its medium model was sensitive enough to detect 3cm differences in depth in our plant setup."
        rows={2}
        // Smaller cells to fit more content
        backgroundColor="bg-gray-50" // Lighter background
      />
      <SystemDesignText
        column="left"
        sectionTitle="Storytelling through form"
        heading=""
        paragraph={
          "With the key innovation of the concept being an organic, quiet UI, the goal of the product form was to be familiar, welcoming, approachable.\n\nThere was also a mechanical demand for the projectors to realign themselves in accordance to the plant's growth."
        }
      />
      <ImageGridSection
        rows={3}
        imageScale={1.0}
        imageGap="gap--10"
        images={[
          {
            src: "/Assets/Sphinx/InitialForm.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-3/4",
            type: "image",
          },
          {
            src: "/Assets/Sphinx/WeaveBasket.webp",
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
      <section id="finalOutcome" className="h-0 w-0 p-0 m-0" />
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
        imageSrc="/Assets/Sphinx/AGrowingInterface.webp"
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
        imageSrc="/Assets/Sphinx/PhotoAlbum.webp"
      />
      <TextImageTwoThirds
        heading="A lightweight, scalable interface language"
        body="A lightweight GPU particle system and a variety of sensors allow for a variety of creative visual elements that feel responsive and gentle for sensitive eyes."
        marginBottom="mb-24"
        imageAspectRatio="aspect-full"
        alt="Placeholder graphic"
        imageSrc="/Assets/Sphinx/VoiceDemo.webm"
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
      <YouMightLike projects={projects} currentHref="/Sphinx" />
    </>
  );
}
