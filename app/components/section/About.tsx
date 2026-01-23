"use client"

import {useState, useEffect} from "react"
import Link from "next/link"

export default function About() {

    interface TypewriterProps {
        words: string[];
        delay?: number;
    }

    const Typerwritter = ({ words, delay = 200 }: TypewriterProps) => {
        const [text, setText] = useState('');
        const [isDeleting, setIsDeleting] = useState(false);
        const [loopNum, setLoopNum] = useState(0);
        const [typingSpeed, setTypingSpeed] = useState(100);

        useEffect(() => {
            const handleTyping = () => {
                const i = loopNum % words.length;
                const fullText = words[i];

                setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

                if (!isDeleting && text === fullText) {
                    setIsDeleting(true);
                    setTypingSpeed(delay);
                } else if (isDeleting && text === '') {
                    setIsDeleting(false);
                    setLoopNum(loopNum + 1);
                    setTypingSpeed(40);
                }
            };

            const timer = setTimeout(handleTyping, typingSpeed);

            return() => clearTimeout(timer);
        }, [text, isDeleting, loopNum, words, delay, typingSpeed]);

        return (
            <span>{text}<span className="">|</span></span>
        );
    }

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        window.history.pushState(null, '', `#${targetId}`);
    }

    return(
        <>
        <section>
            <div id="Intro" className="block max-w-[1000px] text-center lg:text-left">
                <div className="text-[30px]">
                    <Typerwritter words={['Bonjour, je suis', "Hello, I'm"]} />
                </div>
                <div>
                    <h2>Vinh-Lâm LÊ</h2>
                </div>
                <div className="">
                    <h1 className="">Développeur full stack</h1>
                </div>
                <div>
                    <Link href="#projects" scroll={false} onClick={(e) => handleScroll(e, "projects")}>Voir mes projets</Link>
                    <Link href="#contact" scroll={false} onClick={(e) => handleScroll(e, "contact")}>Me contacter</Link>
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