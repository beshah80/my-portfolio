"use client";

import {
  BriefcaseIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
// Removed unused imports for Image and Link from 'next'

export default function InternshipsSection() {
  const internshipsData = [
    {
      title: "Codveda - Front-End Development",
      duration: "2 months (assumed, pending confirmation)",
      tasks: [
        "Developed a responsive landing page using HTML, CSS, and JavaScript with Flexbox and media queries.",
        "Built a Single Page Application with React Router for smooth navigation.",
        "Created a customized UI with Tailwind CSS, ensuring responsive design and accessibility.",
      ],
    },
    {
      title: "Efuye Gela - Front-End Development",
      duration: "2 months",
      tasks: [
        "Contributed to blog post projects using React.js and Next.js in a team setting.",
        "Participated in hackathons, building responsive web interfaces.",
        "Collaborated with developers to enhance UI/UX for client projects.",
      ],
      website: "https://efuyegela.com",
    },
  ];

  return (
    <section
      id="internships"
      className="section-padding bg-gradient-to-tr from-blue-900 via-purple-900 to-indigo-900 text-indigo-100 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute w-24 h-24 bg-teal-400/10 rounded-full animate-float-11 top-1/4 right-1/4 filter blur-xl"></div>
        <div className="absolute w-20 h-20 bg-cyan-400/10 rounded-full animate-float-12 bottom-1/3 left-1/3 filter blur-xl"></div>
        <div className="absolute w-32 h-32 bg-purple-400/10 rounded-full animate-float-13 top-1/2 left-1/4 filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-wide drop-shadow-lg">
            Internships
          </h2>
          <p className="text-lg md:text-xl text-indigo-200 italic leading-relaxed">
            Hands-on experience in front-end development and collaborative
            projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {internshipsData.map(({ title, duration, tasks, website }, index) => (
            <article
              key={title}
              tabIndex={0}
              aria-label={title}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-cyan-500/50 hover:scale-[1.01] transition-all duration-300 flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }} // Staggered animation
            >
              <div className="flex items-center mb-6 space-x-4">
                <BriefcaseIcon className="h-10 w-10 text-cyan-400 flex-shrink-0" />{" "}
                {/* Updated icon color */}
                <h3 className="text-2xl font-semibold text-cyan-300 drop-shadow-md">
                  {" "}
                  {/* Updated heading color */}
                  {title}
                </h3>
              </div>

              <p className="flex items-center gap-2 mb-5 font-semibold text-indigo-200">
                {" "}
                {/* Adjusted text color */}
                <CalendarIcon className="h-6 w-6 text-cyan-400" />{" "}
                {/* Updated icon color */}
                Duration: {duration}
              </p>

              <p className="flex items-center gap-2 font-semibold mb-3 text-indigo-200">
                {" "}
                {/* Adjusted text color */}
                <ClipboardDocumentListIcon className="h-6 w-6 text-cyan-400" />{" "}
                {/* Updated icon color */}
                Tasks:
              </p>
              <ul className="list-disc pl-7 space-y-3 text-indigo-100 flex-grow">
                {tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>

              {website && (
                <p className="mt-6 font-semibold text-indigo-200">
                  {" "}
                  {/* Adjusted text color */}
                  Website:{" "}
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-white transition duration-300 relative group" // Enhanced hover effect
                  >
                    {website.replace(/^https?:\/\//, "")}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
