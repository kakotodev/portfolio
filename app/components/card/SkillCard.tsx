"use client";

import { listSkills } from "@/app/data/data-skills";
import { Skill } from "@/app/data/data-skills";
import { motion, Variants } from "motion/react";

export default function SkillCard() {

    const skillsPerCategory = listSkills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, Skill[]>);

    // Variants pour la liste de catégories
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Délai entre chaque catégorie
            },
        },
    };

    // Variants pour une catégorie
    const categoryVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                staggerChildren: 0.1, // Délai interne entre les icônes de la catégorie
            },
        },
    };

    // Variants pour une icône de compétence (effet léger de scale/pop)
    const iconVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 120, damping: 12 }
        },
    };

    return (
        <motion.div
            className="flex flex-col lg:flex-row flex-wrap justify-center gap-6 lg:gap-8 w-full max-w-6xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            {Object.entries(skillsPerCategory).map(([nameCategory, listSkills]) => (
                <motion.div
                    key={nameCategory}
                    variants={categoryVariants}
                    className="flex flex-col w-full max-w-[350px] sm:max-w-[400px] h-fit bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl"
                >
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold tracking-wide text-transparent bg-clip-text gradient-1">{nameCategory}</h3>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 lg:gap-6 items-center flex-grow">
                        {listSkills.map((skill) => (
                            skill.urlImg ? (
                                <motion.div
                                    key={skill.id}
                                    variants={iconVariants}
                                    className="relative flex flex-col items-center gap-1.5 lg:gap-0 lg:block lg:justify-center group w-[60px] lg:w-auto"
                                >
                                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/10 rounded-xl flex items-center justify-center p-2 transition-transform duration-300 transform lg:group-hover:-translate-y-2 lg:group-hover:bg-white/20">
                                        <img
                                            src={skill.urlImg}
                                            alt={skill.name}
                                            className="max-w-full max-h-full object-contain filter lg:grayscale grayscale-0 lg:group-hover:grayscale-0 transition-all duration-300"
                                        />
                                    </div>

                                    {/* Texte de la compétence (Affiché en dur sur Mobile, Caché sur PC) */}
                                    <span className="lg:hidden text-[11px] text-gray-400 font-medium tracking-wide text-center leading-tight">
                                        {skill.name}
                                    </span>

                                    {/* Tooltip au Hover (Affiché sur PC, Caché sur Mobile) */}
                                    <span className="hidden lg:block absolute -top-10 scale-0 transition-transform duration-200 ease-out origin-bottom rounded bg-gray-900 text-white text-xs font-medium py-1 px-2 group-hover:scale-100 shadow-xl whitespace-nowrap z-10 pointer-events-none">
                                        {skill.name}
                                        <span className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-gray-900"></span>
                                    </span>
                                </motion.div>
                            ) : null
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}