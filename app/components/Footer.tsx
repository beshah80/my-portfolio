import {
  BriefcaseIcon,
  ChatBubbleBottomCenterIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  LinkIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  // Recommended focused footer links (main sections)
  const links = ["Home", "About", "Projects", "Services", "Resume", "Contact"];

  return (
    <footer className="bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-900 text-slate-300 py-16 shadow-inner border-t border-purple-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h5 className="text-2xl font-bold mb-4 text-sky-400 border-b border-sky-400 inline-block pb-1">
              About
            </h5>
            <p className="text-slate-300 leading-relaxed">
              Passionate front-end developer and Information Systems student,
              dedicated to building user-centric web solutions.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer Navigation">
            <h5 className="text-2xl font-bold mb-4 text-sky-400 border-b border-sky-400 inline-block pb-1">
              Quick Links
            </h5>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-300 hover:text-sky-400 transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 rounded"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h5 className="text-2xl font-bold mb-4 text-sky-400 border-b border-sky-400 inline-block pb-1">
              Contact Info
            </h5>
            <ul className="space-y-3 text-slate-300">
              <li>
                <a
                  href="mailto:beshah2017@gmail.com"
                  className="flex items-center gap-2 hover:text-sky-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 rounded"
                >
                  <EnvelopeIcon className="h-5 w-5" />
                  beshah2017@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+251948100497"
                  className="flex items-center gap-2 hover:text-sky-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 rounded"
                >
                  <PhoneIcon className="h-5 w-5" />
                  +251 948 100 497
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+251948100497"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 rounded"
                >
                  <ChatBubbleBottomCenterIcon className="h-5 w-5" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/beshah-ashenafi-a21743367"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-sky-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 rounded"
                >
                  <LinkIcon className="h-5 w-5" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/beshah80"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-slate-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-100 focus:ring-offset-2 rounded"
                >
                  <CodeBracketIcon className="h-5 w-5" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.upwork.com/freelancers/~beshahashenafi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 rounded"
                >
                  <BriefcaseIcon className="h-5 w-5" />
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
