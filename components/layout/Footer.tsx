"use client";

export default function FooterCopyright() {
  return (
    <div className="py-5 md:py-6.25 text-[12px] md:text-[16px] leading-7.5 font-normal text-(--grey-100) text-center border-t border-(--blue-alt)">
      © {new Date().getFullYear()} Edwin Anderson. All rights reserved.
    </div>
  );
}
