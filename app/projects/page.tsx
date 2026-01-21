import ProjectCard from '../components/card/ProjectCard';
import { listProjects } from '../data/projects';

export default function MyProjects() {
    return (
        <main>
            <div>
                <h2>Mes projets : </h2>
            </div>
            <div className="flex justify-center">
                    {listProjects.map((project) => (
                        <ProjectCard  key={project.id} listProjects={project} />
                    ))}
            </div>
        </main>
    )
}