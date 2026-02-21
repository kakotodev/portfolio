"use client";

import Link from "next/link";
import { House, Person, Code, Rocket, EnvelopeOpen, Bars } from '@gravity-ui/icons';
import { useState, ReactNode } from "react";
import { Button } from '@heroui/react';
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    interface NavItem {
        id: number;
        icon: ReactNode;
        href: string;
        name: string;
    }

    const HeaderNav: NavItem[] = [
        { id: 1, icon: <House className="w-5 h-5 lg:w-[22px] lg:h-[22px]" />, href: "/#hero", name: "Home" },
        { id: 2, icon: <Person className="w-5 h-5 lg:w-[22px] lg:h-[22px]" />, href: "/#about", name: "About" },
        { id: 3, icon: <Code className="w-5 h-5 lg:w-[22px] lg:h-[22px]" />, href: "/#skills", name: "Compétences" },
        { id: 4, icon: <Rocket className="w-5 h-5 lg:w-[22px] lg:h-[22px]" />, href: "/#projects", name: "Projets" },
        { id: 5, icon: <EnvelopeOpen className="w-5 h-5 lg:w-[22px] lg:h-[22px]" />, href: "/#contact", name: "Contact" },
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        // Gérer le scroll smooth si c'est une ancre sur la même page
        const isAnchor = targetId.startsWith('#');
        if (isAnchor) {
            const id = targetId.substring(1);
            const targetElement = document.getElementById(id);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                window.history.pushState(null, '', targetId);
                setIsOpen(false);
            }
        } else {
            setIsOpen(false);
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#0f0f11]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex justify-between items-center h-[70px] max-w-[1700px] mx-auto px-10">
                <div className="font-bold text-xl tracking-wider">
                    <Link href="/#hero" onClick={(e) => handleScroll(e, "#hero")} className="hover:opacity-80 transition-opacity">
                        <span className="gradient-1">By Lam</span>
                    </Link>
                </div>

                <nav className="flex justify-center gap-8 text-[15px] font-medium">
                    {HeaderNav.map((nav) => (
                        <Link
                            key={nav.id}
                            href={nav.href}
                            onClick={(e) => handleScroll(e, nav.href)}
                            className="relative group flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                        >
                            <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                                {nav.icon}
                            </span>
                            <span>{nav.name}</span>
                            {/* Soulignement gradient au hover */}
                            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                        </Link>
                    ))}
                </nav>

                <div>
                    <Link href="/projects">
                        <Button className="bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors rounded-full px-6 font-medium tracking-wide">
                            Voir mes projets
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex flex-col lg:hidden w-full px-5 py-4">
                <div className="flex justify-between items-center h-[30px]">
                    <div className="font-bold text-xl tracking-wider">
                        <Link href="/#hero" onClick={(e) => handleScroll(e, "#hero")}>
                            <span className="gradient-1 font-bold">By Lam</span>
                        </Link>
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 -mr-2 rounded-md hover:bg-white/10 transition-colors"
                        aria-label="Toggle navigation"
                    >
                        <Bars className="w-7 h-7 text-white" />
                    </button>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.nav
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="flex flex-col gap-4 mt-6 overflow-hidden"
                        >
                            {HeaderNav.map((nav) => (
                                <Link
                                    key={nav.id}
                                    href={nav.href}
                                    onClick={(e) => handleScroll(e, nav.href)}
                                    className="flex items-center gap-4 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 p-3 rounded-xl transition-all"
                                >
                                    <span className="text-gray-400">{nav.icon}</span>
                                    <span>{nav.name}</span>
                                </Link>
                            ))}
                            <Link href="/projects" onClick={() => setIsOpen(false)} className="mt-2 mb-4 w-full">
                                <Button className="w-full bg-white text-black font-semibold tracking-wide rounded-full py-6 text-base shadow-lg">
                                    Voir tous mes projets
                                </Button>
                            </Link>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}