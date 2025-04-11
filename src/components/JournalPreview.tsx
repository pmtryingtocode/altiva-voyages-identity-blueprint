
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type JournalPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  slug: string;
  date: string;
};

const journalPosts: JournalPost[] = [
  {
    id: 1,
    title: "The Hidden Gems of Porto's Wine Culture",
    excerpt: "Discover the secret cellars and family-owned vineyards that define Porto's rich oenological heritage.",
    category: "Portugal",
    imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2071",
    slug: "/journal/porto-wine-culture",
    date: "April 8, 2025",
  },
  {
    id: 2,
    title: "A Culinary Journey Through Provence",
    excerpt: "Exploring the seasonal rhythms and artisanal traditions that make Provençal cuisine a sensory revelation.",
    category: "France",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2140",
    slug: "/journal/provence-culinary-journey",
    date: "April 2, 2025",
  },
  {
    id: 3,
    title: "The Artisans of Florence: A Cultural Legacy",
    excerpt: "Meeting the master craftsmen preserving centuries-old techniques in the heart of Renaissance Italy.",
    category: "Italy",
    imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2070",
    slug: "/journal/florence-artisans",
    date: "March 27, 2025",
  },
];

const JournalPreview = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-altiva-purple-dark font-semibold mb-4">
              Travel Journal
            </h2>
            <p className="font-montserrat text-sm text-altiva-gray-neutral max-w-md">
              Stories, insights and inspiration from Europe's most captivating destinations.
            </p>
          </div>
          <Link
            to="/journal"
            className="font-montserrat text-sm text-altiva-purple-secondary flex items-center mt-4 md:mt-0 group"
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journalPosts.map((post) => (
            <Link key={post.id} to={post.slug} className="group">
              <div className="overflow-hidden rounded-md mb-4 aspect-[16/9]">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="font-montserrat text-xs text-altiva-purple-tertiary uppercase tracking-wider mb-2">
                {post.category} • {post.date}
              </div>
              <h3 className="font-playfair text-xl text-altiva-purple-dark font-medium mb-2 group-hover:text-altiva-purple-secondary transition-colors">
                {post.title}
              </h3>
              <p className="font-montserrat text-sm text-altiva-gray-neutral">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalPreview;
