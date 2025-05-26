import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { FaLinkedin } from "react-icons/fa";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


// Fix default marker icon issue in Leaflet + Webpack
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});
const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Ajout d'un useEffect pour appliquer un style CSS personnalisé à Leaflet
  useEffect(() => {
    // Ajouter une règle CSS pour réduire le z-index des éléments Leaflet
    const style = document.createElement('style');
    style.innerHTML = `
      .leaflet-pane,
      .leaflet-control,
      .leaflet-top,
      .leaflet-bottom {
        z-index: 10 !important;
      }
    `;
    document.head.appendChild(style);

    // Nettoyer en supprimant le style lors du démontage du composant
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('idle');
    try {
      const response = await fetch('https://formspree.io/f/mpwdnrbr', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus('success');
        setFormData({ nom: '', prenom: '', email: '', phone: '', message: '', consent: false });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Vous souhaitez organiser une excursion ou vous avez des questions ? N'hésitez pas à me contacter !
        </p>
      </div>
      
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* LEFT: Contact form */}
        <div className="md:w-2/3 w-full">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nom">Nom <span className="text-red-600">*</span></Label>
                <Input 
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="prenom">Prénom <span className="text-red-600">*</span></Label>
                <Input 
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  placeholder="Votre prénom"
                  required
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email <span className="text-red-600">*</span></Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre.email@exemple.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+32 470 00 00 00"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message <span className="text-red-600">*</span></Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Décrivez votre projet ou posez vos questions..."
                rows={5}
                required
              />
            </div>
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="mt-1 h-4 w-4 rounded border-gray-300 text-nemo-forest focus:ring-nemo-moss"
              />
              <Label htmlFor="consent" className="text-sm">
                J'accepte que mes informations soient traitées par Point Nemo pour répondre à ma demande. Ces données ne seront pas utilisées à des fins commerciales ni partagées avec des tiers. <span className="text-red-600">*</span>
              </Label>
            </div>
            <Button type="submit" className="w-full bg-nemo-forest hover:bg-nemo-moss">
              Envoyer le message
            </Button>
            <p className="text-xs text-gray-500 mt-2">* Champs obligatoires</p>
            {status === 'success' && (
              <div className="mt-4 flex items-center p-4 bg-green-50 border-l-4 border-nemo-moss rounded-md shadow-sm">
                <svg className="h-6 w-6 text-nemo-forest mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="text-nemo-forest font-medium">Message envoyé avec succès !</p>
                  <p className="text-sm text-gray-600 mt-1">Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              </div>
            )}
            {status === 'error' && (
              <div className="mt-4 flex items-center p-4 bg-red-50 border-l-4 border-red-500 rounded-md shadow-sm">
                <svg className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-red-700 font-medium">Une erreur est survenue</p>
                  <p className="text-sm text-red-600 mt-1">Veuillez réessayer plus tard ou nous contacter par téléphone.</p>
                </div>
              </div>
            )}
          </form>
        </div>
        {/* RIGHT: Contact info + Map */}
        <div className="md:w-1/3 w-full flex flex-col gap-6">
          <div className="p-6 bg-white rounded-lg shadow flex flex-col gap-2 items-start">
            <div className="text-nemo-forest font-bold text-lg">Point Nemo</div>
            <div>Grégoire Leroy</div>
            <div className="flex items-center gap-2 mt-1">
              <Phone className="w-4 h-4 text-nemo-forest" />
              <a href="tel:+32479943156" className="hover:underline">+32 479 94 31 56</a>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/leroygr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-nemo-forest hover:text-nemo-moss transition-colors"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>

          <div className="h-72 w-full rounded-lg shadow overflow-hidden" style={{ position: 'relative', zIndex: 0 }}>
            <MapContainer
              center={[50.595, 4.328]}
              zoom={9}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[50.595, 4.328]}>
                <Popup>Grégoire Leroy - Point Nemo</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
