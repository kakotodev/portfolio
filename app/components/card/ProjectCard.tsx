import { Project } from '../../data/data-projects';
import { techColors } from '../../data/data-projects';
import Image from 'next/image';
import Link from 'next/link';
import {Button} from "@heroui/react";
import { Globe } from '@gravity-ui/icons';

export default function ProjectCard({ listProjects }: { listProjects: Project}) {

    return(
        <>
            <div className='text-center mx-7 my-5 w-[300px] h-[480px] lg:w-[400px] lg:h-[560px] border'>
                <div className='lg:mx-2 my-1 text-center'>
                    <div className='flex group justify-center lg:hover:scale-105 lg:transition'>
                        <Image src={listProjects.urlImg} alt="Apercu du site web" width={400} height={300} unoptimized className='hidden lg:block lg:group-hover:grayscale-90 lg:group-hover:brightness-50'/>
                        <Link href={listProjects.link} target='_blank' className='hidden lg:block center absolute'>
                            <span className='absolute opacity-0 lg:group-hover:opacity-100 lg:top-10'>
                                <Button className={'absolute top-10'}>
                                    <Globe />
                                    GitHub
                                </Button>
                            </span>
                        </Link>
                        <Image src={listProjects.urlImg} alt="Apercu du site web" width={300} height={400} unoptimized className='block lg:hidden'/>
                    </div>
                        <div className='h-[50px] mt-1 lg:h-[80px]'>
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
                    <Link href={listProjects.link} target='_blank' className='blockl lg:hidden mb-20'>
                        <span>
                            <Button>
                                <Globe />
                                GitHub
                            </Button>
                        </span>
                    </Link>
                </div>
            </div>
        </>
    )
}