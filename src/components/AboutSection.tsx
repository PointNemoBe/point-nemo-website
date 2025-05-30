
import { Compass, Earth, Mountain } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">À propos de Point Nemo</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="mousse_foret.jpg"
            alt="Forêt de pins"
            className="rounded-lg shadow-lg w-full h-[500px] object-cover"
          />
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-display font-semibold text-nemo-forest mb-3">
              Pourquoi Point Nemo ?
            </h3>
            <p className="text-gray-600">
              Le Point Nemo désigne le lieu le plus éloigné de toute terre
              émergée, perdu au cœur de l'océan Pacifique. Cette notion évoque
              l'isolement, la distance, et la déconnexion, faisant écho à l'état
              de nos sociétés modernes, trop souvent déconnectées du vivant et des
              écosystèmes qui nous entourent.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-display font-semibold text-nemo-forest mb-3">
              Mission
            </h3>
            <p className="text-gray-600">
            <strong>Point Nemo</strong> propose de redécouvrir la richesse des écosystèmes de nos territoires à travers
            des excursions guidées participatives. L'objectif est d'éveiller les sens, d'ouvrir les yeux
            et de transmettre des clés pour comprendre les liens et dynamiques entre le vivant,
            le non-vivant et les activités humaines.
            Une <strong>approche globale</strong> et <strong>systémique</strong> permettant de prendre du recul, d'observer et de comprendre
            les écosystèmes qui nous entourent.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="flex flex-col items-center text-center">
              <div className="bg-nemo-leaf/20 p-3 rounded-full mb-3">
                <Mountain className="h-6 w-6 text-nemo-forest" />
              </div>
              <h4 className="font-semibold">Territoires</h4>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-nemo-leaf/20 p-3 rounded-full mb-3">
                <Earth className="h-6 w-6 text-nemo-forest" />
              </div>
              <h4 className="font-semibold">Écosystèmes</h4>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-nemo-leaf/20 p-3 rounded-full mb-3">
                <Compass className="h-6 w-6 text-nemo-forest" />
              </div>
              <h4 className="font-semibold">Exploration</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
