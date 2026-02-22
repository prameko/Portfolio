"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const skills = [
  { name: "React JS", value: 50 },
  { name: "HTML", value: 80 },
  { name: "Tailwind CSS", value: 90 },
  { name: "Next JS", value: 100 },
  { name: "Docker", value: 70 },
  { name: "Javascript", value: 90 },
];

const icons = [
  "js.png",
  "css.png",
  "html5.png",
  "express_js.png",
  "mongo_db.png",
  "react.png",
  "ts.png",
  "docker.png",
];

/** detect element masuk viewport */
function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = {
    threshold: 0.35,
    rootMargin: "0px 0px -10% 0px",
  },
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, options);

    io.observe(el);
    return () => io.disconnect();
  }, [options]);

  return [ref, inView] as const;
}

/** count up 0 -> target */
function useCountUp(target: number, startWhen: boolean, durationMs = 900) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startWhen) return;

    let rafId = 0;
    const start = performance.now();
    const from = 0;
    const to = Number.isFinite(target) ? target : 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(from + (to - from) * eased));
      if (t < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target, startWhen, durationMs]);

  return value;
}

function SkillRow({ skill }: { skill: { name: string; value: number } }) {
  const [rowRef, inView] = useInView<HTMLDivElement>();
  const pct = useCountUp(skill.value, inView, 900);

  const barWidth = inView ? `${skill.value}%` : "0%";
  const lineWidth = inView ? `${100 - skill.value}%` : "100%";

  const glowStyle = useMemo(() => {
    if (!inView || skill.value <= 0) return { opacity: 0 };
    return { opacity: 0.9 };
  }, [inView, skill.value]);

  return (
    <div ref={rowRef} className="group flex items-center">
      {/* BAR + LINE */}
      <div className="flex-1 flex items-center">
        {/* BAR HIJAU */}
        <div
          className="
            relative h-10 md:h-16 rounded-4xl
            bg-(--green-alt)
            bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.10)_0px,rgba(255,255,255,0.10)_2px,transparent_2px,transparent_12px)]
            transition-[width,transform,filter] duration-700 ease-out
            
            group-hover:brightness-110
          "
          style={{ width: barWidth }}
        >
          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-white font-semibold whitespace-nowrap text-[12px] md:text-lg">
            {skill.name}
          </span>

          {/* glow halus di ujung bar */}
          <span
            className="
              pointer-events-none absolute right-0 top-1/2 -translate-y-1/2
              h-10 w-10 rounded-full blur-xl
              bg-(--green-alt)
              transition-opacity duration-500
              group-hover:opacity-100
            "
            style={glowStyle}
          />
        </div>

        {/* GARIS SISA (presisi: 100 - value) */}
        <div
          className="
            h-px bg-(--blue-alt)/40
            transition-[width,opacity] duration-700 ease-out
           group-hover:bg-(--blue-alt)/55
          "
          style={{ width: lineWidth }}
        />
      </div>

      {/* PERCENT (count up) */}
      <span className="w-12 text-right text-white ml-6 tabular-nums">
        {pct}%
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skill"
      className="bg-black text-white py-10 md:py-20 scroll-mt-24"
    >
      <div className="max-w-296 mx-auto px-6 grid md:grid-cols-2 gap-20">
        {/* LEFT SIDE */}
        <div className="">
          <p className="text-(--green-light) text-base md:text-lg mb-2">
            SKILLS
          </p>

          <h2 className="text-[32px] md:text-5xl font-extrabold leading-(60px) text-(--white-100) leading-10.5 md:leading-15 mb-6 md:mb-10">
            SKILLS THAT BRING <br /> IDEAS TO LIFE
          </h2>

          {/* ICON GRID */}
          <div className="grid grid-cols-[repeat(4,64px)] gap-6 ">
            {icons.map((icon, i) => (
              <div
                key={i}
                className="group h-12 w-12 md:h-16 md:w-16 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-(--white-100)"
              >
                <Image
                  src={`/icons/${icon}`}
                  alt={icon}
                  width={30}
                  height={30}
                  className="transition-all duration-300 "
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4 md:space-y-6">
          {skills.map((skill, index) => (
            <SkillRow key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
