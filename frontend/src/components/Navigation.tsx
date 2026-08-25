import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const sectionItems = [
  { label: "Work", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const isBlog = location.pathname.startsWith("/blog");

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const sections = ["hero", ...sectionItems.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  const goToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (isHome) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    navigate(`/#${sectionId}`);
  };

  const goHome = () => {
    setIsMobileMenuOpen(false);
    if (isHome) {
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    navigate("/");
  };

  const sectionClass = (active: boolean) =>
    `text-sm transition-colors ${
      active ? "text-primary" : "text-muted-foreground hover:text-primary"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-expo ${
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-white/[0.08]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={goHome}
            className="heading-font text-foreground font-medium"
          >
            Nitish Sahni
          </button>

          <div className="hidden md:flex items-center gap-8">
            {sectionItems.slice(0, 3).map((item) => (
              <button
                key={item.id}
                onClick={() => goToSection(item.id)}
                className={sectionClass(isHome && activeSection === item.id)}
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className={sectionClass(isBlog)}
              aria-current={isBlog ? "page" : undefined}
            >
              Blog
            </Link>
            <button
              onClick={() => goToSection("contact")}
              className={sectionClass(isHome && activeSection === "contact")}
            >
              Contact
            </button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden w-11 h-11 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/[0.08]">
            <div className="px-6 py-6 space-y-1">
              {sectionItems.slice(0, 3).map((item) => (
                <button
                  key={item.id}
                  onClick={() => goToSection(item.id)}
                  className={`block w-full text-left min-h-11 ${sectionClass(
                    isHome && activeSection === item.id
                  )}`}
                >
                  {item.label}
                </button>
              ))}
              <Link
                to="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left min-h-11 flex items-center ${sectionClass(
                  isBlog
                )}`}
                aria-current={isBlog ? "page" : undefined}
              >
                Blog
              </Link>
              <button
                onClick={() => goToSection("contact")}
                className={`block w-full text-left min-h-11 ${sectionClass(
                  isHome && activeSection === "contact"
                )}`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
