import "./about.css";

import { ReactElement } from "react";
import AboutCards from "../components/aboutCards";
import AboutImage from "../components/aboutImage";

import SectionTitle from "commonComponents/sectionTitle";
import StyledAnchor from "commonComponents/styledAnchor";

import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import ME from "assets/me-about.jpg";

const About = (): ReactElement<any, any> => {
    const titleDetails = { minorTitle: "Get To Know", majorTitle: "About Me" };

    const cardDetailsObjects = [
        { title: "Experience", description: "1+ Years Working", icon: FaAward },
        { title: "Projects", description: "20+ Completed", icon: VscFolderLibrary }
    ];

    // { title: "Clients", description: "5+ Worldwide", icon: FiUsers },

    const aboutDescription =
        "I am an Electronics & Telecommunication engineer, exploring as many creative fields as possible. I like to make things look visually appealing and am constantly involved in heavy thinking. Hence, I started with my creative world's odyssey with Front-end Web Development. I primarily use ReactJS, React Router, Redux, CSS, and TypeScripts for my front-end projects. And am parallelly learning UI/UX and Graphic designing to make my web pages look aesthetic.";

    return (
        <section id="about">
            <SectionTitle {...titleDetails} />
            <div className="container about__container">
                <AboutImage myPicture={ME} />
                <div className="about__content">
                    <AboutCards cardDetailsObjects={cardDetailsObjects} />
                    <p>{aboutDescription}</p>
                    <StyledAnchor link="#contact" content="Let's Talk" />
                </div>
            </div>
        </section>
    );
};

export default About;
