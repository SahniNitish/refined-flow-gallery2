import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
    { label: 'Work', id: 'work' },
    { label: 'Experience', id: 'experience' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
];

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = ['hero', ...navItems.map((item) => item.id)]
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
            { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
        );

        sections.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-expo ${isScrolled
            ? 'bg-background/70 backdrop-blur-xl border-b border-white/[0.08]'
            : 'bg-transparent border-b border-transparent'
            }`}>
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="heading-font text-foreground font-medium"
                    >
                        Nitish Sahni
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-sm transition-colors ${
                                    activeSection === item.id
                                        ? 'text-primary'
                                        : 'text-muted-foreground hover:text-primary'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className="md:hidden w-10 h-10"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/[0.08]">
                        <div className="px-6 py-6 space-y-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`block w-full text-left transition-colors ${
                                        activeSection === item.id
                                            ? 'text-primary'
                                            : 'text-muted-foreground hover:text-primary'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
