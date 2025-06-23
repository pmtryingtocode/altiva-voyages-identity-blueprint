
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

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

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
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
  );
};

export default TestimonialsSection;
