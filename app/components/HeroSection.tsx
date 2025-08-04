"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const titles = [
    "Crafting Modern User Interfaces",
    "Building Responsive Web Experiences",
    "A React.js & Next.js Specialist",
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 80;
    const deleteSpeed = 50;
    const delayBetweenTitles = 1500;

    let typingTimer: NodeJS.Timeout;

    const handleTyping = () => {
      const currentTitle = titles[titleIndex];

      if (!isDeleting) {
        if (charIndex < currentTitle.length) {
          setTypedText((prev) => prev + currentTitle.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
          typingTimer = setTimeout(handleTyping, typeSpeed);
        } else {
          typingTimer = setTimeout(
            () => setIsDeleting(true),
            delayBetweenTitles
          );
        }
      } else {
        if (charIndex > 0) {
          setTypedText((prev) => prev.substring(0, prev.length - 1));
          setCharIndex((prev) => prev - 1);
          typingTimer = setTimeout(handleTyping, deleteSpeed);
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
          typingTimer = setTimeout(handleTyping, typeSpeed);
        }
      }
    };

    typingTimer = setTimeout(handleTyping, typeSpeed);

    return () => clearTimeout(typingTimer);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section
      id="home"
      // Removed scroll-mt-24 and added pt-24 to control top padding directly
      className="min-h-screen pt-24 bg-gradient-to-tr from-blue-900 via-purple-900 to-indigo-900 text-indigo-100 flex items-center relative overflow-hidden"
    >
      {/* Background floating blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute w-20 h-20 bg-cyan-400/10 rounded-full top-1/4 left-1/4 blur-xl animate-[float1_6s_ease-in-out_infinite]"></div>
        <div className="absolute w-32 h-32 bg-purple-400/10 rounded-full bottom-1/3 right-1/4 blur-xl animate-[float2_8s_ease-in-out_infinite]"></div>
        <div className="absolute w-16 h-16 bg-teal-400/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-xl animate-[float3_7s_ease-in-out_infinite]"></div>
        <div className="absolute w-24 h-24 bg-indigo-400/10 rounded-full top-1/3 right-1/3 blur-xl animate-[float4_5s_ease-in-out_infinite]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text block */}
          <div className="lg:w-1/2 text-center lg:text-left max-w-xl mx-auto lg:mx-0 bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-lg border border-white/20 animate-[fadeInUp_1s_ease-out_both]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 text-indigo-100 drop-shadow-lg">
              Hi, I&apos;m{" "}
              <span className="text-cyan-400 drop-shadow-md">
                Beshah Ashenafi
              </span>
            </h1>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-5 text-cyan-300 drop-shadow-sm min-h-[48px]">
              {typedText}
              <span className="inline-block w-1 h-8 bg-cyan-300 ml-1 animate-[blink_1s_steps(2)_infinite]"></span>
            </h2>
            <p className="text-lg md:text-xl mb-8 text-indigo-200 leading-relaxed">
              Building responsive, user-centric web experiences with React.js,
              Next.js, Tailwind CSS, and Bootstrap. Passionate about creating
              intuitive interfaces that solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a
                href="#contact"
                aria-label="Contact Beshah Ashenafi"
                className="px-6 py-3 text-white font-semibold bg-cyan-500 rounded-xl hover:bg-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                aria-label="View Projects by Beshah Ashenafi"
                className="px-6 py-3 text-cyan-400 font-semibold border border-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Image block */}
          <div className="lg:w-1/2 flex justify-center animate-[scaleIn_0.8s_ease-out_both]">
            <div className="bg-white/10 backdrop-blur-md rounded-full p-6 shadow-2xl border-4 border-cyan-400">
              <img
                src="/assets/images/hero-img.png"
                alt="Portrait of Beshah Ashenafi – Front-End Developer"
                width={450}
                height={450}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Inline animations */}
      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(25px);
          }
        }

        @keyframes float3 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes float4 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(15px);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0px);
          }
        }

        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
