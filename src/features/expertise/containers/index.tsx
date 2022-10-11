import "./expertise.css";

import { ReactElement } from "react";

import ExpertiseDetails from "../components/expertiseDetails";

import SectionTitle from "commonComponents/sectionTitle";

const Expertise = (): ReactElement<any, any> => {
    const titleDetails = { minorTitle: "The Skills I Have", majorTitle: "My Expertise" };

    const primaryExpertiseDetails = {
        title: "Frontend Web Development",
        expertiseDetails: [
            { title: "ReactJS", level: "Experienced" },
            { title: "React Router DOM", level: "Experienced" },
            { title: "Redux", level: "Experienced" },
            { title: "HTML5", level: "Experienced" },
            { title: "CSS3", level: "Intermediate" },
            { title: "Bootstrap", level: "Intermediate" },
            { title: "MUI", level: "Experienced" },
            { title: "Tailwind", level: "Intermediate" }
        ]
    };

    const secondaryExpertiseDetails = {
        title: "Programming Languages & UI/UX Desiging",
        expertiseDetails: [
            { title: "JavaScript", level: "Experienced" },
            { title: "TypeScript", level: "Experienced" },
            { title: "DSA in Java", level: "Experienced" },
            { title: "Python", level: "Intermediate" },
            { title: "C", level: "Intermediate" },
            { title: "Figma", level: "Intermediate" }
        ]
    };

    return (
        <section id="expertise">
            <SectionTitle {...titleDetails} />
            <div className="container expertise__container">
                <div className="expertise__frontend">
                    <h3>{primaryExpertiseDetails.title}</h3>
                    <ExpertiseDetails expertiseDetails={primaryExpertiseDetails.expertiseDetails} />
                </div>
                <div className="expertise__backend">
                    <h3>{secondaryExpertiseDetails.title}</h3>
                    <ExpertiseDetails expertiseDetails={secondaryExpertiseDetails.expertiseDetails} />
                </div>
            </div>
        </section>
    );
};

export default Expertise;
