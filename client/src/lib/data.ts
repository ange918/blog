import heroImage from "@assets/generated_images/elegant_christmas_hero_image.png";
import familyImage from "@assets/generated_images/family_opening_gifts.png";
import budgetImage from "@assets/generated_images/budget_friendly_gifts_concept.png";
import originalImage from "@assets/generated_images/unique_original_gifts_concept.png";
import megaguideImage from "@assets/generated_images/festive_christmas_megaguide_banner.png";

export interface Category {
  id: string;
  title: string;
  slug: string;
  image: string;
  description: string;
}

export interface Product {
  name: string;
  price: string;
  image: string;
  description: string;
  affiliateLink: string;
  rating: number;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // HTML content
  category: string;
  image: string;
  date: string;
  author: string;
  products?: Product[];
}

export const categories: Category[] = [
  {
    id: "1",
    title: "Cadeaux par Personne",
    slug: "cadeaux-par-personne",
    image: familyImage,
    description: "Trouvez le cadeau idéal pour chaque membre de la famille.",
  },
  {
    id: "2",
    title: "Cadeaux par Budget",
    slug: "cadeaux-par-budget",
    image: budgetImage,
    description: "Des idées géniales qui respectent votre porte-monnaie.",
  },
  {
    id: "3",
    title: "Cadeaux Originaux",
    slug: "cadeaux-originaux-et-difficiles",
    image: originalImage,
    description: "Pour ceux qui ont déjà tout ou qui aiment l'insolite.",
  },
];

