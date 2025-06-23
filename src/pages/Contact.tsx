
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
import { MapPin, Phone, Mail, Calendar, Users, Heart, Zap, Leaf } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDates: "",
    groupSize: "",
    currentFeeling: "",
    goals: "",
    message: "",
  });

  const feelings = [
    { value: "stressed", label: "Overwhelmed & Stressed", icon: <Zap className="h-4 w-4" /> },
    { value: "disconnected", label: "Disconnected from Nature", icon: <Leaf className="h-4 w-4" /> },
    { value: "burnt-out", label: "Burnt Out & Fatigued", icon: <Heart className="h-4 w-4" /> },
    { value: "seeking-purpose", label: "Seeking Purpose", icon: <MapPin className="h-4 w-4" /> }
  ];

  const wellnessGoals = [
    "Stress reduction & nervous system reset",
    "Physical fitness & movement",
    "Mental clarity & focus",
    "Spiritual connection & meaning",
    "Digital detox & mindfulness",
    "Recovery from burnout",
    "Relationship with nature",
    "Energy & vitality restoration"
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
    console.log("Wellness journey inquiry:", formData);
    toast.success("Thank you for your inquiry. Our wellness team will be in touch within 24 hours.", {
      duration: 5000,
    });
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      travelDates: "",
      groupSize: "",
      currentFeeling: "",
      goals: "",
      message: "",
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-emerald-50 to-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl text-emerald-800 mb-6 leading-tight">
              Plan Your Wellness Journey
            </h1>
            <p className="text-xl text-stone-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Tell us about your wellness needs and aspirations. 
              We'll curate a transformative experience that honors where you are and guides you where you want to be.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="border-emerald-200 text-emerald-700">Individual Journeys</Badge>
              <Badge variant="outline" className="border-emerald-200 text-emerald-700">Group Retreats</Badge>
              <Badge variant="outline" className="border-emerald-200 text-emerald-700">Corporate Wellness</Badge>
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
                <h2 className="font-serif text-3xl text-emerald-800 mb-6">
                  Start Your Transformation
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-sm font-medium text-stone-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-stone-300 focus-visible:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-sm font-medium text-stone-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-stone-300 focus-visible:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="phone" 
                        className="block text-sm font-medium text-stone-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-stone-300 focus-visible:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="travelDates" 
                        className="block text-sm font-medium text-stone-700 mb-2"
                      >
                        Preferred Travel Dates
                      </label>
                      <Input
                        id="travelDates"
                        name="travelDates"
                        placeholder="e.g., March 2024 or flexible"
                        value={formData.travelDates}
                        onChange={handleChange}
                        className="border-stone-300 focus-visible:ring-emerald-500"
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
                        Group Size
                      </label>
                      <Select onValueChange={handleSelectChange("groupSize")} value={formData.groupSize}>
                        <SelectTrigger className="border-stone-300 focus:ring-emerald-500">
                          <SelectValue placeholder="Select group size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="solo">Solo Journey</SelectItem>
                          <SelectItem value="couple">Couple (2 people)</SelectItem>
                          <SelectItem value="small-group">Small Group (3-6 people)</SelectItem>
                          <SelectItem value="corporate">Corporate Group (7+ people)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label 
                        htmlFor="currentFeeling" 
                        className="block text-sm font-medium text-stone-700 mb-2"
                      >
                        How are you feeling right now?
                      </label>
                      <Select onValueChange={handleSelectChange("currentFeeling")} value={formData.currentFeeling}>
                        <SelectTrigger className="border-stone-300 focus:ring-emerald-500">
                          <SelectValue placeholder="Select your current state" />
                        </SelectTrigger>
                        <SelectContent>
                          {feelings.map((feeling) => (
                            <SelectItem key={feeling.value} value={feeling.value}>
                              <div className="flex items-center space-x-2">
                                {feeling.icon}
                                <span>{feeling.label}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Wellness Goals */}
                  <div>
                    <label 
                      htmlFor="goals" 
                      className="block text-sm font-medium text-stone-700 mb-3"
                    >
                      What are your wellness goals?
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      {wellnessGoals.map((goal, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <input 
                            type="checkbox" 
                            id={`goal-${index}`}
                            className="rounded border-stone-300 text-emerald-600 focus:ring-emerald-500"
                          />
                          <label 
                            htmlFor={`goal-${index}`}
                            className="text-sm text-stone-600 cursor-pointer"
                          >
                            {goal}
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
                      Tell us about your wellness journey
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Share any specific needs, preferences, or questions about your wellness journey..."
                      className="border-stone-300 focus-visible:ring-emerald-500 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-emerald-700 hover:bg-emerald-800 text-white"
                  >
                    Begin My Wellness Journey
                  </Button>

                  <p className="text-center text-xs text-stone-500">
                    By submitting this form, you agree to our privacy policy. 
                    We'll respond within 24 hours with a personalized consultation.
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
                <h3 className="font-serif text-xl text-emerald-800 mb-4">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-medium text-stone-800">Portugal Office</p>
                      <p className="text-sm text-stone-600">Quinta da Regaleira, Sintra</p>
                      <p className="text-sm text-stone-600">2710-567 Sintra, Portugal</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-medium text-stone-800">Phone</p>
                      <p className="text-sm text-stone-600">+351 123 456 789</p>
                      <p className="text-sm text-stone-600">Available 9AM-6PM CET</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-medium text-stone-800">Email</p>
                      <p className="text-sm text-stone-600">hello@altivawellness.com</p>
                      <p className="text-sm text-stone-600">Response within 24 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl text-emerald-800 mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule a Call
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Group Inquiry
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Wellness Assessment
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Preview */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl text-emerald-800 mb-4">
                  Quick Answers
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-stone-800 mb-1">How long are the retreats?</p>
                    <p className="text-stone-600">3-10 days, customized to your needs</p>
                  </div>
                  <div>
                    <p className="font-medium text-stone-800 mb-1">What's included?</p>
                    <p className="text-stone-600">Accommodation, meals, activities, and wellness guidance</p>
                  </div>
                  <div>
                    <p className="font-medium text-stone-800 mb-1">Fitness level required?</p>
                    <p className="text-stone-600">All levels welcome - we adapt to you</p>
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
