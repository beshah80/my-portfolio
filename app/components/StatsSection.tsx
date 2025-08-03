"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
}

export default function StatsSection() {
  const stats = useMemo(
    () => [
      { value: "2", label: "Years of Experience" },
      { value: "9", label: "Projects Completed" },
      { value: "1000+", label: "Hours of Coding" },
      { value: "3+", label: "Hackathons Participated" },
    ],
    []
  );

  const counters = useRef<(HTMLHeadingElement | null)[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const animateCounters = () => {
      counters.current.forEach((counter, index) => {
        if (!counter) return;

        const targetStr = stats[index].value.replace("+", "");
        const target = parseInt(targetStr, 10) || 0;
        let count = 0;
        const duration = 1500;
        const stepTime = 16;
        const steps = duration / stepTime;
        const increment = target / steps;

        const updateCounter = () => {
          count += increment;
          if (count < target) {
            counter.innerText =
              Math.ceil(count).toString() +
              (stats[index].value.includes("+") ? "+" : "");
            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = stats[index].value;
          }
        };
        updateCounter();
      });
    };

    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById("stats");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [hasAnimated, stats]);

  return (
    <section
      id="stats"
      className="section-padding bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-600 text-white"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white bg-opacity-10 rounded-xl py-10 px-6 shadow-lg flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300"
              role="region"
              aria-label={`${stat.label} statistic`}
            >
              <h3
                ref={(el) => {
                  counters.current[index] = el;
                }}
                className="text-5xl font-extrabold mb-2 tracking-tight drop-shadow-md"
              >
                0
              </h3>
              <p className="text-lg font-medium text-indigo-200">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
