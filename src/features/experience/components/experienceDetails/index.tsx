import "./experienceDetails.css";

import { BsPatchCheckFill } from "react-icons/bs";

interface ExperienceDetailsProps {
    experienceDetails: Array<{
        title: string;
        level: string;
    }>;
}

const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({ experienceDetails }) => {
    return (
        <div className="experience__content">
            {experienceDetails.map((eachDetail, index) => (
                <article key={index} className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                        <h4>{eachDetail.title}</h4>
                        <small className="text-light">{eachDetail.level}</small>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default ExperienceDetails;
