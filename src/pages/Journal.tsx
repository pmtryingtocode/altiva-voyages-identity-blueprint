
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type JournalPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  destination: string;
  imageUrl: string;
  slug: string;
  date: string;
  author: string;
};

const journalPosts: JournalPost[] = [
  {
    id: 1,
    title: "The Hidden Gems of Porto's Wine Culture",
    excerpt: "Discover the secret cellars and family-owned vineyards that define Porto's rich oenological heritage, far from the tourist trail.",
    category: "Gastronomy",
    destination: "Portugal",
    imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2071",
    slug: "porto-wine-culture",
    date: "April 8, 2025",
    author: "Sophia Laurent"
  },
  {
    id: 2,
    title: "A Culinary Journey Through Provence",
    excerpt: "Exploring the seasonal rhythms and artisanal traditions that make Provençal cuisine a sensory revelation for the discerning traveler.",
    category: "Gastronomy",
    destination: "France",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2140",
    slug: "provence-culinary-journey",
    date: "April 2, 2025",
    author: "Marco Rossi"
  },
  {
    id: 3,
    title: "The Artisans of Florence: A Cultural Legacy",
    excerpt: "Meeting the master craftsmen preserving centuries-old techniques in the heart of Renaissance Italy, creating treasures for those who appreciate true artistry.",
    category: "Culture",
    destination: "Italy",
    imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2070",
    slug: "florence-artisans",
    date: "March 27, 2025",
    author: "Isabelle Moreau"
  },
  {
    id: 4,
    title: "Secluded Coastal Retreats of the Alentejo",
    excerpt: "Exploring Portugal's most pristine and undiscovered coastal sanctuaries, where nature's beauty meets luxurious simplicity.",
    category: "Well-being",
    destination: "Portugal",
    imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2071",
    slug: "alentejo-coastal-retreats",
    date: "March 20, 2025",
    author: "João Pereira"
  },
  {
    id: 5,
    title: "The Architectural Marvels of Piedmont",
    excerpt: "Discovering the harmonious blend of Baroque splendor and contemporary design that defines northern Italy's architectural landscape.",
    category: "Culture",
    destination: "Italy",
    imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2070",
    slug: "piedmont-architecture",
    date: "March 15, 2025",
    author: "Claire Bennett"
  },
  {
    id: 6,
    title: "Champagne: Beyond the Familiar Labels",
    excerpt: "Venturing into the intimate world of small-production, family-owned Champagne houses that rarely open their doors to visitors.",
    category: "Gastronomy",
    destination: "France",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2140",
    slug: "boutique-champagne-houses",
    date: "March 8, 2025",
    author: "Thomas Weber"
  },
  {
    id: 7,
    title: "The Literary Landscapes of Tuscany",
    excerpt: "Following in the footsteps of great writers who found inspiration in Tuscany's rolling hills, historic villas, and timeless villages.",
    category: "Culture",
    destination: "Italy",
    imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2070",
    slug: "tuscany-literary-landscapes",
    date: "March 1, 2025",
    author: "Sophia Laurent"
  },
  {
    id: 8,
    title: "Wellness Rituals of the Mediterranean",
    excerpt: "Exploring ancient healing traditions and contemporary wellness approaches along the sun-drenched Mediterranean coast.",
    category: "Well-being",
    destination: "Multiple",
    imageUrl: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070",
    slug: "mediterranean-wellness",
    date: "February 22, 2025",
    author: "Marco Rossi"
  },
  {
    id: 9,
    title: "The Renaissance of Portuguese Design",
    excerpt: "Discovering how contemporary Portuguese designers are reinterpreting traditional crafts for the modern aesthetic sensibility.",
    category: "Culture",
    destination: "Portugal",
    imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2071",
    slug: "portuguese-design-renaissance",
    date: "February 15, 2025",
    author: "João Pereira"
  }
];

const categories = ["Gastronomy", "Culture", "Well-being"];
const destinations = ["Portugal", "France", "Italy", "Multiple"];

