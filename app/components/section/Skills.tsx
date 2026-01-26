import { listSkills } from "@/app/data/data-skills"
import SkillCard from "../card/SkillCard"


export default function Skills() {

    
    return(
        <>
            <section className="mx-5 lg:mx-0">
                <div className="text-center">
                    <div>
                        <h2>Mes Compétences</h2>
                    </div>
                    <div className="block lg:flex lg:justify-center lg:gap-10"> 
                        <SkillCard />
                    </div>
                </div>
            </section>
        </>
    )
}