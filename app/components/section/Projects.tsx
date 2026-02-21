import Link from "next/link";
import { Button } from "@heroui/react";
import { Rocket } from '@gravity-ui/icons';
import { motion } from "motion/react";

export default function Projects() {
    return (
        <section id="projects" className="w-full mt-32 px-4 lg:px-20 overflow-hidden">
            <motion.div
                className="relative flex flex-col items-center justify-center w-full min-h-[350px] rounded-3xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl p-10 text-center"
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Effet lumineux en arrière-plan (Glow) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-full bg-gradient-to-b from-indigo-500/20 to-transparent blur-3xl -z-10"></div>
                <div className="absolute bottom-[-100px] right-[-50px] w-64 h-64 bg-pink-500/20 rounded-full blur-3xl -z-10"></div>

                <div className="max-w-2xl z-10">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-clip-text gradient-1">
                        Découvrez Mes Projets
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-300 mb-10 font-light leading-relaxed">
                        De la conception d&apos;interfaces à la logique métier, explorez les applications web sur lesquelles j&apos;ai travaillé et les compétences que j&apos;y ai développées.
                    </p>

                    <Link href="/projects" className="inline-block">
                        <Button
                            size="lg"
                            className="bg-white text-black font-semibold tracking-wide hover:scale-105 transition-transform duration-300 px-8 py-6 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        >
                            <Rocket className="mr-2 w-5 h-5" />
                            Voir tous mes projets
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}