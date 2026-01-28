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
                <div key={nameCategory} className="my-5">
                    <h2>{nameCategory}</h2>
                    <div className="flex justify-center border">
                        <div className="flex justify-center flex-wrap gap-5 h-64 w-[300px] h-[350px] mx-6 my-3 lg:mx-10 lg:my-8">
                            {listSkills.map((skill) => (
                                skill.urlImg ? (
                                    <div key={skill.id} className="flex relative group justify-center lg:hover:grayscale-0 z-0 mx-5 my-3 grayscale-0 lg:grayscale transition-all">
                                        <Image src={skill.urlImg} alt="skill" width={40} height={40} className="h-[40px]"/>
                                        <span className="absolute lg:scale-0 transition-all rounded lg:group-hover:scale-100 top-10 lg:-top-10 shadow-xl">
                                            {skill.name}
                                            <span className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
                                        </span>
                                    </div>
                                ) : null
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}