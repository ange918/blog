import { Layout } from "@/components/layout";
import { Seo } from "@/components/seo";

export default function LegalPage() {
  return (
    <Layout>
      <Seo title="Mentions Légales" description="Mentions légales et politique de confidentialité." />
      
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="font-serif text-4xl font-bold text-primary mb-8">Mentions Légales & Affiliation</h1>
        
        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-primary prose-a:text-secondary max-w-none">
          <h2>1. Éditeur du site</h2>
          <p>
            Le site <strong>Noël Magique</strong> est un site personnel édité à titre non professionnel.
          </p>

          <h2>2. Hébergement</h2>
          <p>
            Ce site est hébergé par Replit Inc.<br />
            Adresse : San Francisco, California, USA.
          </p>

          <h2>3. Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>

          <h2>4. Transparence & Affiliation</h2>
          <div className="bg-secondary/10 p-6 rounded-xl border border-secondary/20 my-8">
            <h3 className="text-secondary font-bold mt-0">Mention importante</h3>
            <p className="mb-0">
              Noël Magique participe au Programme Partenaires d’Amazon EU, un programme d’affiliation conçu pour permettre à des sites de percevoir une rémunération grâce à la création de liens vers Amazon.fr.
            </p>
          </div>
          <p>
            Lorsque vous cliquez sur des liens vers divers marchands sur ce site et effectuez un achat, cela peut entraîner l'obtention d'une commission pour ce site. Les programmes d'affiliation et les affiliations incluent, sans s'y limiter, le réseau de partenaires eBay.
          </p>
          <p>
            Cela n'impacte en rien le prix que vous payez pour vos achats. Les prix sont identiques, que vous passiez par nos liens ou non.
          </p>

          <h2>5. Données personnelles</h2>
          <p>
            Nous ne collectons aucune donnée personnelle sensible. Les seules informations collectées sont celles fournies volontairement via le formulaire de contact (nom, email) et ne sont utilisées que pour répondre à vos demandes.
          </p>
        </div>
      </div>
    </Layout>
  );
}
