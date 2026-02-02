import ProjectCard from '../components/card/ProjectCard';
import { listProjects } from '../data/data-projects';

export default function MyProjects() {
    return (
        <main>
            <section className='mt-20'>
                <div>
                    <h2>Mes projets : </h2>
                </div>
                <div className="flex justify-center">
                        {listProjects.map((project) => (
                            <ProjectCard  key={project.id} listProjects={project} />
                        ))}
                </div>
            </section>
        </main>
    )
}