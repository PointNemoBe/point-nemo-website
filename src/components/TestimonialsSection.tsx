
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Marie Dupont",
    role: "Directrice des Ressources Humaines",
    company: "EcoSolutions",
    content: "Notre équipe a participé à une journée de teambuilding organisée par Point Nemo et l'expérience a été extraordinaire. Nous avons tous appris énormément sur notre environnement local tout en renforçant notre cohésion d'équipe.",
    avatar: "M",
  },
  {
    id: 2,
    name: "Thomas Lambert",
    role: "Participant",
    company: "",
    content: "J'ai participé à l'excursion 'Lecture du paysage et géologie' et j'ai été impressionné par les connaissances du guide. Une manière passionnante de redécouvrir des lieux que je pensais connaître.",
    avatar: "T",
  },
  {
    id: 3,
    name: "Sophie Martin",
    role: "Enseignante",
    company: "École Saint-Michel",
    content: "Nous avons organisé une sortie pour nos élèves avec Point Nemo. Le guide a su captiver les enfants avec des explications adaptées à leur âge. Une excellente façon de les sensibiliser à l'environnement.",
    avatar: "S",
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Témoignages</h2>
        <p className="section-subtitle">
          Découvrez ce que nos participants ont pensé de leur expérience avec Point Nemo.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Desktop version with 3 cards */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile version with carousel */}
        <div className="md:hidden">
          <TestimonialCard testimonial={testimonials[activeIndex]} />
          
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="h-10 w-10 rounded-full border-nemo-forest text-nemo-forest"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Précédent</span>
            </Button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? "w-8 bg-nemo-forest" : "w-2 bg-gray-300"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Témoignage ${index + 1}`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="h-10 w-10 rounded-full border-nemo-forest text-nemo-forest"
            >
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Suivant</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="mb-6">
          <Avatar className="h-12 w-12 border-2 border-nemo-leaf">
            <AvatarFallback className="bg-nemo-forest text-white">
              {testimonial.avatar}
            </AvatarFallback>
          </Avatar>
        </div>
        
        <div className="space-y-4">
          <p className="italic text-gray-600 text-sm">"{testimonial.content}"</p>
          
          <div>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">
              {testimonial.role}
              {testimonial.company && ` · ${testimonial.company}`}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialsSection;
