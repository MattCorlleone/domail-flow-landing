
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  // In a real app, this would come from an auth provider
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Simulating auth check (in a real app, this would come from your auth provider)
    const checkAuthStatus = () => {
      // Just for demo purposes - in a real app, check if user is authenticated
      const hasSession = localStorage.getItem("demo-user-session");
      setIsLoggedIn(!!hasSession);
    };

    window.addEventListener("scroll", handleScroll);
    checkAuthStatus();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mock login/logout functions
  const handleLogin = () => {
    localStorage.setItem("demo-user-session", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("demo-user-session");
    setIsLoggedIn(false);
  };

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="text-primary font-bold text-xl md:text-2xl">
              DomainFlow
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-10 items-center">
            <Link to="/#features" className="font-medium text-gray-700 hover:text-primary transition-colors">
              Features
            </Link>
            <Link to="/#plans" className="font-medium text-gray-700 hover:text-primary transition-colors">
              Plans
            </Link>
            <Link to="/#about" className="font-medium text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/#contact" className="font-medium text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center">
            {isLoggedIn ? (
              <>
                <Link to="/dashboard">
                  <Button variant="outline" className="mr-3 hidden md:inline-flex">
                    Minha Conta
                  </Button>
                </Link>
                <Button onClick={handleLogout}>
                  Sair
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" className="mr-3 hidden md:inline-flex" onClick={handleLogin}>
                  Login
                </Button>
                <Button>
                  Começar
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
