import { listSkills } from "@/app/data/data-skills"
import SkillCard from "../card/SkillCard"


export default function Skills() {

    
    return(
        <>
            <section>
                <div className="text-center lg:text-left">
                    <div>
                        <h2>Mes Compétences</h2>
                    </div>
                    <div className="border"> 
                        <SkillCard />
                    </div>
                </div>
            </section>
        </>
    )
}