
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const destinations = [
  {
    name: "Alentejo Secreto",
    country: "Portugal",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2070",
    description: "Vinhas, cortiça e horizontes infinitos",
    experiences: "Yoga, Vinhos, Equitação"
  },
  {
    name: "Provença Íntima",
    country: "França", 
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2070",
    description: "Lavanda, mercados locais e mas rurais",
    experiences: "Culinária, Ciclismo, Spa"
  },
  {
    name: "Chianti Autêntico",
    country: "Itália",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2070",
    description: "Colinas, oliveiras e tradições milenares",
    experiences: "Trufa, Caminhadas, Arte"
  }
];

const FeaturedDestinations = () => {
  return (
    <section id="destinations" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-sage-800 mb-6">
            Destinos Cuidadosamente Escolhidos
          </h2>
          <p className="text-lg text-stone-600">
            Portugal, França e Itália revelam os seus segredos mais autênticos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer">
              <div className="aspect-square overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl text-sage-800">{destination.name}</h3>
                  <Badge variant="outline" className="border-sage-200 text-sage-700">
                    {destination.country}
                  </Badge>
                </div>
                <p className="text-stone-600 mb-3">{destination.description}</p>
                <p className="text-sm text-sage-700 font-medium">{destination.experiences}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
