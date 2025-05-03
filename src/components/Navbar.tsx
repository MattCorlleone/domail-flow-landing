
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="#" className="text-primary font-bold text-xl md:text-2xl">
              DomainFlow
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-10 items-center">
            <a href="#features" className="font-medium text-gray-700 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#plans" className="font-medium text-gray-700 hover:text-primary transition-colors">
              Plans
            </a>
            <a href="#about" className="font-medium text-gray-700 hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="font-medium text-gray-700 hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center">
            <Button variant="outline" className="mr-3 hidden md:inline-flex">
              Login
            </Button>
            <Button>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
