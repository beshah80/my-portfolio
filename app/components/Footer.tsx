export default function Footer() {
  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Services",
    "Education",
    "Internships",
    "Certifications",
    "Resume",
    "Contact",
  ];

  return (
    <footer className="bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-900 text-slate-300 py-12 shadow-inner border-t border-purple-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h5 className="text-2xl font-bold mb-4 text-sky-400 border-b border-sky-400 inline-block pb-1">
              About
            </h5>
            <p className="text-slate-300 leading-relaxed">
              A passionate front-end developer and Information Systems student,
              dedicated to building user-centric web solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-2xl font-bold mb-4 text-sky-400 border-b border-sky-400 inline-block pb-1">
              Quick Links
            </h5>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-300 hover:text-sky-400 transition-colors duration-300 font-medium"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-2xl font-bold mb-4 text-sky-400 border-b border-sky-400 inline-block pb-1">
              Contact Info
            </h5>
            <ul className="space-y-3 text-slate-300">
              <li>
                <a
                  href="mailto:beshah2017@gmail.com"
                  className="hover:text-sky-400 transition-colors duration-300"
                >
                  Email: beshah2017@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+251948100497"
                  className="hover:text-sky-400 transition-colors duration-300"
                >
                  Phone: +251(0)948100497
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+251948100497"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/beshah-ashenafi-a21743367"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/beshah80"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-100 transition-colors duration-300"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.upwork.com/freelancers/~beshahashenafi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors duration-300"
                >
                  Upwork
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12 text-slate-400 text-sm select-none">
          <p>
            &copy; <span>{new Date().getFullYear()}</span> Beshah Ashenafi. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
