export const cx = (...a: (string | false | undefined)[]) => a.filter(Boolean).join(" ");

export type Section = "menu" | "profile" | "projects" | "links"
export interface MenuItem {name: string, description: string, section: Section}

export const menu: MenuItem[] = [
    {name: "PROFILE", description: "About me", section: "profile"},
    {name: "PROJECTS", description: "My personal projects", section: "projects"},
    {name: "LINKS", description: "Links to do with me", section: "links"},
]