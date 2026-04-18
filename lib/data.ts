import type { TeamMember, Service, Project, Partner, Stat } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    name: "Amine Amara",
    role: "CEO, AM Archi Vision",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
    bio: "Visionary architect with a deep passion for transforming spaces into living experiences. Leads AM Archi Vision with a focus on innovation, precision, and sustainable design.",
  },
  {
    name: "Abdoulhak Amara",
    role: "CEO, Amastroy (Associate)",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    bio: "Strategic thinker bridging architecture and construction. As CEO of Amastroy, he ensures every project is delivered with structural integrity and operational excellence.",
  },
  {
    name: "Salah din Amara",
    role: "Associate",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    bio: "Creative force behind our most ambitious concepts. Salah brings a unique perspective to every project, blending aesthetics with functionality.",
  },
];

export const services: Service[] = [
  {
    title: "Architectural Design",
    description: "From concept to completion, we design spaces that inspire. Our architectural solutions blend form and function, creating buildings that stand as testaments to modern design and enduring quality.",
    icon: "architecture",
  },
  {
    title: "Interior Design",
    description: "We craft interiors that reflect personality and purpose. Every material, every detail is curated to create environments that elevate the human experience within built spaces.",
    icon: "interior",
  },
  {
    title: "Urban Planning",
    description: "We envision cities as living ecosystems. Our urban planning services create cohesive, sustainable communities that balance growth with environmental responsibility and cultural identity.",
    icon: "urban",
  },
  {
    title: "3D Visualization",
    description: "Before a single brick is laid, we bring your vision to life. Our photorealistic 3D renderings and immersive walkthroughs let you experience your project before construction begins.",
    icon: "3d",
  },
];

export const projects: Project[] = [
  {
    title: "Villa Horizon",
    category: "Residential",
    description: "A contemporary villa perched on the coastline, designed to capture panoramic views while maintaining complete privacy and sustainable living.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    year: "2024",
    location: "Algiers, Algeria",
  },
  {
    title: "Nexus Office Tower",
    category: "Commercial",
    description: "A 24-story commercial tower redefining the city skyline with its geometric facade and energy-efficient design systems.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop",
    year: "2023",
    location: "Oran, Algeria",
  },
  {
    title: "Cultural Arts Center",
    category: "Public",
    description: "A multifunctional cultural space designed to host exhibitions, performances, and community events under one sculptural roof.",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600&fit=crop",
    year: "2024",
    location: "Constantine, Algeria",
  },
  {
    title: "Greenfield Residences",
    category: "Residential",
    description: "A sustainable housing complex integrating green roofs, solar panels, and communal gardens into modern family living.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    year: "2023",
    location: "Setif, Algeria",
  },
  {
    title: "Marina Boulevard",
    category: "Urban Planning",
    description: "A waterfront urban redevelopment project transforming an industrial zone into a vibrant mixed-use destination.",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=600&fit=crop",
    year: "2022",
    location: "Annaba, Algeria",
  },
  {
    title: "The Apex Lounge",
    category: "Interior",
    description: "An upscale lounge interior combining warm materials, dramatic lighting, and bespoke furniture for an unforgettable atmosphere.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
    year: "2024",
    location: "Algiers, Algeria",
  },
];

export const partners: Partner[] = [
  { name: "Amastroy", description: "Construction & Engineering" },
  { name: "BuildTech Solutions", description: "Structural Engineering" },
  { name: "EcoDesign Studio", description: "Sustainable Design Consulting" },
  { name: "UrbanEdge Partners", description: "Urban Development" },
];

export const stats: Stat[] = [
  { value: "4+", label: "Years of Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "4+", label: "Strategic Partners" },
  { value: "6", label: "Team Members" },
];
