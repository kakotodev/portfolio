export interface SoftSkills {
    id: number;
    name: string;
}

export const listSoftSkills: SoftSkills[] = [
    { id: 1, name: "Travail en équipe" },
    { id: 2, name: "Communication" },
    { id: 3, name: "Résolution de problèmes" },
    { id: 4, name: "Adaptabilité" },
    { id: 5, name: "Gestion du temps" },
    { id: 6, name: "Pensée critique" },
]

export const colorNeonSoftSkills: string[] = [
    "text-neon-pink",
    "text-neon-blue",
    "text-neon-green",
    "text-neon-yellow",
]