import Image from "next/image";

const steps = [
  {
    year: "2020 - 2022",
    title: "Frontend Developer",
    desc: "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experience.",
    logo: "upwork",
  },
  {
    year: "2020 - 2022",
    title: "Frontend Developer",
    desc: "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experience.",
    logo: "trello",
  },
  {
    year: "2020 - 2022",
    title: "Frontend Developer",
    desc: "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experience.",
    logo: "zoom",
  },
  {
    year: "2020 - 2022",
    title: "Frontend Developer",
    desc: "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experience.",
    logo: "zapier",
  },
];

type StepCardProps = {
  year: string;
  title: string;
  desc: string;
  logo: string; // trello | upwork | zapier | zoom ...
  side: "left" | "right";
};

function StepCard({ year, title, desc, logo, side }: StepCardProps) {
  const isLeft = side === "left";

  return (
    <div
      className={`relative flex ${isLeft ? "justify-end" : "justify-start"}`}
    >
      <div
        className={[
          "relative w-full md:w-[92%] rounded-2xl border border-(--blue-alt) bg-black",
          "p-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)]",
          // notch/caret ke garis tengah
          " relative w-full md:w-[92%] rounded-2xl border border-[#181D27] bg-[#0A0D12] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)]",
          isLeft,
        ].join(" ")}
      >
        {/* header row: year + logo */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-lg text-(--grey-100)">{year}</p>
            <h4 className="mt-2 text-2xl font-semibold text-(--white-100)">
              {title}
            </h4>
          </div>

          <img
            src={`/images/${logo}.png`}
            alt={`${logo} logo`}
            loading="lazy"
          />
        </div>

        <p className="mt-2 text-base leading-[30px] text-(--grey-100)">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section className="bg-black text-white py-10 md:py-20 px-4 md:px-6 lg:px-6 xl:px-0 relative">
      <div className="max-w-296 mx-auto">
        <div className="text-center">
          <p className="text-lg text-(--green-light) font-medium">EXPERIENCE</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-(--white-100)">
            PROFESIONAL WORK
          </h2>
        </div>
        {/* wrapper */}
        <div className="relative mt-6 md:mt-16 ">
          {/* center vertical line */}
          <div className="hidden md:block absolute left-1/2 top-14 bottom-50 w-px bg-[#232835] -translate-x-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14">
            {steps.map((s, idx) => {
              const n = idx + 1;
              const isLeft = n % 2 === 0;

              return (
                <div
                  key={`${s.logo}-${idx}`}
                  className="relative md:col-span-2 flex items-center"
                >
                  {/* number bubble */}
                  <div className="hidden md:flex absolute left-1/2 top-7 -translate-x-1/2 z-10">
                    <div className="w-12 h-12 rounded-full border border-(--blue-alt) text-(--green-light) text-base font-bold flex items-center justify-center bg-black">
                      {n}
                    </div>
                  </div>

                  {/* connector line (center -> card) */}
                  {/* <div
                    className={[
                      "hidden md:block absolute top-[34px] h-px bg-[#232835]",
                      isLeft
                        ? "left-1/2 w-[calc(50%-3.5rem)]"
                        : "right-1/2 w-[calc(50%-3.5rem)]",
                    ].join(" ")}
                  /> */}

                  {/* left */}
                  <div className="hidden md:block w-1/2 pr-22">
                    {isLeft && (
                      <StepCard
                        year={s.year}
                        title={s.title}
                        desc={s.desc}
                        logo={s.logo}
                        side="left"
                      />
                    )}
                  </div>

                  {/* right */}
                  <div className="hidden md:block w-1/2 pl-22">
                    {!isLeft && (
                      <StepCard
                        year={s.year}
                        title={s.title}
                        desc={s.desc}
                        logo={s.logo}
                        side="right"
                      />
                    )}
                  </div>

                  {/* mobile (stacked) */}
                  <div className="md:hidden w-full">
                    <div className="flex items-start gap-4">
                      {/* number column (bubble + line) */}
                      <div
                        className={[
                          // penting: biar tinggi kolom ikut tinggi card
                          "relative shrink-0 flex flex-col items-center self-stretch",
                          // garis nyambung dari bawah bubble sampai melewati gap item berikutnya
                          "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2",
                          "after:top-7 after:-bottom-14 after:w-px after:bg-[#232835]",
                          // item terakhir: stop garis
                          idx === steps.length - 1 ? "after:hidden" : "",
                        ].join(" ")}
                      >
                        <div className=" w-7 h-7 rounded-full border border-(--blue-alt) text-(--green-light) text-sm font-bold flex items-center justify-center shrink-0">
                          {n}
                        </div>
                      </div>

                      <div className="w-full rounded-2xl border border-[#181D27] bg-black px-5 py-4">
                        <div className="flex items-start justify-between gap-4">
                          <p className="text-sm text-(--grey-100)">{s.year}</p>
                        </div>

                        <h4 className="mt-2 text-[16px] font-semibold">
                          {s.title}
                        </h4>
                        <img
                          src={`/images/${s.logo}.png`}
                          alt={`${s.logo} logo`}
                          className="h-8 w-auto opacity-95"
                          loading="lazy"
                        />
                        <p className="mt-4 text-sm text-(--grey-100) leading-6">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Decorative pixels bottom-right */}
      <div className="pointer-events-none absolute -bottom-15 md:bottom-0 right-0 z-10">
        <Image
          src="/patterns/bottom_right_pattern.svg"
          alt="pattern"
          width={138}
          height={92}
          className="w-auto h-17.25 md:h-23 object-contain"
        />
      </div>
    </section>
  );
}
