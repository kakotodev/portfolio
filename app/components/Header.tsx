import Link from "next/link";

export default function Header() {
    return(
        <header className="flex justify-center">
            <nav>
                <Link href="/">Presentation</Link>
                <Link href="/projects">Mes Projets</Link>
                <Link href="/contact">Me contacter</Link>
            </nav>
        </header>
    )
}