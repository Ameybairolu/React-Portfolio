import "./aboutCards.css";

import { ReactElement } from "react";
import { IconType } from "react-icons";

interface AboutCardsProps {
    cardDetailsObjects: Array<{ title: string; description: string; icon: IconType }>;
}

const AboutCards: React.FC<AboutCardsProps> = ({ cardDetailsObjects }): ReactElement<any, any> => {
    return (
        <div className="about__cards">
            {cardDetailsObjects.map((eachCardDetailsObject) => (
                <article key={eachCardDetailsObject.title} className="about__card">
                    <eachCardDetailsObject.icon className="about__icon" />
                    <h5>{eachCardDetailsObject.title}</h5>
                    <small>{eachCardDetailsObject.description}</small>
                </article>
            ))}
        </div>
    );
};

export default AboutCards;
