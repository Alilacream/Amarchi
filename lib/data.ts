import type { TeamMember, Service, Project, Partner, Stat } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    name: "Amine Amara",
    role: "PDG, AM Archi Vision",
    image: "/images/about/amine_mono.png",
    bio: "",
  },
  {
    name: "Abdoulhak Amara",
    role: "PDG, Amastroy (Associé)",
    image: "/images/about/ceo.png",
    bio: "",
  },
  {
    name: "Salah din Amara",
    role: "Associé",
    image: "/images/about/salah_mono.png",
    bio: "",
  },
];

export const services: Service[] = [
  {
    title: "",
    description: "",
    icon: "architecture",
  },
  {
    title: "",
    description: "",
    icon: "interior",
  },
  {
    title: "",
    description: "",
    icon: "urban",
  },
  {
    title: "",
    description: "",
    icon: "3d",
  },
];

export const projects: Project[] = [
  {
    title: "Villa Horizon",
    category: "residential",
    description: "Une villa contemporaine perchée sur la côte, conçue pour capturer des vues panoramiques tout en maintenant une intimité complète et un mode de vie durable.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    year: "2024",
    location: "Maroc, Oujda",
  },
  {
    title: "Tour Nexus",
    category: "commercial",
    description: "Une tour commerciale de 24 étages redéfinissant le skyline de la ville avec sa façade géométrique et ses systèmes de design écoénergétiques.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop",
    year: "2023",
    location: "Oran, Algérie",
  },
  {
    title: "Centre des Arts Culturels",
    category: "public",
    description: "Un espace culturel multifonctionnel conçu pour accueillir des expositions, des spectacles et des événements communautaires sous un toit sculptural.",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600&fit=crop",
    year: "2024",
    location: "Constantine, Algérie",
  },
  {
    title: "Résidences Greenfield",
    category: "residential",
    description: "Un complexe de logements durables intégrant toits verts, panneaux solaires et jardins communautaires dans la vie familiale moderne.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    year: "2023",
    location: "Sétif, Algérie",
  },
  {
    title: "Boulevard Marina",
    category: "urban",
    description: "Un projet de redevelopment urbain en bord de mer transformant une zone industrielle en une destination mixte vibrante.",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=600&fit=crop",
    year: "2022",
    location: "Annaba, Algérie",
  },
  {
    title: "Le Lounge Apex",
    category: "interior",
    description: "Un intérieur de lounge haut de gamme combinant matériaux chaleureux, éclairage dramatique et mobilier sur mesure pour une atmosphère inoubliable.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
    year: "2024",
    location: "Maroc Oujda",
  },
];

export const partners: Partner[] = [
  { name: "Amastroy", description: "", image: "/images/partners/amastroy.png" },
  { name: "Hassoune", description: "", image: "/images/partners/hassoune.png" },
];

export const stats: Stat[] = [
  { value: "4+", label: "" },
  { value: "10+", label: "" },
  { value: "4+", label: "" },
  { value: "6", label: "" },
];
