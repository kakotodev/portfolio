"use client"

import { useState, useEffect } from "react"
import { listSoftSkills } from "@/app/data/data-soft-skills";
import { SoftSkills } from "@/app/data/data-soft-skills";
import { colorNeonSoftSkills } from "@/app/data/data-soft-skills";
import { motion, AnimatePresence, Variants } from "motion/react";

export default function About() {

    interface CarouselBadge {
        items: SoftSkills[];
        itemsPerPage?: number;
        interval?: number;
    }

    function RotatingList({
        items,
        itemsPerPage = 3,
        interval = 5000,
    }: CarouselBadge) {
        const [currentPage, setCurrentPage] = useState(0);

        const totalPages = Math.ceil(items.length / itemsPerPage);

        useEffect(() => {
            const timer = setInterval(() => {
                setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
            }, interval);

            return () => clearInterval(timer);
        }, [totalPages, interval]);

        const startIndex = currentPage * itemsPerPage;
        const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);
        const visibleColors = colorNeonSoftSkills;

        return (
            <div className="flex gap-2 lg:gap-4 justify-center mt-2 overflow-hidden min-h-14 items-center">
                <AnimatePresence mode="popLayout">
                    {visibleItems.map((item) => {

                        const curentColor = visibleColors[startIndex] || "text-white";

                        return (
                            <motion.div
                                key={item.id}
                                className={`${curentColor}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                {item.name}
                            </motion.div>
                        )
                    })}
                </AnimatePresence>
            </div>
        );

    }

    // Variants pour le container parent : gère le stagger (décalage) entre l'apparition des enfants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Délai entre chaque enfant
            }
        }
    };

    // Variants pour chaque enfant : glisse depuis le bas
    const childVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <>
            <section id="about">
                <motion.div
                    className="mt-50"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <div className="flex justify-center">
                        <div className="w-[1100px] mx-20 about-container">
                            <div className="about-content">
                                <div className="block lg:flex justify-center lg:gap-10 ">
                                    <motion.div variants={childVariants} className="w-[310px] mx-5 text-center lg:mx-0 lg:w-[400px] font-[500]">
                                        <h2>À propos de moi</h2>
                                    </motion.div>
                                    <motion.div variants={childVariants} className="flex items-center w-[310px] mx-5 lg:w-[600px]">
                                        <div className="hidden lg:block flex justify-center lg:justify-start">
                                            <RotatingList items={listSoftSkills} itemsPerPage={3} interval={5000} />
                                        </div>
                                        <div className="block lg:hidden flex justify-center lg:justify-start">
                                            <RotatingList items={listSoftSkills} itemsPerPage={2} interval={4000} />
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="flex justify-center mt-10 mx-5 lg:mx-40 mb-10">
                                    <div className="lg:w-[800px] flex flex-col gap-6 text-[17px] lg:text-[19px] leading-relaxed text-gray-300 font-light">
                                        <motion.p variants={childVariants}>
                                            Salut ! Je suis Lam, j&apos;ai 19 ans, et je suis actuellement étudiant à l&apos;Efrei dans l&apos;IT. J&apos;apprends le développement web à travers divers projets que j&apos;ai mis à disposition sur mon <span className="font-medium text-white gradient-1">Github</span>.
                                        </motion.p>
                                        <motion.p variants={childVariants}>
                                            Pendant mon temps libre, je pratique la musculation et je joue assidûment à des <span className="font-medium text-white">Jeux de Rythmes</span> ! Mais ce qui me fait le plus vibrer, c&apos;est de me plonger dans la documentation technique et de débugger mon code.
                                        </motion.p>
                                        <motion.p variants={childVariants}>
                                            Passionné par l&apos;écosystème tech, je considère chaque ligne de code comme une opportunité d&apos;apprendre. Ma philosophie ? Cultiver une veille constante et relever de nouveaux défis techniques chaque jour pour transformer ma curiosité en expertise. N&apos;hésitez pas à me <span className="font-medium text-white gradient-1">contacter</span> !
                                        </motion.p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    )
}