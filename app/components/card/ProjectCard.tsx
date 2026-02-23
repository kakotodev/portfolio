import { Project } from '../../data/data-projects';
import { techColors } from '../../data/data-projects';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@heroui/react";
import { Globe } from '@gravity-ui/icons';

export default function ProjectCard({ listProjects }: { listProjects: Project }) {
    return (
        <div className="group flex flex-col w-full max-w-[380px] min-h-[500px] bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 mx-auto">

            {/* Image Section (Responsive unique avec Hover Scale) */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0f0f11]">
                <Image
                    src={listProjects.urlImg}
                    alt={`Aperçu de ${listProjects.title}`}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-110 group-hover:brightness-75 transition-all duration-500 ease-out"
                />
            </div>

            {/* Contenu Section */}
            <div className="flex flex-col flex-grow p-6 text-center">

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-white">
                    {listProjects.title}
                </h3>

                {/* Tags de technologies */}
                <div className="flex flex-col mb-4">
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-2">Stack Technique</span>
                    <div className="flex flex-wrap justify-center gap-2">
                        {listProjects.technologies.map((tech, index) => {
                            const colorBadgeTech = techColors[tech] || 'bg-gray-500/20';
                            return (
                                <span
                                    key={index}
                                    className={`text-[12px] font-medium px-3 py-1 rounded-full border border-white/5 ${colorBadgeTech} text-white/90 shadow-sm`}
                                >
                                    {tech}
                                </span>
                            )
                        })}
                    </div>
                </div>

                {/* Description */}
                <div className="text-sm lg:text-[15px] text-gray-400 font-light leading-relaxed italic mb-8 flex-grow">
                    <p>{listProjects.description}</p>
                </div>

                {/* Bouton Desktop + Mobile unique */}
                <div className="mt-auto pt-4 relative w-full flex justify-center">
                    <Link href={listProjects.link} target='_blank' className="w-full sm:w-auto">
                        <Button className="w-full bg-white text-black hover:scale-105 transition-transform duration-300 font-semibold tracking-wide rounded-full px-8 py-6 text-sm">
                            <Globe className="mr-2 w-4 h-4" />
                            Voir sur GitHub
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}