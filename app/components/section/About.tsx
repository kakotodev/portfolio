"use client"

import { useState, useEffect} from "react"
import { listSoftSkills } from "@/app/data/data-soft-skills";
import { SoftSkills } from "@/app/data/data-soft-skills";
import { colorNeonSoftSkills } from "@/app/data/data-soft-skills";

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
            <div className="flex gap-2 lg:gap-4 justify-center mt-2">
                {visibleItems.map((item) => {

                    const curentColor = visibleColors[startIndex] || "text-white";

                    return(
                        <div key={item.id} className={`${curentColor}`}>
                            {item.name}
                        </div>
                )})}
            </div>
        );

    }

    return(
        <>
        <section>
            <div id="about" className="mt-50">
                <div>
                    <div className="block lg:flex justify-center lg:gap-10 lg:text-left lg:mx-80">
                        <div className="w-[310px] mx-5 lg:mx-0 lg:w-[400px]">
                            <h2>À propos de moi</h2>
                        </div>
                        <div className="flex items-center w-[310px] mx-5 lg:w-[600px]">
                            <div className="hidden lg:block flex justify-center lg:justify-start">
                                <RotatingList items={listSoftSkills} itemsPerPage={3} interval={5000} />
                            </div>
                            <div className="block lg:hidden flex justify-center lg:justify-start">
                                <RotatingList items={listSoftSkills} itemsPerPage={2} interval={4000} />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center text-[23px] mt-10 mx-5 lg:mx-80">
                        <div className="lg:w-[800px]">
                            <p>Salut ! Je suis Lam et j&apos;ai 19 ans, actuellement Etudiant à l&apos;Efrei dans le IT. J&apos;apprends le développement web via des projets que j&apos;ai effectué sur mon <span>Github.</span></p><br />
                            <p>Pendant mes temps libres je pratique de la musculation et je joue à des Jeux Rythm ! Mais ce que je prefere par dessus c&apos;est de lire la docs et debugger mon code.</p><br />
                            <p>Mon objectif c&apos;est d&apos;apprendre tout les jours à devenir un meilleur développeur donc hésite pas me <span>contacter!</span></p>
                        </div>
                    </div>

                </div>
            </div>
      </section>
    </>
    )
}