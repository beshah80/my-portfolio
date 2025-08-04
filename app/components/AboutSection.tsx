"use client";

import {
  EnvelopeIcon,
  LinkIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
// Removed import Image from "next/image"; // Replaced with standard <img> tag
// Removed import Link from "next/link"; // Replaced with standard <a> tag

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-tr from-blue-900 via-purple-900 to-indigo-900 text-indigo-100 relative overflow-hidden"
    >
      {/* Animated Background Elements (similar to Hero, but perhaps different patterns/colors) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute w-24 h-24 bg-purple-400/10 rounded-full animate-float-5 top-1/4 left-1/4 filter blur-xl"></div>
        <div className="absolute w-28 h-28 bg-teal-400/10 rounded-full animate-float-6 bottom-1/4 right-1/3 filter blur-xl"></div>
        <div className="absolute w-20 h-20 bg-cyan-400/10 rounded-full animate-float-7 top-1/2 left-1/3 filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-wide drop-shadow-lg">
            About Me
          </h2>
          <p className="text-indigo-200 text-lg md:text-xl leading-relaxed">
            I’m a fourth-year Information Systems student at Addis Ababa
            University (graduating June 2026) and a passionate front-end
            developer. I specialize in crafting responsive, user-friendly web
            interfaces using React.js, Next.js, Tailwind CSS, and Bootstrap.
            With strong teamwork, communication, and problem-solving skills, I
            aim to build impactful digital solutions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2 flex justify-center animate-scale-in">
            <img
              src="/assets/images/about-img.png"
              alt="Portrait of Beshah Ashenafi"
              width={450}
              height={450}
              className="rounded-2xl shadow-2xl border-4 border-cyan-400 object-cover" // Updated border color
              // 'priority' is a Next.js specific prop and is removed for standard <img> tag
            />
          </div>

          {/* Info Cards */}
          <div className="lg:w-1/2 space-y-10">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-5 border border-white/20">
              {" "}
              {/* Added border */}
              <ul className="space-y-4 text-base">
                {[
                  { icon: UserIcon, label: "Name", value: "Beshah Ashenafi" },
                  {
                    icon: MapPinIcon,
                    label: "Address",
                    value: "Addis Ababa, Ethiopia",
                  },
                  {
                    icon: EnvelopeIcon,
                    label: "Email",
                    value: (
                      <a
                        href="mailto:beshah2017@gmail.com"
                        title="Send Email"
                        className="text-cyan-300 hover:text-white transition duration-300 relative group" // Enhanced hover effect
                      >
                        beshah2017@gmail.com
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    ),
                  },
                  {
                    icon: PhoneIcon,
                    label: "Phone",
                    value: (
                      <a
                        href="tel:+251948100497"
                        title="Call Phone"
                        className="text-cyan-300 hover:text-white transition duration-300 relative group" // Enhanced hover effect
                      >
                        +251(0)948100497
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    ),
                  },
                  {
                    icon: LinkIcon,
                    label: "LinkedIn",
                    value: (
                      <a
                        href="https://www.linkedin.com/in/beshah-ashenafi-a21743367"
                        title="LinkedIn Profile"
                        className="text-cyan-300 hover:text-white transition duration-300 relative group" // Enhanced hover effect
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        beshah-ashenafi
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    ),
                  },
                  {
                    icon: LinkIcon,
                    label: "GitHub",
                    value: (
                      <a
                        href="https://github.com/beshah80"
                        title="GitHub Profile"
                        className="text-cyan-300 hover:text-white transition duration-300 relative group" // Enhanced hover effect
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        beshah80
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    ),
                  },
                  {
                    icon: LinkIcon,
                    label: "Upwork",
                    value: (
                      <a
                        href="https://www.upwork.com/freelancers/~beshahashenafi"
                        title="Upwork Freelancer"
                        className="text-cyan-300 hover:text-white transition duration-300 relative group" // Enhanced hover effect
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Beshah Ashenafi
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    ),
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 animate-fade-in-up hover:scale-[1.02] transition-transform duration-200" // Added hover scale
                  >
                    <Icon className="h-6 w-6 text-cyan-400 flex-shrink-0" />{" "}
                    {/* Updated icon color */}
                    <span>
                      <strong className="text-white">{label}:</strong> {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interests */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
              {" "}
              {/* Added border */}
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                {" "}
                {/* Updated heading color */}
                Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { emoji: "💻", label: "Coding" },
                  { emoji: "🧩", label: "Problem Solving" },
                  { emoji: "📚", label: "Storytelling" },
                  { emoji: "🎧", label: "Audiobooks" },
                ].map(({ emoji, label }) => (
                  <span
                    key={label}
                    className="bg-indigo-800/40 text-white px-4 py-1.5 rounded-full font-medium text-sm select-none animate-scale-in hover:bg-cyan-600/50 hover:scale-105 transition-all duration-200" // Enhanced hover effect
                  >
                    {emoji} {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Resume Button */}
            <div className="text-center animate-fade-in-up">
              <a
                href="/assets/resume.pdf" // Ensure this path is correct
                className="btn-primary-glow" // Applied the glowing button style
                download
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
