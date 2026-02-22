"use client";

import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative bg-black text-white overflow-hidden py-10 md:py-30 px-4 md:px-6 lg:px-6 xl:px-0 scroll-mt-24"
    >
      <div className="relative max-w-292 mx-auto text-center z-9">
        {/* SUBTITLE */}
        <p className="text-(--green-light) text-sm md:text-lg mb-3 md:mb-4 tracking-wider">
          ABOUT ME
        </p>

        {/* HEADING */}
        <h2 className="text-[32px] md:text-5xl font-extrabold text-(--white-100) leading-tight md:leading-15">
          CRAFTING SEAMLESS <br className="hidden md:block" />
          <span className="text-(--green-light)">
            HIGH-PERFORMANCE WEB
          </span>{" "}
          <br className="hidden md:block" />
          EXPERIENCES
        </h2>

        {/* DESCRIPTION */}
        <p className="text-(--grey-100) text-base md:text-[20px] leading-7 md:leading-relaxed max-w-xl mx-auto mt-6 md:mt-16">
          I love turning designs into interactive, high-performance websites.
          With a keen eye for detail and a deep{" "}
          <br className="hidden md:block" />
          understanding of frontend technologies, I create smooth and visually
          appealing user experiences.
        </p>
      </div>

      {/* MOBILE IMAGE LAYOUT */}
      <div className="mt-12 grid grid-cols-2 gap-4 md:hidden">
        {/* kiri atas */}
        <div className="col-span-1">
          <Image
            src="/images/about_me_spaces.png"
            alt="About Spaces"
            width={260}
            height={200}
            className="object-contain w-full h-auto"
          />
        </div>

        {/* kanan atas */}
        <div className="col-span-1 relative top-10">
          <Image
            src="/images/about_us_shaping.png"
            alt="About Shaping"
            width={160}
            height={99}
            className="object-contain w-80% h-auto"
          />
        </div>

        {/* bawah tengah */}
        <div className="col-span-2 flex justify-center mt-4 relative top-3">
          <Image
            src="/images/about_me_elevate.png"
            alt="About Elevate"
            width={200}
            height={100}
            className="object-contain w-[50%] h-auto"
          />
        </div>
      </div>

      {/* DESKTOP FLOATING IMAGES (tidak diubah) */}
      <div className="hidden md:block">
        <div className="absolute top-8 left-58">
          <Image
            src="/images/about_me_spaces.png"
            alt="About Spaces"
            width={260}
            height={200}
            className="object-contain"
          />
        </div>

        <div className="absolute top-20 right-43">
          <Image
            src="/images/about_us_shaping.png"
            alt="About Shaping"
            width={260}
            height={200}
            className="object-contain"
          />
        </div>

        <div className="absolute bottom-55 right-[30%]">
          <Image
            src="/images/about_me_elevate.png"
            alt="About Elevate"
            width={117}
            height={88}
            className="object-contain"
          />
        </div>
      </div>

      {/* LEFT BOTTOM PATTERN */}
      <div className="absolute bottom-0 left-0 pointer-events-none">
        <Image
          src="/patterns/left_pattern.svg"
          alt="pattern"
          width={92}
          height={138}
          className="object-contain"
        />
      </div>
    </section>
  );
}
