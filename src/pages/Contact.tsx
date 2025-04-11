
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-altiva-purple-dark font-semibold mb-6">
              Connect With Us
            </h1>
            <p className="font-montserrat text-base md:text-lg text-altiva-gray-neutral mb-8">
              Begin your extraordinary journey with a conversation. Our travel experts are ready
              to craft a bespoke experience tailored to your desires.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="bg-altiva-gray-soft py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-6">
                How to Reach Us
              </h2>
              <p className="font-montserrat text-altiva-gray-neutral mb-10">
                Whether you're planning your next journey or have questions about our services,
                we're here to assist you every step of the way.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-altiva-purple-soft text-altiva-purple-tertiary flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg text-altiva-purple-dark font-medium mb-2">
                      Email
                    </h3>
                    <p className="font-montserrat text-sm text-altiva-gray-neutral mb-1">
                      General Inquiries:
                    </p>
                    <a
                      href="mailto:info@altivavoyages.com"
                      className="font-montserrat text-altiva-purple-secondary hover:text-altiva-purple-tertiary transition-colors"
                    >
                      info@altivavoyages.com
                    </a>
                    <p className="font-montserrat text-sm text-altiva-gray-neutral mb-1 mt-3">
                      Trip Planning:
                    </p>
                    <a
                      href="mailto:journeys@altivavoyages.com"
                      className="font-montserrat text-altiva-purple-secondary hover:text-altiva-purple-tertiary transition-colors"
                    >
                      journeys@altivavoyages.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-altiva-purple-soft text-altiva-purple-tertiary flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg text-altiva-purple-dark font-medium mb-2">
                      Phone
                    </h3>
                    <p className="font-montserrat text-sm text-altiva-gray-neutral mb-1">
                      North America:
                    </p>
                    <a
                      href="tel:+18885551234"
                      className="font-montserrat text-altiva-purple-secondary hover:text-altiva-purple-tertiary transition-colors"
                    >
                      +1 (888) 555-1234
                    </a>
                    <p className="font-montserrat text-sm text-altiva-gray-neutral mb-1 mt-3">
                      Europe:
                    </p>
                    <a
                      href="tel:+351215551234"
                      className="font-montserrat text-altiva-purple-secondary hover:text-altiva-purple-tertiary transition-colors"
                    >
                      +351 21 555 1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-altiva-purple-soft text-altiva-purple-tertiary flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg text-altiva-purple-dark font-medium mb-2">
                      Offices
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-montserrat text-sm text-altiva-gray-neutral mb-1">
                          Lisbon:
                        </p>
                        <p className="font-montserrat text-altiva-purple-secondary">
                          Avenida da Liberdade 144, 1250-146 Lisboa, Portugal
                        </p>
                      </div>
                      <div>
                        <p className="font-montserrat text-sm text-altiva-gray-neutral mb-1">
                          New York:
                        </p>
                        <p className="font-montserrat text-altiva-purple-secondary">
                          101 Park Avenue, New York, NY 10178, USA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-altiva-gray-light/50">
                <h3 className="font-playfair text-xl text-altiva-purple-dark font-medium mb-4">
                  Schedule a Consultation
                </h3>
                <p className="font-montserrat text-sm text-altiva-gray-neutral mb-6">
                  For a more personalized approach, schedule a video consultation with one of our travel experts.
                </p>
                <Button className="bg-altiva-purple-tertiary hover:bg-altiva-purple-dark text-white">
                  Book a Video Call
                </Button>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-4">
              Our Global Presence
            </h2>
            <p className="font-montserrat text-base text-altiva-gray-neutral">
              With offices in Europe and North America, we're positioned to provide exceptional service
              to our discerning clientele around the world.
            </p>
          </div>
          
          <div className="aspect-[16/9] bg-altiva-gray-soft rounded-md overflow-hidden">
            {/* This would be replaced with an actual map integration */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="font-montserrat text-altiva-gray-neutral">
                Interactive Map Would Be Displayed Here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-altiva-gray-soft py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair text-2xl md:text-3xl text-altiva-purple-dark font-semibold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "How far in advance should I plan my journey?",
                  answer: "For optimal access to exclusive accommodations and experiences, we recommend planning 6-12 months in advance, especially for peak season travel. However, we pride ourselves on our ability to craft exceptional last-minute journeys when needed."
                },
                {
                  question: "What is included in a typical Altiva Voyages experience?",
                  answer: "Each journey is bespoke, but typically includes luxury accommodations, private transfers, expert guides, exclusive experiences, and 24/7 concierge support. We can also arrange private air travel, yacht charters, and other premium services upon request."
                },
                {
                  question: "How do you select your local partners and experiences?",
                  answer: "We personally vet every property, guide, and experience in our portfolio. Our partners must share our commitment to authenticity, excellence, and responsible tourism. Many of our most exceptional experiences are exclusively available through Altiva Voyages."
                },
                {
                  question: "Do you offer travel insurance?",
                  answer: "Yes, we offer premium travel insurance options through our trusted partners, providing comprehensive coverage for our clients. We strongly recommend travel insurance for all journeys."
                },
                {
                  question: "Can you accommodate dietary restrictions or special needs?",
                  answer: "Absolutely. We take great care to understand and accommodate all dietary requirements, mobility considerations, and special requests to ensure a seamless and comfortable experience."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-md p-6 shadow-sm">
                  <h3 className="font-playfair text-lg text-altiva-purple-dark font-medium mb-3">
                    {faq.question}
                  </h3>
                  <p className="font-montserrat text-sm text-altiva-gray-neutral">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
