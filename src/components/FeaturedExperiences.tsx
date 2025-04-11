
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type Experience = {
  id: number;
  title: string;
  location: string;
  imageUrl: string;
  slug: string;
};

const experiences: Experience[] = [
  {
    id: 1,
    title: "Historic Wine Estates",
    location: "Douro Valley, Portugal",
    imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2071",
    slug: "/experiences/wine-estates-douro-valley",
  },
  {
    id: 2,
    title: "Provençal Retreats",
    location: "Provence, France",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2140",
    slug: "/experiences/provence-retreats",
  },
  {
    id: 3,
    title: "Tuscan Villa Escapes",
    location: "Tuscany, Italy",
    imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2070",
    slug: "/experiences/tuscany-villa-escapes",
  },
];

const FeaturedExperiences = () => {
  return (
    <section className="py-24 bg-altiva-gray-soft">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-altiva-purple-dark font-semibold mb-4">
              Curated Experiences
            </h2>
            <p className="font-montserrat text-sm text-altiva-gray-neutral max-w-md">
              Immerse yourself in the authentic elegance of Europe with our 
              carefully crafted, exclusive experiences.
            </p>
          </div>
          <Link
            to="/experiences"
            className="font-montserrat text-sm text-altiva-purple-secondary flex items-center mt-4 md:mt-0 group"
          >
            View All Experiences
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <Link key={experience.id} to={experience.slug} className="group">
              <div className="overflow-hidden rounded-md mb-4 aspect-[4/5]">
                <img
                  src={experience.imageUrl}
                  alt={experience.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-playfair text-xl text-altiva-purple-dark font-medium mb-1">
                {experience.title}
              </h3>
              <p className="font-montserrat text-sm text-altiva-gray-neutral">
                {experience.location}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
