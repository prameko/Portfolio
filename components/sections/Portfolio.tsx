"use client";

import { useState } from "react";
import Link from "next/link";

export default function PortfolioSection() {
  const works = [
    {
      title: "Dashboard SaaS Task Management",
      image: "/images/Dashboard_SaaS_Task_Management_1.png",
    },
    {
      title: "Dashboard SaaS Task Management",
      image: "/images/Dashboard_SaaS_Task_Management_2.png",
    },
    {
      title: "Dashboard SaaS Task Management",
      image: "/images/Dashboard_SaaS_Task_Management_3.png",
    },
    {
      title: "Dashboard SaaS Task Management",
      image: "/images/Dashboard_SaaS_Task_Management_4.png",
    },
    {
      title: "Dashboard SaaS Task Management",
      image: "/images/Dashboard_SaaS_Task_Management_5.png",
    },
    {
      title: "Dashboard SaaS Task Management",
      image: "/images/Dashboard_SaaS_Task_Management_6.png",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-black text-white min-h-screen scroll-mt-24 px-4 md:px-6 lg:px-6 xl:px-0 py-10 md:py-30"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center">
          <p className="text-base md:text-lg text-(--green-light) font-medium">
            PORTFOLIO
          </p>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-(--white-100)">
            SELECTED WORK
          </h2>
        </div>

        {/* GRID */}
        <div className="mt-14 grid gap-y-12 gap-x-5 md:grid-cols-3">
          {works.map((work, index) => (
            <Card key={index} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CARD COMPONENT ================= */

function Card({ work }: any) {
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link
      href="#"
      className="relative group block cursor-none"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={handleMove}
    >
      {/* IMAGE */}
      <div className="overflow-hidden rounded-2xl">
        <img
          src={work.image}
          alt={work.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.05]"
        />
      </div>

      {/* TEXT */}
      <div className="pt-4">
        <h3 className="text-xl md:text-2xl font-bold leading-9">
          {work.title}
        </h3>
        <p className="mt-3 md:mt-4 text-sm md:text-base text-(--grey-100) leading-7.5">
          Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc
          lobortis.
        </p>
      </div>

      {/* CUSTOM CURSOR */}
      {hover && (
        <div
          className="pointer-events-none absolute z-50"
          style={{
            left: pos.x,
            top: pos.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="h-15 w-15 md:h-25 md:w-25 bg-(--white-100) rounded-full flex items-center justify-center shadow-xl">
            <span className="text-(--black-alt) font-bold tracking-wider text-lg">
              VISIT
            </span>
          </div>
        </div>
      )}
    </Link>
  );
}
