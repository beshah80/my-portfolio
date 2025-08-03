import {
  BriefcaseIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

export default function InternshipsSection() {
  return (
    <section
      id="internships"
      className="section-padding bg-gradient-to-tr from-indigo-900 via-purple-900 to-indigo-900 text-indigo-100"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="section-title text-indigo-300 tracking-wide uppercase drop-shadow-lg">
            Internships
          </h2>
          <p className="text-lg md:text-xl text-indigo-200 italic leading-relaxed">
            Hands-on experience in front-end development and collaborative
            projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
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
          ].map(({ title, duration, tasks, website }) => (
            <article
              key={title}
              tabIndex={0}
              aria-label={title}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-default flex flex-col"
            >
              <div className="flex items-center mb-6 space-x-4">
                <BriefcaseIcon className="h-10 w-10 text-indigo-300 flex-shrink-0" />
                <h3 className="text-2xl font-semibold text-indigo-100 drop-shadow-md">
                  {title}
                </h3>
              </div>

              <p className="flex items-center gap-2 mb-5 font-semibold text-indigo-300">
                <CalendarIcon className="h-6 w-6" />
                Duration: {duration}
              </p>

              <p className="flex items-center gap-2 font-semibold mb-3 text-indigo-300">
                <ClipboardDocumentListIcon className="h-6 w-6" />
                Tasks:
              </p>
              <ul className="list-disc pl-7 space-y-3 text-indigo-200 flex-grow">
                {tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>

              {website && (
                <p className="mt-6 font-semibold text-indigo-300">
                  Website:{" "}
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 hover:underline"
                  >
                    {website.replace(/^https?:\/\//, "")}
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
