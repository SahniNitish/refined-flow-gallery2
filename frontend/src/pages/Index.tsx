import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AmbientBackground />
      <ScrollProgress />
      <Navigation />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
