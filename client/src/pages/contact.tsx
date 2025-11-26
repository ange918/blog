import { Layout } from "@/components/layout";
import { Seo } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <Layout>
      <Seo title="Contact" description="Contactez l'équipe de Noël Magique." />
      
      <div className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Une question ? Une suggestion de cadeau ? N'hésitez pas à nous écrire.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary mb-4">Restons en contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous adorons recevoir des messages de nos lecteurs. Que ce soit pour une collaboration, une idée d'article ou simplement pour dire bonjour, le formulaire ci-contre est là pour vous.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">Email</h3>
                  <p className="text-muted-foreground">bonjour@noelmagique.fr</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">Adresse</h3>
                  <p className="text-muted-foreground">123 Avenue du Père Noël, Pôle Nord</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">Prénom</label>
                  <Input id="firstName" placeholder="Jean" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">Nom</label>
                  <Input id="lastName" placeholder="Dupont" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="jean.dupont@email.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Votre message..." className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-12">
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
