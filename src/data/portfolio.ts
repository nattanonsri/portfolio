export interface Project {
  id: string;
  tags: string[];
  role: "dev" | "design" | "both";
  year: string;
  color: string;
  image: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const profile = {
  name: "ณัฐฐ์ฐนนท์ ศรีเปารยะ",
  nameFirst: "ณัฐฐ์ฐนนท์",
  nameLast: "ศรีเปารยะ",
  nameEn: "Nattanon Sripauraya",
  nameEnFirst: "Nattanon",
  nameEnLast: "Sripauraya",
  phone: "0940155758",
  lineId: "fluky1452",
  gpa: "3.50",
  social: {
    github: "",
    linkedin: "",
  },
  available: true,
};

export const skills: Skill[] = [
  {
    category: "Web & Backend",
    items: ["PHP", "CodeIgniter", "MySQL", "RESTful API", "React", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["Kotlin", "Jetpack Compose", "Android", "MVVM", "REST API"],
  },
  {
    category: "DevOps & Tools",
    items: ["Jenkins", "ArgoCD", "CI/CD", "Git", "Docker", "Linux"],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    tags: ["PHP", "CodeIgniter", "MySQL", "REST API"],
    role: "dev",
    year: "2024",
    color: "#dbeafe",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e0f8d8?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: "2",
    tags: ["PHP", "CodeIgniter", "MySQL"],
    role: "dev",
    year: "2024",
    color: "#fef3c7",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "3",
    tags: ["PHP", "CodeIgniter", "MySQL"],
    role: "dev",
    year: "2024",
    color: "#fee2e2",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "4",
    tags: ["Kotlin", "Jetpack Compose", "MVVM", "Android"],
    role: "dev",
    year: "2024",
    color: "#d1fae5",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&auto=format&fit=crop",
  },
];
