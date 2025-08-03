// /app/components/ContactSection.tsx
export default function ContactSection() {
  const cardClass =
    "flex flex-col justify-center items-center text-center rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 p-6 shadow-lg hover:shadow-sky-500/40 transition-all duration-300 hover:scale-105 min-h-[200px]";

  const titleClass =
    "text-2xl font-bold mb-2 text-indigo-300 group-hover:text-white transition-colors";

  const textClass = "text-indigo-100 text-lg break-words";

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title text-indigo-100">Contact Me</h2>
          <p className="text-lg md:text-xl text-indigo-300">
            Reach out to discuss projects, opportunities, or collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Email */}
          <a href="mailto:beshah2017@gmail.com" className="group">
            <div className={cardClass}>
              <h5 className={titleClass}>Email</h5>
              <p className={textClass}>beshah2017@gmail.com</p>
            </div>
          </a>

          {/* Phone */}
          <a href="tel:+251948100497" className="group">
            <div className={cardClass}>
              <h5 className={titleClass}>Phone</h5>
              <p className={textClass}>+251 948 100 497</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+251948100497"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className={cardClass}>
              <h5 className={titleClass}>WhatsApp</h5>
              <p className={textClass}>Message me on WhatsApp</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/beshah-ashenafi-a21743367"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className={cardClass}>
              <h5 className={titleClass}>LinkedIn</h5>
              <p className={textClass}>beshah-ashenafi</p>
            </div>
          </a>

          {/* Upwork */}
          <a
            href="https://www.upwork.com/freelancers/~beshahashenafi"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className={cardClass}>
              <h5 className={titleClass}>Upwork</h5>
              <p className={textClass}>Beshah Ashenafi</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
