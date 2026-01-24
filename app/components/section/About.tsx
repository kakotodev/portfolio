"use client"

import { listSoftSkills } from "@/app/data/data-soft-skills";

export default function About() {


    return(
        <>
        <section>
            <div id="About" className="mt-50">
                <div>
                    <div className="flex justify-center lg:gap-10 lg:text-left lg:mx-80">
                        <div>
                            <h2>À propos de moi</h2>
                        </div>
                        <div className="flex ">
                            {listSoftSkills.map((skill) => (
                                <div key={skill.id} className="mx-2">
                                    <span>{skill.name}</span>
                                </div>
                            ))}
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