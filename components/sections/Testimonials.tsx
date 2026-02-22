"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Testimonial = {
  name: string;
  role: string;
  company: "Upwork" | "Trello" | "Zapier" | "Zoom";
  logo: string; // e.g. "/logos/trello.png"
  quote: string;
  rating?: number; // default 5
};

const testimonials: Testimonial[] = [
  {
    name: "Thom Haye",
    role: "Project Manager",
    company: "Upwork",
    logo: "/images/upwork.png",
    quote:
      "Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Carter",
    role: "Head of Product",
    company: "Trello",
    logo: "/images/trello.png",
    quote:
      "An absolute pleasure to work with! Delivered a stunning, high-performance website that exceeded expectations. Attention to detail and problem-solving skills are top-notch.",
    rating: 5,
  },
  {
    name: "Sarah Lee",
    role: "Engineering Manager",
    company: "Zapier",
    logo: "/images/zapier.png",
    quote:
      "An exceptional frontend developer with a deep understanding of UI/UX principles. The ability to translate design into pixel-perfect code is truly impressive. A valuable asset to any team!",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "Lead Developer",
    company: "Zoom",
    logo: "/images/zoom.png",
    quote:
      "A pleasure to collaborate with! Writes clean, maintainable code while effectively working with designers and backend engineers. Outstanding work!",
    rating: 5,
  },

  // contoh slide berikutnya (duplikat / isi baru)
  {
    name: "Nadia Stone",
    role: "Product Designer",
    company: "Trello",
    logo: "/images/trello.png",
    quote:
      "Super smooth collaboration. UI implementation is pixel-perfect and the responsiveness is excellent across devices.",
    rating: 5,
  },
  {
    name: "Ryan Kim",
    role: "CTO",
    company: "Zoom",
    logo: "/images/zoom.png",
    quote:
      "Fast delivery and great communication. The frontend performance improvements were immediately noticeable.",
    rating: 5,
  },
  {
    name: "Alicia Park",
    role: "Tech Lead",
    company: "Zapier",
    logo: "/images/zapier.png",
    quote:
      "Strong engineering fundamentals and great attention to UX details. Clean codebase and easy handoff.",
    rating: 5,
  },
  {
    name: "Ben Turner",
    role: "Founder",
    company: "Upwork",
    logo: "/images/upwork.png",
    quote:
      "Delivered exactly what we needed. Reliable, proactive, and excellent craft on UI components.",
    rating: 5,
  },
];

function chunk<T>(arr: T[], size: number) {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function Stars({ value = 5 }: { value?: number }) {
  const v = Math.max(0, Math.min(5, value));
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
          <path
            d="M10 1.6l2.47 5.25 5.75.85-4.16 4.05.99 5.73L10 14.9l-5.05 2.64.99-5.73L1.78 7.7l5.75-.85L10 1.6z"
            className={i < v ? "fill-orange-400" : "fill-zinc-700"}
          />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="relative h-full rounded-2xl border border-(--blue-alt) bg-black p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-(--white-100)">{t.name}</h3>
          <p className="mt-1 text-lg font-medium text-(--grey-100)">{t.role}</p>
        </div>

        <div className="relative h-12 w-28.5 shrink-0">
          <Image
            src={t.logo}
            alt={t.company}
            fill
            className="object-contain"
            sizes="114px"
            priority={false}
          />
        </div>
      </div>

      <div className="mt-3">
        <Stars value={t.rating ?? 5} />
      </div>

      <p className="mt-3 text-lg leading-8 font-medium text-(--white-100)">
        “{t.quote}”
      </p>
    </div>
  );
}

export default function TestimonialsSection() {
  // 1 slide = 4 cards (2x2) seperti screenshot
  const slides = React.useMemo(() => chunk(testimonials, 4), []);

  return (
    <section className="relative w-full bg-black px-4 md:px-6 lg:px-6 xl:px-0 py-10 md:py-30">
      <div className="mx-auto w-full max-w-6xl">
        <div className="text-center">
          <p className="text-base md:text-lg text-(--green-light) font-medium">
            TESTIMONIALS
          </p>
          <h2 className="mt-2 text-[32px] md:text-5xl font-extrabold leading-(60px) text-(--white-100) leading-10.5 md:leading-15">
            PEOPLE SAYS <br className="block md:hidden" /> ABOUT ME
          </h2>
        </div>

        <div className="mt-10">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {slides.map((group, idx) => (
                <CarouselItem key={idx}>
                  <div className="grid gap-6 md:grid-cols-2">
                    {group.map((t) => (
                      <TestimonialCard key={`${t.name}-${t.company}`} t={t} />
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <div className="mt-10 flex items-center justify-center gap-4">
              <CarouselPrevious className="static h-11 w-11 translate-y-0 rounded-full border-(--blue-alt) bg-black text-(--blue-alt) cursor-pointer" />
              <CarouselNext className="static h-11 w-11 translate-y-0 rounded-full border-(--blue-alt) bg-black text-(--green-light) cursor-pointer" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
