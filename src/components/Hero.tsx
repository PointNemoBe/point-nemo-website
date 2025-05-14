import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          // backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')"
          backgroundImage:
            "url('/vincent-foret-Goh3HHwu0D4-unsplash.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-white">
          Reconnectons-nous à la Nature
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 max-w-3xl mx-auto">
          Point Nemo vous invite à (re)découvrir la richesse des écosystèmes de
          nos territoires à travers des excursions guidées immersives.
        </p>

        <p className="text-base sm:text-lg text-white/80 mb-10 max-w-2xl mx-auto italic">
          "Ouvrir les yeux, aiguiser les sens, et comprendre notre place dans la
          grande famille du vivant."
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-nemo-forest hover:bg-nemo-moss text-white px-8 py-6 text-lg"
          >
            <a href="#excursions">Découvrir nos excursions</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 px-8 py-6 text-lg"
          >
            <a href="#about">En savoir plus</a>
          </Button>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white flex flex-col items-center">
          <span className="mb-2 text-sm font-medium">Découvrir</span>
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};
export default Hero;
