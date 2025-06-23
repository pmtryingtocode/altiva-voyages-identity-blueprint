
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experienceCategories = [
  {
    title: "Wellness Regenerativo",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
    description: "Retreats exclusivos que harmonizam corpo, mente e natureza",
    badge: "Portugal"
  },
  {
    title: "Gastronomia & Ritual",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070", 
    description: "Experiências culinárias com produtores locais e chefs renomados",
    badge: "França"
  },
  {
    title: "Movimento & Aventura",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2070",
    description: "Trail running, hiking e práticas ativas em paisagens únicas",
    badge: "Itália"
  },
  {
    title: "Arquitetura & História",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070",
    description: "Palácios, conventos e villas históricas cuidadosamente restauradas",
    badge: "Sul da Europa"
  }
];

const ExperienceCategories = () => {
  return (
    <section id="experiences" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-sage-800 mb-6">
            Jornadas Transformadoras com Raízes na Natureza
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Cada experiência harmoniza movimento, bem-estar e a beleza pristina do sul da Europa.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
            {experienceCategories.map((category, index) => (
              <Card key={index} className="w-80 flex-shrink-0 overflow-hidden group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-sage-700">
                    {category.badge}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl text-sage-800 mb-2">{category.title}</h3>
                  <p className="text-stone-600">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceCategories;
