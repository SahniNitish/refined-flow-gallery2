import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import ThemeToggle from "@/components/ui/theme-toggle";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { label: 'About', id: 'about' },
        { label: 'Experience', id: 'experience' },
        { label: 'Projects', id: 'projects' },
        { label: 'Skills', id: 'skills' },
        { label: 'Contact', id: 'contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border/30 shadow-lg'
            : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="text-2xl font-bold cursor-hover relative group display-font"
                    >
                        <span className="text-gradient">NS</span>
                        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300 -z-10" />
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group px-4 py-2 rounded-full hover:bg-primary/5 cursor-hover"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-8 rounded-full"></span>
                            </button>
                        ))}
                    </div>

                    {/* Theme Toggle & Social Links */}
                    <div className="hidden md:flex items-center space-x-2">
                        <ThemeToggle />
                        <div className="w-px h-6 bg-border/30 mx-2" />
                        <Button
                            variant="ghost"
                            size="sm"
                            className="w-10 h-10 rounded-full hover:bg-primary/10 hover:text-primary cursor-hover"
                            onClick={() => window.open('https://github.com/sahniNitish', '_blank')}
                        >
                            <Github className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="w-10 h-10 rounded-full hover:bg-primary/10 hover:text-primary cursor-hover"
                            onClick={() => window.open('https://linkedin.com/in/SahniNitish', '_blank')}
                        >
                            <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="w-10 h-10 rounded-full hover:bg-primary/10 hover:text-primary cursor-hover"
                            onClick={() => window.open('mailto:Nitishsahni884@gmail.com')}
                        >
                            <Mail className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className="md:hidden w-10 h-10 rounded-full"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/30 shadow-lg rounded-b-2xl">
                        <div className="px-6 py-6 space-y-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="block w-full text-left text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-3 px-4 rounded-xl hover:bg-primary/5"
                                >
                                    {item.label}
                                </button>
                            ))}
                            <div className="flex items-center justify-between pt-4 border-t border-border/30">
                                <div className="flex items-center space-x-2">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="w-10 h-10 rounded-full hover:bg-primary/10 hover:text-primary"
                                        onClick={() => window.open('https://github.com/sahniNitish', '_blank')}
                                    >
                                        <Github className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="w-10 h-10 rounded-full hover:bg-primary/10 hover:text-primary"
                                        onClick={() => window.open('https://linkedin.com/in/SahniNitish', '_blank')}
                                    >
                                        <Linkedin className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="w-10 h-10 rounded-full hover:bg-primary/10 hover:text-primary"
                                        onClick={() => window.open('mailto:Nitishsahni884@gmail.com')}
                                    >
                                        <Mail className="h-4 w-4" />
                                    </Button>
                                </div>
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;