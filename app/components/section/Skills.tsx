import { listSkills } from "@/app/data/skills"
import SkillCard from "../card/SkillCard"


export default function Skills() {

    
    return(
        <>
            <section>
                <div>
                    <h2>Mes Compétences</h2>
                </div>
                <div> 
                    <SkillCard />
                </div>
            </section>
        </>
    )
}