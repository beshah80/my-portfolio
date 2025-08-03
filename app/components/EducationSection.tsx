export default function EducationSection() {
  return (
    <section
      id="education"
      className="section-padding bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-indigo-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title text-indigo-100">Education</h2>
          <p className="text-lg md:text-xl text-indigo-300">
            Academic foundation in Information Systems and self-taught skills
            through online platforms.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-10">
          {[
            {
              title: "Bachelor of Information Systems",
              institution: "Addis Ababa University",
              duration: "2023 – Expected June 2026",
              coursework:
                "Web Development, Database Management, Software Engineering, System Analysis, Object-Oriented Programming",
            },
            {
              title: "Online Learning",
              institution: "FreeCodeCamp, W3Schools",
              duration: "Ongoing",
              coursework:
                "Front-End Development (HTML, CSS, JavaScript, React.js), Responsive Web Design",
              profileUrl: "https://www.freecodecamp.org/beshah",
              profileLabel: "FreeCodeCamp Profile",
            },
          ].map((edu, index) => (
            <div
              key={edu.title}
              className="card bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-indigo-500/40 transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h4 className="text-2xl font-semibold mb-4 text-indigo-300">
                {edu.title}
              </h4>
              <p className="mb-2">
                <strong className="text-indigo-100">Institution:</strong>{" "}
                {edu.institution}
              </p>
              <p className="mb-2">
                <strong className="text-indigo-100">Duration:</strong>{" "}
                {edu.duration}
              </p>
              <p className="mb-2">
                <strong className="text-indigo-100">Coursework:</strong>{" "}
                {edu.coursework}
              </p>
              {edu.profileUrl && (
                <p>
                  <strong className="text-indigo-100">Profile:</strong>{" "}
                  <a
                    href={edu.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 hover:underline"
                  >
                    {edu.profileLabel}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
