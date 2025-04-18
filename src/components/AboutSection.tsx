import { Compass, Earth, Mountain, Leaf, Users, BookOpen } from "lucide-react";
const AboutSection = () => {
  return <section id="about" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">À propos de Point Nemo</h2>
        
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Forêt de pins" className="rounded-lg shadow-lg w-full h-[500px] object-cover" />
        </div>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-display font-semibold text-nemo-forest mb-3">Pourquoi Point Nemo ?</h3>
            <p className="text-gray-600">
              Le Point Nemo désigne le lieu le plus éloigné de toute terre émergée, perdu au cœur de l'océan Pacifique. Cette notion évoque l'isolement et la déconnexion, faisant écho à nos sociétés modernes, souvent déconnectées du vivant et des écosystèmes qui nous entourent.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-display font-semibold text-nemo-forest mb-3">Notre mission</h3>
            <p className="text-gray-600">
              Point Nemo propose de redécouvrir la richesse des écosystèmes de nos territoires à travers des excursions guidées immersives. Notre approche est généraliste, accessible et systémique : nous explorons les liens entre espèces, milieux, sols, climat, et activités humaines.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-display font-semibold text-nemo-forest mb-3">Qui suis-je ?</h3>
            <p className="text-gray-600">
              Guide nature certifié des Cercles des Naturalistes de Belgique (CNB), je partage ma passion pour l'environnement et les écosystèmes locaux à travers des excursions enrichissantes et accessibles à tous.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="flex flex-col items-center text-center">
              <div className="bg-nemo-leaf/20 p-3 rounded-full mb-3">
                <Leaf className="h-6 w-6 text-nemo-forest" />
              </div>
              <h4 className="font-semibold">Écosystèmes</h4>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-nemo-leaf/20 p-3 rounded-full mb-3">
                <Users className="h-6 w-6 text-nemo-forest" />
              </div>
              <h4 className="font-semibold">Accessibilité</h4>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-nemo-leaf/20 p-3 rounded-full mb-3">
                <BookOpen className="h-6 w-6 text-nemo-forest" />
              </div>
              <h4 className="font-semibold">Apprentissage</h4>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;