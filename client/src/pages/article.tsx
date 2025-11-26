import { Layout } from "@/components/layout";
import { Seo } from "@/components/seo";
import { articles, categories } from "@/lib/data";
import { useRoute, Link } from "wouter";
import NotFound from "@/pages/not-found";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink, Clock, User, Tag, ArrowLeft, Trophy } from "lucide-react";

export default function ArticlePage() {
  const [match, params] = useRoute("/article/:slug");
  
  if (!match) return <NotFound />;
  
  const article = articles.find(a => a.slug === params.slug);
  
  if (!article) return <NotFound />;

  const category = categories.find(c => c.slug === article.category);
  const topPick = article.products && article.products.length > 0 ? article.products[0] : null;

  // Schema.org JSON-LD for BlogPosting/Product Review
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "image": article.image,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Noël Magique",
      "logo": {
        "@type": "ImageObject",
        "url": "https://example.com/logo.png"
      }
    },
    "datePublished": article.date,
    "description": article.excerpt
  };

  return (
    <Layout>
      <Seo title={article.title} description={article.excerpt} />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>

      <article className="bg-background">
        {/* Header */}
        <div className="bg-muted/20 py-12 border-b border-border/40">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link href={category ? `/categorie/${category.slug}` : "/"}>
              <a className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-1" /> 
                {category ? category.title : "Retour"}
              </a>
            </Link>
            
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 min de lecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span>{category?.title}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="container mx-auto px-4 max-w-5xl -mt-8 mb-12">
          <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-xl">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Main Column */}
          <div className="lg:col-span-8 lg:col-start-3">
            
            {/* Top Pick Banner (High Priority CTA) */}
            {topPick && (
              <div className="bg-secondary/5 border-2 border-secondary/20 rounded-xl p-6 mb-12 flex flex-col sm:flex-row gap-6 items-center shadow-sm">
                <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden bg-white flex-shrink-0">
                  <img 
                    src={topPick.image} 
                    alt={topPick.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <span className="bg-secondary text-white text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                      <Trophy className="w-3 h-3" /> Notre Choix N°1
                    </span>
                    <div className="flex items-center text-secondary font-bold text-sm">
                      {topPick.rating} <Star className="w-3 h-3 fill-secondary ml-1" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-1">{topPick.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{topPick.description}</p>
                  <Button size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all" asChild>
                    <a href={topPick.affiliateLink} target="_blank" rel="nofollow noopener noreferrer">
                      Voir l'offre - {topPick.price} <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            )}

            {/* Intro */}
            <div className="prose prose-lg prose-headings:font-serif prose-headings:text-primary prose-a:text-secondary max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            {/* Product List */}
            {article.products && article.products.length > 0 && (
              <div className="space-y-12 mt-12">
                <h2 className="font-serif text-3xl font-bold text-primary border-b border-border pb-4 mb-8">
                  Notre Sélection Détaillée
                </h2>
                
                {article.products.map((product, idx) => (
                  <div key={idx} className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/3 h-64 md:h-auto bg-muted/20 relative">
                         <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-secondary text-white text-xs font-bold px-2 py-1 rounded">
                          #{idx + 1} Choix de la rédac
                        </div>
                      </div>
                      <div className="flex-1 p-6 md:p-8 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-serif text-2xl font-bold text-primary">{product.name}</h3>
                          <div className="flex items-center bg-primary/5 px-2 py-1 rounded text-primary font-bold">
                            <span className="mr-1">{product.rating}</span>
                            <Star className="w-4 h-4 fill-secondary text-secondary" />
                          </div>
                        </div>
                        <div className="text-xl font-semibold text-secondary mb-4">{product.price}</div>
                        
                        <p className="text-muted-foreground mb-6 flex-1">
                          {product.description}
                        </p>
                        
                        <div className="mt-auto">
                          <Button size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-medium rounded-full" asChild>
                            <a href={product.affiliateLink} target="_blank" rel="nofollow noopener noreferrer">
                              Voir le prix & Acheter <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                          </Button>
                          <p className="text-xs text-muted-foreground mt-3 text-center md:text-left">
                            Lien affilié - Merci de soutenir notre blog !
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Comparison Table */}
            {article.products && article.products.length > 1 && (
              <div className="mt-16">
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">Comparatif Rapide</h3>
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="p-4 font-serif font-bold text-primary">Produit</th>
                        <th className="p-4 font-serif font-bold text-primary">Prix</th>
                        <th className="p-4 font-serif font-bold text-primary">Note</th>
                        <th className="p-4 font-serif font-bold text-primary text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {article.products.map((product, idx) => (
                        <tr key={idx} className="hover:bg-muted/20 transition-colors">
                          <td className="p-4 font-medium">{product.name}</td>
                          <td className="p-4">{product.price}</td>
                          <td className="p-4">
                            <div className="flex items-center">
                              {product.rating} <Star className="w-3 h-3 fill-secondary text-secondary ml-1" />
                            </div>
                          </td>
                          <td className="p-4 text-right">
                            <a href={product.affiliateLink} className="text-secondary font-bold hover:underline" target="_blank" rel="nofollow noopener noreferrer">
                              Voir l'offre
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </Layout>
  );
}
