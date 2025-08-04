"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const drawerRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const moreLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Education", href: "#education" },
    { name: "Internships", href: "#internships" },
    { name: "Certifications", href: "#certifications" },
    { name: "Resume", href: "#resume" },
  ];

  // Close drawer on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Set active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSectionId = "";
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 150 && sectionTop >= -150) {
          currentSectionId = section.id;
        }
      });
      setActiveSection(`#${currentSectionId}`);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial active section on page load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const combinedLinks = [...navLinks, ...moreLinks];

  return (
    <nav className="bg-[var(--primary)] text-white fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <Link
            href="#home"
            className="text-2xl md:text-3xl font-extrabold tracking-wide hover:text-[var(--highlight)] transition-colors"
          >
            Beshah Ashenafi
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-semibold transition duration-300 ${
                  activeSection === link.href
                    ? "text-[var(--highlight)] border-b-2 border-[var(--highlight)]"
                    : "hover:text-[var(--highlight)]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative group">
              <button
                className={`text-lg font-semibold transition flex items-center gap-1 focus:outline-none focus:ring-2 rounded ${
                  moreLinks.some((link) => activeSection === link.href)
                    ? "text-[var(--highlight)]"
                    : "hover:text-[var(--highlight)]"
                }`}
              >
                More
                <svg
                  className={`w-4 h-4 text-[var(--highlight)] group-hover:text-amber-400 transition-transform duration-200 ${
                    moreLinks.some((link) => activeSection === link.href)
                      ? "rotate-180"
                      : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute right-0 hidden group-hover:block bg-white text-gray-900 shadow-lg rounded-xl mt-2 min-w-[200px] z-30 ring-1 ring-black ring-opacity-5">
                {moreLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-6 py-3 transition ${
                      activeSection === link.href
                        ? "bg-[var(--highlight)] text-white"
                        : "hover:bg-[var(--highlight)] hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/beshah-ashenafi-a21743367"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap animate-pulse-glow"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-[var(--highlight)] transition"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen
            ? "translate-x-0 opacity-100 scale-100"
            : "translate-x-full opacity-0 scale-95 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          ref={drawerRef}
          className="fixed right-0 top-0 h-full w-72 bg-[var(--primary)] shadow-2xl p-6 flex flex-col"
          tabIndex={-1}
        >
          {/* Header with brand and close button */}
          <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-3">
            <h3 className="text-2xl font-bold">Menu</h3>
            <button
              className="p-2 rounded-md hover:bg-[var(--highlight)] transition"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
            >
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Main Links */}
          <nav className="flex flex-col space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-[var(--highlight)] scrollbar-track-transparent pr-1">
            {combinedLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-white text-xl font-semibold px-3 py-3 rounded-md hover:bg-[var(--highlight)] hover:scale-105 transition-transform duration-200 ${
                  activeSection === link.href
                    ? "bg-[var(--highlight)] scale-105"
                    : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <hr className="border-gray-700 my-4" />

            <a
              href="https://www.linkedin.com/in/beshah-ashenafi-a21743367"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center mt-auto animate-pulse-glow"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </a>
          </nav>
        </div>
      </div>
    </nav>
  );
}
