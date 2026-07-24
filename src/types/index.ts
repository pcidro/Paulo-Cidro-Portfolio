export interface ProjectLink {
  label: string;
  url: string;
  type: "deploy" | "github";
}

export interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  context: string;
  features: string[];
  role: string;
  technologies: string[];
  links: ProjectLink[];
}

export interface SecondaryProject {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface InfoItem {
  label: string;
  value: string;
}
