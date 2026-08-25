import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import { usePageMeta } from "@/hooks/usePageMeta";

const Index = () => {
  const { hash } = useLocation();
  usePageMeta();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const timeout = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
    return () => window.clearTimeout(timeout);
  }, [hash]);

  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <About />
      <Writing />
      <Contact />
    </>
  );
};

export default Index;
