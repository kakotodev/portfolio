export interface Skill {
    id: number,
    category: string,
    name: string,
    urlImg: string
}

export interface categorieSkills {
    id: number,
    category: string
}

const CatStack = ['Language', 'Framework', 'Outils'] as const;

const TechStack = {
    languages: [
        'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'PHP'
    ],
    frameworks: [
        'ReactJS', 'Angular', 'Vue.JS', 'Alpine.JS', 'TailwindCSS', 
        'Bootstrap', 'FastAPI', 'Django', 'Symfony', 'NodeJS', 'NextJS'
    ],
    tools: [
        'MySQL', 'PostgreSQL', 'MangoDB', 'MariaDB', 'Git', 'Docker', 'Figma'
    ]
} as const;

const urlImgStack = [
    'https://cdn.simpleicons.org/html5/E34F26',
    'https://cdn.simpleicons.org/css/1572B6',
    'https://cdn.simpleicons.org/javascript/F7DF1E',
    'https://cdn.simpleicons.org/typescript/3178C6',
    'https://cdn.simpleicons.org/python/3776AB',
    'https://cdn.simpleicons.org/php/777BB4',
    'https://cdn.simpleicons.org/react/61DAFB',
    'https://cdn.simpleicons.org/angular/DD0031',
    'https://cdn.simpleicons.org/vue.js/4FC08D',
    'https://cdn.simpleicons.org/alpine.js/8BC0D0',
    'https://cdn.simpleicons.org/tailwindcss/06B6D4',
    'https://cdn.simpleicons.org/bootstrap/7952B3',
    'https://cdn.simpleicons.org/fastapi/009688',
    'https://cdn.simpleicons.org/django/092E20',
    'https://cdn.simpleicons.org/symfony/000000',
    'https://cdn.simpleicons.org/node.js/339933',
    'https://cdn.simpleicons.org/next.js/000000',
    'https://cdn.simpleicons.org/mysql/4479A1',
    'https://cdn.simpleicons.org/postgresql/336791',
    'https://cdn.simpleicons.org/mongodb/47A248',
    'https://cdn.simpleicons.org/mariadb/003545',
    'https://cdn.simpleicons.org/git/F05032',
    'https://cdn.simpleicons.org/docker/2496ED',
    'https://cdn.simpleicons.org/figma/F24E1E',
] as const

export const categoriesSkills: categorieSkills[] = CatStack.map((category, index) => ({
    id: index + 1,
    category: category
}));

export const listSkills: Skill[] = []
CatStack.forEach((category, catIndex) => {
    let techs: readonly string[] = [];
    switch (category) {
        case 'Language':
            techs = TechStack.languages;
            break;
        case 'Framework':
            techs = TechStack.frameworks;
            break;
        case 'Outils':
            techs = TechStack.tools;
            break;
    }
    techs.forEach((tech, techIndex) => {
        const urlImgIndex = catIndex === 0
            ? techIndex
            : catIndex === 1
                ? techIndex + TechStack.languages.length
                : techIndex + TechStack.languages.length + TechStack.frameworks.length;
        listSkills.push({
            id: listSkills.length + 1,
            category: category,
            name: tech,
            urlImg: urlImgStack[urlImgIndex]
        });
    });
});