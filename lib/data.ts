import type { TeamMember, Service, Project, Partner, Stat } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    name: "Amine Amara",
    role: "PDG, AM Archi Vision",
    image: "/amine_mono.png",
    bio: "Architecte visionnaire passionné par la transformation des espaces en expériences vivantes. Dirige AM Archi Vision avec un focus sur l'innovation, la précision et le design durable.",
  },
  {
    name: "Abdoulhak Amara",
    role: "PDG, Amastroy (Associé)",
    image: "/ceo.png",
    bio: "Penseur stratégique faisant le lien entre architecture et construction. En tant que PDG d'Amastroy, il garantit que chaque projet est livré avec intégrité structurelle et excellence opérationnelle.",
  },
  {
    name: "Salah din Amara",
    role: "Associé",
    image: "/salah_mono.png",
    bio: "Force créative derrière nos concepts les plus ambitieux. Salah apporte une perspective unique à chaque projet, alliant esthétique et fonctionnalité.",
  },
];

export const services: Service[] = [
  {
    title: "Design Architectural",
    description: "Du concept à la réalisation, nous concevons des espaces qui inspirent. Nos solutions architecturales allient forme et fonction, créant des bâtiments qui témoignent du design moderne et de la qualité durable.",
    icon: "architecture",
  },
  {
    title: "Design d'Intérieur",
    description: "Nous créons des intérieurs qui reflètent personnalité et propósito. Chaque matériau, chaque détail est pensé pour créer des environnements qui élèvent l'expérience humaine au sein des espaces construits.",
    icon: "interior",
  },
  {
    title: "Urbanisme",
    description: "Nous concevons les villes comme des écosystèmes vivants. Nos services d'urbanisme créent des communautés cohésives et durables qui équilibrent croissance, responsabilité environnementale et identité culturelle.",
    icon: "urban",
  },
  {
    title: "Visualisation 3D",
    description: "Avant même la première brique posée, nous donnons vie à votre vision. Nos rendus 3D photoréalistes et nos visites immersives vous permettent de vivre votre projet avant le début de la construction.",
    icon: "3d",
  },
];

export const projects: Project[] = [
  {
    title: "Villa Horizon",
    category: "Résidentiel",
    description: "Une villa contemporaine perchée sur la côte, conçue pour capturer des vues panoramiques tout en maintenant une intimité complète et un mode de vie durable.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    year: "2024",
    location: "Alger, Algérie",
  },
  {
    title: "Tour Nexus",
    category: "Commercial",
    description: "Une tour commerciale de 24 étages redéfinissant le skyline de la ville avec sa façade géométrique et ses systèmes de design écoénergétiques.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop",
    year: "2023",
    location: "Oran, Algérie",
  },
  {
    title: "Centre des Arts Culturels",
    category: "Public",
    description: "Un espace culturel multifonctionnel conçu pour accueillir des expositions, des spectacles et des événements communautaires sous un toit sculptural.",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600&fit=crop",
    year: "2024",
    location: "Constantine, Algérie",
  },
  {
    title: "Résidences Greenfield",
    category: "Résidentiel",
    description: "Un complexe de logements durables intégrant toits verts, panneaux solaires et jardins communautaires dans la vie familiale moderne.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    year: "2023",
    location: "Sétif, Algérie",
  },
  {
    title: "Boulevard Marina",
    category: "Urbanisme",
    description: "Un projet de redevelopment urbain en bord de mer transformant une zone industrielle en une destination mixte vibrante.",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=600&fit=crop",
    year: "2022",
    location: "Annaba, Algérie",
  },
  {
    title: "Le Lounge Apex",
    category: "Intérieur",
    description: "Un intérieur de lounge haut de gamme combinant matériaux chaleureux, éclairage dramatique et mobilier sur mesure pour une atmosphère inoubliable.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
    year: "2024",
    location: "Alger, Algérie",
  },
];

export const partners: Partner[] = [
  { name: "Amastroy", description: "Construction & Ingénierie" },
  { name: "BuildTech Solutions", description: "Ingénierie Structurelle" },
  { name: "EcoDesign Studio", description: "Consultation en Design Durable" },
  { name: "UrbanEdge Partners", description: "Développement Urbain" },
];

export const stats: Stat[] = [
  { value: "4+", label: "Années d'Expérience" },
  { value: "10+", label: "Projets Réalisés" },
  { value: "4+", label: "Partenaires Stratégiques" },
  { value: "6", label: "Membres d'Équipe" },
];
