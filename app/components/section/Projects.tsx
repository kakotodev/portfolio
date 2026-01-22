import ProjectCard from "../card/ProjectCard"
import { listProjects } from "../../data/data-projects"
import Link from "next/link"

export default function Projects() {
    return(
        <>
            <section className="block max-w-full">
                <div className="flex justify-center">
                    <div className="flex justify-between items-center w-[1650px]">
                        <div>
                            <h2>Mes Projets Récents</h2>
                        </div>
                        <div className="text-[30px]">
                            <Link href="/projects">Voir plus de projets</Link>
                        </div>
                    </div>
                </div>
                <div className="block lg:flex justify-center">
                        {listProjects.map((project) => (
                            project.urlImg ? (
                            <ProjectCard  key={project.id} listProjects={project} />
                        ) : null))}
                </div>
            </section>
        </>
    )
}