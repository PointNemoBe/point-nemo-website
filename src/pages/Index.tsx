
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import AboutMeSection from "@/components/AboutMeSection";
import ExcursionsSection from "@/components/ExcursionsSection";
import Footer from "@/components/Footer";
import { ExcursionFAQ } from "@/components/excursions/ExcursionFAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ExcursionsSection />
      <AboutMeSection />
      
      {/* Section FAQ intégrée */}
      <section id="faq" className="section-container bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="section-title mb-8 text-center">Questions Fréquentes</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Retrouvez ici les réponses aux questions les plus fréquemment posées sur nos excursions et nos services.
          </p>
          <ExcursionFAQ />
        </div>
      </section>
      
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
