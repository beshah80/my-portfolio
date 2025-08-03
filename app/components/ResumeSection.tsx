"use client";

import Link from "next/link";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="section-padding bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-indigo-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="section-title text-indigo-300 drop-shadow-md">
            Resume
          </h2>
          <p className="text-lg md:text-xl text-indigo-200">
            Download or view my resume for a detailed overview of my skills and
            experience.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center bg-white/10 backdrop-blur-md border border-indigo-600 rounded-2xl p-8 shadow-lg animate-fade-in-scale">
          <Link
            href="/assets/resume.pdf"
            download
            className="btn-primary px-6 py-3 rounded-full font-semibold text-white text-center transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            Download Resume
          </Link>

          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-accent px-6 py-3 rounded-full font-semibold text-center transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            View Resume
          </a>

          <a
            href="https://www.linkedin.com/in/beshah-ashenafi-a21743367"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-accent px-6 py-3 rounded-full font-semibold text-center transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in-scale {
          animation: fadeInScale 0.5s ease forwards;
        }
      `}</style>
    </section>
  );
}
