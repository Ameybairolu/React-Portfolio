import "./about.css";

import { ReactElement } from "react";
import { IconType } from "react-icons";

interface AboutProps {
    myPicture: string;
    cardDetailsObjects: Array<{ title: string; description: string; icon: IconType }>;
    aboutDescription: string;
}

const About: React.FC<AboutProps> = ({ myPicture, cardDetailsObjects, aboutDescription }): ReactElement<any, any> => {
    return (
        <>
            <div className="about__me">
                <div className="about__me-image">
                    <img src={myPicture} alt="About Image" />
                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                    {cardDetailsObjects.map((eachCardDetailsObject) => (
                        <article key={eachCardDetailsObject.title} className="about__card">
                            <eachCardDetailsObject.icon className="about__icon" />
                            <h5>{eachCardDetailsObject.title}</h5>
                            <small>{eachCardDetailsObject.description}</small>
                        </article>
                    ))}
                </div>
                <p>{aboutDescription}</p>

                <a href="#contact" className="btn btn-primary">
                    Let&apos;s Talk
                </a>
            </div>
        </>
    );
};

export default About;
