import Link from "next/link";
import {House, Person, Code, Rocket, EnvelopeOpen, } from '@gravity-ui/icons';

export default function Header() {

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
            href: "#hero",
            name: "Home"
        },
        {
            id: 2,
            icons: "Person",
            href: "#about",
            name: "About"
        },
        {
            id: 3,
            icons: "Code",
            href: "#skills",
            name: "Compétences"
        },
        {
            id: 4,
            icons: "Rocket",
            href: "#projects",
            name: "Projets"
        },
        {
            id: 5,
            icons: "EnvelopeOpen",
            href: "#contact",
            name: "Contact"
        },
    ]

    return(
        <header className="flex justify-center top-999">
            <div className="">
                <nav className="flex justify-center w-[600px] gap-10">
                    {HeaderNav.map((nav) => (
                        <Link key={nav.id} href={nav.href} scroll={false} className="flex items-center text-[14px] lg:text-[16px] hover:text-gradient-1">
                            {nav.icons === "House" && <House className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"/>}
                            {nav.icons === "Person" && <Person className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"/>}
                            {nav.icons === "Code" && <Code className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"/>}
                            {nav.icons === "Rocket" && <Rocket className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"/>}
                            {nav.icons === "EnvelopeOpen" && <EnvelopeOpen className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"/>}
                            <span>{nav.name}</span>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}