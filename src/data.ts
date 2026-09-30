export const cx = (...a: (string | false | undefined)[]) => a.filter(Boolean).join(" ");

export type Section = "menu" | "profile" | "projects" | "links"
export interface MenuItem {name: string, description: string, section: Section}
export interface EducationItem {name: string, grade: string}
export interface ProjectItem {
  name: string;
  header: string;
  description: string;   
  highlights: string[];  
  stack: string[];
  url?: string;
  start: string;     
  end?: string;        
}
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

export const linkItems: LinkItem[] = [
  { name: "GITHUB", subtitle: "Code and open source", handle: "JerichoM", description: "All my repositories, from coursework to personal projects.", url: "https://github.com/JerichoM2006" },
  { name: "LINKEDIN", subtitle: "Professional network", handle: "Jericho John Mendoza", description: "Connect with me on LinkedIn.", url: "https://www.linkedin.com/in/jericho-john-mendoza-9354163a4" },
  { name: "ITCH.IO", subtitle: "Game development", handle: "Human Inc", description: "All my released games.", url: "https://human-inc.itch.io/" },
]

//Projects
export const projects: ProjectItem[] = [
  {
    name: "LLM Blood on the Clocktower",
    header: "GDScript / Godot",
    description: "A simulation where LLM agents play Blood on the Clocktower as both players and storyteller.",
    highlights: [
      "Developed a simulation in which multiple LLM agents act as players and a storyteller in Blood on the Clocktower, exploring the use of LLMs for autonomous decision-making in a social deduction environment.",
      "Designed a scalable and extensible role system, using callback providers and consistent interfaces to allow new roles and role-specific effects to be added with minimal changes to existing code.",
      "Integrated DeepSeek and Ollama-hosted LLMs, designing context handling and prompt structures to maximise cache reuse and reduce unnecessary processing across interactions.",
    ],
    stack: ["GDScript", "Godot", "DeepSeek", "Ollama"],
    start: "07/2026",
  },
  {
    name: "Portfolio Website",
    header: "React / TypeScript",
    description: "A Persona 5 inspired portfolio site that presents my projects and skills as a stylised game menu.",
    highlights: [
      "Built a menu-driven single-page UI using React and TypeScript.",
      "Recreated the Persona 5 look with Tailwind: skewed panels, clip-path shapes, hard drop shadows and a custom red/black theme.",
    ],
    stack: ["React", "TypeScript", "TailwindCSS"],
    url: "https://github.com/JerichoM2006/Jericho-Portfolio-Website",
    start: "09/2026",
    end: "09/2026",
  },
  {
    name: "Evolutionary Photomosaic",
    header: "C++ / OpenGL",
    description: "An evolutionary algorithm that builds photomosaics by arranging texture images to approximate a target image.",
    highlights: [
      "Developed an evolutionary algorithm to generate dynamic photomosaics, iteratively selecting and arranging texture images to approximate a target image.",
      "Implemented a functional resource-management approach using callbacks to ensure safe and reliable OpenGL resource binding and unbinding.",
      "Optimised image processing by leveraging GPU compute shaders for parallel batch processing.",
    ],
    stack: ["C++", "OpenGL", "GLSL"],
    url: "https://github.com/JerichoM2006/Evolutionary-Photomosaic",
    start: "01/2026",
    end: "03/2026",
  },
  {
    name: "GMTK Game Jam 2026",
    header: "GDScript / Godot",
    description: "A four-day team game made for the GMTK Game Jam 2026 on the theme \"Countdown\".",
    highlights: [
      "Participated in the GMTK Game Jam 2026, developing a game within four days based on the theme \"Countdown\".",
      "Collaborated with a team of five, coordinating with programmers, artists and musicians to integrate different areas of expertise into the game.",
      "Worked effectively under tight deadlines in a fast-paced environment, completing assigned tasks while helping coordinate progress and keeping other team members on track.",
    ],
    stack: ["GDScript", "Godot"],
    url: "https://human-inc.itch.io/joeover",
    start: "07/2026",
    end: "07/2026",
  },
  {
    name: "Plant Tracker",
    header: "Python / React",
    description: "A team-built web app for plant care tracking and health monitoring, made for university coursework.",
    highlights: [
      "Collaborated in a team of ten to develop a web app for plant care tracking and health monitoring for our university coursework.",
      "Followed the Agile methodology while coordinating tasks and communicating effectively with team members across different time zones.",
      "Led frontend development using React and TypeScript, developing the main dashboard to display and manage plant data.",
      "Integrated and processed data from backend OpenAPI endpoints, ensuring information was correctly retrieved, formatted and presented within the application.",
    ],
    stack: ["Python", "FastAPI", "TypeScript", "React", "SQLite"],
    url: "https://github.com/williamorriss/PlantTracker",
    start: "03/2026",
    end: "05/2026",
  },
  {
    name: "Short Signs",
    header: "Python / OpenCV",
    description: "A hand gesture detector that runs a keyboard shortcut or opens a URL when a gesture is recognised.",
    highlights: [
      "Built an application that detects hand gestures and, when one is recognised, executes a keyboard shortcut or redirects the user to a URL.",
      "Developed within 24 hours as a group of three for the University of Bath hackathon (2026), improving my teamwork and time management in high-pressure environments.",
      "Developed a multithreaded PyQt6 application, integrating MediaPipe for hand tracking using landmark-based distance and angle calculations for robust gesture detection.",
    ],
    stack: ["Python", "OpenCV", "NumPy", "PyQt6", "MediaPipe"],
    url: "https://github.com/williamorriss/ShortSigns",
    start: "03/2026",
    end: "03/2026",
  },
  {
    name: "Translation Transcriptor",
    header: "Python / PyQt5",
    description: "A desktop app that transcribes audio in real time and shows translated subtitles.",
    highlights: [
      "Developed a real-time desktop audio transcription and multilingual subtitle application, allowing users to convert desktop audio into translated subtitles and save them to their account.",
      "Implemented a SQLite database to securely store transcripts and user data, enabling users to save, retrieve and manage previous transcriptions.",
      "Designed a graphical user interface with PyQt5, integrating audio capture, speech recognition, translation and transcript management into a single application.",
    ],
    stack: ["Python", "PyQt5", "PyAudio", "SpeechRecognition", "DeepTranslator", "SQLite"],
    url: "https://github.com/JerichoM2006/CS-Project",
    start: "09/2023",
    end: "05/2025",
  },
  {
    name: "Verlet Image Generation",
    header: "C++ / SFML",
    description: "A particle simulation where about 2,000 Verlet particles settle into an approximation of an input image.",
    highlights: [
      "Developed a physics-based system that reconstructs an input image through a particle simulation, where ~2,000 particles form a visual approximation of the image.",
      "Implemented a deterministic Verlet integration pipeline with a two-phase simulation of colour sampling and re-simulation.",
      "Rendered with SFML and optimised with multithreading and a grid-based collision detection system.",
    ],
    stack: ["C++", "SFML"],
    url: "https://github.com/JerichoM2006/Verlet-Collision",
    start: "04/2023",
    end: "05/2023",
  },
];