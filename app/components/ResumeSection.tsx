"use client";

import {
  ArrowDownTrayIcon,
  DocumentTextIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
// Removed unused imports for Image and Link from 'next'

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="section-padding bg-gradient-to-tr from-blue-900 via-purple-900 to-indigo-900 text-indigo-100 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute w-28 h-28 bg-purple-400/10 rounded-full animate-float-17 top-1/4 left-1/5 filter blur-xl"></div>
        <div className="absolute w-24 h-24 bg-cyan-400/10 rounded-full animate-float-18 bottom-1/3 right-1/4 filter blur-xl"></div>
        <div className="absolute w-32 h-32 bg-teal-400/10 rounded-full animate-float-19 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white drop-shadow-md tracking-wide">
            {" "}
            {/* Updated heading color */}
            Resume
          </h2>
          <p className="text-lg md:text-xl text-indigo-200 mt-3">
            {" "}
            {/* Adjusted text color */}
            Download or view my resume for a detailed overview of my skills and
            experience.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 shadow-xl animate-fade-in-scale max-w-4xl mx-auto">
          {" "}
          {/* Added border */}
          <a
            href="/assets/resume.pdf"
            download
            aria-label="Download Resume PDF"
            className="btn-primary-glow flex items-center justify-center gap-3 px-10 py-4" // Applied glowing button style
          >
            <ArrowDownTrayIcon className="h-6 w-6" />
            Download Resume
          </a>
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume PDF in new tab"
            className="btn-outline-glow flex items-center justify-center gap-3 px-10 py-4" // Applied glowing outline button style
          >
            <DocumentTextIcon className="h-6 w-6" />
            View Resume
          </a>
          <a
            href="https://www.linkedin.com/in/beshah-ashenafi-a21743367"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn Profile"
            className="btn-outline-glow flex items-center justify-center gap-3 px-10 py-4" // Applied glowing outline button style
          >
            <LinkIcon className="h-6 w-6" />
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}
