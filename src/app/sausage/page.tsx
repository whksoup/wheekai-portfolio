import ImageGridSection from "@/app/components/image-grid-section";
import TextImageTwoThirds from "@/app/components/TextImageTwoThirds";
import Insight from "@/app/components/insight";

import SystemDesignText from "@/app/components/SystemDesignText";
import HeaderText from "@/app/components/LeadHeader";
import TitleCard from "@/app/components/TitleCard";
//import ProcessBrief from "@/app/components/ProcessBrief";


import { projects } from "@/app/Data/projects";
import YouMightLike from "@/app/components/YouMightLike";
import VideoWithFallback from "@/app/components/VideoWithFallback";
export default function Home() {
  return (
    <>
      <HeaderText>Personal resumes for the AI Age V2.3</HeaderText>
      {/* Section 1: Two-column layout */}
      <TitleCard
          title=""
          subtitle="A personal agentic system for my Resumes"
          //tags={["UX RESEARCH", "SPATIAL UI DESIGN", "PROTOTYPING", "THESIS"]}
          description={
            <>
              
              Handwritten resumes take longer to produce and get swatted out by the ATS. 
              <br></br>
              <br></br>
              Can AI resumes have a personal touch? 
              <br></br>Does Mcdonalds have a Michelin star? 
              <br></br>This page shows you how the sausage (my resume) is made.
              <br></br>
              <br></br>
              This is a strict presentation of my agentic system as a product outcome. An article on my personal reflections can be found [here].
            </>
          }
        >
          <div className="rounded-xl aspect-square max-w-[600px] w-full overflow-hidden shadow-inner">
            <VideoWithFallback
              src=""
              poster="/Assets/AIResume/mermaidSmall.webp"
              className="object-contain"
            />
          </div>
        </TitleCard>


      <ImageGridSection
              marginBottom="mb-12"
              images={[
                {
                  src: "/Assets/AIResume/diagram.webp",
                  alt: "Beautiful Landscape",
                  aspectRatio: "aspect-5/4",
                  type: "image",
                },
                {
                  src: "/Assets/AIResume/profileNarrative.webp",
                  alt: "Beautiful Landscape",
                  aspectRatio: "aspect-5/4",
                  type: "image",
                },
                
              ]}
            />
      
      <SystemDesignText
        column="right"
        sectionTitle=""
        heading="Why build a system?"
        paragraph={`As an entry level design graduate with a broad experience record, tailoring resumes is disproportionally more effortful (vs other industries), requiring higher agility for role framing or tone/diction pivots. 
        
        Building a system allows me to position my projects along a strategy depending on the job, get past pesky ATS filters, and preserve the hand-crafted quality of work that I hold myself against.`}
      />
      <TextImageTwoThirds
        marginBottom="mb-16"
        title="Simultaneous.."
        heading="ATS & Role Penetration"
        imageSrc="/Assets/AIResume/strategy.webp"
        body={`A Strategy agent decides a story from a handwritten applicant profile with customized stat parameters.
          
          This is fed to a discriminator which picks and frames relevant items from a master resume while grounding claims in a list of verified project outcomes.`}
        imageAspectRatio="aspect-16/7"
        alt="Placeholder graphic"
      />
      <TextImageTwoThirds
        title=""
        heading="Separation of concerns & Strong Critics"
        imageSrc="/Assets/AIResume/separate.webp"
        body={`Cheaper line AI resume tools are typically single-model systems which suffer from task coupling, creating generic output.
          
          This custom system's critic-reviser loop is subordinate to a 1 page formatter, and sensitive to fabrication.`}
        reverse
        imageAspectRatio="aspect-16/7"
        alt="Placeholder graphic"
        caption=""
      />
      <TextImageTwoThirds
        marginBottom="mb-16"
        title="A concrete pipeline evaluation loop..."
        heading="'How well are the candidate's technical attributes represented relative to a job?'"
        imageSrc="/Assets/AIResume/DAG.webp"
        body={`The pipeline is iterated against a custom evaluation process:
          
          A DAG (Deep Acyclic Graph) rubric grades outputs in terms of role coverage (in relation to the job listing) and truth in relation to the Master-Resume.
          `}
        imageAspectRatio="aspect-16/8"
        alt="Placeholder graphic"
      />
      <TextImageTwoThirds
        title="Efficiency-tested..."
        heading="'How do pipeline changes impact the cost and outcome?'"
        imageSrc="/Assets/AIResume/costs.webp"
        body={`Each time the process runs a job, loop telemetry is evaluated against previous pipeline iterations, to see if changes (e.g, a new agent) significantly impact the outcome.`}
        reverse
        imageAspectRatio="aspect-16/10"
        alt="Placeholder graphic"
        caption=""
      />
      <TextImageTwoThirds
        title="Subjectivity-tested..?"
        heading="'How persuasive is the tone and phrasing of the resume?'"
        imageSrc="/Assets/AIResume/ABTest.webp"
        body={`Spent too much time on developing a score system to little success. 
          
          In the end, an A|B testing of resumes using a set of Control job roles, run by common thinking evaluator models (v4-pro), seemed the most consistent with my subjective opinion of resume strength.`}
        
        imageAspectRatio="aspect-16/11"
        alt="Placeholder graphic"
        caption=""
      />
  

      <SystemDesignText
        marginTop="mb-12"
        column="middle"
        sectionTitle=""
        heading="Reality tested?"
        paragraph={`Beyond subjective speculation, resumes output by this system achieved higher ATS scores and better reviews from popular AI models.
          
          But does it actually work? No idea so far! 
          
          Feel free to reach out to me if you're interested in testing :)
          
          OR
          
          You are an experienced AI engineer with some insights to share about areas of leverage or things to improve the platform with.` }
      />
     







      <Insight
  title="This was fun! Here's what I learned."
  highlightColorClass={[
    "text-purple-500",
    "text-purple-500",
    "text-purple-500",
  ]}
  insights={[
    {
      label: "",
      headline: "Sukiya vs Sukiyabashi Jiro?",
      description:
        "Designing for high quality, 'handcrafted'  outcomes with AI feels more like managing a chain restaurant than being a chef. From chopping the fish (control of writing) to finding a line cook (tuning a writing model), the ethics of an AI output seems less and less disingenuous.",
    },
    {
      label: "",
      headline: "Keeping up with: Opus, Sol, Flash",
      description:
        "This was a first project truly outside of my knowledge domain (AI engineering), and AI is obviously a gigantic help. However, I realized there was true value in knowing when and how to keep up with the AI: personal knowledge 'digestion' cycles which lets me add value to decision points between implementation phases, leading to me proposing more unorthodox solutions, when to change models, when to simplify or modify scopes and criteria etc.",
    },
    {
      label: "",
      headline: "Freedom at last!",
      description:
        "Going from the process of a few hours a night to a few minutes a night for an application, and being happy with the result, gives me so much more time and energy to build other stupid things in my free time. If you're in the same position, I highly recommend trying the same. ",
    },
  ]}
/>


      <section id="finalOutcome" className="h-0 w-0 p-0 m-0" />



      <YouMightLike projects={projects} currentHref="/Quiver" />
    </>
  );
}
