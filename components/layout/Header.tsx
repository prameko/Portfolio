"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skill" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // effect saat scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll saat mobile menu kebuka
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = () => setIsOpen(false);

  const headerBg = isOpen
    ? "bg-black"
    : scrolled
      ? "bg-black"
      : "bg-transparent";

  return (
    <header
      className={[
        "w-full text-white fixed top-0 left-0 z-50 border-b border-(--blue-alt)",
        "transition-colors duration-300",
        headerBg,
      ].join(" ")}
    >
      {/* TOP BAR */}
      <div className="max-w-296 mx-auto">
        <div className="flex items-center justify-between h-20 px-4 md:px-6 lg:px-6 xl:px-0">
          {/* Logo + Line */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-px bg-gray-400" />
            <a href="#home" className="text-lg font-semibold text-lime-400">
              Edwin Anderson.
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-12">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base text-gray-300 hover:text-(--green-light) transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="w-7 h-4 flex flex-col justify-between">
              {/* Top */}
              <span
                className={[
                  "block h-0.75 bg-white rounded-full transition-all duration-300 ease-in-out w-full",
                  isOpen ? "translate-y-1.75 rotate-45" : "",
                ].join(" ")}
              />
              {/* Middle */}
              <span
                className={[
                  "block h-0.75 bg-white rounded-full transition-all duration-300 ease-in-out w-full",
                  isOpen ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              {/* Bottom: pendek saat close, full saat open */}
              <span
                className={[
                  "block h-0.75 bg-white rounded-full transition-all duration-300 ease-in-out",
                  isOpen
                    ? "w-full -translate-y-1.75 -rotate-45 ml-0"
                    : "w-5 ml-auto",
                ].join(" ")}
              />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE FULLSCREEN MENU OVERLAY */}
      {isOpen && (
        <div
          className="
      md:hidden
      fixed left-0 right-0 top-20
      h-[calc(100vh-5rem)]
      z-40
      bg-black
    "
        >
          <div className="px-6 py-8">
            <nav className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                  className="text-gray-200 hover:text-white transition text-base"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
