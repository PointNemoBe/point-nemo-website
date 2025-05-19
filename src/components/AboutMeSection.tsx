import { AspectRatio } from "./ui/aspect-ratio";
const AboutMeSection = () => {
  return (
    <section id="aboutme" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Qui suis-je ?</h2>
      </div>
      <div className="max-w-7xl  mx-auto space-y-4">
        <div className="float-left mr-8 mb-4">
          <div className="w-48 h-46 overflow-hidden rounded-full border-4 border-nemo-leaf shadow-lg">
            <AspectRatio ratio={1 / 1}>
              <img
                src="PN_Greg_2 Small.jpeg"
                alt="Photo"
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>

        <p className="text-gray-600 text-justify font-normal">
          Père de deux enfants, géographe, j'ai grandi et vis à Nivelles, en Brabant wallon - une région de plateaux agricoles fortement marquée par 
          l'<strong>urbanisation</strong> et <strong>l'agriculture intensive</strong>. <strong>L'impact de l'homme</strong> sur son environnement m'a toujours interpellé.
        </p>
        <p className="text-gray-600 text-justify font-normal">
        J'aime comprendre comment la Terre fonctionne, comment le vivant s'organise, interagit avec son environnement, façonne et transforme les paysages au fil du temps.
        C'est notamment ce qui m'a poussé à étudier la <strong>géographie</strong>, puis à me former comme <strong>Guide Nature</strong> auprès des <a href="https://cercles-naturalistes.be" target="_blank" rel="noopener noreferrer">Cercles des Naturalistes de Belgique (CNB)</a>.
        </p>
        <p className="text-gray-600 text-justify font-normal">
          Avec le temps, une envie s'est précisée : aller <strong>au-delà des cercles de passionnés</strong>.
           Partager quelques clés de lecture avec celles et ceux qui, sans forcément s'y connaître, ressentent - ou pas - le besoin de se reconnecter à la nature.
        </p>
        <p className="text-gray-600 text-justify font-normal">
          <strong>Point Nemo</strong> est né de ce besoin: proposer des excursions <strong>accessibles</strong>, où la <strong>découverte</strong> est aussi une manière de retisser du lien avec le vivant et notre territoire.
          Sans prétendre apporter toutes les réponses, mais en entrouvrant quelques portes.
        </p>
        <p className="text-gray-600 text-justify font-normal">
          Au plaisir de se rencontrer sur le terrain,<br />
          Grégoire
        </p>
      </div>
    </section>
  );
};
export default AboutMeSection;