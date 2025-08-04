"use client";

import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";
// Removed unused imports for Image and Link from 'next'

interface Certification {
  title: string;
  provider: string;
  year: string;
  status: "Completed" | "In Progress";
}

export default function CertificationsSection() {
  const certifications: Certification[] = [
    {
      title: "Responsive Web Design",
      provider: "FreeCodeCamp",
      year: "2024",
      status: "Completed",
    },
    {
      title: "Full Stack Web Development",
      provider: "FreeCodeCamp",
      year: "Expected November 2025",
      status: "In Progress",
    },
    {
      title: "Data Structures & Algorithms",
      provider: "FreeCodeCamp",
      year: "Expected November 2025",
      status: "In Progress",
    },
    {
      title: "Front-End Libraries",
      provider: "FreeCodeCamp",
      year: "Expected November 2025",
      status: "In Progress",
    },
  ];

  return (
    <section
      id="certifications"
      className="section-padding bg-gradient-to-tr from-blue-900 via-purple-900 to-indigo-900 text-indigo-100 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute w-20 h-20 bg-purple-400/10 rounded-full animate-float-14 top-1/3 left-1/4 filter blur-xl"></div>
        <div className="absolute w-28 h-28 bg-teal-400/10 rounded-full animate-float-15 bottom-1/4 right-1/4 filter blur-xl"></div>
        <div className="absolute w-16 h-16 bg-cyan-400/10 rounded-full animate-float-16 top-2/3 left-1/2 -translate-x-1/2 filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-extrabold mb-4 text-white drop-shadow-lg">
            {" "}
            {/* Updated heading color */}
            Certifications
          </h2>
          <p className="text-lg md:text-xl text-indigo-200">
            {" "}
            {/* Adjusted text color */}
            Industry-recognized credentials showcasing my commitment to
            continuous learning and excellence in web development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={cert.title}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg
                hover:scale-[1.01] hover:shadow-cyan-500/50 transition-transform duration-300
                flex flex-col animate-fade-in-up" // Ensure animate-fade-in-up is applied
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                {cert.status === "Completed" ? (
                  <CheckCircleIcon className="h-7 w-7 text-green-400" />
                ) : (
                  <ClockIcon className="h-7 w-7 text-yellow-400 animate-pulse" />
                )}
                <h3 className="text-xl font-semibold text-cyan-300">
                  {" "}
                  {/* Updated heading color */}
                  {cert.title}
                </h3>
              </div>
              <p className="text-indigo-200 mb-2">
                {" "}
                {/* Adjusted text color */}
                <span className="font-semibold text-white">Provider:</span>{" "}
                {/* Adjusted text color */}
                {cert.provider}
              </p>
              <p className="text-indigo-200 mb-2">
                {" "}
                {/* Adjusted text color */}
                <span className="font-semibold text-white">Year:</span>{" "}
                {/* Adjusted text color */}
                {cert.year}
              </p>
              <p
                className={`self-start rounded-full px-4 py-1 text-sm font-semibold ${
                  cert.status === "Completed"
                    ? "bg-green-600 text-green-100"
                    : "bg-yellow-600 text-yellow-100 animate-pulse"
                }`}
              >
                {cert.status}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.freecodecamp.org/beshah"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-glow" // Applied the glowing button style
          >
            View FreeCodeCamp Profile
          </a>
        </div>
      </div>
    </section>
  );
}
