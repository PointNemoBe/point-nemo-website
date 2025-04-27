
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import AboutMeSection from "@/components/AboutMeSection";
import ExcursionsSection from "@/components/ExcursionsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <AboutMeSection />
      <ExcursionsSection />
      <Footer />
    </div>
  );
};

export default Index;
