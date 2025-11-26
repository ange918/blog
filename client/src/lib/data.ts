import heroImage from "@assets/generated_images/elegant_christmas_hero_image.png";
import familyImage from "@assets/generated_images/family_opening_gifts.png";
import budgetImage from "@assets/generated_images/budget_friendly_gifts_concept.png";
import originalImage from "@assets/generated_images/unique_original_gifts_concept.png";

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
];
