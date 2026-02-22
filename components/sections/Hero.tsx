"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black text-white md:border-b md:border-(--blue-alt) scroll-mt-24 pt-30 md:pt-0 pb-10 md:pb-0"
    >
      <div className="relative flex flex-col md:min-h-205 md:flex-row md:items-center">
        {/* Vertical Guide Lines (tetap hanya desktop) */}
        <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
          <div className="absolute top-0 bottom-0 left-[26%] w-px bg-(--blue-alt)" />
          <div className="absolute top-0 bottom-0 left-[49%] w-px bg-(--blue-alt)" />
        </div>

        {/* CONTENT */}
        <div
          className="
            relative z-30
            px-4
            md:pr-0 md:pl-[max(24px,calc((100vw-1184px)/2))]
            flex items-center
          "
        >
          <div className="max-w-190 space-y-4 md:space-y-8">
            <div className="flex items-center gap-4 text-(--white-100)">
              <div className="h-px w-5.25 md:w-15 lg:w-28.5 bg-gray-500" />
              <p className="text-base md:text-5">
                Hi, I am Edwin Anderson Frontend Developer
              </p>
            </div>

            <h1 className="text-4xl font-extrabold leading-12 md:text-[80px] md:leading-[0.95] text-(--white-100)">
              BUILDING FAST &{" "}
              <span className="text-(--green-light)">INTERACTIVE</span> WEB
              EXPERIENCES.
            </h1>

            <p className="max-w-xl text-(--grey-100) font-medium text-lg md:text-xl leading-8 md:leading-8.5">
              Bridging creativity and functionality to deliver stunning,
              user-friendly web applications
            </p>

            <Button className="rounded-full bg-(--green-light) h-14 w-75 px-8 py-6 text-base font-bold text-black hover:bg-lime-500 shadow-[0_4px_40px_0_rgba(145,255,2,0.4)] cursor-pointer">
              HIRE ME
            </Button>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative w-full mt-10 md:mt-0 md:absolute md:inset-y-0 md:right-0 md:w-[52%]">
          <div className="relative w-full h-130 md:h-full">
            <Image
              src="/images/img_banner.png"
              alt="Banner Image"
              fill
              priority
              className="object-cover md:object-contain object-center md:object-bottom-right"
            />
          </div>

          {/* Rating Card */}
          <div className="-mt-32.5 md:mt-0 md:absolute md:bottom-12 md:left-[45%] z-20 max-w-sm md:w-60 rounded-xl border border-(--blue-alt) bg-black p-5 backdrop-blur-md mx-auto md:mx-0">
            <h3 className="mb-2 text-2xl font-bold">5.0</h3>
            <div className="mb-2 flex gap-1 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-sm text-gray-400">Many Client Trust with me</p>
          </div>
        </div>

        {/* Bottom Pattern (desktop only) */}
        <div className="pointer-events-none absolute bottom-35 md:bottom-0 left-0 z-10 md:block">
          <Image
            src="/patterns/normal_pattern.svg"
            alt="pattern"
            width={138}
            height={92}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
