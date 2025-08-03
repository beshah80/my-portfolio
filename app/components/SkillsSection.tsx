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
              className="bg-white/10 backdrop-blur-md border border-indigo-600 rounded-2xl p-6 shadow-lg"
              style={{
                animation: "scaleIn 0.4s cubic-bezier(0.4,0,0.2,1) forwards",
                animationDelay: `${index * 150}ms`,
                opacity: 0,
                transform: "scale(0.95)",
              }}
              onAnimationEnd={(e) => {
                // Fix for opacity and transform after animation
                (e.currentTarget as HTMLDivElement).style.opacity = "1";
                (e.currentTarget as HTMLDivElement).style.transform = "none";
              }}
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
      `}</style>
    </section>
  );
}
