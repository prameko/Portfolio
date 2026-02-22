"use client";

import Image from "next/image";

import React, { useMemo, useState } from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    | { type: "idle" }
    | { type: "loading" }
    | { type: "success"; message: string }
    | { type: "error"; message: string }
  >({ type: "idle" });

  // ✅ ADD (popup state)
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState<"success" | "error">("success");
  const [popupTitle, setPopupTitle] = useState("");
  const [popupDesc, setPopupDesc] = useState("");

  const canSubmit = useMemo(() => {
    return (
      form.name.trim().length > 1 &&
      form.email.trim().includes("@") &&
      form.message.trim().length > 5 &&
      !!accessKey &&
      status.type !== "loading"
    );
  }, [form, accessKey, status.type]);

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // ✅ ADD (popup action)
  function onBackHome() {
    setPopupOpen(false);
    window.location.href = "/";
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!accessKey) {
      setStatus({
        type: "error",
        message:
          "Access key Web3Forms belum di-set. Tambahkan NEXT_PUBLIC_WEB3FORMS_KEY di .env.local",
      });

      // ✅ ADD (open popup error)
      setPopupType("error");
      setPopupTitle("Message Failed!");
      setPopupDesc(
        "Access key Web3Forms belum di-set. Tambahkan NEXT_PUBLIC_WEB3FORMS_KEY di .env.local",
      );
      setPopupOpen(true);

      return;
    }

    setStatus({ type: "loading" });

    try {
      // pakai FormData biar mirip contoh Web3Forms
      const fd = new FormData();
      fd.append("access_key", accessKey);
      fd.append("subject", "New Contact Form Submission");
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("message", form.message);

      // honeypot anti-spam (optional)
      fd.append("botcheck", "");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ type: "success", message: "Success! Pesan terkirim." });
        setForm({ name: "", email: "", message: "" });

        //  ADD (open popup success)
        setPopupType("success");
        setPopupTitle("Message Sent Successfully!");
        setPopupDesc(
          "Thank you for reaching out. I'll get back to you as soon as possible.",
        );
        setPopupOpen(true);
      } else {
        const errMsg = data.message
          ? `Error: ${data.message}`
          : "Error: gagal submit.";

        setStatus({
          type: "error",
          message: errMsg,
        });

        //  ADD (open popup error)
        setPopupType("error");
        setPopupTitle("Message not sent!");
        setPopupDesc(errMsg);
        setPopupOpen(true);
      }
    } catch {
      setStatus({
        type: "error",
        message:
          "Something went wrong on our end. Please try again in a moment",
      });

      // ADD (open popup error)
      setPopupType("error");
      setPopupTitle("Message not sent!");
      setPopupDesc(
        "Something went wrong on our end. Please try again in a moment",
      );
      setPopupOpen(true);
    }
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full bg-black text-white scroll-mt-24"
    >
      {/* ADD (Popup Dialog - shadcn) */}
      <Dialog open={popupOpen} onOpenChange={setPopupOpen}>
        <DialogContent
          className={[
            "w-[calc(100%-26px)] sm:w-full max-w-[520px] rounded-2xl border border-(--blue-alt) bg-black pt-20 pb-8 px-8",
            "text-center text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_90px_rgba(0,0,0,0.65)]",
            "backdrop-blur-md",
          ].join(" ")}
        >
          <div className="mx-auto">
            <Image
              src={
                popupType === "success"
                  ? "/images/success.svg"
                  : "/images/failed.svg"
              }
              alt={popupType === "success" ? "success" : "failed"}
              width={147}
              height={147}
              className="
    w-36.75 h-36.75
    object-contain
    absolute
    left-1/2 -translate-x-1/2 -top-15"
              priority={false}
            />
          </div>

          <p className="text-xl font-semibold">{popupTitle}</p>
          <p className="mt-2 text-sm text-white/70">{popupDesc}</p>

          <div className="mt-6">
            <Button
              type="button"
              onClick={onBackHome}
              disabled={false} // ganti true kalau mau disable
              className={[
                "w-full md:w-90.25 h-12 rounded-full font-bold text-(--black-alt)",
                "bg-(--green-light)",
                "shadow-[0_0_30px_rgba(163,230,53,0.35)]",
                "transition cursor-pointer",

                // hover
                "hover:bg-lime-400 hover:shadow-[0_0_45px_rgba(163,230,53,0.5)]",

                // disabled
                "disabled:bg-gray-500 disabled:text-white/60",
                "disabled:shadow-none disabled:cursor-not-allowed",
              ].join(" ")}
            >
              BACK TO HOME
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Decorative pixels top-left */}
      <div className="pointer-events-none absolute top-0 left-0 z-10">
        <Image
          src="/patterns/bottom_top_pattern.svg"
          alt="pattern"
          width={138}
          height={92}
          className="w-25.75 h-17.25 md:w-34.5 md:h-23 object-contain"
        />
      </div>

      {/* Decorative pixels bottom-right */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-1">
        <Image
          src="/patterns/top_top_pattern.svg"
          alt="pattern"
          width={138}
          height={92}
          className="w-25.75 h-17.25 md:w-34.5 md:h-23 object-contain"
        />
      </div>

      <div className="mx-auto flex min-h-screen max-w-6xl items-center">
        <div className="grid w-full grid-cols-1  md:grid-cols-2">
          {/* LEFT SIDE */}
          <aside className="relative flex flex-col items-center justify-center py-12 md:py-16">
            {/* portrait placeholder */}
            <div className="relative mb-8 h-105 w-139.2 z-1">
              <Image
                src="/images/contact_profile.png"
                alt="List icon"
                width={420}
                height={557}
                priority={false}
              />
            </div>

            {/* social icons row */}
            <div className="mb-6 flex items-center gap-4 z-9">
              {/* Icon 1 */}
              <a
                href="#"
                className="grid h-12 w-12 md:h-16 md:w-16 place-items-center rounded-full border border-(--blue-alt) bg-black text-(--white-100) transition hover:border-white/25 hover:bg-white/10"
                aria-label="Dribbble"
              >
                {/* Dribble */}
                <Image
                  src="/icons/dribbble.svg"
                  alt="Dribbble"
                  width={32}
                  height={32}
                  className="w-7 h-7 md:w-8 md:h-8 object-contain"
                  priority={false}
                />
              </a>

              {/* Icon 2 */}
              <a
                href="#"
                className="grid h-12 w-12 md:h-16 md:w-16 place-items-center rounded-full border border-(--blue-alt) bg-black text-(--white-100) transition hover:border-white/25 hover:bg-white/10"
                aria-label="Dribbble"
              >
                {/* Instagram */}
                <Image
                  src="/icons/instagram.svg"
                  alt="Dribbble"
                  width={32}
                  height={32}
                  className="w-6 h-6 md:w-8 md:h-8 object-contain"
                  priority={false}
                />
              </a>

              {/* Icon 3 */}
              <a
                href="#"
                className="grid h-12 w-12 md:h-16 md:w-16 place-items-center rounded-full border border-(--blue-alt) bg-black text-(--white-100) transition hover:border-white/25 hover:bg-white/10"
                aria-label="Dribbble"
              >
                {/* Linkedin */}
                <Image
                  src="/icons/linkedin.svg"
                  alt="Dribbble"
                  width={32}
                  height={32}
                  className="w-6 h-6 md:w-8 md:h-8 object-contain"
                  priority={false}
                />
              </a>
            </div>

            <div className="text-center z-9">
              <p className="text-xl font-bold tracking-wide text-white">
                Edwin Anderson
              </p>
              <div className="mt-2 inline-flex items-center gap-2 text-xs text-white/60">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400/60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-400" />
                </span>
                <span className="text-base font-medium text-(--grey-100)">
                  Available for Work
                </span>
              </div>
            </div>

            {/* left glow */}
          </aside>

          {/* RIGHT SIDE */}
          <div className="relative px-4 pt-0 pb-20 md:px-10 md:py-16">
            <div className="mb-8">
              <p className="text-(--green-light) text-base md:text-lg md:mb-2">
                CONTACT
              </p>
              <h2 className="text-[32px] md:text-5xl font-extrabold leading-(60px) text-(--white-100) leading-10.5 md:leading-15">
                LET’S GET IN TOUCH
              </h2>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="mb-2 block text-base text-(--white-100) leadiang-[30px] font-semibold">
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="h-12 w-full rounded-xl border border-(--blue-alt) bg-black/40 px-4 text-sm text-white outline-none transition focus:border-white/20 focus:bg-black/50"
                  autoComplete="name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-base text-(--white-100) leadiang-[30px] font-semibold">
                  Email
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  type="email"
                  className="h-12 w-full rounded-xl border border-(--blue-alt) bg-black/40 px-4 text-sm text-white outline-none transition focus:border-white/20 focus:bg-black/50"
                  autoComplete="email"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-base text-(--white-100) leadiang-[30px] font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={6}
                  className="w-full resize-none rounded-xl border border-(--blue-alt) bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-white/20 focus:bg-black/50"
                  required
                />
              </div>

              {/* Status */}
              {status.type !== "idle" && (
                <div
                  className={[
                    "rounded-xl border px-4 py-3 text-sm",
                    status.type === "success"
                      ? "border-lime-400/30 bg-lime-400/10 text-lime-200"
                      : status.type === "error"
                        ? "border-red-400/30 bg-red-400/10 text-red-200"
                        : "border-white/10 bg-white/5 text-white/70",
                  ].join(" ")}
                >
                  {status.type === "loading" ? "Mengirim..." : status.message}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={!canSubmit}
                className={[
                  "relative h-12 w-full rounded-full font-bold text-(--black-alt)",
                  "bg-(--green-light)",
                  "shadow-[0_0_30px_rgba(163,230,53,0.35)]",
                  "transition hover:brightness-110 active:brightness-95",
                  "disabled:cursor-not-allowed z-9",
                ].join(" ")}
              >
                <span className="relative z-10">
                  {status.type === "loading" ? "Sending..." : "Send Message"}
                </span>
                <span className="cursor-pointer absolute inset-0 rounded-full " />
              </button>

              {!accessKey && (
                <p className="text-xs text-white/45">
                  *Set{" "}
                  <code className="text-white/70">
                    NEXT_PUBLIC_WEB3FORMS_KEY
                  </code>{" "}
                  di <code className="text-white/70">.env.local</code>
                </p>
              )}
            </form>

            {/* right glow */}
            <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-lime-400/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
