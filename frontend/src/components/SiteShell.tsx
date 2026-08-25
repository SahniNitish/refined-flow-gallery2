import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import AmbientBackground from "@/components/AmbientBackground";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0 });
    }
  }, [pathname]);

  return null;
}

const SiteShell = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <AmbientBackground />
      <ScrollProgress />
      <ScrollToTop />
      <Navigation />
      <main className="relative z-10">{children}</main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default SiteShell;
