
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Calendar, Users, Heart, Leaf, Mountain, Compass } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDates: "",
    groupSize: "",
    currentMood: "",
    interests: "",
    message: "",
  });

  const moods = [
    { value: "renewal", label: "Preciso de Renovação", icon: <Leaf className="h-4 w-4" /> },
    { value: "adventure", label: "Quero Aventura Ativa", icon: <Mountain className="h-4 w-4" /> },
    { value: "connection", label: "Busco Conexão Autêntica", icon: <Heart className="h-4 w-4" /> },
    { value: "discovery", label: "Desejo Descobrir", icon: <Compass className="h-4 w-4" /> }
  ];

  const interests = [
    "Wellness & Spa",
    "Movimento & Aventura",
    "Gastronomia Local",
    "História & Arquitetura",
    "Vinhos & Vinhas",
    "Práticas Espirituais",
    "Arte & Cultura",
    "Natureza & Paisagens"
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Consulta de viagem:", formData);
    toast.success("Obrigado pela sua consulta. A nossa equipa entrará em contacto em 24 horas.", {
      duration: 5000,
    });
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      travelDates: "",
      groupSize: "",
      currentMood: "",
      interests: "",
      message: "",
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-sage-50 to-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl text-sage-800 mb-6 leading-tight">
              Desenhe a Sua Jornada
            </h1>
            <p className="text-xl text-stone-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Conte-nos sobre os seus desejos e aspirações de viagem. 
              Criamos uma experiência transformadora que honra onde está e o guia para onde quer estar.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="border-sage-200 text-sage-700">Jornadas Individuais</Badge>
              <Badge variant="outline" className="border-sage-200 text-sage-700">Retreats de Grupo</Badge>
              <Badge variant="outline" className="border-sage-200 text-sage-700">Experiências Corporativas</Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl text-sage-800 mb-6">
                  Comece a Sua Transformação
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-sm font-medium text-stone-700 mb-2"
                      >
                        Nome Completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-stone-300 focus-visible:ring-sage-500"
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-sm font-medium text-stone-700 mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-stone-300 focus-visible:ring-sage-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="phone" 
                        className="block text-sm font-medium text-stone-700 mb-2"
                      >
                        Telefone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-stone-300 focus-visible:ring-sage-500"
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="travelDates" 
                        className="block text-sm font-medium text-stone-700 mb-2"
                      >
                        Datas Preferenciais
                      </label>
                      <Input
                        id="travelDates"
                        name="travelDates"
                        placeholder="ex: Março 2024 ou flexível"
                        value={formData.travelDates}
                        onChange={handleChange}
                        className="border-stone-300 focus-visible:ring-sage-500"
                      />
                    </div>
                  </div>

                  {/* Journey Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="groupSize" 
                        className="block text-sm font-medium text-stone-700 mb-2"
                      >
                        Tamanho do Grupo
                      </label>
                      <Select onValueChange={handleSelectChange("groupSize")} value={formData.groupSize}>
                        <SelectTrigger className="border-stone-300 focus:ring-sage-500">
                          <SelectValue placeholder="Selecione o tamanho" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="solo">Jornada Solo</SelectItem>
                          <SelectItem value="couple">Casal (2 pessoas)</SelectItem>
                          <SelectItem value="small-group">Grupo Pequeno (3-6 pessoas)</SelectItem>
                          <SelectItem value="corporate">Grupo Corporativo (7+ pessoas)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label 
                        htmlFor="currentMood" 
                        className="block text-sm font-medium text-stone-700 mb-2"
                      >
                        Como se sente neste momento?
                      </label>
                      <Select onValueChange={handleSelectChange("currentMood")} value={formData.currentMood}>
                        <SelectTrigger className="border-stone-300 focus:ring-sage-500">
                          <SelectValue placeholder="Selecione o seu estado atual" />
                        </SelectTrigger>
                        <SelectContent>
                          {moods.map((mood) => (
                            <SelectItem key={mood.value} value={mood.value}>
                              <div className="flex items-center space-x-2">
                                {mood.icon}
                                <span>{mood.label}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Interests */}
                  <div>
                    <label 
                      htmlFor="interests" 
                      className="block text-sm font-medium text-stone-700 mb-3"
                    >
                      Que experiências mais o atraem?
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      {interests.map((interest, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <input 
                            type="checkbox" 
                            id={`interest-${index}`}
                            className="rounded border-stone-300 text-sage-600 focus:ring-sage-500"
                          />
                          <label 
                            htmlFor={`interest-${index}`}
                            className="text-sm text-stone-600 cursor-pointer"
                          >
                            {interest}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium text-stone-700 mb-2"
                    >
                      Conte-nos sobre a sua jornada ideal
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Partilhe qualquer necessidade específica, preferências ou questões sobre a sua jornada de bem-estar..."
                      className="border-stone-300 focus-visible:ring-sage-500 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-sage-700 hover:bg-sage-800 text-white"
                  >
                    Comece a Minha Jornada
                  </Button>

                  <p className="text-center text-xs text-stone-500">
                    Ao submeter este formulário, concorda com a nossa política de privacidade. 
                    Responderemos em 24 horas com uma consulta personalizada.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Quick Access */}
          <div className="space-y-8">
            
            {/* Contact Details */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl text-sage-800 mb-4">
                  Entre em Contacto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-sage-600 mt-1" />
                    <div>
                      <p className="font-medium text-stone-800">Escritório Lisboa</p>
                      <p className="text-sm text-stone-600">Quinta da Regaleira, Sintra</p>
                      <p className="text-sm text-stone-600">2710-567 Sintra, Portugal</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-sage-600 mt-1" />
                    <div>
                      <p className="font-medium text-stone-800">Telefone</p>
                      <p className="text-sm text-stone-600">+351 123 456 789</p>
                      <p className="text-sm text-stone-600">Disponível 9h-18h CET</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-sage-600 mt-1" />
                    <div>
                      <p className="font-medium text-stone-800">Email</p>
                      <p className="text-sm text-stone-600">hello@altivavoyages.com</p>
                      <p className="text-sm text-stone-600">Resposta em 24 horas</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl text-sage-800 mb-4">
                  Ações Rápidas
                </h3>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-sage-200 text-sage-700 hover:bg-sage-50"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Agendar Chamada
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-sage-200 text-sage-700 hover:bg-sage-50"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Consulta de Grupo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-sage-200 text-sage-700 hover:bg-sage-50"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Avaliação de Bem-estar
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Preview */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl text-sage-800 mb-4">
                  Perguntas Frequentes
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-stone-800 mb-1">Qual a duração das experiências?</p>
                    <p className="text-stone-600">3-10 dias, personalizados às suas necessidades</p>
                  </div>
                  <div>
                    <p className="font-medium text-stone-800 mb-1">O que está incluído?</p>
                    <p className="text-stone-600">Alojamento, refeições, atividades e orientação de bem-estar</p>
                  </div>
                  <div>
                    <p className="font-medium text-stone-800 mb-1">Nível de fitness necessário?</p>
                    <p className="text-stone-600">Todos os níveis são bem-vindos - adaptamo-nos a si</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
