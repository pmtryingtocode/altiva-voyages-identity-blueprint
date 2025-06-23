
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Leaf, Mountain, Users, Award, Globe } from "lucide-react";

const About = () => {
  const founders = [
    {
      name: "Dr. Sofia Mendes",
      role: "Founder & Wellness Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?q=80&w=2070",
      bio: "Former neuroscientist turned wellness pioneer, Sofia bridges cutting-edge research with ancient healing practices."
    },
    {
      name: "Miguel Santos", 
      role: "Co-Founder & Experience Curator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070",
      bio: "A native Portuguese guide with 15 years creating transformative nature experiences for discerning travelers."
    }
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Authentic Connection",
      description: "We believe true wellness comes from genuine connection—to nature, to others, and to yourself."
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Regenerative Practice", 
      description: "Every journey nourishes both the traveler and the land, creating positive impact for generations."
    },
    {
      icon: <Mountain className="h-6 w-6" />,
      title: "Transformative Challenge",
      description: "Growth happens at the edge of comfort. We guide you safely through meaningful transformation."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Intimate Scale",
      description: "Small groups and personalized attention ensure each journey is deeply meaningful and effective."
    }
  ];

  const achievements = [
    { icon: <Award className="h-5 w-5" />, text: "Condé Nast Traveler Best Wellness Retreats 2024" },
    { icon: <Globe className="h-5 w-5" />, text: "Travel + Leisure World's Best Awards Finalist" },
    { icon: <Heart className="h-5 w-5" />, text: "98% Guest Satisfaction Rating" },
    { icon: <Leaf className="h-5 w-5" />, text: "Certified B-Corporation for Social Impact" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-emerald-50 to-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl text-emerald-800 mb-6 leading-tight">
              Our Story Begins with a Simple Truth
            </h1>
            <p className="text-xl text-stone-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              True wellness isn't found in a spa menu or a fitness plan. 
              It emerges when we reconnect with nature, movement, and the quiet wisdom of our bodies.
            </p>
            <Badge variant="outline" className="border-emerald-200 text-emerald-700 px-4 py-2">
              Founded in Portugal's Pristine Wilderness
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
                alt="Our Story"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <Button 
                  size="lg" 
                  className="bg-white/90 text-emerald-800 hover:bg-white rounded-full h-16 w-16 p-0"
                >
                  <svg className="h-6 w-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </Button>
              </div>
            </div>
            <div className="text-center">
              <h2 className="font-serif text-3xl text-emerald-800 mb-4">
                Watch Our Journey Unfold
              </h2>
              <p className="text-stone-600 leading-relaxed">
                From a chance encounter in Portugal's ancient forests to creating 
                transformative experiences for wellness seekers worldwide.
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
              <h2 className="font-serif text-4xl text-emerald-800 mb-6">
                Meet the Visionaries
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Two paths converged in Portugal's wilderness, creating a new approach to wellness travel.
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
                    <h3 className="font-serif text-2xl text-emerald-800 mb-2">
                      {founder.name}
                    </h3>
                    <p className="text-emerald-600 font-medium mb-4">
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
              <h2 className="font-serif text-4xl text-emerald-800 mb-6">
                What Guides Us
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Our core values shape every experience we create and every relationship we build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-700">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-emerald-800 mb-3">
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
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl text-emerald-800 mb-6">
                Recognition & Impact
              </h2>
              <p className="text-lg text-stone-600">
                Honored to be recognized by leading wellness and travel authorities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-6 rounded-lg">
                  <div className="text-emerald-600">
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
            <h2 className="font-serif text-4xl text-emerald-800 mb-8">
              Our Mission
            </h2>
            <blockquote className="text-2xl text-stone-700 leading-relaxed italic mb-8">
              "To design regenerative and personalized travel experiences that harmonize movement, 
              wellness, and nature—promoting total physical, emotional, and mental recovery 
              for our most discerning clients."
            </blockquote>
            <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800">
              Start Your Transformation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
