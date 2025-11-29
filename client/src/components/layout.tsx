import { Link, useLocation } from "wouter";
import { Menu, Search, Gift, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { categories } from "@/lib/data";
import { useState } from "react";

export function Header() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Only show main categories in navigation (first 4 categories)
  const mainCategories = categories.slice(0, 4);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-serif text-2xl font-bold text-primary hover:opacity-90 transition-opacity">
          <Gift className="h-8 w-8 text-secondary" />
          <span>Noël Magique</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {mainCategories.map((cat) => (
            <Link 
              key={cat.id} 
              href={`/categorie/${cat.slug}`}
              className={`text-sm font-medium transition-colors hover:text-secondary ${location === `/categorie/${cat.slug}` ? "text-secondary" : "text-foreground/80"}`}
            >
              {cat.title}
            </Link>
          ))}
          <Link href="/contact" className="text-sm font-medium text-foreground/80 hover:text-secondary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Search & Mobile Menu */}
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Rechercher un cadeau..."
              className="pl-9 h-9 bg-muted/50 focus-visible:ring-secondary"
            />
          </div>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="font-serif">
              <div className="flex flex-col gap-6 mt-8">
                <Link href="/" className="text-2xl font-bold text-primary" onClick={() => setIsMenuOpen(false)}>
                  Accueil
                </Link>
                <div className="h-px bg-border" />
                {mainCategories.map((cat) => (
                  <Link 
                    key={cat.id} 
                    href={`/categorie/${cat.slug}`}
                    className="text-lg font-medium hover:text-secondary transition-colors" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {cat.title}
                  </Link>
                ))}
                <Link href="/contact" className="text-lg font-medium hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-serif text-xl font-bold">
              <Gift className="h-6 w-6 text-secondary" />
              <span>Noël Magique</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Votre guide ultime pour trouver les cadeaux parfaits. Nous sélectionnons les meilleures idées pour faire de ce Noël un moment inoubliable.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-secondary">Catégories</h3>
            <ul className="space-y-2 text-sm">
              {categories.slice(0, 4).map((cat) => (
                <li key={cat.id}>
                  <Link href={`/categorie/${cat.slug}`} className="hover:text-secondary transition-colors">
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-secondary">Liens Utiles</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-secondary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-secondary transition-colors">
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-secondary">Suivez-nous</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6 text-xs text-primary-foreground/60">
              <p>Ce site participe au Programme Partenaires d'Amazon.</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
          © 2025 Noël Magique. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
