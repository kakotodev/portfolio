'use client';
import { useRef } from "react";
import emailjs from '@emailjs/browser';



export default function Contact() {
    const form = useRef<HTMLFormElement>(null);
    console.log("Ma clé est :", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )
            .then(() => {
                alert('Message envoyé avec succès !');
                form.current?.reset();
            }, (error) => {
                console.log('Erreur...', error.text);
            });
        }
    }
    return(
        <>
            <section id="contact">
                <div>
                    <h2>Me contacter</h2>
                </div>
                <div className="flex justify-center align-center">
                    <div className="block w-[600px] h-[500px] border">
                        <form ref={form} onSubmit={sendEmail} className="block m-5">
                            <div className="flex justify-between w-[500px] mb-10">
                                <div className="form-style">
                                    <label>Nom</label>
                                    <input type="text" name="user_name" required/>
                                </div>
                                <div className="form-style">
                                    <label>Email</label>
                                    <input type="email" name="user_email" required/>
                                </div>
                            </div>
                            <div className="w-[500px] mb-20">
                                <div className="form-style">
                                    <label>Objet</label>
                                    <input type="text" name="object" required/>
                                </div>
                            </div>
                            <div className="w-[500px]">
                                <div className="form-style">
                                    <label>Message</label>
                                    <textarea name="message" required/>
                                </div>                                
                            </div>
                            <div className="flex justify-end">
                                <div className="form-style w-[80px]">
                                    <input type="submit" value="Envoyer"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}