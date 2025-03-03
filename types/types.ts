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
  dates: string;
  website?: string;
  tasks: Task[];
  skills: Skill;
}
