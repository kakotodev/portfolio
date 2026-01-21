import { Project } from '../../data/data-projects';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ listProjects }: { listProjects: Project}) {
    return(
        <>
            <div className='text-center mx-7 my-5 w-[500px] h-[560px] border'>
                <div className='h-[80px]'>
                    <h3>{listProjects.title}</h3>
                </div>
                <div className='text-center mb-5 h-[40px]'>
                    {listProjects.technologies.map((tech, index) => (
                        <span key={index}>{tech}{index < listProjects.technologies.length - 1 && " "}</span>
                    ))}
                </div>
                <div className='text-[18px] h-[100px] italic'>
                    <p>{listProjects.description}</p>
                </div>
                <div className='flex justify-center'>
                    <Image src={listProjects.urlImg} alt="Apercu du site web" width={600} height={400} unoptimized   />
                </div>
                <Link href={listProjects.link}>Clique ici pour acceder au projet</Link>
            </div>
        </>
    )
}