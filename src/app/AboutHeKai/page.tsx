// pages/about.tsx
import Head from "next/head";
import SystemDesignText from "../components/SystemDesignText";
import Image from "next/image";
export default function About() {
  return (
    <>
      <SystemDesignText
        column="Center"
        sectionTitle=""
        heading="Hi there! "
        paragraph=""
        marginBottom="mb-8"
      />
      <div className="mx-auto relative mb-6 w-120 h-120 sm:w-56 sm:h-56 md:w-88 md:h-88">
        <Image
          src="/Assets/Intro/ProfileShot.webp" // replace with your image path
          alt="Your Name"
          fill
          className="rounded-full object-cover"
        />
      </div>
      <Head>
        <title>About Me | He Kai</title>
        <meta
          name="description"
          content="Learn more about Your Name, a designer and developer creating immersive experiences."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">About Me (23 Aug 2025)</h1>
          <p className="text-2xl font-medium text-gray-700 text-left">
            Hi! I&apos;m <span className="font-semibold">He Kai</span>, a fresh
            Industrial Design graduate currently freelancing as an AR/Hardware
            Dev for medical/military simulation, and as a designer for a
            Creative Tech Studio. I&apos;ve worked in commercial projects for
            companies, big and small, as well as artists and schizophrenics.
            <br />
            <br />
            In 2020, I was studying Fine Art in the UK, but I learned that
            almost everything in 2-Dimensional Graphic Composition has been
            solved!
            <br />
            <br /> 4 years later and now I CAD, I code, and compute (spatially).
            I like to think of my work now as exploring new compositions in
            space, in interactions, and in motion.
            <br />
            <br />
            My work deals with technology, because I love the constant change it
            demands of me (and I believe I learn quite fast!). My familiarity
            with product design, interaction design and programming often lets
            me be the bridge between developers and designers, and this helps
            especially in scoping an ambitious but achievable vision in my
            projects.
            <br />
            <br />
            Currently obsessed with object tracking in augmented reality, and
            building a bird house. I&apos;m also an amateur boxer!
          </p>
        </section>

        {/* Two-column layout */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Column: Experience */}
          <div>
            <h2 className="italic font-semibold mb-4">Experience</h2>
            <ul className="space-y-6 text-gray-800">
              <li>
                <p className="font-medium">AR/Hardware Designer</p>
                <p className="text-gray-400">— Keio CUTE Center (Freelance)</p>
              </li>
              <li>
                <p className="font-medium">Designer</p>
                <p className="text-gray-400">— SERIAL CO (Freelance)</p>
              </li>
              <li>
                <p className="font-medium">Creative Tech Intern</p>
                <p className="text-gray-400">— Next Of Kin Creatives</p>
              </li>
              <li>
                <p className="font-medium">Design Intern</p>
                <p className="text-gray-400">— Interactive Materials Lab</p>
              </li>
              <li>
                <p className="font-medium">Freelance Graphic Work</p>
                <p className="text-gray-400">— </p>
              </li>
            </ul>
          </div>

          {/* Right Column: Skillset */}
          <div>
            <h2 className="italic font-semibold mb-4">Skillset</h2>
            <ul className="space-y-2 text-gray-800">
              <li>Design (Product, Experience, Interaction)</li>
              <li>3D Modelling (Rhino, Grasshopper, Blender, ZBrush, Clay)</li>
              <li>Physical Prototyping</li>
              <li>User Research</li>
              <li>High Fidelity Prototyping</li>
              <li>Front-End Development(Javascript, HLSL, Swift)</li>
              <li>Lil bit of Back-End Development (C#, Python)</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="italic font-semibold mb-4">Education</h2>
            <ul className="space-y-6 text-gray-800">
              <li>
                <p>Bachelor of Arts (Hons) Industrial Design</p>
                <p className="text-gray-400">
                  — National University of Singapore
                </p>
              </li>
              <li>
                <p>Bachelor of Fine Arts (Hons) </p>
                <p className="text-gray-400">
                  — Goldsmiths, University of London (1 year)
                </p>
              </li>
              <li>
                <p>International Bacchalaureate </p>
                <p className="text-gray-400">
                  — Anglo Chinese School (Independent)
                </p>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
