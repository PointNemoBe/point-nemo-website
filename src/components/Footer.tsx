
import PointNemoLogo from "./PointNemoLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-nemo-forest text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <PointNemoLogo className="mr-2 text-white" />
            <span className="font-display text-2xl font-bold">Point Nemo</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-nemo-leaf transition-colors">
              À propos
            </a>
            <a href="#excursions" className="hover:text-nemo-leaf transition-colors">
              Nos excursions
            </a>
            <a href="#aboutme" className="hover:text-nemo-leaf transition-colors">
              Derrière Point Nemo
            </a>            
            <a href="/faq" className="hover:text-nemo-leaf transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-nemo-leaf transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Point Nemo. Tous droits réservés.</p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm hover:text-nemo-leaf transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-sm hover:text-nemo-leaf transition-colors">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
