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
    if (hasAnimated) return;

    // Easing function for smooth animation (easeOutCubic)
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animateCounters = () => {
      counters.current.forEach((counter, index) => {
        if (!counter) return;

        const rawValue = stats[index].value;
        const isPlus = rawValue.includes("+");
        const targetStr = rawValue.replace("+", "");
        const target = parseInt(targetStr, 10) || 0;

        let startTimestamp: number | null = null;

        const duration = 1500;

        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const elapsed = timestamp - startTimestamp;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easeOutCubic(progress);

          const currentCount = Math.floor(easedProgress * target);

          counter.innerText =
            currentCount.toString() +
            (isPlus && currentCount === target ? "+" : "");

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            // Final fix to ensure exact target value
            counter.innerText = rawValue;
          }
        };

        requestAnimationFrame(step);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Small delay before animation starts
          setTimeout(() => {
            animateCounters();
            setHasAnimated(true);
          }, 200);
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
      className="section-padding bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-indigo-100"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white bg-opacity-10 rounded-xl py-14 sm:py-16 px-8 shadow-lg flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300"
              role="region"
              aria-label={`${stat.label} statistic`}
            >
              <h3
                aria-live="polite"
                ref={(el) => {
                  counters.current[index] = el;
                }}
                className="text-6xl sm:text-7xl font-extrabold mb-3 tracking-tight drop-shadow-md text-indigo-100"
              >
                0
              </h3>
              <p className="text-xl sm:text-2xl font-medium text-indigo-200">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
