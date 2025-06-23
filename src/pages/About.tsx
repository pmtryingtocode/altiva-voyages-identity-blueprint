
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Leaf, Mountain, Users, Award, Globe, MapPin } from "lucide-react";

const About = () => {
  const founders = [
    {
      name: "Dr. Sofia Mendes",
      role: "Fundadora & Diretora de Experiências",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?q=80&w=2070",
      bio: "Ex-neurocientista transformada em pioneira do wellness, Sofia conecta investigação de ponta com práticas ancestrais de cura."
    },
    {
      name: "Miguel Santos", 
      role: "Co-Fundador & Curador Cultural",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070",
      bio: "Guia português nativo com 15 anos a criar experiências transformadoras para viajantes exigentes no sul da Europa."
    }
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Conexão Autêntica",
      description: "Acreditamos que o verdadeiro bem-estar nasce da conexão genuína—com a natureza, com outros e consigo mesmo."
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Prática Regenerativa", 
      description: "Cada jornada nutre tanto o viajante como a terra, criando impacto positivo para gerações futuras."
    },
    {
      icon: <Mountain className="h-6 w-6" />,
      title: "Desafio Transformador",
      description: "O crescimento acontece no limite do conforto. Guiamo-lo com segurança através de transformações profundas."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Escala Íntima",
      description: "Grupos pequenos e atenção personalizada garantem que cada jornada seja profundamente significativa."
    }
  ];

  const achievements = [
    { icon: <Award className="h-5 w-5" />, text: "Condé Nast Traveler Melhores Retreats de Wellness 2024" },
    { icon: <Globe className="h-5 w-5" />, text: "Travel + Leisure World's Best Awards Finalista" },
    { icon: <Heart className="h-5 w-5" />, text: "98% Taxa de Satisfação dos Clientes" },
    { icon: <Leaf className="h-5 w-5" />, text: "B-Corporation Certificada para Impacto Social" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-sage-50 to-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl text-sage-800 mb-6 leading-tight">
              A Nossa História Começa com uma Verdade Simples
            </h1>
            <p className="text-xl text-stone-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              O verdadeiro bem-estar não se encontra num menu de spa ou num plano de fitness. 
              Emerge quando nos reconectamos com a natureza, o movimento e a sabedoria silenciosa dos nossos corpos.
            </p>
            <Badge variant="outline" className="border-sage-200 text-sage-700 px-4 py-2">
              Fundada na Natureza Pristina de Portugal
            </Badge>
          </div>
        </div>
      </section>

      {/* Story Video Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl mb-8">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070"
                alt="Nossa História"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <Button 
                  size="lg" 
                  className="bg-white/90 text-sage-800 hover:bg-white rounded-full h-16 w-16 p-0"
                >
                  <svg className="h-6 w-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </Button>
              </div>
            </div>
            <div className="text-center">
              <h2 className="font-serif text-3xl text-sage-800 mb-4">
                Veja a Nossa Jornada Desenrolar-se
              </h2>
              <p className="text-stone-600 leading-relaxed">
                De um encontro casual nas florestas ancestrais de Portugal à criação de 
                experiências transformadoras para buscadores de bem-estar em todo o mundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl text-sage-800 mb-6">
                Conheça os Visionários
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Dois caminhos convergiram na natureza selvagem de Portugal, criando uma nova abordagem ao turismo de bem-estar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {founders.map((founder, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8">
                    <h3 className="font-serif text-2xl text-sage-800 mb-2">
                      {founder.name}
                    </h3>
                    <p className="text-sage-600 font-medium mb-4">
                      {founder.role}
                    </p>
                    <p className="text-stone-600 leading-relaxed">
                      {founder.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl text-sage-800 mb-6">
                O Que Nos Orienta
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Os nossos valores centrais moldam cada experiência que criamos e cada relação que construímos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0 text-sage-700">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-sage-800 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl text-sage-800 mb-6">
                Reconhecimento & Impacto
              </h2>
              <p className="text-lg text-stone-600">
                Honrados por ser reconhecidos pelas principais autoridades de bem-estar e viagem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-6 rounded-lg">
                  <div className="text-sage-600">
                    {achievement.icon}
                  </div>
                  <p className="text-stone-700 font-medium">
                    {achievement.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl text-sage-800 mb-8">
              A Nossa Missão
            </h2>
            <blockquote className="text-2xl text-stone-700 leading-relaxed italic mb-8">
              "Desenhar experiências regeneradoras que harmonizam movimento, 
              bem-estar e natureza—promovendo uma recuperação física, emocional 
              e mental total para os nossos clientes mais exigentes."
            </blockquote>
            <Button size="lg" className="bg-sage-700 hover:bg-sage-800">
              Inicie a Sua Transformação
            </Button>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl text-sage-800 mb-6">
                Onde Nos Encontrar
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <MapPin className="h-8 w-8 text-sage-600 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-sage-800 mb-2">Lisboa</h3>
                <p className="text-stone-600 text-sm">Sede Europeia</p>
                <p className="text-stone-600 text-sm">Quinta da Regaleira, Sintra</p>
              </Card>
              <Card className="text-center p-6">
                <MapPin className="h-8 w-8 text-sage-600 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-sage-800 mb-2">Nova Iorque</h3>
                <p className="text-stone-600 text-sm">Escritório Norte-Americano</p>
                <p className="text-stone-600 text-sm">Manhattan, NYC</p>
              </Card>
              <Card className="text-center p-6">
                <MapPin className="h-8 w-8 text-sage-600 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-sage-800 mb-2">Provença</h3>
                <p className="text-stone-600 text-sm">Centro de Experiências</p>
                <p className="text-stone-600 text-sm">Aix-en-Provence, França</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
