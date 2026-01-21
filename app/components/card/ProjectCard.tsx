import { Project } from '../../data/projects';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ listProjects }: { listProjects: Project}) {
    return(
        <>
            <div className='text-center mx-8 my-5 w-[500px] h-[600px] border'>
                <h3>{listProjects.title}</h3>
                <p className='text-[20px] !importante italic'>{listProjects.description}</p>
                <p>{listProjects.technologies}</p>
                <div>
                    <Image src={listProjects.urlImg} alt="Apercu du site web" width={400} height={300} unoptimized   />
                </div>
                <Link href={listProjects.link}>Clique ici pour acceder au projet</Link>
            </div>
        </>
    )
}