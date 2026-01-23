"use client"

import {useState, useEffect} from "react"

export default function About() {

    interface TypewriterProps {
        words: string[],
        typingspeed?: number,
        deletingspeed?: number,
        pauseTime: number,
    }

    const Typewritter = ({words, typingspeed = 300, deletingspeed = 100, pauseTime = 2000 }: TypewriterProps) => {
        const [currentText, setCurrentText] = useState("")
        const [currentIndex, setCurrentIndex] = useState(0)
        const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const word = words[currentIndex]; 

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setCurrentText(word.substring(0, currentText.length + 1));
                if (currentText === word) {
                    setIsDeleting(true);
                }
            } else {
                setCurrentText(word.substring(0, currentText.length - 1));

                if (currentText === "") {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? (currentText === word ? pauseTime : deletingspeed): typingspeed);

        return () => clearTimeout(timeout); 
        }, [currentText, isDeleting, currentIndex, words]);

        return (
            <span className="font-mono">
                {currentText}
                <span className="border-r-2 border-foreground ml-1 animate-pulse">|</span>
            </span>
        );
    }
    return(
        <>
        <section>
            <div id="Intro" className="block">
                <div className="">
                    <Typewritter words={["Salut moi c'est Lam", "Etudiant à EFREI", "Dev Junior"]} typingspeed={100} pauseTime={150}/>
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