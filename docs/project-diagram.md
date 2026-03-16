# Jialin Portfolio — Project Diagram

## App structure & data flow

```mermaid
flowchart TB
  subgraph types["Types (types/types.ts)"]
    Task
    Skill
    ExperienceOrProject
    EducationEntry
  end

  subgraph data["Data layer"]
    projects_json["projects.json"]
    experiences_json["experiences.json"]
    education_json["education.json"]
    projects_ts["data/projects.ts"]
    experiences_ts["data/experiences.ts"]
    education_ts["data/education.ts"]
  end

  subgraph app["App (Next.js App Router)"]
    layout["app/layout.tsx\nThemeProvider, Analytics"]
    home["/ (Home)"]
    experiences_page["/experiences"]
    projects_page["/projects"]
    education_page["/education"]
    contact_page["/contact"]
  end

  subgraph shared["Shared components"]
    SideBar
    Card
    Skills
    Bullet
    ThemeSwitcher
  end

  ExperienceOrProject --> projects_ts
  ExperienceOrProject --> experiences_ts
  EducationEntry --> education_ts
  projects_json --> projects_ts
  experiences_json --> experiences_ts
  education_json --> education_ts

  layout --> home
  layout --> experiences_page
  layout --> projects_page
  layout --> education_page
  layout --> contact_page

  home --> SideBar
  experiences_page --> SideBar
  experiences_page --> Card
  projects_page --> SideBar
  projects_page --> Card
  education_page --> SideBar
  education_page --> Card
  contact_page --> SideBar

  projects_ts --> projects_page
  experiences_ts --> experiences_page
  education_ts --> education_page

  Card --> Skills
  Card --> Bullet
  layout --> ThemeSwitcher
```

## Routes & navigation

```mermaid
flowchart LR
  subgraph routes["Routes"]
    A["/ (Home)"]
    B["/experiences"]
    C["/projects"]
    D["/education"]
    E["/contact"]
  end

  A --> B
  A --> C
  A --> D
  A --> E
  B --> A
  B --> C
  B --> D
  B --> E
  C --> A
  C --> B
  C --> D
  C --> E
  D --> A
  D --> B
  D --> C
  D --> E
  E --> A
  E --> B
  E --> C
  E --> D
```

## Type & data relationships

```mermaid
erDiagram
  ExperienceOrProject {
    number id
    string title
    string company
    string dates
    Task[] tasks
    Skill skills
  }
  Task {
    number id
    string description
  }
  Skill {
    string[] Languages
    string[] Frontend
    string[] Backend
    string[] "Cloud Platforms"
    string[] "DevOps & Tools"
    string[] Methodologies
  }
  EducationEntry {
    number id
    string institution
    string degree
    string dates
    string logo
  }
  ExperienceOrProject ||--o{ Task : has
  ExperienceOrProject ||--o| Skill : has
```

## Page → component usage

| Page        | Data source        | Components used                          |
|------------|--------------------|------------------------------------------|
| Home       | —                  | SideBar, Image, Link                     |
| Experiences| `data/experiences` | SideBar, Card (→ Skills, Bullet)         |
| Projects   | `data/projects`    | SideBar, Card (→ Skills, Bullet)         |
| Education  | `data/education`   | SideBar, article (no Card)               |
| Contact    | —                  | SideBar, ContactForm (react-hook-form)  |
