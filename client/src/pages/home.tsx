import { Layout } from "@/components/layout";
import { Seo } from "@/components/seo";
import { categories, articles } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/elegant_christmas_hero_image.png";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const recentArticles = articles.slice(0, 3);
  // Only show main categories on homepage (first 4 categories)
  const mainCategories = categories.slice(0, 4);

  return (
    <Layout>
      <Seo title="Accueil" description="Trouvez le cadeau de Noël parfait avec nos guides experts." />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Cadeaux de Noël élégants" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 border border-white/30 rounded-full text-sm font-medium tracking-wider uppercase backdrop-blur-sm bg-white/10">
              Guide Cadeaux 2025
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
              L'Art d'Offrir <span className="text-secondary italic">le Cadeau Parfait</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
              Des idées soignées, des trouvailles uniques et des guides experts pour faire de ce Noël un moment magique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-6 text-lg h-auto rounded-full">
                Explorer les Guides
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg h-auto rounded-full">
                Nos Coups de Cœur
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Trouvez l'Inspiration</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainCategories.map((cat, index) => (
              <Link key={cat.id} href={`/categorie/${cat.slug}`}>
                <a className="group block relative h-96 overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif text-2xl font-bold mb-2">{cat.title}</h3>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {cat.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-secondary font-medium text-sm uppercase tracking-wider">
                      Découvrir <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-serif text-4xl font-bold text-primary mb-2">Derniers Articles</h2>
              <p className="text-muted-foreground">Nos conseils les plus récents pour vos achats de Noël.</p>
            </div>
            <Button variant="ghost" className="hidden md:flex items-center gap-2 text-primary hover:text-secondary">
              Voir tout le blog <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <Link key={article.id} href={`/article/${article.slug}`}>
                <a className="group flex flex-col h-full bg-card border border-border/50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide shadow-sm">
                      {categories.find(c => c.slug === article.category)?.title || "Guide"}
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="text-xs text-muted-foreground mb-3 flex items-center gap-2">
                      <span>{article.date}</span>
                      <span className="w-1 h-1 bg-secondary rounded-full" />
                      <span>Par {article.author}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-primary font-medium text-sm mt-auto group-hover:translate-x-1 transition-transform">
                      Lire l'article <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Button variant="outline" className="w-full">Voir tout le blog</Button>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid-lg" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
          <Sparkles className="w-12 h-12 text-secondary mx-auto mb-6" />
          <h2 className="font-serif text-4xl font-bold mb-6">Ne ratez aucune bonne idée !</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos meilleures sélections cadeaux directement dans votre boîte mail.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Votre adresse email" 
              className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <Button type="submit" className="rounded-full bg-secondary hover:bg-secondary/90 text-white px-8 py-3 h-auto text-base font-medium">
              S'inscrire
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
