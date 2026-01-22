"use client"

import React, {useState, useEffect} from "react"

export default function About() {

    interface TypewriterProps {
        text: string;
        delay: number;
    }

    const Typewritter = ({ text, delay }: TypewriterProps) => {
        const [currentText, setCurrentText] = useState('')
        const [currentIndex, setCurrentIndex] = useState(0)

        useEffect(() => {
            if (currentIndex < text.length) {
                const timeout = setTimeout(() => {
                    setCurrentText((prevText) => prevText + text[currentIndex])
                    setCurrentIndex((prevIndex) => prevIndex + 1)
                }, delay)
                return () => clearTimeout(timeout)
            }
        }, [currentIndex, text, delay])

        return <h3 className="flex justify-center">{currentText}</h3>
    }

    return(
        <>
        <section>
            <div id="Intro" className="block">
                <div className="hidden lg:block">
                    <Typewritter text="Salut ! Moi c'est Vinh-Lâm mais tu peux m'appeller Lam !" delay={50} />
                </div>
                <div className="block lg:hidden">
                    <Typewritter text="Salut moi c'est Lam !" delay={50} />
                </div>
                <div className="my-20">
                    <h1 id="titleFadeIn" className="flex justify-center">Développeur full stack</h1>
                </div>
            </div>
            <div id="About" className="mt-180">
                <div>
                    <h2>A propos</h2>
                </div>
                <div className="text-[25px]">
                    <p>Salut ! Je suis Lam et j&apos;ai 19 ans, actuellement Etudiant à l&apos;Efrei dans le IT. J&apos;apprends le développement web via des projets que j&apos;ai effectué sur mon <span>Github</span></p>
                    <p>Pendant mes temps libres je pratique de la musculation et je joue à des Jeux Rythm ! Mais ce que je prefere par dessus c&apos;est de lire la docs et debugger mon code</p>
                    <p>Mon objectif c&apos;est d&apos;apprendre tout les jours à devenir un meilleur développeur donc hésite pas me <span>Contacter !</span></p>
                </div>
            </div>
      </section>
    </>
    )
}