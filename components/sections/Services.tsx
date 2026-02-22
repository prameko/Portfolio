"use client";

import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Custom Website Development",
    description:
      "Building responsive, fast, and scalable websites tailored to your needs.",
  },
  {
    number: "02",
    title: "Web Performance Optimization",
    description:
      "Enhancing website speed, SEO, and overall performance for better results.",
  },
  {
    number: "03",
    title: "Website Maintenance & Debugging",
    description:
      "Fixing bugs, improving UI, and ensuring smooth performance over time.",
  },
];

export default function Services() {
  return (
    <section className="bg-black text-white py-10 md:py-30 px-4 md:px-6 lg:px-6 xl:px-0">
      <div className="max-w-296 mx-auto">
        {/* HEADER */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-12 mb-6 md:mb-20">
          <div>
            <p className="text-(--green-light) text-base md:text-lg md:mb-2">
              SERVICE
            </p>

            <h2 className="text-[32px] md:text-5xl font-extrabold leading-(60px) text-(--white-100) leading-10.5 md:leading-15">
              MY SERVICE <br /> EXPERTISE
            </h2>
          </div>

          <div className="flex items-center md:justify-end">
            <p className="text-(--grey-100) max-w-md text-base leading-7.5 md:leading-8.5 text-left md:text-right">
              Creating modern, intuitive, and visually consistent web
              experiences that align with industry trends and user expectations.
            </p>
          </div>
        </div>

        {/* SERVICES LIST */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {services.map((service, index) => (
            <div key={index} className="space-y-3 md:space-y-6">
              {/* number */}
              <div className="flex items-center justify-between text-(--grey-100)">
                <span>{service.number}</span>
              </div>

              {/* divider */}
              <div className="h-px bg-white/10" />

              {/* icon */}
              <div>
                <Image
                  src="/icons/monitor.svg"
                  alt="monitor icon"
                  width={28}
                  height={28}
                />
              </div>

              {/* title */}
              <h3 className="text-5 md:text-[28px] font-semibold leading-[38px]">
                {service.title}
              </h3>

              {/* description */}
              <p className="text-(--grey-100) text-base md:text-xl leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
