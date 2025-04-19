
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import PointNemoLogo from "./PointNemoLogo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detect scrolling for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <PointNemoLogo className="mr-2" />
          <span className="font-display text-2xl font-bold text-nemo-forest">Point Nemo</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="font-medium text-gray-600 hover:text-nemo-forest transition-colors">
            À propos
          </a>
          <a href="#excursions" className="font-medium text-gray-600 hover:text-nemo-forest transition-colors">
            Nos excursions
          </a>
          {/* <a href="#testimonials" className="font-medium text-gray-600 hover:text-nemo-forest transition-colors">
            Témoignages
          </a> */}
          <a href="#contact">
            <Button variant="default" className="bg-nemo-forest hover:bg-nemo-moss">
              Contact
            </Button>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
          aria-label="Menu"
        >
          <div className="space-y-2">
            <span className={cn(
              "block w-8 h-0.5 bg-nemo-forest transition-all duration-300",
              mobileMenuOpen && "rotate-45 translate-y-2.5"
            )}></span>
            <span className={cn(
              "block w-8 h-0.5 bg-nemo-forest transition-all duration-300",
              mobileMenuOpen && "opacity-0"
            )}></span>
            <span className={cn(
              "block w-8 h-0.5 bg-nemo-forest transition-all duration-300",
              mobileMenuOpen && "-rotate-45 -translate-y-2.5"
            )}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col px-4 pt-2 pb-4 space-y-2">
            <a 
              href="#about" 
              className="px-4 py-2 font-medium text-gray-600 hover:text-nemo-forest transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos
            </a>
            <a 
              href="#excursions" 
              className="px-4 py-2 font-medium text-gray-600 hover:text-nemo-forest transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nos excursions
            </a>
            <a 
              href="#testimonials" 
              className="px-4 py-2 font-medium text-gray-600 hover:text-nemo-forest transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Témoignages
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="w-full bg-nemo-forest hover:bg-nemo-moss">
                Contact
              </Button>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
