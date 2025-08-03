import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="section-padding min-h-screen scroll-mt-24 bg-gradient-to-tr from-indigo-900 via-purple-900 to-indigo-900 text-indigo-100 flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left max-w-xl mx-auto lg:mx-0 bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 shadow-lg animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 text-indigo-100 drop-shadow-lg">
              Hi, I&apos;m{" "}
              <span className="text-indigo-300 drop-shadow-md">
                Beshah Ashenafi
              </span>
            </h1>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-5 text-indigo-300 drop-shadow-sm">
              Front-End Developer
            </h2>
            <p className="text-lg md:text-xl mb-8 text-indigo-200 leading-relaxed">
              Building responsive, user-centric web experiences with React.js,
              Next.js, Tailwind CSS, and Bootstrap. Passionate about creating
              intuitive interfaces that solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Link
                href="#contact"
                className="btn-primary shadow-lg hover:brightness-110 transition"
              >
                Contact Me
              </Link>
              <Link
                href="#projects"
                className="btn-outline text-indigo-300 hover:text-indigo-200 transition"
              >
                View Projects
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 animate-scale-in delay-700 flex justify-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-full p-4 shadow-2xl border-4 border-indigo-300">
              <Image
                src="/assets/images/hero-img.png"
                alt="Beshah Ashenafi"
                width={400}
                height={400}
                className="rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
