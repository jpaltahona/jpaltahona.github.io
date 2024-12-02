import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Project from "@/components/sections/project";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Project />
            <Contact />
        </>
    );
}
