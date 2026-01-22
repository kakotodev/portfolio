

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
    "PostegreSQL": "border-indigo-600 bg-indigo-600/15",
    "Git": "border-orange-500 bg-orange-500/15",
    "PHP": "border-purple-600 bg-purple-600/15",
    "Twig": "border-pink-400 bg-pink-400/15"
};

export const listProjects: Project[] = [    
    {
        id: 1,
        title: "MARKO - E-Commerce",
        description: "Marko est une plateforme de vente de textiles de luxe. Site web dynamique est responsive, retrouvez plus de 100 fonctionnalités",
        technologies: ["Vue.JS", "FastAPI", "Docker", "TailwindCSS", "PostegreSQL", "Git"],
        link: "https://github.com/kakotodev/E-Commerce-MARKO",
        urlImg: '/Marko-Ecommerce.svg'
    },
    {
        id: 2,
        title: "Memory",
        description: "Pas de description pour le moment",
        technologies: ["Vue.JS", "FastAPI", "TailwindCSS", "PostegreSQL", "Git"],
        link: "Pas de link",
        urlImg: "/Memory.svg"
    },
    {
        id: 3,
        title: "BuyYourPC - E-Commerce",
        description: "Pas de description pour le moment",
        technologies: ["PHP", "Twig"],
        link: "Pas de link",
        urlImg: "/BuyYourPC-Ecommerce.svg"
    }
];