const Journal = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-altiva-purple-dark font-semibold mb-6">
              Travel Journal
            </h1>
            <p className="font-montserrat text-base md:text-lg text-altiva-gray-neutral mb-8">
              Stories, insights, and inspiration from Europe's most captivating destinations. 
              Discover the authentic cultural experiences that define our approach to luxury travel.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="bg-altiva-gray-soft py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-2">
              <Button variant="ghost" className="bg-white text-altiva-purple-dark hover:text-altiva-purple-secondary">
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  className="bg-white text-altiva-gray-neutral hover:text-altiva-purple-secondary"
                >
                  {category}
                </Button>
              ))}
              <div className="relative">
                <Button
                  variant="ghost"
                  className="bg-white text-altiva-gray-neutral hover:text-altiva-purple-secondary"
                >
                  Destinations
                </Button>
              </div>
            </div>
            <div className="relative w-full md:w-auto min-w-[240px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-altiva-gray-neutral" />
              <Input
                placeholder="Search articles..."
                className="pl-10 border-altiva-gray-light/50 focus-visible:ring-altiva-purple-light"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-altiva-gray-soft pt-8 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-md overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-full min-h-[400px]">
                <img 
                  src={journalPosts[0].imageUrl} 
                  alt={journalPosts[0].title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-altiva-purple-soft rounded-full text-xs font-montserrat text-altiva-purple-tertiary mr-3">
                    {journalPosts[0].category}
                  </span>
                  <span className="text-xs font-montserrat text-altiva-gray-neutral">
                    {journalPosts[0].date}
                  </span>
                </div>
                <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-4">
                  {journalPosts[0].title}
                </h2>
                <p className="font-montserrat text-altiva-gray-neutral mb-6 flex-grow">
                  {journalPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between mt-6">
                  <div className="font-montserrat text-sm">
                    <span className="text-altiva-purple-secondary">By {journalPosts[0].author}</span>
                    <span className="text-altiva-gray-neutral ml-2">• {journalPosts[0].destination}</span>
                  </div>
                  <Link to={`/journal/${journalPosts[0].slug}`}>
                    <Button 
                      variant="outline" 
                      className="border-altiva-purple-secondary text-altiva-purple-secondary hover:bg-altiva-purple-secondary hover:text-white"
                    >
                      Read Article
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journalPosts.slice(1).map((post) => (
              <Link key={post.id} to={`/journal/${post.slug}`} className="group">
                <div className="bg-altiva-gray-soft rounded-md overflow-hidden shadow-sm h-full flex flex-col">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center mb-3">
                      <span className="px-2 py-0.5 bg-altiva-purple-soft rounded-full text-xs font-montserrat text-altiva-purple-tertiary mr-2">
                        {post.category}
                      </span>
                      <span className="text-xs font-montserrat text-altiva-gray-neutral">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="font-playfair text-xl text-altiva-purple-dark font-medium mb-3 group-hover:text-altiva-purple-secondary transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-montserrat text-sm text-altiva-gray-neutral mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="font-montserrat text-sm flex justify-between items-center mt-auto">
                      <span className="text-altiva-gray-neutral">
                        By {post.author} • {post.destination}
                      </span>
                      <span className="text-altiva-purple-secondary group-hover:text-altiva-purple-tertiary transition-colors">
                        Read More
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button 
              variant="outline" 
              className="border-altiva-purple-secondary text-altiva-purple-secondary hover:bg-altiva-purple-secondary hover:text-white"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-altiva-gray-soft py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-altiva-purple-soft rounded-md p-8 md:p-12 text-center">
            <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-4">
              Subscribe to Our Journal
            </h2>
            <p className="font-montserrat text-altiva-gray-dark mb-8 max-w-lg mx-auto">
              Receive curated travel inspiration, exclusive insights, and first access to new experiences directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white border-white focus-visible:ring-altiva-purple-light"
              />
              <Button className="bg-altiva-purple-tertiary hover:bg-altiva-purple-dark text-white whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <p className="font-montserrat text-xs text-altiva-gray-dark mt-4">
              By subscribing, you agree to our privacy policy and terms of service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journal;
