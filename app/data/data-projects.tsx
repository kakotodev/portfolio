

export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link: string;
    urlImg: string;
}

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
        title: "BuYourPC - E-Commerce",
        description: "Pas de description pour le moment",
        technologies: ["PHP", "Twig"],
        link: "Pas de link",
        urlImg: "/BuyYourPC-Ecommerce.svg"
    }
];