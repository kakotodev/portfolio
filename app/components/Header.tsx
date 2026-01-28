"use client";

import Link from "next/link";
import {House, Person, Code, Rocket, EnvelopeOpen, Bars} from '@gravity-ui/icons';
import { useState } from "react";
import { Button } from '@heroui/react';
import { nav } from "motion/react-client";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)
    interface navIcons {
        id: number;
        icons: string;
        href: string;
        name: string;
    }

    const HeaderNav: navIcons[] = [
        {
            id: 1,
            icons: "House",
            href: "/#hero",
            name: "Home"
        },
        {
            id: 2,
            icons: "Person",
            href: "/#about", 
            name: "About"
        },
        {
            id: 3,
            icons: "Code",
            href: "/#skills",
            name: "Compétences"
        },
        {
            id: 4,
            icons: "Rocket",
            href: "/#projects",
            name: "Projets"
        },
        {
            id: 5,
            icons: "EnvelopeOpen",
            href: "/#contact",
            name: "Contact"
        },
    ]

    return(
        <header className={`fixed justify-center top-0 left-0 w-full h-full z-100 items-center ${isOpen ? 'max-h-[500px]' : 'max-h-[60px]'}`}>

            <div className="hidden lg:flex justify-between mx-20 h-full items-center">
                <div>
                    <span className="gradient-1">By Lam</span>
                </div>
                <div className="hidden lg:block">
                    <nav className="flex justify-center w-[600px] gap-7 text-[14px]">
                        {HeaderNav.map((nav) => (
                            <Link key={nav.id} href={nav.href} className="relative group flex items-center text-[14px] lg:text-[16px] gradient-1-hover">
                                {nav.icons === "House" && <House className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px] gradient-1-hover"/> }
                                {nav.icons === "Person" && <Person className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px] gradient-1-hover"/>}
                                {nav.icons === "Code" && <Code className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px] gradient-1-hover"/>}
                                {nav.icons === "Rocket" && <Rocket className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px] gradient-1-hover"/>}
                                {nav.icons === "EnvelopeOpen" && <EnvelopeOpen className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px] gradient-1-hover"/>}
                                <span>{nav.name}</span>
                                <span className={'absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full gradient-1-bar'}></span>
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="hidden lg:block">
                    <nav>
                        <Link href="/projects">Voir mes projets</Link>
                    </nav>
                </div>
            </div>
            

            <div className="flex flex-col lg:hidden justify-between mx-20 ">
                <div className="flex justify-between w-full h-[40px] items-center">
                    <div>
                        <span className="gradient-1">By Lam</span>
                    </div>
                    <div>
                        <button>
                            <Bars onClick={() => {setIsOpen(!isOpen)}} />
                        </button>
                    </div>
                </div>
                <div className={`flex flex-col justify-center`}>
                    {isOpen && (
                        <nav >
                            {HeaderNav.map((nav) => (
                            <Link key={nav.id} onClick={() => {setIsOpen(!isOpen)}} href={nav.href} className="flex items-center text-[14px] lg:text-[16px] hover:text-gradient-1">
                                {nav.icons === "House" && <House className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"/>}
                                {nav.icons === "Person" && <Person className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"/>}
                                {nav.icons === "Code" && <Code className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"/>}
                                {nav.icons === "Rocket" && <Rocket className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"/>}
                                {nav.icons === "EnvelopeOpen" && <EnvelopeOpen className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"/>}
                                <span>{nav.name}</span>
                            </Link>
                        ))} 
                        </nav>
                    )}
                </div>
            </div>



        </header>
    )
}