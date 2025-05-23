import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, User } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { FaLinkedin } from "react-icons/fa";
import MapComponent from "./MapComponent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        setFormData({ nom: '', prenom: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-container bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Vous souhaitez organiser une excursion ou vous avez des questions ? N'hésitez pas à me contacter !
        </p>
      </div>
      
      <div className="w-full max-w-4xl mx-auto space-y-8">
        <Card className="shadow-lg">
          <CardContent className="p-8">
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
              <Button type="submit" className="w-full bg-nemo-forest hover:bg-nemo-moss">
                Envoyer le message
              </Button>
              <p className="text-xs text-gray-500 mt-2">* Champs obligatoires</p>
              {status === 'success' && (
                <div className="mt-2 text-green-700 bg-green-100 border border-green-300 rounded p-2 text-center">
                  Message envoyé ! Nous vous répondrons dans les plus brefs délais.
                </div>
              )}
              {status === 'error' && (
                <div className="mt-2 text-red-700 bg-red-100 border border-red-300 rounded p-2 text-center">
                  Une erreur est survenue. Veuillez réessayer plus tard.
                </div>
              )}
            </form>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-lg bg-gradient-to-br from-nemo-forest to-nemo-moss text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <User className="w-5 h-5" />
                Informations de contact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="text-lg font-semibold">Point Nemo</div>
                <div className="text-nemo-sand">Grégoire Leroy</div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-nemo-sand" />
                  <a href="tel:+32479943156" className="hover:text-nemo-sand transition-colors">
                    +32 479 94 31 56
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-nemo-sand" />
                  <span className="text-sm">Brabant wallon et environs</span>
                </div>
              </div>
              <div className="pt-4 border-t border-nemo-sand/30">
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/leroygr/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn" 
                    className="text-nemo-sand hover:text-white transition-colors transform hover:scale-110 duration-200"
                  >
                    <FaLinkedin size={28} />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-nemo-forest">
                <MapPin className="w-5 h-5" />
                Zone d'activités
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <MapComponent />
              <div className="p-4 bg-gray-50 text-sm text-gray-600">
                <p className="font-medium text-nemo-forest mb-1">Nivelles et environs</p>
                <p>Les excursions ont lieu principalement en Brabant wallon et dans les communes voisines.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
