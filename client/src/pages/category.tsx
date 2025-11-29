import { Layout } from "@/components/layout";
import { Seo } from "@/components/seo";
import { articles, categories } from "@/lib/data";
import { Link, useRoute } from "wouter";
import { ArrowRight } from "lucide-react";
import NotFound from "@/pages/not-found";

export default function CategoryPage() {
  const [match, params] = useRoute("/categorie/:slug");
  
  if (!match) return <NotFound />;
  
  const category = categories.find(c => c.slug === params.slug);
  
  if (!category) return <NotFound />;

  const categoryArticles = articles.filter(a => a.category === category.slug);

  return (
    <Layout>
      <Seo 
        title={category.title} 
        description={`Découvrez nos meilleures idées de ${category.title.toLowerCase()}. ${category.description}`} 
      />
      
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold text-primary mb-4">{category.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categoryArticles.map((article) => (
              <Link 
                key={article.id} 
                href={`/article/${article.slug}`}
                className="group flex flex-col h-full bg-card border border-border/50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
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
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">Aucun article dans cette catégorie pour le moment.</p>
            <Link href="/" className="text-primary hover:underline mt-4 inline-block">
              Retour à l'accueil
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}
