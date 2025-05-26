import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface CGVDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CGVDialog = ({ open, onOpenChange }: CGVDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto z-[9999]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold text-nemo-forest">Conditions Générales de Vente</DialogTitle>
          <DialogDescription>
            Dernière mise à jour : 26 mai 2025
          </DialogDescription>
        </DialogHeader>
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Fermer</span>
        </DialogClose>

        <div className="text-sm space-y-4 mt-4">
          <h3 className="text-lg font-semibold">1. Préambule</h3>
          <p>
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Point Nemo, 
            entreprise individuelle immatriculée sous le numéro 1023.448.285, (ci-après "Point Nemo" ou "le Prestataire") 
            et toute personne physique ou morale (ci-après "le Client") souhaitant bénéficier des services proposés.
          </p>

          <h3 className="text-lg font-semibold">2. Services proposés</h3>
          <p>
            Point Nemo propose des excursions et balades guidées en nature, avec des explications sur la faune, la flore, 
            les écosystèmes et d'autres thématiques environnementales. Ces services peuvent être adaptés selon les demandes spécifiques des clients.
          </p>

          <h3 className="text-lg font-semibold">3. Réservation et confirmation</h3>
          <p>
            Toute réservation doit faire l'objet d'une demande préalable par email, téléphone ou via le formulaire de contact du site web. 
            La réservation n'est confirmée qu'après accord écrit (email) du Prestataire et versement d'un acompte, le cas échéant.
          </p>

          <h3 className="text-lg font-semibold">4. Tarifs et paiement</h3>
          <p>
            Les tarifs sont communiqués sur devis en fonction de la nature de la prestation, du nombre de participants et des spécificités demandées. 
            Sauf mention contraire, les prix sont exprimés en euros TTC. Le paiement peut s'effectuer par virement bancaire ou en espèces.
          </p>

          <h3 className="text-lg font-semibold">5. Annulation et report</h3>
          <p>
            En cas d'annulation par le Client :
            <br />- Plus de 7 jours avant la date prévue : remboursement intégral de l'acompte
            <br />- Entre 7 et 3 jours avant la date prévue : 50% de l'acompte conservé
            <br />- Moins de 3 jours avant la date prévue : 100% de l'acompte conservé
            <br /><br />
            En cas d'annulation par le Prestataire (conditions météorologiques extrêmes, maladie...) : 
            report de l'activité à une date ultérieure ou remboursement intégral.
          </p>

          <h3 className="text-lg font-semibold">6. Assurances et responsabilités</h3>
          <p>
            Le Prestataire dispose d'une assurance responsabilité civile professionnelle. 
            Le Client demeure responsable de ses effets personnels et de sa propre sécurité. 
            Il s'engage à respecter les consignes données par le guide pendant l'excursion.
          </p>

          <h3 className="text-lg font-semibold">7. Droit à l'image</h3>
          <p>
            Le Prestataire peut être amené à prendre des photographies lors des excursions pour illustrer ses supports de communication. 
            Les participants qui ne souhaitent pas apparaître sur ces images doivent le signaler explicitement avant le début de l'activité.
          </p>

          <h3 className="text-lg font-semibold">8. Protection des données personnelles</h3>
          <p>
            Les données personnelles collectées lors de la réservation sont utilisées uniquement dans le cadre de la relation commerciale. 
            Elles ne sont ni vendues ni transmises à des tiers. Conformément au RGPD, le Client dispose d'un droit d'accès, de rectification et de suppression de ses données.
          </p>

          <h3 className="text-lg font-semibold">9. Litige et droit applicable</h3>
          <p>
            Les présentes CGV sont soumises au droit belge. En cas de litige, une solution amiable sera recherchée en priorité. 
            À défaut, les tribunaux de Nivelles seront seuls compétents.
          </p>

          <h3 className="text-lg font-semibold">10. Contact</h3>
          <p>
            Pour toute question relative aux présentes CGV, vous pouvez contacter Point Nemo :
            <br />Email : gregoire.leroy86@icloud.com
            <br />Téléphone : +32 479 94 31 56
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CGVDialog;
