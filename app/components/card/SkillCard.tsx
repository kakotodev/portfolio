import { listSkills } from "@/app/data/skills";
import { Skill } from "@/app/data/skills";

export default function SkillCard() {

    const skillsPerCategory = listSkills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, typeof Skill[]>);

    return(
        <>
            <div className="flex justify-center">

            </div>
        </>
    )
}