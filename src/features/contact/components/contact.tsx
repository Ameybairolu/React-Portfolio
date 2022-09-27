import "./contact.css";

import { FormEvent, ReactElement, useRef } from "react";
import emailjs from "emailjs-com";

import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Contact = (): ReactElement<any, any> => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent): void => {
        e.preventDefault();

        emailjs.sendForm("service_86rl6bh", "template_73ydxpq", form.current as HTMLFormElement, "06iO5cFx9fnJpeteB");

        (e.target as HTMLFormElement).reset();
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>ameybairolu@gmail.com</h5>
                        <a href="mailto:ameybairolu@gmail.com" target="_blank" rel="noreferrer">
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <FaLinkedin className="contact__option-icon" />
                        <h4>LinkedIn</h4>
                        <h5>ameybairolu</h5>
                        <a href="https://www.linkedin.com/in/ameybairolu/" target="_blank" rel="noreferrer">
                            Connect with me
                        </a>
                    </article>
                    <article className="contact__option">
                        <SiUpwork className="contact__option-icon" />
                        <h4>Upwork</h4>
                        <h5>Amey B.</h5>
                        <a
                            href="https://www.upwork.com/freelancers/~01ff4148a3760c823f"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Reach me out
                        </a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows={7} placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
