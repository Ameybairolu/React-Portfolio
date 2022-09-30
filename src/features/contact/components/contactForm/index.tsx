import "./contactForm.css";

import { FormEvent, ReactElement, useRef } from "react";

import emailjs from "emailjs-com";

const ContactForm = (): ReactElement<any, any> => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent): void => {
        e.preventDefault();

        emailjs.sendForm("service_86rl6bh", "template_73ydxpq", form.current as HTMLFormElement, "06iO5cFx9fnJpeteB");

        (e.target as HTMLFormElement).reset();
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows={7} placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary">
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;
