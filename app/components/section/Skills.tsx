import SkillCard from "../card/SkillCard";
import { motion } from "motion/react";


export default function Skills() {


    return (
        <section id="skills" className="w-full mt-32 overflow-hidden">
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold">Mes Compétences</h2>
                </div>
                <div className="flex justify-center px-4 lg:px-0">
                    <SkillCard />
                </div>
            </motion.div>
        </section>
    );
}