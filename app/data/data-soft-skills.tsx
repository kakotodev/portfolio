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
    'inline-flex items-center rounded-md bg-purple-400/10 px-2 py-1 font-medium text-purple-400 inset-ring inset-ring-purple-400/20',
    'inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 font-medium text-blue-400 inset-ring inset-ring-blue-400/20',
    'inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 font-medium text-red-400 inset-ring inset-ring-red-400/20',
    'inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 font-medium text-green-400 inset-ring inset-ring-green-400/20',
    'inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 font-medium text-yellow-400 inset-ring inset-ring-yellow-400/20',
    'inline-flex items-center rounded-md bg-pink-400/10 px-2 py-1 font-medium text-pink-400 inset-ring inset-ring-pink-400/20',
]