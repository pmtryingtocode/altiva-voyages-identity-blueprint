
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Testimonial = {
  id: number;
  quote: string;
  author: string;
  location: string;
  experience: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Altiva Voyages crafted a journey through Portugal that felt like stepping into an intimate secret shared only with us. From private wine tastings in the Douro to sunset dinners in hidden Lisbon courtyards, every moment was authentic luxury.",
    author: "Catherine & David Langford",
    location: "New York, USA",
    experience: "Portuguese Journey",
  },
  {
    id: 2,
    quote:
      "Our family retreat in Provence was nothing short of magical. Altiva arranged exclusive access to local artisans, markets, and a 15th-century estate where we created memories that will last a lifetime.",
    author: "The Montgomery Family",
    location: "Boston, USA",
    experience: "French Countryside Retreat",
  },
  {
    id: 3,
    quote:
      "What sets Altiva apart is their deep knowledge of Italy beyond the obvious. Our customized tour through Tuscany and Umbria revealed hidden treasures we never would have discovered on our own.",
    author: "James & Elizabeth Harrison",
    location: "Chicago, USA",
    experience: "Italian Cultural Immersion",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-altiva-purple-dark font-semibold mb-4">
            Guest Reflections
          </h2>
          <p className="font-montserrat text-sm text-altiva-gray-neutral">
            The authentic experiences of our distinguished travelers
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="flex justify-center mb-10">
            <Quote className="h-12 w-12 text-altiva-purple-soft" />
          </div>

          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "text-center transition-opacity duration-500",
                currentIndex === index ? "block opacity-100" : "hidden opacity-0"
              )}
            >
              <blockquote className="font-playfair text-xl md:text-2xl text-altiva-purple-dark italic mb-6">
                {testimonial.quote}
              </blockquote>
              <div className="font-montserrat">
                <p className="text-altiva-purple-tertiary font-medium">
                  {testimonial.author}
                </p>
                <p className="text-sm text-altiva-gray-neutral">
                  {testimonial.location} • {testimonial.experience}
                </p>
              </div>
            </div>
          ))}

          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all",
                  currentIndex === index
                    ? "bg-altiva-purple-secondary w-6"
                    : "bg-altiva-gray-light"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrev}
              className="text-altiva-gray-medium hover:text-altiva-purple-tertiary hover:bg-altiva-purple-soft/20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              className="text-altiva-gray-medium hover:text-altiva-purple-tertiary hover:bg-altiva-purple-soft/20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
