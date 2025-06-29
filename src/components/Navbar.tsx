
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Destinations", path: "/destinations" },
    { name: "Experiences", path: "/experiences" },
    { name: "Journal", path: "/journal" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-altiva-purple-dark font-playfair text-2xl md:text-3xl font-semibold tracking-wide"
        >
          ALTIVA
          <span className="block text-xs tracking-widest text-altiva-gray-medium font-montserrat mt-[-5px] ml-[2px]">
            VOYAGES
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-montserrat text-sm font-medium text-altiva-gray-dark hover:text-altiva-purple transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant="outline"
            className="border-altiva-purple-secondary text-altiva-purple-secondary hover:bg-altiva-purple-secondary hover:text-white transition-colors duration-300"
          >
            Plan Your Journey
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-altiva-gray-dark" />
          ) : (
            <Menu className="h-6 w-6 text-altiva-gray-dark" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-montserrat text-sm font-medium text-altiva-gray-dark py-2 hover:text-altiva-purple-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              variant="outline"
              className="border-altiva-purple-secondary text-altiva-purple-secondary hover:bg-altiva-purple-secondary hover:text-white transition-colors duration-300 mt-2"
            >
              Plan Your Journey
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
