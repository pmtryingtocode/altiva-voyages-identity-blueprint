
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
import { MapPin, Heart, Zap, Leaf, Users, Calendar, Play } from "lucide-react";
import { Link } from "react-router-dom";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
    title: "Mountain Meditation Retreats",
    subtitle: "Find your center in Portugal's pristine wilderness"
  },
  {
    url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070", 
    title: "Coastal Recovery Experiences",
    subtitle: "Restore and rejuvenate by the Atlantic's healing waters"
  },
  {
    url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070",
    title: "Active Forest Journeys", 
    subtitle: "Movement and mindfulness in ancient oak forests"
  }
];

const feelings = [
  { id: "stressed", label: "Overwhelmed & Stressed", icon: <Zap className="h-5 w-5" /> },
  { id: "disconnected", label: "Disconnected from Nature", icon: <Leaf className="h-5 w-5" /> },
  { id: "burnt-out", label: "Burnt Out & Fatigued", icon: <Heart className="h-5 w-5" /> },
  { id: "seeking-purpose", label: "Seeking Purpose", icon: <MapPin className="h-5 w-5" /> }
];

const retreatTypes = [
  {
    title: "Performance Recovery",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070",
    description: "Biohacking meets nature for optimal recovery"
  },
  {
    title: "Mindful Movement",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070", 
    description: "Yoga, hiking, and conscious movement practices"
  },
  {
    title: "Digital Detox",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
    description: "Disconnect to reconnect with your true self"
  },
  {
    title: "Thermal Wellness",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070",
    description: "Ancient healing waters and modern spa science"
  }
];

const testimonials = [
  {
    quote: "Three days at Altiva's forest retreat completely reset my nervous system. I returned home feeling like a different person.",
    author: "Sarah M.",
    location: "Silicon Valley Executive",
    journey: "5-Day Forest Immersion"
  },
  {
    quote: "The perfect blend of challenge and restoration. Every detail was thoughtfully curated for transformation.",
    author: "Michael R.", 
    location: "NYC Entrepreneur",
    journey: "Coastal Recovery Retreat"
  },
  {
    quote: "I've tried many wellness retreats, but Altiva's approach to active recovery is unmatched in authenticity.",
    author: "Lisa K.",
    location: "LA Creative Director", 
    journey: "Mountain Meditation Intensive"
  }
];

const Index = () => {
  const [selectedFeeling, setSelectedFeeling] = useState("");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleFeelingSelect = (feelingId: string) => {
    setSelectedFeeling(feelingId);
    // Navigate to curated journeys based on feeling
    console.log(`Selected feeling: ${feelingId}`);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-stone-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-serif text-2xl text-emerald-800">
              ALTIVA <span className="text-sm font-sans text-stone-600">WELLNESS JOURNEYS</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#discover" className="text-stone-700 hover:text-emerald-700 transition-colors">Discover</a>
              <a href="#how-it-works" className="text-stone-700 hover:text-emerald-700 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-stone-700 hover:text-emerald-700 transition-colors">Stories</a>
              <a href="#contact" className="text-stone-700 hover:text-emerald-700 transition-colors">Contact</a>
            </div>
            <Button className="bg-emerald-700 hover:bg-emerald-800 text-white">
              Plan My Journey
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
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 to-transparent"></div>
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
                          <Button size="lg" className="bg-white text-emerald-800 hover:bg-stone-100">
                            Active Escapes for Total Renewal
                          </Button>
                          <Button 
                            size="lg" 
                            className="bg-emerald-800/80 text-white border-2 border-white/50 hover:bg-emerald-700 hover:border-white backdrop-blur-sm"
                          >
                            <Play className="h-4 w-4 mr-2" />
                            Our Story
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

      {/* Feelings Quiz Section */}
      <section id="discover" className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-4xl text-emerald-800 mb-6">
              How Are You Feeling Right Now?
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              We'll curate the perfect wellness journey based on what your body and mind need most.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {feelings.map((feeling) => (
              <Card 
                key={feeling.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedFeeling === feeling.id ? 'ring-2 ring-emerald-500 bg-emerald-50' : ''
                }`}
                onClick={() => handleFeelingSelect(feeling.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    {feeling.icon}
                  </div>
                  <h3 className="font-medium text-stone-800 mb-2">{feeling.label}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedFeeling && (
            <div className="text-center mt-8">
              <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800">
                Show My Perfect Retreats
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Retreat Types Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-emerald-800 mb-6">
              Transformative Journeys Rooted in Nature
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Each retreat is designed to harmonize movement, wellness, and Portugal's pristine natural beauty.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
              {retreatTypes.map((retreat, index) => (
                <Card key={index} className="w-80 flex-shrink-0 overflow-hidden group cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={retreat.image}
                      alt={retreat.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl text-emerald-800 mb-2">{retreat.title}</h3>
                    <p className="text-stone-600">{retreat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl text-emerald-800 mb-6">
                Your Journey to Renewal
              </h2>
              <p className="text-lg text-stone-600">
                We design each experience around your unique needs and wellness goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-emerald-800 mb-2">Discover Your Needs</h3>
                    <p className="text-stone-600">We start with understanding where you are and where you want to be.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-emerald-800 mb-2">Curate Your Experience</h3>
                    <p className="text-stone-600">Every detail is personalized to create your perfect balance of movement and rest.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Leaf className="h-5 w-5 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-emerald-800 mb-2">Transform & Integrate</h3>
                    <p className="text-stone-600">Return home with practices and insights that continue your journey.</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070"
                  alt="Wellness journey process"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl text-emerald-800 mb-6">
                Stories of Transformation
              </h2>
            </div>

            <Card className="p-8 text-center">
              <CardContent>
                <blockquote className="text-xl text-stone-700 mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="border-t pt-6">
                  <p className="font-medium text-emerald-800 mb-1">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-stone-600 text-sm mb-1">
                    {testimonials[currentTestimonial].location}
                  </p>
                  <Badge variant="outline" className="border-emerald-200 text-emerald-700">
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
                    index === currentTestimonial ? 'bg-emerald-600' : 'bg-stone-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plan Your Journey CTA */}
      <section id="contact" className="py-20 bg-emerald-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl text-emerald-800 mb-6">
              Ready to Begin Your Wellness Journey?
            </h2>
            <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
              Let us create a transformative experience tailored to your unique needs and wellness goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
              <div className="text-center">
                <Calendar className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm text-stone-600">Flexible Dates</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm text-stone-600">Individual or Group</p>
              </div>
              <div className="text-center">
                <Heart className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm text-stone-600">Fully Personalized</p>
              </div>
            </div>

            <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-white text-lg px-8 py-4">
              Plan My Wellness Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-serif text-2xl mb-4">
                ALTIVA <span className="text-sm font-sans text-emerald-200">WELLNESS JOURNEYS</span>
              </div>
              <p className="text-emerald-200 text-sm leading-relaxed">
                Transformative wellness experiences rooted in Portugal's pristine nature.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Experiences</h4>
              <ul className="space-y-2 text-sm text-emerald-200">
                <li><a href="#" className="hover:text-white transition-colors">Performance Recovery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mindful Movement</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Detox</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Thermal Wellness</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-emerald-200">
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wellness Philosophy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-emerald-200">
                <li>Lisbon, Portugal</li>
                <li>New York, USA</li>
                <li>info@altivawellness.com</li>
                <li>+351 123 456 789</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-emerald-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-emerald-200 text-sm">
              © 2024 Altiva Wellness Journeys. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-emerald-200 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-emerald-200 hover:text-white transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
