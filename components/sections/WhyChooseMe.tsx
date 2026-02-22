import Image from "next/image";
import { Button } from "@/components/ui/button";

type Item = { text: string };

const leftItems: Item[] = [
  { text: "React Expert" },
  { text: "Precise Website Implementation" },
  { text: "TypeScript Proficiency" },
  { text: "Clean, Maintainable Code" },
  { text: "Responsive Website Development" },
  { text: "UI Design Proficiency (Figma)" },
];

const rightItems: Item[] = [
  { text: "Basic React Knowledge" },
  { text: "Inconsistent Design Translation" },
  { text: "Little to No TypeScript Knowledge" },
  { text: "Unstructured Code" },
  { text: "Inconsistent Responsiveness" },
  { text: "No Design Skills" },
];

function Row({
  iconSrc,
  text,
  strong,
}: {
  iconSrc: string;
  text: string;
  strong?: boolean;
}) {
  return (
    <li className="flex items-center gap-3 py-6 md:py-8 border-b border-(--blue-alt)">
      <Image
        src={iconSrc}
        alt="List icon"
        width={32}
        height={32}
        className="w-6 h-6 md:w-8 md:h-8 shrink-0"
        aria-hidden
      />
      <span
        className={[
          "text-base md:text-xl leading-none font-bold",
          strong
            ? "text-(--white-100) font-semibold"
            : "text-(--white-100) font-medium",
        ].join(" ")}
      >
        {text}
      </span>
    </li>
  );
}

export default function WhyChooseMe() {
  return (
    <section className="min-h-screen w-full bg-black text-var(--white-100) flex items-center justify-center px-4 py-10 md:py-20">
      <div className="w-full max-w-296 text-center">
        {/* top tiny label */}
        <div className="text-(--green-light) text-base md:text-lg md:mb-2">
          WORKING
        </div>

        {/* title */}
        <h2 className="text-[32px] md:text-5xl font-extrabold leading-(60px) text-(--white-100) leading-10.5 md:leading-15 mb-6 md:mb-12">
          WHY CHOOSE ME?
        </h2>

        {/* 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-10 md:gap-20 items-start text-left">
          {/* LEFT */}
          <div>
            <div className="flex flex-col justify-center items-center  gap-6 md:gap-8 mb-6 md:mb-8">
              <h3 className="text-5 md:text-[28px] font-bold text-(--white-100)">
                WORKING WITH ME
              </h3>

              {/* avatar ring */}
              <div className="relative rounded-full bg-white/5 ">
                <div className="h-full w-full rounded-full bg-black/40 overflow-hidden">
                  <Image
                    src="/images/profile.png"
                    alt="Profile"
                    width={80}
                    height={80}
                    className="w-15 h-15 md:w-20 md:h-20 object-cover"
                    priority={false}
                  />
                </div>
              </div>
            </div>

            <ul className="divide-y-0">
              {leftItems.map((it, idx) => (
                <Row
                  key={idx}
                  iconSrc="/icons/list_normal.svg"
                  text={it.text}
                  strong
                />
              ))}
            </ul>
          </div>

          {/* VERTICAL DIVIDER */}
          <div className="hidden md:block h-full w-px bg-transparent rounded" />

          {/* RIGHT */}
          <div>
            <div className="flex flex-col justify-center items-center gap-6 md:gap-8 mb-8">
              <h3 className="text-5 md:text-[28px] font-bold text-(--white-100)">
                ANOTHER TALENT
              </h3>

              {/* avatar ring (dim) */}
              <div className="relative  rounded-full bg-white/5">
                <div className="h-full w-full rounded-full bg-black/40 overflow-hidden">
                  <Image
                    src="/images/profile_talent.png"
                    alt="Talent profile"
                    width={80}
                    height={80}
                    className="w-15 h-15 md:w-20 md:h-20 object-cover"
                    priority={false}
                  />
                </div>
              </div>
            </div>

            <ul className="divide-y-0">
              {rightItems.map((it, idx) => (
                <Row key={idx} iconSrc="/icons/list_dark.svg" text={it.text} />
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Button
            type="button"
            className="
    w-full md:w-60
    h-14
    rounded-full
    text-base font-bold
    bg-(--green-light) text-(--black-alt)
    shadow-[0_0_40px_rgba(182,255,46,0.35)]
    hover:bg-(--green-light)
    hover:shadow-[0_0_55px_rgba(182,255,46,0.5)]
    transition cursor-pointer
  "
          >
            HIRE ME
          </Button>
        </div>
      </div>
    </section>
  );
}
