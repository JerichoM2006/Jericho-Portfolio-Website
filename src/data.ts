export const cx = (...a: (string | false | undefined)[]) => a.filter(Boolean).join(" ");

export type Section = "menu" | "profile" | "projects" | "links"
export interface MenuItem {name: string, description: string, section: Section}
export interface EducationItem {name: string, grade: string}
export interface ProjectItem {name: string, header: string, description: string, stack: string[], url: string}
export interface LinkItem { name: string; subtitle: string; handle: string; description: string; url: string }

export const menu: MenuItem[] = [
    {name: "PROFILE", description: "About me", section: "profile"},
    {name: "PROJECTS", description: "My personal projects", section: "projects"},
    {name: "LINKS", description: "Links to do with me", section: "links"},
]

export const firstName: string = "Jericho John";
export const lastName: string = "Mendoza";

//Profile
export const languages: string[] = [
  "C++ (OpenGL, CUDA)", "Python (NumPy, Pandas, PyTorch, OpenCV, PyQt5)", "C# (Unity)", "C", "Haskell", "Java",
  "GDScript (Godot)", "TypeScript (React)", "HTML", "JavaScript", "CSS", "GLSL", "HLSL",
];
export const tools: string[] = ["Git", "SQLite", "PostgreSQL", "CMake", "pip", "poetry", "npm"];
export const educations: EducationItem[] = [
    {name: "A-Levels (Physics, Maths, Further Maths, CS)", grade: "A*A*A*A"},
    {name: "BSc Computer Science (Year 1)", grade: "First"},
];

//Projects
export const projects: ProjectItem[] = [
    {name: "Portfolio Website", header: "This website!", description: "A portfolio website to showcase my projects and skills.", stack: ["React", "TypeScript", "TailwindCSS"], url: "https://www.youtube.com/"},
    {name: "Portfolio Website", header: "This website! NONONONO!", description: "A portfolio fsdlkjfosdoifjoi website to showcase my projects and skills.", stack: ["React", "TypeScript", "TailwindCSS"], url: "https://www.youtube.com/"}
]

export const linkItems: LinkItem[] = [
  { name: "GITHUB", subtitle: "Code and open source", handle: "JerichoM", description: "All my repositories, from coursework to personal projects.", url: "https://github.com/JerichoM2006" },
  { name: "LINKEDIN", subtitle: "Professional network", handle: "Jericho John Mendoza", description: "Connect with me on LinkedIn.", url: "https://www.linkedin.com/in/jericho-john-mendoza-9354163a4" },
  { name: "ITCHIO", subtitle: "Game development", handle: "Human Inc", description: "All my released games.", url: "https://human-inc.itch.io/" },
]