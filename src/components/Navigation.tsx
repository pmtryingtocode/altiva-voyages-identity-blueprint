
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-stone-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-serif text-2xl text-sage-800">
            ALTIVA <span className="text-sm font-sans text-stone-600 block -mt-1">VOYAGES</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#destinations" className="text-stone-700 hover:text-sage-700 transition-colors">Destinos</a>
            <a href="#experiences" className="text-stone-700 hover:text-sage-700 transition-colors">Experiências</a>
            <a href="#about" className="text-stone-700 hover:text-sage-700 transition-colors">Nossa História</a>
            <a href="#journal" className="text-stone-700 hover:text-sage-700 transition-colors">Journal</a>
            <a href="#contact" className="text-stone-700 hover:text-sage-700 transition-colors">Contacto</a>
          </div>
          <Button className="bg-sage-700 hover:bg-sage-800 text-white">
            Desenhe a Sua Jornada
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
