
import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-altiva-purple-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="block mb-4">
              <span className="font-playfair text-2xl font-semibold tracking-wide">
                ALTIVA
              </span>
              <span className="block text-xs tracking-widest text-altiva-gray-light font-montserrat mt-[-5px] ml-[2px]">
                VOYAGES
              </span>
            </Link>
            <p className="font-montserrat text-sm text-altiva-gray-light max-w-xs">
              Extraordinary journeys, authentically crafted for the discerning traveler
              seeking Europe's most enchanting experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-altiva-gray-light hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-altiva-gray-light hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-altiva-gray-light hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@altivavoyages.com"
                className="text-altiva-gray-light hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-white font-medium text-lg mb-4">
              Destinations
            </h3>
            <ul className="space-y-2 font-montserrat text-sm text-altiva-gray-light">
              <li>
                <Link to="/destinations/portugal" className="hover:text-white transition-colors">
                  Portugal
                </Link>
              </li>
              <li>
                <Link to="/destinations/france" className="hover:text-white transition-colors">
                  France
                </Link>
              </li>
              <li>
                <Link to="/destinations/italy" className="hover:text-white transition-colors">
                  Italy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-white font-medium text-lg mb-4">
              Experiences
            </h3>
            <ul className="space-y-2 font-montserrat text-sm text-altiva-gray-light">
              <li>
                <Link to="/experiences/gastronomy" className="hover:text-white transition-colors">
                  Gastronomy
                </Link>
              </li>
              <li>
                <Link to="/experiences/wellbeing" className="hover:text-white transition-colors">
                  Well-being
                </Link>
              </li>
              <li>
                <Link to="/experiences/culture" className="hover:text-white transition-colors">
                  Culture
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-playfair text-white font-medium text-lg mb-4">
              Newsletter
            </h3>
            <p className="font-montserrat text-sm text-altiva-gray-light mb-4">
              Subscribe for curated travel inspiration and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-altiva-gray-light focus-visible:ring-altiva-purple-light"
              />
              <Button className="bg-white text-altiva-purple-dark hover:bg-altiva-gray-light whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="font-montserrat text-xs text-altiva-gray-light mb-4 md:mb-0">
            © {new Date().getFullYear()} Altiva Voyages. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 font-montserrat text-xs text-altiva-gray-light">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
