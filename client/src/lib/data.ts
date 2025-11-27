import heroImage from "@assets/generated_images/elegant_christmas_hero_image.png";
import familyImage from "@assets/generated_images/family_opening_gifts.png";
import budgetImage from "@assets/generated_images/budget_friendly_gifts_concept.png";
import originalImage from "@assets/generated_images/unique_original_gifts_concept.png";
import megaguideImage from "@assets/generated_images/festive_christmas_megaguide_banner.png";
import guideUltimeImage from "@assets/generated_images/festive_composition_of_colorful_gifts.png";
import xmasHeroImage from "@assets/stock_images/christmas_gifts_for__27f49b2f.jpg";
import diffuserImage from "@assets/stock_images/essential_oil_diffus_b69e2387.jpg";
import koboImage from "@assets/stock_images/e-reader_color_scree_17253094.jpg";
import necklaceImage from "@assets/stock_images/silver_necklace_pend_31e98211.jpg";
import airfryerImage from "@assets/stock_images/air_fryer_modern_kit_60764536.jpg";
import candleImage from "@assets/stock_images/yankee_candle_christ_f42473e3.jpg";
import menHeroImage from "@assets/stock_images/christmas_gifts_for__0de6d38a.jpg";
// import ssdImage from "@assets/stock_images/portable_ssd_drive_s_a78fe442.jpg";
// import projectorImage from "@assets/stock_images/portable_video_proje_a627e572.jpg";
// import legoImage from "@assets/stock_images/lego_architecture_tr_109f9f63.jpg";
// import watchImage from "@assets/stock_images/smartwatch_fitness_t_732b2995.jpg";
// import dispenserImage from "@assets/stock_images/beer_dispenser_tower_314ab7a7.jpg";

// Real user images
import ssdImage from "@assets/IMG_7417_1764241218182.jpeg";
import projectorImage from "@assets/IMG_7419_1764241084450.jpeg";
import legoImage from "@assets/IMG_7420_1764241084450.jpeg";
import watchImage from "@assets/IMG_7421_1764241084450.jpeg";
import dispenserImage from "@assets/IMG_7423_1764241084450.jpeg";

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
  {
    id: "5",
    title: "Noël Femme",
    slug: "noel-femme",
    image: xmasHeroImage,
    description: "Une sélection raffinée pour elle.",
  },
  {
    id: "6",
    title: "Noël Homme",
    slug: "noel-homme",
    image: menHeroImage,
    description: "Des idées cadeaux pour lui qui sortent de l'ordinaire.",
  },
];

