import "./expertiseDetails.css";

import { BsPatchCheckFill } from "react-icons/bs";

interface ExpertiseDetailsProps {
    expertiseDetails: Array<{
        title: string;
        level: string;
    }>;
}

const ExpertiseDetails: React.FC<ExpertiseDetailsProps> = ({ expertiseDetails }) => {
    return (
        <div className="expertise__content">
            {expertiseDetails.map((eachDetail, index) => (
                <article key={index} className="expertise__details">
                    <BsPatchCheckFill className="expertise__details-icon" />
                    <div>
                        <h4>{eachDetail.title}</h4>
                        <small className="text-light">{eachDetail.level}</small>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default ExpertiseDetails;
