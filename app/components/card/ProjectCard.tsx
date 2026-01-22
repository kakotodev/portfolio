import { Project } from '../../data/data-projects';
import { techColors } from '../../data/data-projects';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ listProjects }: { listProjects: Project}) {

    return(
        <>
            <div className='hidden text-center mx-7 my-5 w-[400px] h-[560px] border lg:block'>
                <div className='hidden lg:block flex justify-center'>
                    <Image src={listProjects.urlImg} alt="Apercu du site web" width={400} height={300} unoptimized   />
                </div>
                    <div className='h-[80px]'>
                        <h3>{listProjects.title}</h3>
                    </div>
                    <div className='flex justify-center'>
                        <div className='flex flex-wrap justify-center mb-5 h-[80px] w-[350px]'>
                            {listProjects.technologies.map((tech, index) => {
                                
                                const colorBadgeTech = techColors[tech] || 'bg-gray-500';

                                return (
                                    <div key={index} className={`h-[20px] px-1 pb-[25px] mx-2 border-2 rounded-full ${colorBadgeTech}`}>
                                        <span>{tech}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='text-[18px] h-[100px] italic'>
                        <p>{listProjects.description}</p>
                    </div>
                <Link href={listProjects.link}>Clique ici pour acceder au projet</Link>
            </div>
            <div className='block lg:hidden w-[300px] text-center mx-7 my-5 h-[400px] border'>
                <div className='block flex justify-center'>
                    <Image src={listProjects.urlImg} alt="Apercu du site web" width={300} height={225} unoptimized   />
                </div>
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
                <Link href={listProjects.link}>Clique ici pour acceder au projet</Link>
            </div>               
        </>
    )
}