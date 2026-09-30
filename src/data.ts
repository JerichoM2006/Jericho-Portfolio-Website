export const cx = (...a: (string | false | undefined)[]) => a.filter(Boolean).join(" ");

export type Section = "menu" | "profile" | "projects" | "links"
export interface MenuItem {name: string, description: string, section: Section}
export interface EducationItem {name: string, grade: string}

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