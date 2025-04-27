
import { AspectRatio } from "./ui/aspect-ratio";

const AboutMeSection = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Qui suis-je ?</h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="float-left mr-8 mb-4">
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

        <p className="text-gray-600 text-lg text-justify font-normal">
          Depuis toujours, j'aime comprendre comment la Terre fonctionne, comment le vivant s'organise, interagit, évolue.

          C'est ce qui m'a poussé à étudier la géographie, puis à me former comme Guide Nature auprès des Cercles des Naturalistes de Belgique (CNB).
          Avec le temps, une envie s'est précisée : aller au-delà des cercles de passionnés.

          Partager quelques clés de lecture avec celles et ceux qui, sans forcément s'y connaître, ressentent le besoin (ou pas) de se reconnecter à la nature.

          Point Nemo est né de ce besoin : proposer des excursions immersives, accessibles, où la découverte est aussi une manière de retrouver du lien — avec soi-même, avec les autres, avec le vivant et notre territoire.

          Sans prétendre apporter toutes les réponses, mais en entrouvrant quelques portes.
          À bientôt,

          Grégoire
        </p>
      </div>
    </section>
  );
};

export default AboutMeSection;