export const articles: Article[] = [
  {
    id: "7",
    title: "Idées Cadeaux de Noël pour Homme : Le Top 5 High-Tech, Sport, et Plaisir (Guide 2025)",
    slug: "meilleures-idees-cadeaux-noel-homme-2025",
    category: "noel-homme",
    image: menHeroImage,
    date: "28 Nov 2025",
    author: "Thomas Durand",
    excerpt: "Découvrez notre sélection des 5 cadeaux les plus pertinents pour l'homme en 2025 : du SSD ultra-rapide au vidéoprojecteur nomade, en passant par le set LEGO collector.",
    content: `
      <h2 id="intro">Introduction</h2>
      <p>Trouver un cadeau pour un homme est souvent résumé à une paire de chaussettes ou une bouteille de vin. Pourtant, en 2025, les options pour faire vraiment plaisir sont légion. Que ce soit pour un amateur de tech, un fan de cinéma, ou quelqu'un qui aime recevoir ses amis, nous avons déniché 5 pépites qui feront mouche à coup sûr.</p>

      <div class="bg-muted/50 p-6 rounded-xl border border-border my-8">
        <h3 class="text-xl font-bold mb-4 mt-0">Dans ce guide :</h3>
        <ul class="list-none pl-0 space-y-2">
          <li><a href="#idee-1" class="flex items-center gap-2"><span class="text-secondary">01.</span> Le Cerveau de la Création (SSD Samsung)</a></li>
          <li><a href="#idee-2" class="flex items-center gap-2"><span class="text-secondary">02.</span> Le Home Cinéma Nomade (Vidéoprojecteur WOLFANG)</a></li>
          <li><a href="#idee-3" class="flex items-center gap-2"><span class="text-secondary">03.</span> Le Loisir de Luxe (LEGO Architecture)</a></li>
          <li><a href="#idee-4" class="flex items-center gap-2"><span class="text-secondary">04.</span> Le Coach au Poignet (Xiaomi Redmi Watch)</a></li>
          <li><a href="#idee-5" class="flex items-center gap-2"><span class="text-secondary">05.</span> L'Âme de la Fête (Distributeur InnovaGoods)</a></li>
        </ul>
      </div>

      <h2 id="idee-1">💻 Idée 1 : Le Cerveau de la Création (Samsung SSD T7 2 To)</h2>
      
      <h3>Pourquoi c'est un must-have</h3>
      <p>À l'ère du numérique, le stockage est le nerf de la guerre. Le Samsung T7 n'est pas juste un disque dur, c'est un bolide. Avec des vitesses de transfert atteignant 1050 Mo/s, il permet de copier des films 4K ou des dossiers de jeux en quelques secondes. Sa coque en aluminium est à la fois élégante, dissipatrice de chaleur et ultra-compacte (format carte de crédit).</p>

      <h3>Ce qu'il faut savoir</h3>
      <p>Le seul petit défaut réside dans le logiciel de sécurisation intégré qui peut parfois être capricieux à installer sur certains vieux systèmes. Mais rassurez-vous : il est totalement facultatif. L'appareil fonctionne parfaitement en "Plug and Play" dès la sortie de la boîte sans rien installer.</p>
      
      <div class="my-8 text-center">
        <a href="https://amzn.to/43XfSdA" rel="sponsored" target="_blank" class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
          Voir le Samsung SSD T7 sur Amazon
        </a>
      </div>

      <h2 id="idee-2">📽️ Idée 2 : Le Home Cinéma Nomade (Vidéoprojecteur WOLFANG 4K)</h2>

      <h3>Le Cinéma partout avec soi</h3>
      <p>Imaginez pouvoir projeter un film au plafond de la chambre, ou sur un mur blanc en vacances. Ce vidéoprojecteur WOLFANG supporte la 4K et offre une rotation à 180° très pratique. Il intègre Android TV, ce qui signifie que Netflix et YouTube sont directement accessibles sans brancher d'ordinateur.</p>

      <h3>Désamorçage du point faible</h3>
      <p>Comme pour beaucoup de projecteurs compacts, le son interne est correct pour du dépannage mais manque de basses pour une immersion totale. La solution est simple : il se connecte en Bluetooth à n'importe quelle enceinte portable ou barre de son en un clic.</p>

      <div class="my-8 text-center">
        <a href="https://amzn.to/3Kn2Cbv" rel="sponsored" target="_blank" class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
          Découvrir le Vidéoprojecteur WOLFANG
        </a>
      </div>

      <h2 id="idee-3">🧱 Idée 3 : Le Loisir de Luxe (LEGO Architecture La fontaine de Trevi)</h2>

      <h3>Plus qu'un jouet, une pièce de décoration</h3>
      <p>Les LEGO ne sont plus réservés aux enfants. La gamme Architecture s'adresse aux adultes cherchant un moment de détente créative. Ce modèle de la Fontaine de Trevi est magnifique une fois assemblé. Avec ses détails architecturaux précis, c'est un objet que l'on est fier d'exposer sur une étagère ou un bureau.</p>

      <h3>Pourquoi le prix est justifié</h3>
      <p>Certains peuvent trouver le prix élevé pour "des briques". Mais c'est la qualité LEGO : pas de pièces manquantes, un emboîtement parfait, et une valeur de collection qui ne baisse pas. Sa taille compacte est en réalité un atout : elle permet de l'exposer facilement sans envahir l'espace.</p>

      <div class="my-8 text-center">
        <a href="https://amzn.to/48mDnOy" rel="sponsored" target="_blank" class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
          Offrir le LEGO Fontaine de Trevi
        </a>
      </div>

      <h2 id="idee-4">⌚ Idée 4 : Le Coach au Poignet (Xiaomi Redmi Watch 5 Active)</h2>

      <h3>Technologie abordable et performante</h3>
      <p>Pas besoin de dépenser 400€ pour une bonne smartwatch. La Redmi Watch 5 Active impressionne avec ses 18 jours d'autonomie (oui, vous avez bien lu). Elle suit plus de 140 sports, le sommeil, le stress, et permet même de passer des appels via Bluetooth directement au poignet.</p>

      <h3>Petit bémol, solution simple</h3>
      <p>Le système d'attache du bracelet fourni peut sembler un peu léger pour les sports extrêmes. Heureusement, c'est un standard universel : pour quelques euros, vous pouvez lui offrir un bracelet en nylon ou en cuir qui la rendra encore plus classe et sécurisée.</p>

      <div class="my-8 text-center">
        <a href="https://amzn.to/3LVAMng" rel="sponsored" target="_blank" class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
          Voir la Redmi Watch 5 Active
        </a>
      </div>

      <h2 id="idee-5">🍻 Idée 5 : L'Âme de la Fête (Distributeur InnovaGoods 3,5L)</h2>

      <h3>Pour les rois de l'apéro</h3>
      <p>C'est l'accessoire qui transforme un simple apéro en fête. Ce distributeur sphérique de 3,5L possède un compartiment à glace central fermé : il refroidit la boisson sans la diluer avec de l'eau fondue ! Idéal pour la bière, mais aussi pour les punchs, les sangrias ou les thés glacés maison.</p>

      <h3>Honnêteté avant tout</h3>
      <p>Attention, ce n'est pas une tireuse à bière sous pression (Beertender). Il n'y a pas de système de gaz. C'est un distributeur par gravité. C'est donc parfait pour les soirées conviviales où chacun se sert, sans la complexité technique d'une machine professionnelle.</p>

      <div class="my-8 text-center">
        <a href="https://amzn.to/48jPyf3" rel="sponsored" target="_blank" class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
          Acheter le Distributeur InnovaGoods
        </a>
      </div>
    `,
    products: [
      {
        name: "Samsung SSD T7 2 To",
        price: "Voir prix",
        image: ssdImage,
        description: "SSD Portable ultra-rapide, compact et résistant.",
        affiliateLink: "https://amzn.to/43XfSdA",
        rating: 4.8
      },
      {
        name: "Vidéoprojecteur WOLFANG 4K",
        price: "Voir prix",
        image: projectorImage,
        description: "Projecteur portable rotatif avec Android TV intégré.",
        affiliateLink: "https://amzn.to/3Kn2Cbv",
        rating: 4.5
      },
      {
        name: "LEGO Architecture Trevi",
        price: "Voir prix",
        image: legoImage,
        description: "Set de construction détaillé pour adultes.",
        affiliateLink: "https://amzn.to/48mDnOy",
        rating: 4.9
      },
      {
        name: "Xiaomi Redmi Watch 5",
        price: "Voir prix",
        image: watchImage,
        description: "Smartwatch autonomie 18 jours avec appels Bluetooth.",
        affiliateLink: "https://amzn.to/3LVAMng",
        rating: 4.7
      },
      {
        name: "Distributeur InnovaGoods",
        price: "Voir prix",
        image: dispenserImage,
        description: "Distributeur de boissons 3,5L avec réservoir à glace.",
        affiliateLink: "https://amzn.to/48jPyf3",
        rating: 4.6
      }
    ]
  },
  {
    id: "6",
    title: "Idées Cadeaux de Noël pour Femme : Le Guide 2025 des 5 Meilleurs Présents",
    slug: "meilleures-idees-cadeaux-noel-femme-2025",
    category: "noel-femme",
    image: xmasHeroImage,
    date: "27 Nov 2025",
    author: "Sophie Martin",
    excerpt: "Arrêtez de chercher ! Voici les 5 cadeaux incontournables pour femme en 2025, analysés en détail : du collier personnalisé à la liseuse Kobo couleur, en passant par l'Air Fryer gain de temps.",
    content: `
      <h2 id="intro">Le secret pour un cadeau réussi</h2>
      <p>Trouver le cadeau parfait pour une femme – que ce soit votre compagne, votre mère, votre sœur ou votre meilleure amie – peut parfois ressembler à un parcours du combattant. On veut éviter le banal, mais on a peur de l'originalité mal placée. Le secret ? L'intention. En 2025, plus que jamais, le cadeau réussi est celui qui dit "Je te connais" et "Je veux ton bien-être". C'est pourquoi nous avons sélectionné 5 idées qui touchent à l'émotion, au confort et à la passion.</p>

      <h2 id="idee-1">🎁 Idée N°1 : L'Évasion & La Détente (Diffuseur Zen’Arôme Yangtsé)</h2>
      
      <h3>Pourquoi l'offrir : Le Silence et le Design</h3>
      <p>Dans un monde bruyant et stressant, offrir du calme est le plus beau des présents. Le diffuseur Zen’Arôme Yangtsé n'est pas qu'un simple appareil fonctionnel, c'est un objet de décoration élégant qui transforme l'atmosphère d'une pièce. Son atout majeur ? Son silence absolu. Contrairement à beaucoup de modèles qui bourdonnent, celui-ci utilise une technologie ultrasonique discrète qui respecte la quiétude d'une séance de lecture ou de méditation.</p>

      <h3>Conseil d'Expert : L'entretien facile</h3>
      <p>On hésite souvent avec les diffuseurs par peur que l'odeur de la précédente huile essentielle ne persiste, ou que le plastique ne s'imprègne. Pas d'inquiétude ici. Une petite astuce de pro : un nettoyage mensuel avec un mélange d'eau et de vinaigre blanc (ou un peu de bicarbonate) suffit à le remettre à neuf et à garantir une diffusion pure, sans mélange d'arômes indésirables. C'est un cadeau qui dure.</p>
      
      <div class="my-8 text-center">
        <a href="https://amzn.to/4pxS08E" rel="sponsored" target="_blank" class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
          Voir le Diffuseur Zen’Arôme sur Amazon
        </a>
      </div>

      <h2 id="idee-2">📚 Idée N°2 : Le Voyage High-Tech (Liseuse Kobo Clara Colour)</h2>

      <h3>Les Avantages de la Couleur E Ink</h3>
      <p>La lecture numérique fait un bond en avant avec la Kobo Clara Colour. Pourquoi est-ce un "game changer" ? Parce que les couvertures de livres, les illustrations et les bandes dessinées prennent vie sans l'agression lumineuse d'une tablette classique. L'écran E Ink Kaleido™ 3 offre des couleurs douces et pastel qui ne fatiguent pas les yeux. Ajoutez à cela le mode sombre pour lire au lit sans réveiller l'autre, une étanchéité totale (parfaite pour le bain !) et une batterie qui dure des semaines, et vous avez le compagnon de voyage idéal.</p>

      <h3>Ce qu'il faut savoir avant d'acheter</h3>
      <p>Soyons transparents : l'écran couleur est légèrement plus sombre qu'un écran noir et blanc classique, nécessitant parfois d'activer un peu plus le rétroéclairage. De plus, l'écran ne pivote pas automatiquement. Mais honnêtement ? C'est un prix dérisoire à payer pour le confort d'avoir toute sa bibliothèque en couleur dans un format poche ultra-léger.</p>

      <div class="my-8 text-center">
        <a href="https://amzn.to/3KsBRlX" rel="sponsored" target="_blank" class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
          Découvrir la Kobo Clara Colour
        </a>
      </div>

      <h2 id="idee-3">✨ Idée N°3 : Le Cadeau du Cœur (Collier Morella Argent 925 Rhodié)</h2>

      <h3>La Valeur de l'émotion</h3>
      <p>Les bijoux restent des classiques, mais la personnalisation change tout. Ce collier Morella permet d'ajouter des lettres (initiales des enfants, du couple, ou d'un mot fort). Ce n'est pas du toc : on parle d'Argent 925 Rhodié, ce qui signifie qu'il est protégé contre l'oxydation et garde son éclat. Il arrive dans une jolie pochette en velours, prêt à être glissé sous le sapin, ce qui vous sauve l'étape toujours délicate de l'emballage cadeau !</p>

      <h3>Transparence sur la "fragilité"</h3>
      <p>Certains avis peuvent mentionner une certaine fragilité. Il est important de remettre les choses dans leur contexte : c'est un bijou <em>fin</em> et <em>délicat</em>. Ce n'est pas un défaut de qualité, mais une caractéristique de son design raffiné. Il se porte avec élégance et se traite avec douceur. C'est justement cette finesse qui le rend si joli au cou.</p>

      <div class="my-8 text-center">
        <a href="https://amzn.to/48hnnxc" rel="sponsored" target="_blank" class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
          Personnaliser le Collier Morella
        </a>
      </div>

      <h2 id="idee-4">🍳 Idée N°4 : L'Allié Santé et Pratique (Friteuse Cecotec DuoLevel 10000)</h2>

      <h3>L'Air Fryer pour les familles</h3>
      <p>Ne voyez pas cela comme un simple appareil de cuisine, mais comme un <em>générateur de temps libre</em>. Avec sa capacité énorme de 10L (divisible en deux zones de 5L), la Cecotec DuoLevel permet de cuire le plat principal ET l'accompagnement en même temps. La fonction Sync est magique : elle s'assure que les frites et le poulet finissent de cuire exactement au même moment. Plus de jonglage avec les temps de cuisson ! Son design vertical est aussi très malin pour ne pas encombrer tout le plan de travail.</p>

      <h3>Faciliter la prise en main</h3>
      <p>Le petit bémol souvent cité est l'absence de livre de recettes papier en français complet. Cependant, ne vous laissez pas arrêter par cela. La communauté Air Fryer est immense en ligne, et Cecotec propose des recettes téléchargeables. C'est l'occasion de rejoindre des groupes de partage et de découvrir une nouvelle façon de cuisiner, plus saine et plus rapide.</p>

      <div class="my-8 text-center">
        <a href="https://amzn.to/44qVhyl" rel="sponsored" target="_blank" class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
          Voir l'offre Cecotec DuoLevel
        </a>
      </div>

      <h2 id="idee-5">🕯️ Idée N°5 : Le Plaisir à Petit Prix (Coffret Yankee Candle de Noël)</h2>

      <h3>Un cadeau pour l'Ambiance</h3>
      <p>Si vous avez un petit budget mais que vous voulez faire grand effet, ce coffret est la solution. Yankee Candle est la référence absolue de la bougie parfumée. Ce coffret de Noël propose des cires de soja de qualité supérieure avec des mèches en coton 100% naturel. Les senteurs sont évocatrices et créent immédiatement une ambiance festive et chaleureuse (Cannelle, Sapin, Cookie...). La présentation est soignée, on a vraiment l'impression d'offrir un beau cadeau.</p>

      <h3>La Taille n'est pas tout</h3>
      <p>Attention, ce sont des bougies votives (petites). Certains peuvent être surpris par la taille. Mais voyez-le comme un avantage : c'est un coffret dégustation ! Plutôt qu'une seule grosse bougie dont on se lasse, c'est l'opportunité de tester 3 ou 6 parfums différents sans gaspillage. C'est parfait pour changer d'ambiance selon l'humeur du jour.</p>

      <div class="my-8 text-center">
        <a href="https://amzn.to/4pE9xw1" rel="sponsored" target="_blank" class="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
          Offrir le Coffret Yankee Candle
        </a>
      </div>

      <h2 id="conclusion">Résumé et Dernier Appel à l'Action</h2>
      <p>Vous l'aurez compris, il n'y a pas de "meilleur" cadeau dans l'absolu, mais il y a le cadeau parfait pour <em>elle</em>. Que vous choisissiez la sérénité du diffuseur, l'évasion de la liseuse, l'émotion du bijou, la praticité de l'Air Fryer ou la douceur des bougies, vous avez là 5 valeurs sûres.</p>
      <p class="font-bold text-lg mt-4">N'attendez pas la rupture de stock de dernière minute ! Cliquez sur le lien de votre coup de cœur et rayez ce cadeau de votre liste dès aujourd'hui.</p>
    `,
    products: [
      {
        name: "Diffuseur Zen’Arôme Yangtsé",
        price: "Voir prix",
        image: diffuserImage,
        description: "Diffuseur ultrasonique silencieux au design élégant.",
        affiliateLink: "https://amzn.to/4pxS08E",
        rating: 4.7
      },
      {
        name: "Kobo Clara Colour",
        price: "Voir prix",
        image: koboImage,
        description: "Liseuse couleur étanche avec écran E Ink Kaleido 3.",
        affiliateLink: "https://amzn.to/3KsBRlX",
        rating: 4.5
      },
      {
        name: "Collier Morella Argent",
        price: "Voir prix",
        image: necklaceImage,
        description: "Collier personnalisable en argent 925 rhodié.",
        affiliateLink: "https://amzn.to/48hnnxc",
        rating: 4.6
      },
      {
        name: "Cecotec DuoLevel 10000",
        price: "Voir prix",
        image: airfryerImage,
        description: "Air Fryer double compartiment 10L avec fonction Sync.",
        affiliateLink: "https://amzn.to/44qVhyl",
        rating: 4.8
      },
      {
        name: "Coffret Yankee Candle",
        price: "Voir prix",
        image: candleImage,
        description: "Assortiment de bougies votives aux senteurs de Noël.",
        affiliateLink: "https://amzn.to/4pE9xw1",
        rating: 4.9
      }
    ]
  },
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
