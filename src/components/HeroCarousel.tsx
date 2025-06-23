
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play } from "lucide-react";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
    title: "Retreats Ativos em Portugal",
    subtitle: "Reconexão profunda entre vinhas e montanhas do Alentejo"
  },
  {
    url: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070", 
    title: "Wellness na Toscana",
    subtitle: "Movimento e quietude entre oliveiras centenárias"
  },
  {
    url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2070",
    title: "Costa Atlântica Francesa",
    subtitle: "Regeneração junto ao mar e rituais de bem-estar autênticos"
  }
];

const HeroCarousel = () => {
  return (
    <section className="relative h-screen">
      <Carousel className="h-full">
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-screen">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${image.url}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-sage-900/70 to-transparent"></div>
                </div>
                <div className="relative h-full flex items-center">
                  <div className="container mx-auto px-6">
                    <div className="max-w-2xl text-white">
                      <h1 className="font-serif text-5xl md:text-6xl font-light leading-tight mb-6">
                        {image.title}
                      </h1>
                      <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
                        {image.subtitle}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="bg-white text-sage-800 hover:bg-stone-100">
                          Active Escapes for Total Renewal
                        </Button>
                        <Button 
                          size="lg" 
                          className="bg-sage-800/80 text-white border-2 border-white/50 hover:bg-sage-700 hover:border-white backdrop-blur-sm"
                        >
                          <Play className="h-4 w-4 mr-2" />
                          Nossa História
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-6" />
        <CarouselNext className="right-6" />
      </Carousel>
    </section>
  );
};

export default HeroCarousel;
