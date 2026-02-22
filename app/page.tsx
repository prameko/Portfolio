import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/AboutMe";
import Skills from "@/components/sections/Skills";
import WhyChooseMe from "@/components/sections/WhyChooseMe";
import Experience from "@/components/sections/Experience";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Skills />
      <WhyChooseMe />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
