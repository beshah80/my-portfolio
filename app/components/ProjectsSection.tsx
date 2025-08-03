"use client";

import Image from "next/image";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
  deployed: boolean;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "PhoneSell E-commerce Platform",
      description:
        "A full-stack e-commerce platform for mobile phone sales with user authentication and payment integration.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      image: "/assets/images/projects/phonesell.png",
      github: "https://github.com/beshah80/phoneShop",
      live: "",
      deployed: true,
    },
    {
      title: "Adheno Non-Profit Website",
      description:
        "A responsive website for a non-profit with donation and event management systems.",
      tech: ["HTML5", "CSS3", "JavaScript", "PHP"],
      image: "/assets/images/projects/adheno.png",
      github: "https://github.com/beshah80/adheno",
      live: "",
      deployed: true,
    },
    {
      title: "House Rental Management System",
      description:
        "A system for managing house rentals, including tenant and payment tracking.",
      tech: ["System Analysis", "UML", "Documentation"],
      image: "/assets/images/projects/house-rental.png",
      github: "",
      live: "",
      deployed: false,
    },
    {
      title: "Hotel Management System",
      description:
        "A Java-based application for hotel management with booking and billing functionalities.",
      tech: ["Java", "JavaFX"],
      image: "/assets/images/projects/hotel-management.png",
      github: "",
      live: "",
      deployed: false,
    },
    {
      title: "Student Management System",
      description: "A C++ application for managing student records and grades.",
      tech: ["C++"],
      image: "/assets/images/projects/student-management.png",
      github: "",
      live: "",
      deployed: false,
    },
    {
      title: "Blog Post Platform",
      description:
        "A dynamic blog platform with rich text editing and user authentication, built with Next.js.",
      tech: ["Next.js", "Tailwind CSS", "JavaScript"],
      image: "/assets/images/projects/blog-post.png",
      github: "https://github.com/beshah80/blog-post-nextjs",
      live: "",
      deployed: true,
    },
    {
      title: "Tenacare Health Platform",
      description:
        "A health platform with responsive design for patient and provider interactions.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      image: "/assets/images/projects/tenacare.png",
      github: "https://github.com/beshah80/tenacare-health-platform",
      live: "",
      deployed: true,
    },
    {
      title: "Tic-Tac-Toe Game",
      description:
        "A fully functional Tic-Tac-Toe game with a modern UI, built with Next.js.",
      tech: ["Next.js", "Tailwind CSS"],
      image: "/assets/images/projects/tic-tac-toe.png",
      github: "https://github.com/beshah80/tic-tac-toe",
      live: "",
      deployed: true,
    },
    {
      title: "To-Do List App",
      description:
        "A task management app with CRUD functionality, built with React.js.",
      tech: ["React.js", "CSS3"],
      image: "/assets/images/projects/to-do-list.png",
      github: "https://github.com/beshah80/to-do-list",
      live: "",
      deployed: true,
    },
  ];

  const [filter, setFilter] = useState<string>("All");

  const filters: string[] = [
    "All",
    "React.js",
    "Next.js",
    "HTML/CSS/JS",
    "Other",
  ];

  const normalizeTech = (tech: string) =>
    tech.toLowerCase().replace(/[\.\s]/g, "");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => {
          if (filter === "Other") {
            const excluded = [
              "reactjs",
              "nextjs",
              "html5",
              "css3",
              "javascript",
            ];
            return !project.tech.some((t) =>
              excluded.includes(normalizeTech(t))
            );
          }
          if (filter === "HTML/CSS/JS") {
            return project.tech.some((t) =>
              ["html5", "css3", "javascript"].includes(normalizeTech(t))
            );
          }
          return project.tech.some(
            (t) =>
              normalizeTech(t) === filter.toLowerCase().replace(/[\.\s]/g, "")
          );
        });

  return (
    <section
      id="projects"
      className="section-padding bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-indigo-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="section-title text-indigo-300 drop-shadow-md">
            Projects
          </h2>
          <p className="text-lg md:text-xl text-indigo-200">
            Explore my portfolio of innovative web applications and systems
            built with modern technologies.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-5 justify-center mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`
                px-6 py-2 rounded-full font-semibold text-sm sm:text-base
                transition-all duration-300 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400
                cursor-pointer
                ${
                  filter === f
                    ? "bg-indigo-400 text-indigo-900 shadow-lg shadow-indigo-400/70"
                    : "bg-indigo-800 text-indigo-200 border border-indigo-600 hover:bg-indigo-400 hover:text-indigo-900 hover:shadow-md hover:shadow-indigo-400/50"
                }
                transform hover:scale-105
              `}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.title}
              tabIndex={0}
              aria-label={`Project: ${project.title}`}
              className={`
                bg-white/10 backdrop-blur-md border border-indigo-600 rounded-2xl shadow-lg
                overflow-hidden
                hover:shadow-indigo-500/50 hover:-translate-y-2
                transition-transform duration-300
                animate-fade-in-scale
                `}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="relative w-full h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-2xl"
                  priority={false}
                />
              </div>
              <div className="p-6 text-indigo-100">
                <h3 className="text-2xl font-semibold mb-3 text-indigo-300 drop-shadow-md">
                  {project.title}
                </h3>
                <p className="mb-4 text-indigo-200">{project.description}</p>
                <p className="mb-6 font-medium text-indigo-400">
                  <strong>Tech Stack:</strong> {project.tech.join(", ")}
                </p>
                <div className="flex flex-wrap gap-4">
                  {project.deployed ? (
                    <>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary px-5 py-2 rounded-md font-semibold text-white transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                        >
                          View Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline-accent px-5 py-2 rounded-md font-semibold transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                        >
                          Live Demo
                        </a>
                      )}
                    </>
                  ) : (
                    <button
                      className="btn-disabled cursor-not-allowed px-5 py-2 rounded-md font-semibold"
                      disabled
                      aria-disabled="true"
                      title="Project in progress"
                    >
                      In Progress
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Animations */}
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
