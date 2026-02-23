import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Input, Button, TextArea, Label } from "@heroui/react";
import { PaperPlane } from '@gravity-ui/icons';
import { motion, Variants } from "motion/react";



export default function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            setIsSubmitting(true);
            emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )
                .then(() => {
                    setIsSuccess(true);
                    form.current?.reset();
                    setTimeout(() => setIsSuccess(false), 5000); // Enlève le message de succès après 5s
                })
                .catch((error) => {
                    console.log('Erreur...', error.text);
                })
                .finally(() => {
                    setIsSubmitting(false);
                });
        }
    }

    // Variants d'animations
    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }
        }
    };

    const childVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section id="contact" className="w-full mt-32 px-4 lg:px-20 overflow-hidden mb-20">
            <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h2 className="text-3xl lg:text-4xl font-semibold">Me contacter</h2>
            </motion.div>

            <motion.div
                className="flex justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                {/* Carte de formulaire Glassmorphism */}
                <div className="w-full max-w-[700px] bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 lg:p-10 shadow-2xl relative">
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">

                        <motion.div variants={childVariants} className="flex flex-col md:flex-row gap-6 w-full">
                            <div className="flex flex-col gap-1 w-full">
                                <Label htmlFor="name">Nom</Label>
                                <Input
                                    id="name"
                                    name="user_name"
                                    placeholder="Entrez votre nom"
                                    type="text"
                                    required
                                    className="w-full"
                                />
                            </div>
                            <div className="flex flex-col gap-1 w-full">
                                <Label htmlFor="email">Adresse Email</Label>
                                <Input
                                    id="email"
                                    name="user_email"
                                    placeholder="Entrez votre email"
                                    type="email"
                                    required
                                    className="w-full"
                                />
                            </div>
                        </motion.div>

                        <motion.div variants={childVariants} className="w-full">
                            <div className="flex flex-col gap-1">
                                <Label htmlFor="object">Objet</Label>
                                <Input
                                    name="object"
                                    id="object"
                                    placeholder="Sujet de votre message"
                                    type="text"
                                    required
                                    className="w-full"
                                />
                            </div>
                        </motion.div>

                        <motion.div variants={childVariants} className="w-full">
                            <div className="flex flex-col gap-1">
                                <Label htmlFor="message">Votre message</Label>
                                <TextArea
                                    name="message"
                                    id="message"
                                    placeholder="Rédigez votre message ici..."
                                    required
                                    className="w-full min-h-[150px]"
                                />
                            </div>
                        </motion.div>

                        {/* Indication de succès */}
                        {isSuccess && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="w-full p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-200 text-center text-sm"
                            >
                                Votre message a été envoyé avec succès ! Je vous répondrai très vite.
                            </motion.div>
                        )}

                        <motion.div variants={childVariants} className="flex py-2">
                            <Button
                                type="submit"
                                isDisabled={isSubmitting || isSuccess}
                                className={`w-full lg:w-auto px-8 py-6 font-semibold tracking-wide rounded-full text-base transition-all duration-300 ${isSuccess ? 'bg-green-600 text-white opacity-100' : 'bg-white text-black hover:scale-105'
                                    } ${(isSubmitting && !isSuccess) ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {!isSubmitting && !isSuccess && <PaperPlane className="mr-2 w-5 h-5" />}
                                {isSubmitting ? "Envoi en cours..." : isSuccess ? "Envoyé !" : "Envoyer le message"}
                            </Button>
                        </motion.div>

                    </form>
                </div>
            </motion.div>
        </section>
    )
}