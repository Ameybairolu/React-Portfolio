import "./contact.css";

import { ReactElement } from "react";

import ContactOptions from "../components/contactOptions";
import ContactForm from "../components/contactForm";

import SectionTitle from "commonComponents/sectionTitle";

import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Contact = (): ReactElement<any, any> => {
    const titleDetails = { minorTitle: "Get In Touch", majorTitle: "Contact Me" };

    const optionsDetailsObjects = [
        {
            icon: MdOutlineEmail,
            title: "Email",
            description: "ameybairolu@gmail.com",
            link: "mailto:ameybairolu@gmail.com",
            linkMessage: "Send a message",
            openInNewTab: true
        },
        {
            icon: FaLinkedin,
            title: "LinkedIn",
            description: "ameybairolu",
            link: "https://www.linkedin.com/in/ameybairolu/",
            linkMessage: "Connect with me",
            openInNewTab: true
        },
        {
            icon: SiUpwork,
            title: "Upwork",
            description: "Amey B.",
            link: "https://www.upwork.com/freelancers/~01ff4148a3760c823f",
            linkMessage: "Hire me",
            openInNewTab: true
        }
    ];

    return (
        <section id="contact">
            <SectionTitle {...titleDetails} />
            <div className="container contact__container">
                <ContactOptions optionsDetailsObjects={optionsDetailsObjects} />
                <ContactForm />
            </div>
        </section>
    );
};

export default Contact;
