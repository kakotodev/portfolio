export interface Skill {
    id: number,
    category: string,
    name: string,
    urlImg: string
}

const CatStack = ['Front-End', 'Back-End', 'Base de données','Outils'] as const;
const NameStack = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'ReactJS', 'Angular', 'Vue.JS', 'Alpine.JS', 'TailwindCSS', 'Bootstrap',
    'Python', 'FastAPI', 'Django', 'PHP', 'Symfony', 'NodeJS', 'NextJS',
    'MySQL', 'NoSQL', 'PostgreSQL', 'MangoDB', 'MariaDB',
    'Git', 'GitHub', 'Excel', 'Trello', 'Figma', 'Canva', 'Docker', 'Vercel', 'Render', 'Unix', 'Debian', 'VMware'
] as const
const urlImgStack = [
    'https://cdn.simpleicons.org/html5/E34F26',
    'https://cdn.simpleicons.org/css/1572B6',
    'https://cdn.simpleicons.org/javascript/F7DF1E',
    'https://cdn.simpleicons.org/typescript/3178C6',
    'https://cdn.simpleicons.org/react/61DAFB',
    'https://cdn.simpleicons.org/angular/DD0031',
    'https://cdn.simpleicons.org/vue.js/4FC08D',
    'https://cdn.simpleicons.org/alpinedotjs/8BC0D0',
    'https://cdn.simpleicons.org/tailwindcss/06B6D4',
    'https://cdn.simpleicons.org/bootstrap/7952B3',
    'https://cdn.simpleicons.org/python/3776AB',
    'https://cdn.simpleicons.org/fastapi/009688',
    'https://cdn.simpleicons.org/django/092E20',
    'https://cdn.simpleicons.org/symfony/000000',
    'https://cdn.simpleicons.org/node.js/339933',
    'https://cdn.simpleicons.org/next.js/000000',
    'https://cdn.simpleicons.org/mysql/4479A1',
    'https://cdn.simpleicons.org/postgresql/316192',
    'https://cdn.simpleicons.org/mongodb/47A248',
    'https://cdn.simpleicons.org/mariadb/003545',
    'https://cdn.simpleicons.org/git/F05032',
    'https://cdn.simpleicons.org/github/181717',
    'https://cdn.simpleicons.org/trello/0079BF',
    'https://cdn.simpleicons.org/figma/F24E1E',
    'https://cdn.simpleicons.org/docker/2496ED',
    'https://cdn.simpleicons.org/vercel/000000',
    'https://cdn.simpleicons.org/render/00C9A7',
    'https://cdn.simpleicons.org/linux/FCC624',
    'https://cdn.simpleicons.org/debian/A81D33',
    'https://cdn.simpleicons.org/vmware/607078'
] as const

export const listSkills: Skill[] = NameStack.map((name, index) => ({
    id: index + 1,
    category: index < 10 ? CatStack[0] : index < 16 ? CatStack[1] : index < 21 ? CatStack[2] : CatStack[3],
    name: name,
    urlImg: urlImgStack[index]
})) 