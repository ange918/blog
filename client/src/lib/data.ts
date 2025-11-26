import heroImage from "@assets/generated_images/elegant_christmas_hero_image.png";
import familyImage from "@assets/generated_images/family_opening_gifts.png";
import budgetImage from "@assets/generated_images/budget_friendly_gifts_concept.png";
import originalImage from "@assets/generated_images/unique_original_gifts_concept.png";
import megaguideImage from "@assets/generated_images/festive_christmas_megaguide_banner.png";
import guideUltimeImage from "@assets/generated_images/festive_composition_of_colorful_gifts.png";

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
  {
    id: "4",
    title: "Guides Complets",
    slug: "guides-complets",
    image: guideUltimeImage,
    description: "Nos dossiers exhaustifs pour ne jamais manquer d'inspiration.",
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
  },
  {
    id: "5",
    title: "Le Guide Ultime des Idées Cadeaux : Trouver le Présent Parfait pour Chaque Personne et Chaque Occasion",
    slug: "guide-ultime-idees-cadeaux",
    category: "guides-complets",
    image: guideUltimeImage,
    date: "26 Nov 2025",
    author: "La Rédaction",
    excerpt: "Découvrez notre sélection exhaustive d'idées cadeaux pour tous les budgets, toutes les personnalités et tous les événements. Ne cherchez plus, le cadeau idéal est ici !",
    content: `
      <p class="lead text-xl font-light mb-8">
        Trouver le cadeau parfait est souvent un défi de taille. Nous avons tous connu cette angoisse de la page blanche à quelques jours d'un anniversaire ou de Noël. 
        Mais ne vous inquiétez plus ! Nous avons rassemblé pour vous le guide le plus complet jamais créé pour ne plus jamais manquer d'inspiration. 
        Que ce soit pour un proche, un collègue ou une connaissance, vous trouverez ici la pépite qui fera mouche.
      </p>

      <h2 class="font-serif text-3xl font-bold text-primary mt-12 mb-6 border-b pb-2 border-border">1. Idées Cadeaux par Personne</h2>
      <p>Le point de départ classique : à qui offrez-vous ce cadeau ?</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div>
          <h3 class="font-bold text-xl text-secondary mb-2">Pour Lui</h3>
          <ul class="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Un kit de rasage à l'ancienne de luxe</li>
            <li>Une montre connectée hybride élégante</li>
            <li>Un abonnement à une box de vins ou bières artisanales</li>
            <li>Un sac à dos en cuir vintage pour le travail</li>
          </ul>
          <div class="mt-4 font-medium text-primary">[#LIEN_AFFILIATION_MONTRE_HYBRIDE]</div>
        </div>
        <div>
          <h3 class="font-bold text-xl text-secondary mb-2">Pour Elle</h3>
          <ul class="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Un bijou personnalisé avec une gravure discrète</li>
            <li>Un coffret de soins de la peau bio haut de gamme</li>
            <li>Un diffuseur d'huiles essentielles design en céramique</li>
            <li>Un atelier créatif (poterie, fleurs, parfum)</li>
          </ul>
           <div class="mt-4 font-medium text-primary">[#LIEN_AFFILIATION_COFFRET_SOIN_BIO]</div>
        </div>
      </div>
      
      <img src="https://placehold.co/800x400/e2e8f0/1e293b?text=Illustration+Cadeaux+Famille" alt="Famille heureuse avec des cadeaux" class="w-full rounded-xl my-8 shadow-md" />

      <h2 class="font-serif text-3xl font-bold text-primary mt-12 mb-6 border-b pb-2 border-border">2. Idées Cadeaux par Passion</h2>
      <p>Cibler les passions est souvent la garantie d'un cadeau réussi.</p>

      <h3 class="font-bold text-xl text-secondary mt-6 mb-3">Pour le Geek / Tech Lover</h3>
      <p class="mb-4">Cherchez l'accessoire qui améliorera son setup ou sa vie quotidienne.</p>
      <ul class="list-disc pl-5 mb-4 space-y-2 text-muted-foreground">
        <li>Un clavier mécanique customisable</li>
        <li>Des lunettes anti-lumière bleue stylées</li>
        <li>Un support de casque en bois noble</li>
      </ul>
      <div class="mb-8 font-medium text-primary">[#LIEN_AFFILIATION_CLAVIER_MECANIQUE]</div>

      <h3 class="font-bold text-xl text-secondary mt-6 mb-3">Pour le Voyageur</h3>
      <p class="mb-4">Légèreté et praticité sont les maîtres mots.</p>
      <ul class="list-disc pl-5 mb-4 space-y-2 text-muted-foreground">
        <li>Un carnet de voyage en cuir rechargeable</li>
        <li>Une batterie externe ultra-compacte haute capacité</li>
        <li>Un pèse-bagage numérique précis</li>
      </ul>
      <div class="mb-8 font-medium text-primary">[#LIEN_AFFILIATION_CARNET_VOYAGE]</div>
      
      <div class="bg-secondary/10 p-6 rounded-xl my-8">
        <h4 class="font-bold text-primary mb-2 flex items-center gap-2">
           💡 Conseil d'Expert
        </h4>
        <p class="text-sm m-0">
          Pour les passionnés, évitez le matériel "pro" très spécifique si vous ne vous y connaissez pas (ex: un objectif photo précis). 
          Privilégiez plutôt les accessoires périphériques de qualité ou les consommables haut de gamme.
        </p>
      </div>

      <h2 class="font-serif text-3xl font-bold text-primary mt-12 mb-6 border-b pb-2 border-border">3. Idées Cadeaux par Budget</h2>
      <p>Pas besoin de dépenser des fortunes pour faire plaisir. L'attention compte plus que le prix.</p>

      <div class="space-y-6 my-8">
        <div class="bg-card border p-6 rounded-xl">
          <h3 class="font-bold text-lg mb-2">Moins de 20€ (Petites attentions)</h3>
          <p class="text-sm text-muted-foreground mb-2">Une jolie plante succulente dans un pot original, un livre de poche captivant, un set de chaussettes amusantes de qualité.</p>
          <div class="font-medium text-primary text-xs">[#LIEN_AFFILIATION_PLANTE_DECO]</div>
        </div>
        <div class="bg-card border p-6 rounded-xl">
          <h3 class="font-bold text-lg mb-2">Moins de 50€ (Cadeaux sympas)</h3>
          <p class="text-sm text-muted-foreground mb-2">Un jeu de société d'ambiance, une bonne bouteille de spiritueux, un beau livre d'art (Coffee Table Book).</p>
          <div class="font-medium text-primary text-xs">[#LIEN_AFFILIATION_JEU_SOCIETE]</div>
        </div>
        <div class="bg-card border p-6 rounded-xl">
          <h3 class="font-bold text-lg mb-2">Budget Illimité (Luxe & Exception)</h3>
          <p class="text-sm text-muted-foreground mb-2">Un sac de créateur, une pièce d'horlogerie fine, un voyage surprise organisé.</p>
        </div>
      </div>

      <img src="https://placehold.co/800x400/e2e8f0/1e293b?text=Illustration+Budget+Cadeaux" alt="Assortiment de cadeaux de différentes tailles" class="w-full rounded-xl my-8 shadow-md" />

      <h2 class="font-serif text-3xl font-bold text-primary mt-12 mb-6 border-b pb-2 border-border">4. Conseils pour Sublimer votre Cadeau</h2>
      <p>L'emballage et la présentation font 50% du cadeau !</p>
      <ul class="list-decimal pl-5 space-y-4 text-muted-foreground my-6">
        <li>
          <strong>L'art du Furoshiki :</strong> Emballez vos cadeaux dans un joli tissu réutilisable. C'est écologique, élégant et original.
        </li>
        <li>
          <strong>La carte manuscrite :</strong> Ne négligez jamais le petit mot. Prenez le temps d'écrire pourquoi vous avez choisi ce cadeau pour cette personne.
        </li>
        <li>
          <strong>Le "Teasing" :</strong> Si vous offrez une expérience (billet de concert, voyage) qui tient dans une enveloppe, essayez de l'accompagner d'un petit objet physique en rapport pour avoir quelque chose à "déballer" (ex: un guide de voyage pour un billet d'avion).
        </li>
      </ul>

      <div class="bg-primary text-primary-foreground p-8 rounded-2xl text-center mt-12">
        <h3 class="font-serif text-2xl font-bold mb-4">Besoin de plus d'idées ?</h3>
        <p class="mb-6 opacity-90">
          Explorez nos catégories spécifiques pour trouver exactement ce qu'il vous faut.
        </p>
        <a href="/categorie/cadeaux-originaux-et-difficiles" class="inline-block bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-full transition-colors">
          Voir les cadeaux originaux
        </a>
      </div>
    `,
    products: [
      {
        name: "Montre Hybride Élégante",
        price: "189,00 €",
        image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Watch",
        description: "Le look d'une montre classique, les fonctions d'une smartwatch.",
        affiliateLink: "#",
        rating: 4.6
      },
      {
        name: "Coffret Soin Bio Luxe",
        price: "65,00 €",
        image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Skincare",
        description: "Produits naturels et certifiés pour une peau éclatante.",
        affiliateLink: "#",
        rating: 4.8
      },
      {
        name: "Clavier Mécanique Custom",
        price: "120,00 €",
        image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Keyboard",
        description: "Frappe parfaite et rétro-éclairage subtil pour le bureau.",
        affiliateLink: "#",
        rating: 4.9
      }
    ]
  }
];
