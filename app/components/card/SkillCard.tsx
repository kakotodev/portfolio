import { listSkills } from "@/app/data/data-skills";
import { Skill } from "@/app/data/data-skills";
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
                                <div key={skill.id} className="flex relative group justify-center hover:grayscale-0 mx-2">
                                    <Image src={skill.urlImg} alt="skill" width={40} height={40}/>
                                    <span className="absolute scale-0 transition-all rounded group-hover:scale-100 -top-10 shadow-xl">
                                        {skill.name}
                                        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
                                    </span>
                                </div>
                            ) : null
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}