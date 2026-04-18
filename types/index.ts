export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  location: string;
}

export interface Partner {
  name: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}
