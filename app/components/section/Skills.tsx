import { listSkills } from "@/app/data/data-skills"
import SkillCard from "../card/SkillCard"


export default function Skills() {

    
    return(
        <>
            <section className="mx-5 lg:mx-0">
                <div className="text-center lg:text-left">
                    <div>
                        <h2>Mes Compétences</h2>
                    </div>
                    <div className=""> 
                        <SkillCard />
                    </div>
                </div>
            </section>
        </>
    )
}