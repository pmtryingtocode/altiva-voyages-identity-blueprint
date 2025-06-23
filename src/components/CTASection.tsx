
import { Button } from "@/components/ui/button";
import { Calendar, Users, Heart } from "lucide-react";

const CTASection = () => {
  return (
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
  );
};

export default CTASection;
