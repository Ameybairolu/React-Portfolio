import "./experience.css";

import { ReactElement } from "react";

import ExperienceDetails from "../components/experienceDetails";

import SectionTitle from "commonComponents/sectionTitle";

const ExperienceContainer = (): ReactElement<any, any> => {
    const titleDetails = { minorTitle: "The Skills I Have", majorTitle: "My Experience" };

    const primaryExperienceDetails = {
        title: "Frontend Web Development",
        experienceDetails: [
            { title: "ReactJS", level: "Experienced" },
            { title: "React Router DOM", level: "Experienced" },
            { title: "Redux", level: "Experienced" },
            { title: "HTML5", level: "Experienced" },
            { title: "CSS3", level: "Intermediate" },
            { title: "Bootstrap", level: "Intermediate" },
            { title: "MUI", level: "Experienced" },
            { title: "Tailwind", level: "Beginner" }
        ]
    };

    const secondaryExperienceDetails = {
        title: "Programming Languages & UI/UX Desiging",
        experienceDetails: [
            { title: "JavaScript", level: "Experienced" },
            { title: "TypeScript", level: "Experienced" },
            { title: "DSA in Java", level: "Experienced" },
            { title: "Python", level: "Intermediate" },
            { title: "C", level: "Intermediate" },
            { title: "Figma", level: "Intermediate" }
        ]
    };

    return (
        <section id="experience">
            <SectionTitle {...titleDetails} />
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>{primaryExperienceDetails.title}</h3>
                    <ExperienceDetails experienceDetails={primaryExperienceDetails.experienceDetails} />
                </div>
                <div className="experience__backend">
                    <h3>{secondaryExperienceDetails.title}</h3>
                    <ExperienceDetails experienceDetails={secondaryExperienceDetails.experienceDetails} />
                </div>
            </div>
        </section>
    );
};

export default ExperienceContainer;
