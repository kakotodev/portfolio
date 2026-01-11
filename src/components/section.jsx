import About from "./about";
import Skills from "./skills";
import Projetcs from "./projects";
import Contact from "./contact";

function Section() {

    return (
        <>
            <main className="my-10">
                <About />
                <Skills />
                <Projetcs />
                <Contact />
            </main>
        </>
    )
}

export default Section;