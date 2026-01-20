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
            <section>
                <div>
                    <h2>Me contacter</h2>
                </div>
                <div>
                    <form ref={form} onSubmit={sendEmail} className="flex items-center">
                        <div className="form-style">
                            <label>Nom</label>
                            <input type="text" name="user_name" required/>
                        </div>
                        <div className="form-style">
                            <label>Email</label>
                            <input type="email" name="user_email" required/>
                        </div>
                        <div className="form-style">
                            <label>Objet</label>
                            <input type="text" name="object" required/>
                        </div>
                        <div className="form-style">
                            <label>Message</label>
                            <textarea name="message" required/>
                        </div>
                        <div className="form-style">
                            <input type="submit" value="Envoyer"/>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}