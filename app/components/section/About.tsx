"use client"

import {useState, useEffect} from "react"
import { Button } from "@heroui/react";
import Link from "next/link";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function About() {

    const codeString = `const developer = {
        name: "Vinh-Lâm LÊ",
        name-use: "Lam",
        age: 19,
        role: "Développeur Fullstack",
        location: "Paris, France",
        favoriteTechStack: {
            frontend: ["React", "Angular", "Vue.js"],
            backend: ["FastAPI", "Symfony", "Java Spring Boot"]
        },
        hobbies: ["Musculation", "Jeux-Vidéo", "Codée"],
        passion: "Créer des interfaces fluides et performantes",
        available: true,
        contact: () => {
            return "email@exemple.com";
            }
        };

        console.log(developer);`;





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
            <div className="flex gap-10 mx-0 lg:mx-20">
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
                    <div className="flex gap-5">
                        <Link href="#projects" scroll={false} onClick={(e) => handleScroll(e, "projects")}>
                            <Button>Voir mes projets</Button>
                        </Link>
                        <Link href="#contact" scroll={false} onClick={(e) => handleScroll(e, "contact")}>
                            <Button className="text-black"variant="tertiary">Me contacter</Button>
                        </Link>
                    </div>
                </div>
                <div>
                    <SyntaxHighlighter language="typescript" style={monokai} className="rounded-lg p-5 mt-10 lg:mt-0">
                        {codeString}
                    </SyntaxHighlighter>
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