export interface Task {
  id: number;
  description: string;
}

export interface Skill {
  Languages?: string[];
  Frontend?: string[];
  Backend?: string[];
  DevOps?: string[];
}

export interface ExperienceOrProject {
  id: number;
  title: string;
  company?: string; // Optional for projects
  subtitle?: string; // Optional clarifying line under company name
  dates: string;
  website?: string;
  tasks: Task[];
  skills: Skill;
}
