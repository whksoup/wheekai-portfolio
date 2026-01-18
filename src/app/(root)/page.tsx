"use client";
import Image from "next/image";
import BirdSimulation from "@/app/components/MatterBirdSimulationCopy";
import Prototyping from "@/app/components/prototyping";
import Intro from "@/app/components/Intro";
import ImageGridSection from "@/app/components/image-grid-section";

import SystemDesignText from "@/app/components/SystemDesignText";
import { Spacer } from "@/app/components/Spacer";

import FullBleedImage from "@/app/components/FullBleedImage";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectGrid from "@/app/components/ProjectGrid";
import { projects } from "@/app/Data/projects";

import { useSearchParams } from "next/navigation";

export default function Home() {
  const categories: ("spatial" | "product" | "art")[] = [
    "spatial",
    "product",
    "art",
  ];

  const searchParams = useSearchParams();
  const slugsParam = searchParams.get("slugs"); // e.g. "pyt-toys-plant"
  const hasCustomSlugs = slugsParam !== null; // true if user added slugs in URL

  const slugs = slugsParam ? slugsParam.split("-") : [];

  const selectedProjects = slugs.length
    ? projects
        .filter((p) => slugs.includes(p.slug))
        .sort((a, b) => slugs.indexOf(a.slug) - slugs.indexOf(b.slug))
    : projects.slice(0, 3); // fallback
  const categoryHeaders: Record<string, string> = {
    spatial: "Spatial Computing",
    product: "Product Design",
    art: "Speculative / Concept Design",
  };

  const aligns: ("left" | "center" | "right")[] = ["left", "center", "right"];
  return (
    <div className="">
      {/* Hero section */}
      {/* Sketch section */}
      <div className="flex-grow flex items-center justify-center p-4 relative  ">
        <BirdSimulation />

        {/* Overlay image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/Assets/Intro/HKTest.webp" // make sure this path is correct relative to your public folder
            alt="Overlay"
            width={200} // pick an actual width in px
            height={200}
            className="max-w-full max-h-full"
          />
        </div>
      </div>
      <Intro
        subtitle="Introduction 01"
        text={
          "He Kai is a designer who loves crazy and complicated problem spaces, which has led to a passion for technology related projects. \n\nThis is grounded by a practice of hypothesis driven processes and definable metrics, which he believes are in themselves good design outcomes.\n\nHe Kai believes in an elegant universe, where underlying all complex phenomena is a stupid simple set of truths; Design is finding that truth."
        }
        align="left"
      />
      <FullBleedImage
        slideshow={[
          {
            src: "/Assets/Sphinx/HeroShot.webp",
            alt: "First",
            caption: "",
          },
          {
            src: "/Assets/Spider/HeroShot2.webp",
            alt: "Second",
            caption: "",
          },
          {
            src: "/Assets/Intro/DataViz.webm",
            alt: "Third",
            caption: "",
            type: "video",
          },
          {
            src: "/Assets/Intro/AndrewVR.webm",
            alt: "Third",
            caption: "",
            type: "video",
          },
        ]}
        aspectRatio="aspect-[16/5]"
        interval={4000}
        transitionDuration={800}
        src={""}
      />
      <Intro
        marginBottom="mb-16"
        subtitle="Introduction"
        text={
          "He Kai is currently freelancing as an AR simulation/hardware dev at a research center, and working with LEGO designing phygital experiences. He has had previous working experiences at NOK (Next of Kin) Design Studio and The Interactive Materials Lab. "
        }
        align="right"
      />
      {hasCustomSlugs ? (
        <SystemDesignText
          column="right"
          sectionTitle=""
          heading={`He Kai thinks you might like some of the following projects about ${slugs[0]}`}
          paragraph=""
        />
      ) : (
        <SystemDesignText
          column="right"
          sectionTitle=""
          heading="Check out some past projects!"
          paragraph=""
        />
      )}
      {/* Modular top 3 projects with forced align order */}
      {selectedProjects.map((project, i) => (
        <ProjectCard
          key={project.slug}
          {...project}
          align={aligns[i] ?? "left"}
        />
      ))}
      <SystemDesignText
        column="left"
        sectionTitle=""
        heading="Previous work"
        paragraph=""
        marginBottom="mb-0"
      />
      {categories.map((cat) => {
        const gridProjects = projects
          .filter((p) => p.type === cat)
          .map(({ slug, href, image, title, tags, wip, name, year }) => ({
            name,
            slug,
            href,
            image,
            title,
            tags,
            wip,
            year,
          }));

        return (
          <div key={cat} className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center capitalize">
              {categoryHeaders[cat] || cat} {/* fallback to cat if missing */}
            </h2>
            <ProjectGrid projects={gridProjects} />
          </div>
        );
      })}
      <Spacer size="18rem" />
      <FullBleedImage
        slideshow={[
          {
            src: "/Assets/ARTexture/ARTexture_1.webm",
            alt: "First",
            caption: "",
            type: "video",
          },
        ]}
        aspectRatio="aspect-[16/5]"
        interval={4000}
        transitionDuration={800}
        src={""}
      />
      <Spacer size="5rem" />
      <SystemDesignText
        column="left"
        sectionTitle="Here's what He Kai is currently doing with his free time..."
        heading="Exploring Lofi AR as Materials for MR "
        paragraph={
          "In lightweight mixed reality applications, virtual materials often sacrifice fidelity and resolution in exchange for performance;\n\nVirtual objects often lack the realistic shadows, reflections, and perfect alignments necessary for conventionally attractive and believable aesthetics. \n\nWhat if we thought of low fidelity AR as a material, similar to how designers could be asked to design with cardboard or 'ugly' materials?\n\nCurrently, these explorations focus on 'weaving' digital materials with physical surfaces to create 'hybrid' material experiences."
        }
      />
      <ImageGridSection
        rows={2}
        imageScale={1.0}
        imageGap="gap--10"
        marginBottom="mb-20"
        images={[
          {
            src: "/Assets/ARTexture/Texture_1.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-16/9",
            type: "image",
          },
          {
            src: "/Assets/ARTexture/Texture_21.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-16/9",
            type: "image",
          },
          {
            src: "/Assets/ARTexture/Texture_3.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-16/9",
            type: "image",
          },
          {
            src: "/Assets/ARTexture/Texture_5.webp",
            alt: "Beautiful Landscape",
            aspectRatio: "aspect-16/9",
            type: "image",
          },
        ]}
      />
      <SystemDesignText
        column="right"
        sectionTitle=""
        heading="That's all for now!"
        paragraph="Documenting the process on github soon..."
        marginBottom="mb-8"
      />
    </div>
  );
}
