

export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link: string;
    urlImg: string;
}

export const techColors: Record<string, string> = {
    "Vue.JS": "border-green-500 bg-green-500/15",
    "FastAPI": "border-blue-500 bg-blue-500/15",
    "Docker": "border-blue-700 bg-blue-700/15",
    "TailwindCSS": "border-teal-400 bg-teal-400/15",
    "PostgreSQL": "border-indigo-600 bg-indigo-600/15",
    "Git": "border-orange-500 bg-orange-500/15",
    "PHP": "border-purple-600 bg-purple-600/15",
    "Twig": "border-pink-400 bg-pink-400/15",
    "TypeScript": "border-blue-500 bg-blue-500/15",
};

export const listProjects: Project[] = [
    {
        id: 1,
        title: "MARKO - E-Commerce",
        description: "Marko est une plateforme de vente de textiles de luxe. Site web dynamique est responsive, retrouvez plus de 100 fonctionnalités",
        technologies: ["Vue.JS", "FastAPI", "Docker", "TailwindCSS", "PostgreSQL", "Git"],
        link: "https://github.com/kakotodev/E-Commerce-MARKO",
        urlImg: '/Marko-Ecommerce.svg'
    },
    {
        id: 2,
        title: "Memory",
        description: "Application web de jeu inspiré du jeu Memory. Application web responsive et dynamique, retrouvez plus de 10 fonctionnalités",
        technologies: ["Vue.JS", "FastAPI", "TailwindCSS", "PostgreSQL", "Git"],
        link: "https://github.com/kakotodev/memory",
        urlImg: "/Memory.svg"
    },
    {
        id: 3,
        title: "BuyYourPC - E-Commerce",
        description: "Site web de vente de composants informatiques. Fonctionalités de comptes admin et utilisateur",
        technologies: ["PHP", "Twig"],
        link: "https://github.com/kakotodev/E-Commerce-PHP",
        urlImg: "/BuyYourPC-Ecommerce.svg"
    },
    {
        id: 4,
        title: "PastJob - Extension Chrome",
        description: "Extension Chrome d'extraction automatique d'offres d'emploi en un clic.",
        technologies: ["TypeScript", "JavaScript", "Vue.JS"],
        link: "https://github.com/kakotodev/PastJob",
        urlImg: "/PastJob.svg"
    }
];

export const GitHubIconsLink = "https://cdn.simpleicons.org/github/FFFFFF";