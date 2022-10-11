import "./experience.css";

import { ReactElement } from "react";
import SectionWithSlider from "../components/sectionWithSlider";

import AVTR1 from "assets/syookLogo.png";
import AVTR2 from "assets/cnLogo.jpg";
import AVTR3 from "assets/indeeconLogo.png";

const Experience = (): ReactElement<any, any> => {
    const data = [
        {
            avatar: AVTR1,
            title: "Sparkyo Technology Private Limited | Associate Software Enginner",
            text: "Worked as a front-end developer to implement new features to the company's product using ReactJS, Redux, and React Router DOM, primarily. Developed reusable components and documented the progress."
        },
        {
            avatar: AVTR2,
            title: "Coding Ninjas | Teaching Assistant",
            text: "Assisted students of Java Data Structures and Algorithm course with doubts related to the curriculum & provided mentorship to the students."
        },
        {
            avatar: AVTR3,
            title: "Indeecon Equipments & Instrument Company | Embedded Systems Intern",
            text: "Worked on an IoT Based Bridge Health Monitor to measure various aspects of a bridge that help determine its health."
        }
    ];

    return (
        <section id="experience">
            <h5>Roles I have held</h5>
            <h2>Experience</h2>
            <SectionWithSlider data={data} />
        </section>
    );
};

export default Experience;
