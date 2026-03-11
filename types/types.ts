export interface Task {
  id: number;
  description: string;
}

/** Skill categories used in experiences.json and projects.json. All keys optional. */
export interface Skill {
  Languages?: string[];
  Frontend?: string[];
  Backend?: string[];
  "Cloud Platforms"?: string[];
  "DevOps & Tools"?: string[];
  Methodologies?: string[];
}

export interface ExperienceOrProject {
  id: number;
  title: string;
  company?: string; // Optional for projects
  subtitle?: string; // Optional clarifying line under company name
  dates: string;
  website?: string | null;
  tasks: Task[];
  skills: Skill;
}

export interface EducationEntry {
  id: number;
  institution: string;
  degree: string;
  dates: string;
  logo?: string;
}
