
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section-container bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Vous souhaitez organiser une excursion ou vous avez des questions ? N'hésitez pas à nous contacter !
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
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
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
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
          </form>
        </div>
        
        <div className="flex flex-col justify-between">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <MapPin className="mt-1 mr-4 h-5 w-5 text-nemo-forest" />
                <div>
                  <h3 className="font-semibold mb-1">Adresse</h3>
                  <p className="text-gray-600">
                    Bruxelles et sa périphérie
                    <br />
                    Belgique
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Mail className="mt-1 mr-4 h-5 w-5 text-nemo-forest" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:contact@point-nemo.be" className="text-nemo-forest hover:underline">
                    contact@point-nemo.be
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Phone className="mt-1 mr-4 h-5 w-5 text-nemo-forest" />
                <div>
                  <h3 className="font-semibold mb-1">Téléphone</h3>
                  <a href="tel:+32470000000" className="text-nemo-forest hover:underline">
                    +32 470 00 00 00
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-white p-4 rounded-lg shadow-sm border border-nemo-leaf/20">
            <p className="text-sm text-gray-600 italic">
              "La connaissance de la nature est la voie pour comprendre notre place dans le monde et agir de manière responsable."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
