import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Work from "@/components/Work";
import Hire from "@/components/Hire";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Research from "@/components/Research";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Research />
        <Hire />
      </main>
      <Contact />
    </>
  );
}
