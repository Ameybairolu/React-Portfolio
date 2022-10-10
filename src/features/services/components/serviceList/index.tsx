import "./serviceList.css";

import { BiCheck } from "react-icons/bi";

interface ServiceListProps {
    serviceTitle: string;
    services: string[];
}

const ServiceList: React.FC<ServiceListProps> = ({ serviceTitle, services }) => {
    return (
        <article className="service">
            <div className="service__head">
                <h3>{serviceTitle}</h3>
            </div>
            <ul className="service__list">
                {services.map((service, index) => {
                    return (
                        <li key={index}>
                            <BiCheck className="service__list-icon" />
                            <p>{service}</p>
                        </li>
                    );
                })}
            </ul>
        </article>
    );
};

export default ServiceList;
