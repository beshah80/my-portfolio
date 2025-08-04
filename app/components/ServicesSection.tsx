// /app/components/ServicesSection.tsx
interface Service {
  title: string;
  description: string;
  example: string;
}

export default function ServicesSection() {
  const services: Service[] = [
    {
      title: "Front-End Development",
      description:
        "Creating beautiful, responsive interfaces using React.js, Next.js, Tailwind CSS, and Bootstrap.",
      example:
        "Built a sleek landing page for Codveda, optimized for all screen sizes.",
    },
    {
      title: "Copywriting",
      description:
        "Writing clear, engaging website content and technical documentation.",
      example:
        "Authored compelling copy for Adheno non-profit website to boost engagement.",
    },
    {
      title: "Translation",
      description:
        "Accurate English-Amharic translations for both technical and general content.",
      example: "Translated documentation ensuring clarity for local clients.",
    },
    {
      title: "Digital Communication Services",
      description:
        "Offering Resume Review, Resume Writing, Typing, Information Security basics, and UX Writing to help you communicate and present better.",
      example:
        "Helped peers secure internships by reviewing resumes and typing technical reports with clarity and accuracy.",
    },
  ];

  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-tr from-indigo-900 via-purple-900 to-indigo-900 text-indigo-100"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-wide drop-shadow-lg">
            What I Do
          </h2>
          <p className="text-indigo-200 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Custom solutions tailored to your project’s needs with passion and
            precision.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, example }, index) => (
            <article
              key={title}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-default flex flex-col border border-indigo-700 focus-within:ring-4 focus-within:ring-purple-500"
              tabIndex={0}
              aria-label={title}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-md">
                  {title.charAt(0)}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {title}
                </h3>
              </div>
              <p className="text-indigo-100 flex-grow text-base">
                {description}
              </p>
              <p className="mt-6 italic text-indigo-300 text-sm border-t border-indigo-700 pt-4">
                <strong>Example:</strong> {example}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <a
            href="https://www.linkedin.com/in/beshah-ashenafi-a21743367"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-purple-500 transition"
          >
            Hire Me for Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
