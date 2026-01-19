import { listProjects, Project } from '../data/projects';

export default function ProjectCard({ listProjects }: { listProjects: Project}) {
    return(
        <>
            <div>
                <h3>{listProjects.title}</h3>
                <p className='text-xs italic'>{listProjects.description}</p>
            </div>
        </>
    )
}