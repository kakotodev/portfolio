import About from "./components/section/About";
import Skills from './components/section/Skills';
import Projects from './components/section/Projects';
import Contact from "./components/section/Contact";
import Hero from "./components/section/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
