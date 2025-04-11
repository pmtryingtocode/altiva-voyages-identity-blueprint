
import Hero from "@/components/Hero";
import FeaturedExperiences from "@/components/FeaturedExperiences";
import Philosophy from "@/components/Philosophy";
import Testimonials from "@/components/Testimonials";
import JournalPreview from "@/components/JournalPreview";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div>
      <Hero />
      
      <FeaturedExperiences />
      
      <Philosophy />
      
      <Testimonials />
      
      <JournalPreview />
      
      <section className="py-24 bg-altiva-gray-soft">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-altiva-purple-dark font-semibold mb-6">
                Begin Your Extraordinary Journey
              </h2>
              <p className="font-montserrat text-altiva-gray-neutral mb-8 max-w-md">
                Whether you have a specific destination in mind or seek inspiration for your next adventure,
                our travel experts are ready to craft a bespoke experience that exceeds your expectations.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-altiva-purple-soft text-altiva-purple-tertiary flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg text-altiva-purple-dark font-medium mb-2">
                      Personalized Consultation
                    </h3>
                    <p className="font-montserrat text-sm text-altiva-gray-neutral">
                      Schedule a call with our expert curators to discuss your travel preferences and desires.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-altiva-purple-soft text-altiva-purple-tertiary flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg text-altiva-purple-dark font-medium mb-2">
                      Bespoke Itinerary
                    </h3>
                    <p className="font-montserrat text-sm text-altiva-gray-neutral">
                      Receive a carefully crafted journey tailored to your unique interests and requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-altiva-purple-soft text-altiva-purple-tertiary flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg text-altiva-purple-dark font-medium mb-2">
                      Seamless Experience
                    </h3>
                    <p className="font-montserrat text-sm text-altiva-gray-neutral">
                      Enjoy a perfectly orchestrated journey with attentive support from start to finish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
