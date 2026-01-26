'use client';
import { useRef } from "react";

import emailjs from '@emailjs/browser';

import {Input, Label, TextField, TextArea} from "@heroui/react";



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
                    <div className="w-full max-w-[600px] h-auto border mx-auto">
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-5">
                            <div className="flex flex-col md:flex-row gap-4 w-full">
                                <div className="flex flex-col gap-1 w-full">
                                    <Label htmlFor="name">Name</Label>
                                    <Input fullWidth id="name" placeholder="Enter your name" type="text" name="user_name" required className="w-full"/>
                                </div>
                                
                                <TextField className="w-full" name="user_email" type="email">
                                    <Label>Email</Label>
                                    <Input placeholder="Enter your email" required className="w-full"/>
                                </TextField>
                            </div>
                            <div className="w-full">
                                <div className="flex flex-col gap-1">
                                    <Label htmlFor="object">Objet</Label>
                                    <Input fullWidth name="object" id="object" placeholder="Rentrer votre objet" type="text" required className="w-full"/>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="message">Message</label>
                                    <TextArea className="w-full min-h-[150px]" name="message" id="message" placeholder="Rentrer votre message" required/>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="form-style w-full md:w-[80px]">
                                    <input type="submit" value="Envoyer" className="w-full cursor-pointer"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}