export const articles: Article[] = [
  {
    id: "1",
    title: "Les 10 Meilleurs Cadeaux pour Maman en 2025",
    slug: "meilleurs-cadeaux-maman-2025",
    category: "cadeaux-par-personne",
    image: familyImage,
    date: "15 Nov 2025",
    author: "Sophie Martin",
    excerpt: "Surprenez votre maman cette année avec notre sélection de cadeaux attentionnés et luxueux qu'elle va adorer à coup sûr.",
    content: `
      <p>Noël approche à grands pas et il est temps de penser à la personne la plus importante : Maman. Cette année, oubliez les cadeaux génériques et optez pour quelque chose qui lui fera vraiment plaisir.</p>
      
      <h2>1. Le Coffret Bien-être Ultime</h2>
      <p>Rien de tel qu'un moment de détente. Ce coffret comprend des huiles essentielles, une bougie parfumée et un peignoir en soie.</p>
      
      <h2>2. Une Liseuse Numérique</h2>
      <p>Pour les mamans qui dévorent les livres, c'est le cadeau pratique et léger par excellence.</p>
      
      <h2>3. Un Atelier de Cuisine avec un Chef</h2>
      <p>Offrez une expérience plutôt qu'un objet. Un moment inoubliable à partager.</p>
    `,
    products: [
      {
        name: "Coffret Spa Luxe",
        price: "89,99 €",
        image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Spa+Set",
        description: "Un ensemble complet pour une relaxation totale à la maison.",
        affiliateLink: "#",
        rating: 5
      },
      {
        name: "Kindle Paperwhite",
        price: "139,99 €",
        image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Kindle",
        description: "Écran 6,8 pouces, éclairage chaud réglable.",
        affiliateLink: "#",
        rating: 4.5
      }
    ]
  },
  {
    id: "2",
    title: "Idées Cadeaux à Moins de 20€",
    slug: "cadeaux-moins-de-20-euros",
    category: "cadeaux-par-budget",
    image: budgetImage,
    date: "18 Nov 2025",
    author: "Marc Dubois",
    excerpt: "Faire plaisir sans se ruiner, c'est possible ! Découvrez nos pépites à petit prix pour un Noël malin.",
    content: `
      <p>Le budget est serré cette année ? Pas de panique. On peut trouver des cadeaux fantastiques sans casser sa tirelire.</p>
      
      <h2>Accessoires Tech</h2>
      <p>Des câbles de chargeurs stylés aux supports de téléphone, les petits gadgets sont toujours utiles.</p>
      
      <h2>Décoration Intérieure</h2>
      <p>Un joli vase ou une affiche encadrée peut faire beaucoup d'effet.</p>
    `,
    products: [
      {
        name: "Mini Enceinte Bluetooth",
        price: "19,99 €",
        image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Speaker",
        description: "Un son puissant dans un format de poche.",
        affiliateLink: "#",
        rating: 4
      }
    ]
  },
  {
    id: "3",
    title: "5 Cadeaux Insolites pour l'Oncle qui a Tout",
    slug: "cadeaux-insolites-oncle",
    category: "cadeaux-originaux-et-difficiles",
    image: originalImage,
    date: "20 Nov 2025",
    author: "Julie Bertrand",
    excerpt: "Sortez des sentiers battus avec ces objets curieux et amusants qui surprendront même les plus difficiles.",
    content: `
      <p>On a tous cet oncle qui achète tout ce qu'il veut. Pour le surprendre, il faut miser sur l'originalité.</p>
      
      <h2>Le Kit de Brassage de Bière</h2>
      <p>Pour qu'il puisse créer sa propre cuvée.</p>
      
      <h2>Une Carte du Monde à Gratter</h2>
      <p>Idéal pour les grands voyageurs.</p>
    `,
    products: [
      {
        name: "Kit Brassage Bière",
        price: "59,90 €",
        image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Beer+Kit",
        description: "Tout le nécessaire pour brasser 5 litres de bière blonde.",
        affiliateLink: "#",
        rating: 4.8
      }
    ]
  },
  {
    id: "4",
    title: "Meilleures Idées Cadeaux de Noël 2025 : Le Guide Ultime pour un Noël Mémorable",
    slug: "megaguide-cadeaux-noel-2025",
    category: "cadeaux-originaux-et-difficiles",
    image: megaguideImage,
    date: "25 Nov 2025",
    author: "La Rédaction",
    excerpt: "Le guide définitif pour trouver le cadeau parfait cette année. Des idées pour tous les goûts, tous les budgets et tous les styles pour un Noël 2025 inoubliable.",
    content: `
      <meta name="blog-category" content="cadeaux-originaux">
      <p class="lead text-xl font-light mb-8">
        La saison des fêtes est là, apportant avec elle la joie, les lumières scintillantes et... l'éternel casse-tête des cadeaux. 
        Pour Noël 2025, nous avons compilé le guide le plus complet pour vous aider à naviguer dans la jungle des idées cadeaux. 
        Que vous cherchiez à gâter un passionné de technologie, un gourmand invétéré ou quelqu'un qui privilégie les expériences, ce guide est votre boussole.
      </p>

      <h2 id="cocooning">1. Cocooning & Bien-être : La Tendance Hygge 2025</h2>
      <p>
        Après une année bien remplie, le besoin de confort et de sérénité n'a jamais été aussi fort. 
        Les cadeaux "Cocooning" ne sont pas seulement des objets, ce sont des invitations à prendre soin de soi. 
        En 2025, la tendance est aux matières naturelles, aux technologies de sommeil et à l'aromathérapie de luxe.
      </p>
      <p>
        Pensez couvertures lestées en bambou, diffuseurs d'huiles essentielles connectés ou encore abonnements à des applications de méditation premium accompagnés d'accessoires de yoga éco-responsables.
      </p>

      <div class="bg-muted/30 border border-secondary/20 rounded-xl p-8 my-10 shadow-sm">
        <div class="flex items-center gap-2 mb-4">
          <span class="bg-secondary text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-widest">Choix de l'Expert 2025</span>
          <div class="text-secondary font-bold flex items-center text-sm">
             Note: 4.9/5 ★★★★★
          </div>
        </div>
        <h3 class="font-serif text-2xl font-bold text-primary mb-3 mt-0">Le Plaid Chauffant Intelligent "CozyTech"</h3>
        <p class="mb-6 text-muted-foreground">
          C'est LA révélation de l'hiver 2025. Fini les couvertures électriques rigides d'autrefois. 
          Ce plaid en fausse fourrure ultra-douce intègre une technologie de chauffe adaptative qui se règle via smartphone. 
          Il détecte quand vous vous endormez pour baisser progressivement la température. Le cadeau ultime pour les frileux.
        </p>
        <a href="#" class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
          Acheter Notre Choix Coup de Cœur de l'Année
        </a>
      </div>

      <h2 id="gastronomie">2. Gastronomie & Art de la Table : Pour les Épicuriens</h2>
      <p>
        La gastronomie reste une valeur sûre, mais en 2025, on cherche l'exceptionnel et l'artisanal. 
        Les paniers garnis standardisés laissent place à des sélections pointues : huiles d'olive grand cru, épices rares, ou kits de mixologie moléculaire.
      </p>
      <p>
        L'art de la table fait aussi son grand retour avec de la céramique artisanale imparfaite (wabi-sabi) et de la verrerie colorée soufflée bouche.
      </p>

      <div class="bg-muted/30 border border-secondary/20 rounded-xl p-8 my-10 shadow-sm">
        <div class="flex items-center gap-2 mb-4">
          <span class="bg-secondary text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-widest">Tendance Gourmande</span>
          <div class="text-secondary font-bold flex items-center text-sm">
             Note: 4.8/5 ★★★★★
          </div>
        </div>
        <h3 class="font-serif text-2xl font-bold text-primary mb-3 mt-0">Le Four à Pizza d'Intérieur "Napoli Express"</h3>
        <p class="mb-6 text-muted-foreground">
          Atteignant 400°C en 10 minutes, ce four électrique compact permet de cuire une véritable pizza napolitaine en 90 secondes chrono, directement dans sa cuisine. 
          Design rétro, performance professionnelle : c'est le cadeau qui transformera les soirées d'hiver.
        </p>
        <a href="#" class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
          Voir le meilleur prix
        </a>
      </div>

      <h2 id="tech">3. Tech & Gadgets : L'Utile avant tout</h2>
      <p>
        Fini les gadgets qui finissent au fond d'un tiroir. En 2025, la Tech se doit d'être utile, durable et réparable. 
        On privilégie les objets qui simplifient le quotidien : assistants vocaux respectueux de la vie privée, cadres photos numériques à encre électronique (e-ink) qui se fondent dans le décor, ou écouteurs à conduction osseuse pour les sportifs.
      </p>

      <div class="bg-muted/30 border border-secondary/20 rounded-xl p-8 my-10 shadow-sm">
        <div class="flex items-center gap-2 mb-4">
          <span class="bg-secondary text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-widest">High-Tech 2025</span>
          <div class="text-secondary font-bold flex items-center text-sm">
             Note: 4.7/5 ★★★★★
          </div>
        </div>
        <h3 class="font-serif text-2xl font-bold text-primary mb-3 mt-0">Le Réveil Olfactif & Lumineux "Aura"</h3>
        <p class="mb-6 text-muted-foreground">
          Se réveiller avec une sonnerie stridente ? C'est du passé. Le réveil Aura combine une lumière progressive imitant l'aube et la diffusion de parfums stimulants (café, menthe, agrumes). 
          Pour des matins de bonne humeur garantis.
        </p>
        <a href="#" class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
          Découvrir ce gadget révolutionnaire
        </a>
      </div>

      <h2 id="experiences">4. Expériences Inoubliables : Offrez des Souvenirs</h2>
      <p>
        Parfois, le meilleur cadeau n'est pas matériel. Les "Box Expérience" ont évolué. 
        On parle maintenant de micro-aventures locales, de cours d'artisanat (poterie, soufflage de verre), ou de week-ends en "Tiny House" au milieu de la forêt.
      </p>

      <hr class="my-12 border-secondary/30" />

      <h2 class="font-serif text-3xl font-bold text-center mb-8">Nos Guides Spécialisés</h2>
      <p class="text-center mb-8">Vous cherchez quelque chose de plus spécifique ? Explorez nos collections thématiques :</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
        <a href="/categorie/cadeaux-par-personne" class="block p-6 bg-card border border-border hover:border-secondary rounded-xl text-center transition-all hover:-translate-y-1 hover:shadow-md">
          <h3 class="font-serif text-xl font-bold text-primary mb-2">Pour la Famille</h3>
          <p class="text-sm text-muted-foreground">Maman, Papa, Enfants...</p>
        </a>
        <a href="/categorie/cadeaux-par-budget" class="block p-6 bg-card border border-border hover:border-secondary rounded-xl text-center transition-all hover:-translate-y-1 hover:shadow-md">
          <h3 class="font-serif text-xl font-bold text-primary mb-2">Petits Budgets</h3>
          <p class="text-sm text-muted-foreground">Moins de 20€, 50€...</p>
        </a>
        <a href="/categorie/cadeaux-originaux-et-difficiles" class="block p-6 bg-card border border-border hover:border-secondary rounded-xl text-center transition-all hover:-translate-y-1 hover:shadow-md">
          <h3 class="font-serif text-xl font-bold text-primary mb-2">Cadeaux Insolites</h3>
          <p class="text-sm text-muted-foreground">Pour ceux qui ont tout</p>
        </a>
      </div>

      <div class="bg-primary/5 p-6 rounded-xl mt-12 text-sm text-muted-foreground italic border-l-4 border-secondary">
        <strong>Transparence :</strong> Cet article contient des liens d'affiliation. Lorsque vous achetez via nos liens, nous pouvons percevoir une commission sans surcoût pour vous. Cela soutient notre travail de rédaction indépendant. Merci !
      </div>
    `,
    products: [
      {
        name: "Plaid Chauffant CozyTech",
        price: "129,99 €",
        image: "https://placehold.co/300x300/e2e8f0/1e293b?text=CozyTech",
        description: "Technologie de chauffe adaptative et matière ultra-douce.",
        affiliateLink: "#",
        rating: 4.9
      },
      {
        name: "Four à Pizza Napoli",
        price: "249,00 €",
        image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Pizza+Oven",
        description: "400°C pour une cuisson parfaite en 90 secondes.",
        affiliateLink: "#",
        rating: 4.8
      },
      {
        name: "Réveil Aura",
        price: "89,00 €",
        image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Aura+Alarm",
        description: "Réveil par la lumière et l'odeur pour des matins doux.",
        affiliateLink: "#",
        rating: 4.7
      }
    ]
  }
];
