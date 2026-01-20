import { listSkills } from "@/app/data/skills";
import { Skill } from "@/app/data/skills";
import Image from "next/image";

export default function SkillCard() {

    const skillsPerCategory = listSkills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, Skill[]>);

    return(
        <>
            {Object.entries(skillsPerCategory). map(([nameCategory, listSkills]) =>(
                <div key={nameCategory}>
                    <h2>{nameCategory}</h2>
                    <div className="flex justify-center">
                        {listSkills.map((skill) => (
                            skill.urlImg ? (
                                <div key={skill.id} className="flex justify-center">
                                    <Image src={skill.urlImg} alt="skill" width={40} height={40}/>
                                </div>
                            ) : null
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}