"use client";

export default function SkillsSection() {
  const frontEndSkills: string[] = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
  ];
  const otherSkills: string[] = ["C++", "C#", "Java", "PHP", "MySQL", "SQL"];
  const computerScience: string[] = [
    "Data Structures",
    "Algorithms",
    "System Analysis",
    "Operating Systems",
  ];
  const softSkills: string[] = [
    "Teamwork",
    "Communication",
    "Problem Solving",
    "Time Management",
  ];

  return (
    <section
      id="skills"
      className="section-padding bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="section-title text-indigo-100">Skills</h2>
          <p className="max-w-3xl mx-auto text-indigo-100 text-lg md:text-xl mt-4 leading-relaxed">
            Specialized in front-end development with React.js, Next.js, and
            modern CSS frameworks, complemented by a foundation in programming
            and computer science.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Front-End Development",
              skills: frontEndSkills,
              note: null,
            },
            {
              title: "Programming Languages",
              skills: otherSkills,
              note: "(Basic)",
            },
            { title: "Computer Science", skills: computerScience, note: null },
            { title: "Soft Skills", skills: softSkills, note: null },
          ].map(({ title, skills, note }, index) => (
            <div
              key={title}
              className={`bg-white/10 backdrop-blur-md border border-indigo-600 rounded-2xl p-6 shadow-lg opacity-0 scale-95 animate-scaleIn animation-delay-${
                index * 150
              }`}
              style={{ animationFillMode: "forwards" }}
            >
              <h4 className="text-2xl font-semibold mb-6 text-indigo-300 border-b border-indigo-400 pb-3">
                {title}
              </h4>
              <ul className="space-y-4 text-indigo-100">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="flex-shrink-0 bg-indigo-500 text-indigo-900 w-7 h-7 flex items-center justify-center rounded-full mr-4 shadow-md select-none">
                      ✓
                    </span>
                    <span>
                      {skill}{" "}
                      {note && (
                        <span className="text-indigo-300 font-semibold">
                          {note}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scaleIn {
          animation-name: scaleIn;
          animation-duration: 0.4s;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          animation-fill-mode: forwards;
        }
        .animation-delay-0 {
          animation-delay: 0ms;
        }
        .animation-delay-150 {
          animation-delay: 150ms;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-450 {
          animation-delay: 450ms;
        }
      `}</style>
    </section>
  );
}
