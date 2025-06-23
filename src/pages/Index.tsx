
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { MapPin, Heart, Compass, Mountain, Users, Calendar, Play, Leaf, Star } from "lucide-react";

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

const testimonials = [
  {
    quote: "Uma experiência que mudou a minha perspectiva sobre viagem e bem-estar. A atenção ao detalhe e autenticidade são incomparáveis.",
    author: "Sarah M.",
    location: "Manhattan, NYC",
    journey: "Retreat de 7 dias no Alentejo",
    rating: 5
  },
  {
    quote: "A Altiva criou o equilíbrio perfeito entre aventura e regeneração. Voltei completamente renovada.",
    author: "Michael R.", 
    location: "Silicon Valley",
    journey: "Experiência Gastronómica na Provença",
    rating: 5
  },
  {
    quote: "Cada momento foi cuidadosamente pensado. Esta é a definição de luxo autêntico.",
    author: "Lisa K.",
    location: "Chicago", 
    journey: "Aventura Ativa na Toscana",
    rating: 5
  }
];

const Index = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const moods = [
    { id: "renewal", label: "Preciso de Renovação", icon: <Leaf className="h-5 w-5" /> },
    { id: "adventure", label: "Quero Aventura Ativa", icon: <Mountain className="h-5 w-5" /> },
    { id: "connection", label: "Busco Conexão Autêntica", icon: <Heart className="h-5 w-5" /> },
    { id: "discovery", label: "Desejo Descobrir", icon: <Compass className="h-5 w-5" /> }
  ];

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId);
    console.log(`Selected mood: ${moodId}`);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
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

      {/* Hero Carousel */}
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

      {/* Mood Selection */}
      <section id="discover" className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-4xl text-sage-800 mb-6">
              Como Se Sente Neste Momento?
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Criamos experiências sob medida com base no que o seu espírito mais precisa agora.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {moods.map((mood) => (
              <Card 
                key={mood.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedMood === mood.id ? 'ring-2 ring-sage-500 bg-sage-50' : ''
                }`}
                onClick={() => handleMoodSelect(mood.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-sage-100 text-sage-700">
                    {mood.icon}
                  </div>
                  <h3 className="font-medium text-stone-800 mb-2">{mood.label}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedMood && (
            <div className="text-center mt-8">
              <Button size="lg" className="bg-sage-700 hover:bg-sage-800">
                Descubra as Suas Experiências Ideais
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Experience Categories */}
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

      {/* Featured Destinations */}
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

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl text-sage-800 mb-6">
                Vozes dos Nossos Viajantes
              </h2>
            </div>

            <Card className="p-8 text-center">
              <CardContent>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-sage-500 text-sage-500" />
                  ))}
                </div>
                <blockquote className="text-xl text-stone-700 mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="border-t pt-6">
                  <p className="font-medium text-sage-800 mb-1">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-stone-600 text-sm mb-1">
                    {testimonials[currentTestimonial].location}
                  </p>
                  <Badge variant="outline" className="border-sage-200 text-sage-700">
                    {testimonials[currentTestimonial].journey}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-sage-600' : 'bg-stone-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-sage-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl text-sage-800 mb-6">
              Pronto Para Iniciar a Sua Jornada?
            </h2>
            <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
              Permita-nos desenhar uma experiência transformadora, cuidadosamente adaptada aos seus desejos mais profundos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
              <div className="text-center">
                <Calendar className="h-8 w-8 text-sage-600 mx-auto mb-2" />
                <p className="text-sm text-stone-600">Datas Flexíveis</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-sage-600 mx-auto mb-2" />
                <p className="text-sm text-stone-600">Individual ou Grupo</p>
              </div>
              <div className="text-center">
                <Heart className="h-8 w-8 text-sage-600 mx-auto mb-2" />
                <p className="text-sm text-stone-600">Totalmente Personalizado</p>
              </div>
            </div>

            <Button size="lg" className="bg-sage-700 hover:bg-sage-800 text-white text-lg px-8 py-4">
              Desenhe a Sua Jornada
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-serif text-2xl mb-4">
                ALTIVA <span className="text-sm font-sans text-sage-200 block -mt-1">VOYAGES</span>
              </div>
              <p className="text-sage-200 text-sm leading-relaxed">
                Experiências transformadoras com raízes na natureza pristina do sul da Europa.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Experiências</h4>
              <ul className="space-y-2 text-sm text-sage-200">
                <li><a href="#" className="hover:text-white transition-colors">Wellness Regenerativo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gastronomia & Ritual</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Movimento & Aventura</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Arquitetura & História</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Destinos</h4>
              <ul className="space-y-2 text-sm text-sage-200">
                <li><a href="#" className="hover:text-white transition-colors">Portugal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">França</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Itália</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sul da Europa</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-sage-200">
                <li>Lisboa, Portugal</li>
                <li>Nova Iorque, EUA</li>
                <li>info@altivavoyages.com</li>
                <li>+351 123 456 789</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-sage-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sage-200 text-sm">
              © 2024 Altiva Voyages. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sage-200 hover:text-white transition-colors text-sm">Política de Privacidade</a>
              <a href="#" className="text-sage-200 hover:text-white transition-colors text-sm">Termos de Serviço</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
