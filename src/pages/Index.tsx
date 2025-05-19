
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import AboutMeSection from "@/components/AboutMeSection";
import ExcursionsSection from "@/components/ExcursionsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ExcursionsSection />
      <AboutMeSection />
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
