// /app/components/CertificationsSection.tsx

import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";

interface Certification {
  title: string;
  provider: string;
  year: string;
  status: string;
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
      className="section-padding bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-indigo-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-100">
            Certifications
          </h2>
          <p className="text-lg md:text-xl text-indigo-300">
            Industry-recognized credentials showcasing my commitment to
            continuous learning and excellence in web development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl hover:scale-[1.02] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-4 text-indigo-300">
                {cert.status === "Completed" ? (
                  <CheckCircleIcon className="h-6 w-6 text-green-400" />
                ) : (
                  <ClockIcon className="h-6 w-6 text-yellow-400" />
                )}
                <h3 className="text-xl font-semibold text-indigo-100">
                  {cert.title}
                </h3>
              </div>
              <p className="text-indigo-300">
                <strong className="text-indigo-100">Provider:</strong>{" "}
                {cert.provider}
              </p>
              <p className="text-indigo-300">
                <strong className="text-indigo-100">Status:</strong>{" "}
                {cert.status}
              </p>
              <p className="text-indigo-300">
                <strong className="text-indigo-100">Year:</strong> {cert.year}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 animate-fade-in delay-500">
          <a
            href="https://www.freecodecamp.org/beshah"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-md hover:shadow-lg transition"
          >
            View FreeCodeCamp Profile
          </a>
        </div>
      </div>
    </section>
  );
}
