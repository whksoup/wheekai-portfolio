"use client";
import React, { useState } from "react";

export default function PortfolioResume() {
  const [expandedSections, setExpandedSections] = useState({
    skills: true,
    highlights: true,
    experience: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto p-6 md:p-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  Wong He Kai
                </h1>
                <h2 className="text-2xl text-blue-600 font-semibold mb-4">
                  Interaction Designer | Product Designer
                </h2>
                <div className="flex flex-wrap gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📍</span>
                    <span>Singapore</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📞</span>
                    <span>9710 4682</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📧</span>
                    <a
                      href="mailto:whksoup@gmail.com"
                      className="hover:text-blue-600 transition-colors"
                    >
                      whksoup@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">💼</span>
                    <a
                      href="https://www.linkedin.com/in/wong-he-kai-8a35a6210/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Professional Summary
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Fresh NUS Industrial Design Graduate with previous work experience
            in interactions and experience design, and physical prototyping /
            deployment. Passionate about designing products that promote
            improvisation, playfulness, and building tools that evolve user
            behavior. Comfortable with a variety of workflows, moving between
            drawing, handmaking, AI, CAD-ing, coding, and spatial computing.
            Prioritizes fun and quick iteration cycles when building!
          </p>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <button
            onClick={() => toggleSection("skills")}
            className="w-full flex items-center justify-between text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors"
          >
            <span>Skills</span>
            <span className="text-2xl">
              {expandedSections.skills ? "▲" : "▼"}
            </span>
          </button>

          {expandedSections.skills && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
                <h4 className="font-semibold text-blue-900 mb-3">Design</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Design Sketching</li>
                  <li>• Adobe Suite</li>
                  <li>• Concept Development</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
                <h4 className="font-semibold text-purple-900 mb-3">
                  Interaction
                </h4>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li>• Prototyping (JS, C#, Python)</li>
                  <li>• HLSL, TD, Swift</li>
                  <li>• Unity, UE4/5, Arduino</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
                <h4 className="font-semibold text-green-900 mb-3">Physical</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Physical Prototyping</li>
                  <li>• Product Storytelling</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4">
                <h4 className="font-semibold text-orange-900 mb-3">
                  Modelling
                </h4>
                <ul className="text-sm text-orange-800 space-y-1">
                  <li>• Rhino, Blender</li>
                  <li>• Grasshopper</li>
                  <li>• Generative Design</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Recent Highlights */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <button
            onClick={() => toggleSection("highlights")}
            className="w-full flex items-center justify-between text-2xl font-bold text-gray-900 mb-6 hover:text-blue-600 transition-colors"
          >
            <span>Recent Highlights</span>
            <span className="text-2xl">
              {expandedSections.highlights ? "▲" : "▼"}
            </span>
          </button>

          {expandedSections.highlights && (
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6 py-2">
                <h4 className="font-bold text-lg text-gray-900 mb-2">
                  Undergrad Thesis
                </h4>
                <p className="text-gray-700">
                  Developed physical tools and alternative Interactions for
                  Virtual Reality sculpting! Exhibiting in upcoming Singapore
                  Design Week.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6 py-2">
                <h4 className="font-bold text-lg text-gray-900 mb-2">
                  Apple&apos;s First Spatial Computing Hackathon, Best Design
                </h4>
                <p className="text-gray-700">
                  Led a 4 man team to win Best Design at said Hackathon. Learned
                  Swift over 3 days, building an app exploring interactive (and
                  legal) possibilities of spatial gaze tracking.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 py-2">
                <h4 className="font-bold text-lg text-gray-900 mb-2">
                  No To Vaping: Game Installation
                </h4>
                <p className="text-gray-700">
                  Designed and coded a &apos;vending machine&apos; game
                  exhibition at Serangoon MRT in collaboration with HPB as a
                  freelancer, achieving dispense limit (prize on win) & high
                  user engagement during its run.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Professional Experience */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <button
            onClick={() => toggleSection("experience")}
            className="w-full flex items-center justify-between text-2xl font-bold text-gray-900 mb-6 hover:text-blue-600 transition-colors"
          >
            <span>Professional Experience</span>
            <span className="text-2xl">
              {expandedSections.experience ? "▲" : "▼"}
            </span>
          </button>

          {expandedSections.experience && (
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <div className="ml-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900">
                      Designer
                    </h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      Jun 2025 - Present
                    </span>
                  </div>
                  <p className="text-blue-600 font-semibold mb-3">
                    SERIAL CO_, Freelance
                  </p>
                  <p className="text-gray-700 mb-3">
                    General Designer at a Creative Tech Studio for clients: This
                    involves physical prototyping, hardware/electronics,
                    software (Javascript, Python, C# Apps), and client
                    communication with quick concept&gt;deployment phases
                    (2-month cycles).
                  </p>
                  <p className="text-gray-700">
                    Currently, 2 projects have been deployed to client
                    satisfaction.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
                <div className="ml-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900">
                      AR Simulations Dev
                    </h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      Jun 2025 - Present
                    </span>
                  </div>
                  <p className="text-blue-600 font-semibold mb-3">
                    NUS Keio Cute Center
                  </p>
                  <p className="text-gray-700 mb-3">
                    Software/Hardware developer for government VR sim. I built
                    vertical-slice proof of concepts for tools for military
                    simulation, producing mechanisms that simulate haptics,
                    interactions, and feel of said tools and integrating them
                    into a chassis which also had to be designed.
                  </p>
                  <p className="text-gray-700">
                    This involved proposing quantifiable metrics with
                    stakeholders, then prototyping mechanical contraptions,
                    sensor systems within different headset architectures and
                    measuring them against competing alternatives.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
                <div className="ml-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900">
                      Creative Technologist Intern
                    </h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      Aug 2024 - Oct 2024
                    </span>
                  </div>
                  <p className="text-blue-600 font-semibold mb-3">
                    Next of Kin Creatives
                  </p>
                  <p className="text-gray-700 mb-3">
                    Was part of a 4 man team conceptualizing, prototyping and
                    deploying Horizon Hues, a mixed media data visualization
                    sculpture for KPMG. Sensor prototyping, design sketching,
                    concept storytelling, user surveys, developing
                    survey&gt;data&gt;touchdesigner dataviz pipeline in backend,
                    rendering.
                  </p>
                  <p className="text-gray-700">
                    Designed 1 of the 2 main display canvases permanently on
                    display at KPMG, which captures the census of travel habits
                    of KPMG staff in relation to global travel pollution
                    metrics.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                <div className="ml-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900">
                      Interactions Design Intern
                    </h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      Jun 2023 - Sep 2023
                    </span>
                  </div>
                  <p className="text-blue-600 font-semibold mb-3">
                    Interactive Materials Lab
                  </p>
                  <p className="text-gray-700 mb-3">
                    As part of a 2 man initial pilot team prototyping new media
                    experiences involving retroreflection-AR, this involved
                    heavy user testing of fabric based multiplanar screens,
                    exploring perceptual phenomena surrounding
                    Vergence-Accommodation in stereoscopic projection.
                  </p>
                  <p className="text-gray-700">
                    I conceptualized and constructed physical mid-fidelity
                    prototypes visualizing several potential directions for an
                    experiential project that aimed at GamesCom 2024.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
