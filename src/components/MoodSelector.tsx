
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Leaf, Mountain, Compass } from "lucide-react";

const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState("");

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
  );
};

export default MoodSelector;
