"use client";

// Removed unused imports for Image and Link from 'next'

export default function EducationSection() {
  const educationData = [
    {
      title: "Bachelor of Information Systems",
      institution: "Addis Ababa University",
      duration: "2023 – Expected June 2026",
      coursework: [
        "Web Development",
        "Database Management",
        "Software Engineering",
        "System Analysis",
        "Object-Oriented Programming",
      ],
    },
    {
      title: "Online Learning",
      institution: "FreeCodeCamp, W3Schools",
      duration: "Ongoing",
      coursework: [
        "Front-End Development (HTML, CSS, JavaScript, React.js)",
        "Responsive Web Design",
      ],
      profileUrl: "https://www.freecodecamp.org/beshah",
      profileLabel: "FreeCodeCamp Profile",
    },
  ];

  return (
    <section
      id="education"
      className="section-padding bg-gradient-to-tr from-blue-900 via-purple-900 to-indigo-900 text-indigo-100 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute w-20 h-20 bg-cyan-400/10 rounded-full animate-float-8 top-1/5 left-1/5 filter blur-xl"></div>
        <div className="absolute w-28 h-28 bg-purple-400/10 rounded-full animate-float-9 bottom-1/5 right-1/5 filter blur-xl"></div>
        <div className="absolute w-16 h-16 bg-teal-400/10 rounded-full animate-float-10 top-3/4 left-1/2 -translate-x-1/2 filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-wide drop-shadow-lg">
            Education
          </h2>
          <p className="text-lg md:text-xl text-indigo-200">
            Academic foundation in Information Systems and self-taught skills
            through online platforms.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-10">
          {educationData.map((edu, index) => (
            <article
              key={edu.title}
              tabIndex={0}
              aria-label={edu.title}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-cyan-500/50 hover:scale-[1.01] transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <header className="flex items-center mb-6 gap-3">
                <svg
                  className="w-8 h-8 text-cyan-400 flex-shrink-0" // Updated icon color
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.84 4.568c0 3.44-2.28 6.84-6 6.84s-6-3.4-6-6.84c0-1.636.557-3.15 1.5-4.406L12 14z"
                  />
                </svg>
                <h3 className="text-3xl font-semibold text-cyan-300">
                  {" "}
                  {/* Updated heading color */}
                  {edu.title}
                </h3>
              </header>
              <p className="mb-2 italic text-indigo-200 font-medium">
                {" "}
                {/* Adjusted text color */}
                {edu.institution}
              </p>
              <p className="mb-6 italic text-indigo-300">{edu.duration}</p>{" "}
              {/* Adjusted text color */}
              <div>
                <h4 className="text-cyan-200 font-semibold mb-2">
                  Coursework:
                </h4>{" "}
                {/* Updated heading color */}
                <ul className="list-disc list-inside space-y-1 text-indigo-100">
                  {edu.coursework.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </div>
              {edu.profileUrl && (
                <p className="mt-6">
                  <strong className="text-white">Profile:</strong>{" "}
                  {/* Stronger label color */}
                  <a
                    href={edu.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-white transition duration-300 relative group" // Enhanced hover effect
                  >
                    {edu.profileLabel}
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
