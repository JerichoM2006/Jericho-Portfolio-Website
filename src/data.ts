export const cx = (...a: (string | false | undefined)[]) => a.filter(Boolean).join(" ");

export type Section = "menu" | "profile" | "projects" | "links"
export interface MenuItem {name: string, description: string, section: Section}
export interface EducationItem {name: string, grade: string}
export interface ProjectItem {name: string, header: string, description: string, stack: string[], url: string}

export const menu: MenuItem[] = [
    {name: "PROFILE", description: "About me", section: "profile"},
    {name: "PROJECTS", description: "My personal projects", section: "projects"},
    {name: "LINKS", description: "Links to do with me", section: "links"},
]

export const firstName: string = "Jericho John";
export const lastName: string = "Mendoza";

//Profile
export const LANGUAGES: string[] = [
  "C++ (OpenGL, CUDA)", "Python (NumPy, Pandas, PyTorch, OpenCV, PyQt5)", "C# (Unity)", "C", "Haskell", "Java",
  "GDScript (Godot)", "TypeScript (React)", "HTML", "JavaScript", "CSS", "GLSL", "HLSL",
];
export const TOOLS: string[] = ["Git", "SQLite", "PostgreSQL", "CMake", "pip", "poetry", "npm"];
export const EDUCATIONS: EducationItem[] = [
    {name: "A-Levels (Physics, Maths, Further Maths, CS)", grade: "A*A*A*A"},
    {name: "BSc Computer Science (Year 1)", grade: "First"},
];

//Projects
export const PROJECTS: ProjectItem[] = [
    {name: "Portfolio Website", header: "This website!", description: "A portfolio website to showcase my projects and skills.", stack: ["React", "TypeScript", "TailwindCSS"], url: "https://www.youtube.com/"},
    {name: "Portfolio Website", header: "This website! NONONONO!", description: "A portfolio fsdlkjfosdoifjoi website to showcase my projects and skills.", stack: ["React", "TypeScript", "TailwindCSS"], url: "https://www.youtube.com/"}
]