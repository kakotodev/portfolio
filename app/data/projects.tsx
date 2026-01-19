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
        description: "Marko est une plateforme de vente de textiles de luxe.",
        technologies: ["Vue3JS", "FastAPI", "Docker", "TailwindCSS", "PostegreSQL", "Git"],
        link: "https://github.com/kakotodev/E-Commerce-MARKO",
        urlImg: ""
    },
    {
        id: 2,
        title: "Memory",
        description: "Pas de description pour le moment",
        technologies: ["Pas de technologies pour le moment"],
        link: "Pas de link",
        urlImg: ""
    },
    {
        id: 3,
        title: "BuYourPC - E-Commerce",
        description: "Pas de description pour le moment",
        technologies: ["Pas de technologies pour le moment"],
        link: "Pas de link",
        urlImg: ""
    }
];