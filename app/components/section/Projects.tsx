import ProjectCard from "../card/ProjectCard"
import { listProjects } from "../../data/projects"
import Image from 'next/image';


export default function Projects() {
    return(
        <>
            <section className="block max-w-full">
                <div>
                    <h2>Mes Projets Récents</h2>
                </div>
                <div className="flex justify-center">
                    {listProjects.map((project) => (
                        <ProjectCard  key={project.id} listProjects={project} />
                    ))}
                </div>
            </section>
        </>
    )
}