"use client";

import ProjectCard from '../components/card/ProjectCard';
import { listProjects } from '../data/data-projects';
import { motion, Variants } from "motion/react";

export default function MyProjects() {

    // Variants pour l'effet cascade (stagger) du container
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 } // Chaque carte apparaît avec 150ms d'écart
        }
    };

    // Variants pour chaque carte (glisse vers le haut)
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <main className="flex flex-col h-full min-h-[100dvh] bg-[#0f0f11] pt-32 pb-24 px-6 md:px-12 lg:px-20 w-full relative">
            {/* Fond statique profond étendu derrière tout */}
            <div className="fixed inset-0 bg-[#0f0f11] -z-10 w-full h-full pointer-events-none"></div>

            {/* Titre animé */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                    Mes <span className="gradient-1 pb-2">Réalisations</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-sm lg:text-base">
                    Découvrez une sélection de mes projets récents, illustrant mes compétences en développement full-stack.
                </p>
            </motion.div>

            {/* Grille de projets avec Stagger Animation */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-[1400px] mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {listProjects.map((project) => (
                    <motion.div key={project.id} variants={cardVariants} className="flex h-full">
                        <ProjectCard listProjects={project} />
                    </motion.div>
                ))}
            </motion.div>
        </main>
    )
}