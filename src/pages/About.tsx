
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-altiva-purple-dark font-semibold mb-6">
              Our Story
            </h1>
            <p className="font-montserrat text-base md:text-lg text-altiva-gray-neutral mb-8">
              Founded on a passion for authentic travel experiences and a deep appreciation 
              for Europe's cultural heritage, Altiva Voyages crafts extraordinary journeys 
              for the discerning traveler.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-altiva-gray-soft py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-[4/5] rounded-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=2070"
                  alt="Sophia Laurent, Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-6">
                From Personal Passion to Curated Excellence
              </h2>
              <div className="space-y-4 mb-8 font-montserrat text-altiva-gray-neutral">
                <p>
                  After years of traveling throughout Europe's most enchanting destinations,
                  Sophia Laurent found herself collecting a mental catalog of extraordinary 
                  experiences that rarely made their way into conventional travel itineraries.
                </p>
                <p>
                  "I realized that the most meaningful moments were those that connected me with
                  the authentic soul of a place — private access to historic estates, meals prepared
                  by local families in their centuries-old homes, and conversations with master
                  artisans in their private workshops," reflects Sophia.
                </p>
                <p>
                  In 2015, she assembled a team of like-minded travel connoisseurs with deep regional
                  expertise and exclusive connections throughout Portugal, France, and Italy. Together,
                  they founded Altiva Voyages with a singular mission: to craft journeys that transcend
                  ordinary luxury travel by emphasizing authenticity, exclusivity, and cultural depth.
                </p>
              </div>
              <div className="flex items-center space-x-3 font-montserrat">
                <span className="text-altiva-purple-secondary font-medium">
                  Sophia Laurent
                </span>
                <span className="h-px w-12 bg-altiva-purple-soft"></span>
                <span className="text-altiva-gray-neutral text-sm">
                  Founder & Creative Director
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-4">
              Our Values
            </h2>
            <p className="font-montserrat text-base text-altiva-gray-neutral">
              The principles that guide every journey we craft
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center px-4 py-8">
              <div className="h-16 w-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-altiva-purple-soft">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-altiva-purple-tertiary">
                  <path d="M12 3v12"></path>
                  <path d="m8 11 4 4 4-4"></path>
                  <path d="M8 5.8C6 7.8 6 10.1 6 12c0 1 0 8 6 8s6-7 6-8c0-1.9 0-4.2-2-6.2"></path>
                </svg>
              </div>
              <h3 className="font-playfair text-xl text-altiva-purple-dark font-medium mb-3">
                Authentic Immersion
              </h3>
              <p className="font-montserrat text-sm text-altiva-gray-neutral">
                We believe true luxury is found in genuine connections to people, traditions, and places.
                Every experience we curate emphasizes authenticity and cultural depth.
              </p>
            </div>
            <div className="text-center px-4 py-8">
              <div className="h-16 w-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-altiva-purple-soft">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-altiva-purple-tertiary">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M8 7v7"></path>
                  <path d="M12 7v4"></path>
                  <path d="M16 7v9"></path>
                </svg>
              </div>
              <h3 className="font-playfair text-xl text-altiva-purple-dark font-medium mb-3">
                Meticulous Curation
              </h3>
              <p className="font-montserrat text-sm text-altiva-gray-neutral">
                Every detail matters. We personally vet each experience, property, and guide in our network
                to ensure they meet our exacting standards of excellence.
              </p>
            </div>
            <div className="text-center px-4 py-8">
              <div className="h-16 w-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-altiva-purple-soft">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-altiva-purple-tertiary">
                  <path d="M7 10v12"></path>
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                </svg>
              </div>
              <h3 className="font-playfair text-xl text-altiva-purple-dark font-medium mb-3">
                Responsible Travel
              </h3>
              <p className="font-montserrat text-sm text-altiva-gray-neutral">
                We are committed to preserving the cultural and natural heritage of the destinations we serve
                through sustainable practices and meaningful local partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-altiva-gray-soft py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-4">
              Our Team
            </h2>
            <p className="font-montserrat text-base text-altiva-gray-neutral">
              Meet the passionate experts who craft our extraordinary journeys
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sophia Laurent",
                title: "Founder & Creative Director",
                bio: "With a background in art history and a decade of experience living across Europe, Sophia brings cultural depth and artistic vision to every journey.",
                image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=2070"
              },
              {
                name: "Marco Rossi",
                title: "Italy Specialist",
                bio: "Born and raised in Tuscany, Marco's intimate knowledge of Italy's hidden treasures and personal connections with local artisans create unparalleled experiences.",
                image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2070"
              },
              {
                name: "Isabelle Moreau",
                title: "France Specialist",
                bio: "A former sommelier and culinary expert, Isabelle curates gastronomic journeys that reveal the authentic flavors and traditions of French culture.",
                image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2140"
              },
              {
                name: "João Pereira",
                title: "Portugal Specialist",
                bio: "With deep roots in Portugal's wine country, João's expertise spans from historic estates to contemporary design, revealing Portugal's rich heritage.",
                image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2071"
              },
              {
                name: "Claire Bennett",
                title: "Client Experience Director",
                bio: "Claire ensures that every journey exceeds expectations from initial consultation to your return home, with meticulous attention to detail.",
                image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070"
              },
              {
                name: "Thomas Weber",
                title: "Cultural Experiences Curator",
                bio: "A historian and arts patron, Thomas specializes in creating privileged access to cultural institutions and private collections across Europe.",
                image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2070"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-md overflow-hidden shadow-sm">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl text-altiva-purple-dark font-medium mb-1">
                    {member.name}
                  </h3>
                  <p className="font-montserrat text-sm text-altiva-purple-secondary mb-4">
                    {member.title}
                  </p>
                  <p className="font-montserrat text-sm text-altiva-gray-neutral">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="font-montserrat text-base text-altiva-gray-neutral mb-8">
              Let our team of passionate experts craft an extraordinary experience tailored to your desires.
            </p>
            <Button 
              className="bg-altiva-purple-tertiary hover:bg-altiva-purple-dark text-white px-8 py-6"
              size="lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
