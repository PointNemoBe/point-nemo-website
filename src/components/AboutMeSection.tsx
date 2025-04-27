
import { AspectRatio } from "./ui/aspect-ratio";

const AboutMeSection = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Qui suis-je ?</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <p className="text-gray-600 text-lg">
            Guide nature certifié des Cercles des Naturalistes de Belgique
            (CNB), je partage ma passion pour l'environnement et les
            écosystèmes locaux à travers des excursions enrichissantes et
            accessibles à tous.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 overflow-hidden rounded-full border-4 border-nemo-leaf shadow-lg">
            <AspectRatio ratio={1 / 1}>
              <img
                src="/lovable-uploads/8ce5c1f1-635f-48d8-90ba-616d8ddd1a86.png"
                alt="Photo du guide nature"
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
