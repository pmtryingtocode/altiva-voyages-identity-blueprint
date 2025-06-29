
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowLeft, Share2 } from "lucide-react";

const journalPosts = {
  "porto-wine-culture": {
    title: "The Hidden Gems of Porto's Wine Culture",
    excerpt: "Discover the secret cellars and family-owned vineyards that define Porto's rich oenological heritage, far from the tourist trail.",
    category: "Gastronomy",
    destination: "Portugal",
    location: "Porto & Douro Valley",
    imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2071",
    date: "April 8, 2025",
    author: "Sophia Laurent",
    authorTitle: "Founder & Creative Director",
    authorImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=2070",
    content: [
      {
        type: "text",
        content: "Beyond the grand port houses that line the Douro River in Vila Nova de Gaia lies a world of intimate, family-owned wine estates that rarely open their doors to casual visitors. These hidden treasures of Porto's wine culture represent the authentic heart of Portuguese viticulture, where ancient techniques blend seamlessly with innovative approaches to create wines of extraordinary character and depth."
      },
      {
        type: "subheading",
        content: "The Forgotten Cellars of Ribeira"
      },
      {
        type: "text",
        content: "In the labyrinthine streets of Porto's historic Ribeira district, beneath centuries-old buildings, lie forgotten wine cellars that once served as the primary storage facilities for port wine before it crossed the river to Vila Nova de Gaia. Many of these atmospheric spaces have been repurposed as private tasting rooms by small producers who focus on quality over quantity."
      },
      {
        type: "text",
        content: "One such cellar belongs to the Almeida family, sixth-generation winemakers whose vineyard holdings in the Douro Valley date back to the early 18th century. \"We prefer to share our wines in intimate settings with those who truly appreciate the artistry involved,\" explains António Almeida as he guides us through a tasting of rare vintage ports in a candlelit cellar beneath his family's townhouse."
      },
      {
        type: "quote",
        content: "Wine is not just a beverage here, but a cultural expression that weaves together our landscape, history, and identity. The true essence of Porto's wine culture exists in these personal connections between maker and appreciator.",
        author: "António Almeida, Sixth-generation Winemaker"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2071",
        caption: "The terraced vineyards of the Douro Valley, a UNESCO World Heritage site"
      },
      {
        type: "subheading",
        content: "The Artisans of the Upper Douro"
      },
      {
        type: "text",
        content: "Venturing beyond Porto into the Upper Douro Valley reveals an even more rarefied wine experience. Here, far from the more accessible quintas along the river, lies a network of small-scale producers who maintain traditions that have remained largely unchanged for centuries."
      },
      {
        type: "text",
        content: "At Quinta do Vale Escuro, accessible only via a narrow dirt road winding through steep terraced vineyards, Maria Carvalho continues the practice of foot-treading grapes in granite lagares during harvest. \"The gentle crushing by foot extracts just the right amount of tannin and color without breaking the grape seeds, which would release bitter compounds,\" she explains as we tour her small winery built into the hillside."
      },
      {
        type: "text",
        content: "What makes these experiences extraordinary is not just the exceptional wines—though they certainly are that—but the personal connection with the makers, the intimate glimpse into a way of life that values quality, authenticity, and the slow rhythms of nature."
      },
      {
        type: "subheading",
        content: "Accessing the Inaccessible"
      },
      {
        type: "text",
        content: "For the discerning traveler seeking these hidden gems, the challenge lies in making meaningful connections with producers who deliberately maintain a low profile. This is where deep local knowledge and personal relationships become invaluable."
      },
      {
        type: "text",
        content: "Through carefully cultivated connections with these reclusive vintners, we can arrange private tastings, meals with winemaking families in their homes, and even participation in harvest activities for those who visit during the autumn months."
      },
      {
        type: "text",
        content: "These experiences offer not just exceptional wine, but an authentic immersion into Portuguese culture, where long lunches turn into dinners, where stories are shared across generations, and where the true spirit of hospitality reveals itself in ways that no commercial wine tour could ever capture."
      },
      {
        type: "quote",
        content: "The most meaningful wine experiences happen when the lines between host and guest, teacher and student, blur into genuine human connection. These moments, more than any tasting note or vintage chart, reveal the soul of our wine culture.",
        author: "Maria Carvalho, Winemaker at Quinta do Vale Escuro"
      },
      {
        type: "conclusion",
        content: "For those willing to venture beyond the expected and embrace the intimate, personal nature of Porto's hidden wine culture, extraordinary experiences await. Like the best Portuguese wines, these moments reveal their depth and character slowly, rewarding those with the patience and appreciation to discover their subtle complexities."
      }
    ],
    relatedPosts: ["alentejo-coastal-retreats", "portuguese-design-renaissance"]
  },
  "provence-culinary-journey": {
    title: "A Culinary Journey Through Provence",
    excerpt: "Exploring the seasonal rhythms and artisanal traditions that make Provençal cuisine a sensory revelation for the discerning traveler.",
    category: "Gastronomy",
    destination: "France",
    location: "Provence",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2140",
    date: "April 2, 2025",
    author: "Marco Rossi",
    authorTitle: "Culinary Experiences Curator",
    authorImage: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2070",
    content: [
      {
        type: "text",
        content: "The cuisine of Provence is a living expression of the region's soul—a harmonious blend of seasonal abundance, Mediterranean influences, and time-honored traditions. Beyond the lavender fields and sun-drenched landscapes lies a culinary heritage that rewards the curious traveler with authentic flavors and meaningful connections to place and people."
      },
      {
        type: "subheading",
        content: "The Markets: A Symphony of Seasons"
      },
      {
        type: "text",
        content: "To truly understand Provençal cuisine, one must begin at the region's vibrant markets. Unlike the curated consistency of high-end grocery stores, these markets pulsate with the authentic rhythm of seasons. What you find on any given day is a direct reflection of what the land is offering at that precise moment."
      },
      {
        type: "text",
        content: "In early spring, the first tender asparagus appear alongside fresh goat cheeses and wild herbs gathered from the hills. Summer brings an explosion of tomatoes in shades ranging from sunshine yellow to deep crimson, fragrant melons, aubergines, and peppers. Autumn offers wild mushrooms, game, and the first pressing of olive oil, while winter showcases black truffles unearthed from secret locations by dedicated hunters and their trained dogs."
      },
      {
        type: "quote",
        content: "My cooking philosophy is simple: I don't decide my menu, the market decides for me. This morning's offerings determine tonight's dinner. That's the essence of Provençal cooking—listening to what the land tells you.",
        author: "Chef Mireille Autran, Restauran Les Trois Oliviers"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2140",
        caption: "The morning market in Apt, where local producers have gathered for centuries"
      },
      {
        type: "subheading",
        content: "The Artisans: Keepers of Tradition"
      },
      {
        type: "text",
        content: "Beyond the markets, the true culinary treasures of Provence are found in the workshops, farms, and kitchens of artisans who maintain traditions passed down through generations. These passionate individuals represent the living heritage of Provençal gastronomy."
      },
      {
        type: "text",
        content: "In a stone farmhouse outside Nyons, the Bernard family has been producing olive oil using traditional methods for five generations. Their ancient groves of twisted, gnarled trees produce an oil of remarkable complexity—grassy and peppery, with a lingering almond finish. \"These trees are older than any of us,\" explains Pierre Bernard as he leads us through the grove. \"Some date back 800 years. We are merely their temporary caretakers.\""
      },
      {
        type: "text",
        content: "Near the village of Banon, Marie-Claire Mancini continues the tradition of making the region's eponymous cheese, wrapped in chestnut leaves and tied with raffia. The small rounds of raw goat's milk cheese are aged in her cool, humid cave until they develop their characteristic creamy texture and complex flavor that speaks eloquently of the wild herbs her goats graze upon."
      },
      {
        type: "subheading",
        content: "The Table: Where Tradition Meets Innovation"
      },
      {
        type: "text",
        content: "While respecting traditions, Provence's most interesting culinary experiences often come from those who thoughtfully reinterpret the region's heritage. In kitchens both humble and refined, chefs are creating dishes that honor the past while embracing the present."
      },
      {
        type: "text",
        content: "At La Bastide de Capelongue, Chef Edouard Loubet draws inspiration from the wild botanicals growing on the slopes of the Luberon. His cuisine is deeply rooted in Provençal traditions, yet utterly contemporary in its presentation and technique. \"I don't want to cook like my grandmother,\" he explains, \"but I want my dishes to evoke the same emotional response as her cooking—a profound sense of place and moment.\""
      },
      {
        type: "text",
        content: "Perhaps the most authentic culinary experiences in Provence happen not in restaurants at all, but in private homes. Through our network of local connections, we can arrange intimate meals with families who open their homes to share their personal culinary traditions with appreciative guests. These experiences—a bouillabaisse simmering on a fisherman's stove in Cassis, a daube slowly braising in a farmhouse kitchen in the Var—offer not just exceptional food, but genuine cultural exchange."
      },
      {
        type: "quote",
        content: "The table in Provence is where life happens. It's where we argue, make peace, fall in love, solve problems, and celebrate life's moments both ordinary and extraordinary. The food is important, yes, but it's the human connection that gives our cuisine its true flavor.",
        author: "Marie-Claire Mancini, Artisan Cheesemaker"
      },
      {
        type: "conclusion",
        content: "A culinary journey through Provence offers far more than exquisite flavors and memorable meals. It provides a pathway to understanding the soul of a region where food is inseparable from culture, where each bite tells a story of place, tradition, and the passionate individuals who keep culinary heritage alive. For the discerning traveler willing to venture beyond the expected, Provence reveals itself most authentically through its food—one seasonal market, one artisanal workshop, one shared table at a time."
      }
    ],
    relatedPosts: ["boutique-champagne-houses", "mediterranean-wellness"]
  }
};

const JournalPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Default to the first post if slug doesn't exist in our data
  const postData = slug && journalPosts[slug as keyof typeof journalPosts] 
    ? journalPosts[slug as keyof typeof journalPosts] 
    : journalPosts["porto-wine-culture"];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative">
        <div className="h-[50vh] md:h-[60vh] relative">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${postData.imageUrl}')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-altiva-purple-dark/70 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-white -mt-20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-t-md shadow-sm p-8 md:p-12">
            <Link to="/journal" className="inline-flex items-center text-altiva-purple-secondary hover:text-altiva-purple-tertiary mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Journal
            </Link>

            <div className="flex items-center mb-6">
              <span className="px-3 py-1 bg-altiva-purple-soft rounded-full text-xs font-montserrat text-altiva-purple-tertiary mr-3">
                {postData.category}
              </span>
              <div className="flex items-center text-altiva-gray-neutral text-sm font-montserrat">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{postData.date}</span>
              </div>
              <div className="flex items-center text-altiva-gray-neutral text-sm font-montserrat ml-4">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{postData.location}</span>
              </div>
            </div>

            <h1 className="font-playfair text-3xl md:text-4xl text-altiva-purple-dark font-semibold mb-6">
              {postData.title}
            </h1>

            <p className="font-montserrat text-lg text-altiva-gray-neutral mb-8 italic">
              {postData.excerpt}
            </p>

            <div className="flex items-center border-y border-altiva-gray-light/30 py-4 mb-10">
              <img 
                src={postData.authorImage} 
                alt={postData.author} 
                className="h-12 w-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-montserrat font-medium text-altiva-purple-tertiary">
                  {postData.author}
                </p>
                <p className="font-montserrat text-sm text-altiva-gray-neutral">
                  {postData.authorTitle}
                </p>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="ml-auto text-altiva-gray-neutral hover:text-altiva-purple-secondary hover:bg-altiva-gray-soft"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Article Content */}
            <div className="prose max-w-none prose-headings:font-playfair prose-headings:text-altiva-purple-dark prose-p:font-montserrat prose-p:text-altiva-gray-neutral">
              {postData.content.map((block, index) => {
                switch (block.type) {
                  case 'text':
                    return (
                      <p key={index} className="mb-6">
                        {block.content}
                      </p>
                    );
                  case 'subheading':
                    return (
                      <h2 key={index} className="text-2xl font-semibold mt-10 mb-6">
                        {block.content}
                      </h2>
                    );
                  case 'quote':
                    return (
                      <blockquote key={index} className="border-l-4 border-altiva-purple-soft pl-6 py-2 my-8 italic">
                        <p className="text-lg text-altiva-purple-dark mb-2">"{block.content}"</p>
                        {block.author && (
                          <footer className="text-sm text-altiva-purple-secondary">— {block.author}</footer>
                        )}
                      </blockquote>
                    );
                  case 'image':
                    return (
                      <figure key={index} className="my-10">
                        <img 
                          src={block.url} 
                          alt={block.caption} 
                          className="rounded-md w-full"
                        />
                        {block.caption && (
                          <figcaption className="text-center text-sm text-altiva-gray-neutral mt-2">
                            {block.caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  case 'conclusion':
                    return (
                      <p key={index} className="mb-6 font-medium">
                        {block.content}
                      </p>
                    );
                  default:
                    return null;
                }
              })}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-10 mb-8">
              <span className="px-3 py-1 bg-altiva-gray-soft rounded-full text-xs font-montserrat text-altiva-gray-neutral">
                #{postData.destination.toLowerCase()}
              </span>
              <span className="px-3 py-1 bg-altiva-gray-soft rounded-full text-xs font-montserrat text-altiva-gray-neutral">
                #{postData.category.toLowerCase()}
              </span>
              <span className="px-3 py-1 bg-altiva-gray-soft rounded-full text-xs font-montserrat text-altiva-gray-neutral">
                #travel
              </span>
              <span className="px-3 py-1 bg-altiva-gray-soft rounded-full text-xs font-montserrat text-altiva-gray-neutral">
                #authenticity
              </span>
            </div>

            {/* Author Bio */}
            <div className="bg-altiva-gray-soft rounded-md p-6 flex flex-col md:flex-row items-center md:items-start gap-6 mt-12">
              <img 
                src={postData.authorImage} 
                alt={postData.author} 
                className="h-24 w-24 rounded-full object-cover"
              />
              <div>
                <h3 className="font-playfair text-xl text-altiva-purple-dark font-medium mb-2 text-center md:text-left">
                  {postData.author}
                </h3>
                <p className="font-montserrat text-sm text-altiva-purple-secondary mb-4 text-center md:text-left">
                  {postData.authorTitle}
                </p>
                <p className="font-montserrat text-sm text-altiva-gray-neutral">
                  With extensive experience in European cultural and culinary traditions, {postData.author.split(' ')[0]} curates authentic experiences that connect travelers with the soul of each destination. Their deep passion for {postData.destination}'s heritage informs their unique perspective and insider access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-altiva-gray-soft py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-10 text-center">
              Continue Your Journey
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(journalPosts)
                .filter(([key]) => key !== slug && postData.relatedPosts?.includes(key))
                .slice(0, 2)
                .map(([key, post]) => (
                  <Link key={key} to={`/journal/${key}`} className="group">
                    <div className="bg-white rounded-md overflow-hidden shadow-sm h-full flex flex-col">
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
                            {post.destination}
                          </span>
                        </div>
                        <h3 className="font-playfair text-lg text-altiva-purple-dark font-medium mb-3 group-hover:text-altiva-purple-secondary transition-colors">
                          {post.title}
                        </h3>
                        <p className="font-montserrat text-sm text-altiva-gray-neutral line-clamp-3 mb-4 flex-grow">
                          {post.excerpt}
                        </p>
                        <span className="font-montserrat text-sm text-altiva-purple-secondary group-hover:text-altiva-purple-tertiary transition-colors">
                          Read Article
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/journal">
                <Button 
                  variant="outline" 
                  className="border-altiva-purple-secondary text-altiva-purple-secondary hover:bg-altiva-purple-secondary hover:text-white"
                >
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience CTA */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-altiva-purple-soft rounded-md overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-3 p-8 md:p-12">
                <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-4">
                  Experience {postData.destination} Yourself
                </h2>
                <p className="font-montserrat text-altiva-gray-dark mb-6">
                  Ready to discover the authentic soul of {postData.destination}? Let our experts craft a bespoke journey exploring the cultural and culinary heritage featured in this article.
                </p>
                <Link to={`/destinations/${postData.destination.toLowerCase()}`}>
                  <Button 
                    className="bg-altiva-purple-tertiary hover:bg-altiva-purple-dark text-white"
                  >
                    Explore {postData.destination} Journeys
                  </Button>
                </Link>
              </div>
              <div className="lg:col-span-2 min-h-[300px]">
                <img 
                  src={postData.imageUrl} 
                  alt={`${postData.destination} journey`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JournalPost;
