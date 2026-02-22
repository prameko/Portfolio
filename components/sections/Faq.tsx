// components/FAQSection.tsx
import React from "react";
import Image from "next/image";

type FAQItem = { question: string; answer: string };

const faqs: FAQItem[] = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React.js, Next.js, Vue.js, Tailwind CSS, and TypeScript, ensuring high-performance, scalable, and maintainable web applications.",
  },
  {
    question: "Do you work on both design and development?",
    answer:
      "I focus primarily on frontend development, translating UI/UX designs into responsive and interactive web experiences. However, I collaborate closely with designers to ensure a seamless user experience.",
  },
  {
    question: "Can you optimize an existing website for better performance?",
    answer:
      "Yes! I can analyze, debug, and optimize websites to improve speed, accessibility, and SEO, using best practices like lazy loading, code splitting, and performance monitoring.",
  },
  {
    question: "Do you take freelance or contract-based projects?",
    answer:
      "Yes! I am open to freelance, contract, and full-time opportunities, depending on the project scope and requirements. Feel free to reach out!",
  },
  {
    question: "How do you approach a new project?",
    answer:
      "I start by understanding the project goals and requirements, followed by wireframing or UI implementation, then development, testing, and deployment—ensuring a smooth and efficient workflow.",
  },
  {
    question: "How can we collaborate?",
    answer:
      "You can contact me via email, LinkedIn, or GitHub. I usually begin with a consultation to discuss your needs, then propose a plan to bring your vision to life. Let’s create something awesome together!",
  },
];

function SparkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2l1.6 6.1L20 10l-6.4 1.9L12 18l-1.6-6.1L4 10l6.4-1.9L12 2z"
      />
    </svg>
  );
}

function chunkPairs<T>(arr: T[]) {
  const rows: T[][] = [];
  for (let i = 0; i < arr.length; i += 2) rows.push(arr.slice(i, i + 2));
  return rows;
}

export default function FAQSection() {
  const rows = chunkPairs(faqs);

  return (
    <section
      id="faq"
      className="w-full bg-black text-white scroll-mt-24 px-4 md:px-6 lg:px-6 xl:px-0 py-10 md:py-30"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-base md:text-lg text-(--green-light) font-medium">
            FAQ
          </p>
          <h2 className="mt-2 text-[32px] md:text-5xl font-extrabold leading-(60px) text-(--white-100) leading-10.5 md:leading-15">
            FREQUENTLY ASKED
            <br className="block md:hidden" /> QUESTIONS
          </h2>
        </div>

        {/* Table-like layout */}
        <div className="mt-12 overflow-hidden">
          {rows.map((pair, rowIdx) => {
            const isLastRow = rowIdx === rows.length - 1;

            return (
              <div
                key={rowIdx}
                className={[
                  "grid grid-cols-1 md:grid-cols-2 border-b border-[#252B37] last:border-b-0",
                ].join(" ")}
              >
                {pair.map((item) => (
                  <div
                    key={item.question}
                    className="pb-4 my-4 md:pb-0 md:my-10 md:first:pr-10 md:last:pl-10 md:border-r border-[#252B37] md:last:border-r-0  border-b  last:border-b-0
  md:border-b-0
 md:border-[#252B37] "
                  >
                    <div className="flex flex-col md:flex-row items-start gap-4">
                      <Image
                        src="/icons/list_normal.svg"
                        alt="List icon"
                        width={32}
                        height={32}
                        className="w-6 h-6 md:w-8 md:h-8 object-contain"
                        priority={false}
                      />

                      <h3 className="text-lg font-bold leading-snug md:text-xl">
                        {item.question}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-white/60 md:text-[15px] md:ml-0 mt-6">
                      {item.answer}
                    </p>
                  </div>
                ))}

                {/* kalau item ganjil (tidak terjadi di contoh), bikin kolom kosong biar garis tetap rapi */}
                {pair.length === 1 && (
                  <div className="hidden md:block p-7 md:p-10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
