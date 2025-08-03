"use client";

import {
  EnvelopeIcon,
  LinkIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-tr from-indigo-900 via-purple-900 to-indigo-900 text-indigo-100"
    >
      <div className="container mx-auto px-6 max-w-7xl">
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
            <Image
              src="/assets/images/about-img.png"
              alt="About Beshah"
              width={450}
              height={450}
              className="rounded-2xl shadow-2xl border-4 border-indigo-600"
              priority
            />
          </div>

          {/* Info Cards */}
          <div className="lg:w-1/2 space-y-10">
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-5">
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
                        className="text-indigo-300 underline hover:text-white"
                      >
                        beshah2017@gmail.com
                      </a>
                    ),
                  },
                  {
                    icon: PhoneIcon,
                    label: "Phone",
                    value: (
                      <a
                        href="tel:+251948100497"
                        className="text-indigo-300 underline hover:text-white"
                      >
                        +251(0)948100497
                      </a>
                    ),
                  },
                  {
                    icon: LinkIcon,
                    label: "LinkedIn",
                    value: (
                      <a
                        href="https://www.linkedin.com/in/beshah-ashenafi-a21743367"
                        className="text-indigo-300 underline hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        beshah-ashenafi
                      </a>
                    ),
                  },
                  {
                    icon: LinkIcon,
                    label: "GitHub",
                    value: (
                      <a
                        href="https://github.com/beshah80"
                        className="text-indigo-300 underline hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        beshah80
                      </a>
                    ),
                  },
                  {
                    icon: LinkIcon,
                    label: "Upwork",
                    value: (
                      <a
                        href="https://www.upwork.com/freelancers/~beshahashenafi"
                        className="text-indigo-300 underline hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Beshah Ashenafi
                      </a>
                    ),
                  },
                ].map(({ icon: Icon, label, value }, index) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon className="h-6 w-6 text-indigo-400 flex-shrink-0" />
                    <span>
                      <strong className="text-white">{label}:</strong> {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interests */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-indigo-300 mb-4">
                Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { emoji: "💻", label: "Coding" },
                  { emoji: "🧩", label: "Problem Solving" },
                  { emoji: "📚", label: "Storytelling" },
                  { emoji: "🎧", label: "Audiobooks" },
                ].map(({ emoji, label }, index) => (
                  <span
                    key={label}
                    className="bg-indigo-800/40 text-white px-4 py-1.5 rounded-full font-medium text-sm select-none animate-scale-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {emoji} {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Resume Button */}
            <div className="text-center animate-fade-in-up delay-500">
              <Link
                href="/assets/resume.pdf"
                className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-purple-500 transition"
                download
              >
                Download Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
