"use client"

import { useState, useEffect } from "react"
import { Button } from "@heroui/react";
import Link from "next/link";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Rocket } from '@gravity-ui/icons';
import { EnvelopeOpen } from '@gravity-ui/icons';
import { motion } from 'motion/react';

export default function Hero() {

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
            return "vinhlam.le29@gmail.com";
            }
        };

        console.log(developer);`;





    interface TypewriterProps {
        text: string;
        delay?: number;
    }

    const Typerwritter = ({ text, delay = 100 }: TypewriterProps) => {
        const [currentText, setCurrentText] = useState('');
        const [currentIndex, setCurrentIndex] = useState(0);

        const isTyping = currentIndex < text.length;

        useEffect(() => {
            if (currentIndex < text.length) {
                const timeout = setTimeout(() => {
                    setCurrentText(prevText => prevText + text[currentIndex]);
                    setCurrentIndex(prevIndex => prevIndex + 1);
                }, delay);

                return () => clearTimeout(timeout);
            }
        }, [currentIndex, delay, text]);

        return (
            <span className="inline-flex items-center">
                {currentText}
                <span className={`gradient-0 ${!isTyping ? 'cursor-blink' : ''}`}>
                    |
                </span>
            </span>
        );
    };

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        window.history.pushState(null, '', `#${targetId}`);
    }

    return (
        <>
            <section id="hero">
                <div className="block mx-0 lg:mx-20 lg:flex lg:gap-15">
                    <motion.div
                        id="Intro"
                        className="block max-w-[1000px] text-center lg:text-left"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="text-[20px]">
                            <h3>
                                <span>Bonjour, je suis</span>
                            </h3>
                        </div>
                        <div>
                            <h2 className="gradient-1">
                                <Typerwritter text={"Vinh-Lam LE"}></Typerwritter>
                            </h2>
                        </div>
                        <div >
                            <h1>
                                <span className="gradient-1 font-[600]">Développeur full stack</span>
                            </h1>
                        </div>
                        <div className="flex gap-5 justify-center mt-5 lg:justify-start ">
                            <Link href="#projects" scroll={false} onClick={(e) => handleScroll(e, "projects")}>
                                <Button><Rocket></Rocket>Voir mes projets</Button>
                            </Link>
                            <Link href="#contact" scroll={false} onClick={(e) => handleScroll(e, "contact")}>
                                <Button className="text-black" variant="tertiary"><EnvelopeOpen></EnvelopeOpen>Me contacter</Button>
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        className=""
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <SyntaxHighlighter language="typescript" style={monokai} className="rounded-lg p-5 mt-10 text-[9px] lg:text-[19px] lg:mt-0">
                            {codeString}
                        </SyntaxHighlighter>
                    </motion.div>
                </div>
            </section>
        </>
    )
}