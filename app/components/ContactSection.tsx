"use client";

import {
  BriefcaseIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  LinkIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const contacts = [
  {
    title: "Email",
    href: "mailto:beshah2017@gmail.com",
    display: "beshah2017@gmail.com",
    Icon: EnvelopeIcon,
    ariaLabel: "Send email to beshah2017@gmail.com",
    tooltip: "Send me an email",
  },
  {
    title: "Phone",
    href: "tel:+251948100497",
    display: "+251 948 100 497",
    Icon: PhoneIcon,
    ariaLabel: "Call phone number +251 948 100 497",
    tooltip: "Call me",
  },
  {
    title: "WhatsApp",
    href: "https://wa.me/+251948100497",
    display: "Chat on WhatsApp",
    Icon: ChatBubbleBottomCenterTextIcon,
    ariaLabel: "Send WhatsApp message",
    tooltip: "WhatsApp chat",
    external: true,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/beshah-ashenafi-a21743367",
    display: "beshah-ashenafi",
    Icon: LinkIcon,
    ariaLabel: "Visit LinkedIn profile",
    tooltip: "LinkedIn profile",
    external: true,
  },
  {
    title: "Upwork",
    href: "https://www.upwork.com/freelancers/~beshahashenafi",
    display: "Beshah Ashenafi",
    Icon: BriefcaseIcon,
    ariaLabel: "Visit Upwork profile",
    tooltip: "Upwork profile",
    external: true,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-tr from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden" // Updated background gradient
      aria-labelledby="contact-title"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute w-24 h-24 bg-purple-400/10 rounded-full animate-float-20 top-1/4 left-1/4 filter blur-xl"></div>
        <div className="absolute w-20 h-20 bg-teal-400/10 rounded-full animate-float-21 bottom-1/3 right-1/4 filter blur-xl"></div>
        <div className="absolute w-28 h-28 bg-cyan-400/10 rounded-full animate-float-22 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            id="contact-title"
            className="text-4xl font-extrabold tracking-wide text-white drop-shadow-lg" // Updated heading color
          >
            Contact Me
          </h2>
          <p className="text-lg md:text-xl text-indigo-200 max-w-xl mx-auto leading-relaxed">
            {" "}
            {/* Adjusted text color */}
            Let’s connect! Whether for projects, collaborations, or just to say
            hi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {contacts.map(
            (
              { title, href, display, Icon, ariaLabel, tooltip, external },
              index
            ) => (
              <a
                key={title}
                href={href}
                aria-label={ariaLabel}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                title={tooltip}
                className="group focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 rounded-3xl transition-transform hover:scale-[1.03] hover:shadow-cyan-500/50 animate-fade-in-up" // Enhanced hover, focus, and added staggered animation
                style={{ animationDelay: `${index * 100}ms` }} // Staggered animation delay
              >
                <div
                  role="region"
                  aria-labelledby={`${title}-label`}
                  className="flex flex-col items-center text-center rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 shadow-md transition-shadow duration-300 group-hover:shadow-cyan-500/70 min-h-[210px]" // Updated border and hover shadow
                >
                  <div className="p-4 mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
                    {" "}
                    {/* Updated icon background gradient */}
                    <Icon className="h-12 w-12 text-white" />
                  </div>
                  <h5
                    id={`${title}-label`}
                    className="text-2xl font-semibold mb-2 text-cyan-300 group-hover:text-white transition-colors" // Updated heading color and hover
                  >
                    {title}
                  </h5>
                  <p className="text-indigo-100 text-lg break-words">
                    {display}
                  </p>
                </div>
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
}
