import "./services.css";

import { ReactElement } from "react";
import ServiceList from "../components/serviceList";

const Services = (): ReactElement<any, any> => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                <ServiceList
                    serviceTitle="UI/UX Design"
                    services={Array(5).fill("Lorem, ipsum dolor sit amet consectetur adipisicing elit.")}
                />
                <ServiceList
                    serviceTitle="Web Development"
                    services={Array(6).fill("Lorem, ipsum dolor sit amet consectetur adipisicing elit.")}
                />
                <ServiceList
                    serviceTitle="Content Creation"
                    services={Array(5).fill("Lorem, ipsum dolor sit amet consectetur adipisicing elit.")}
                />
            </div>
        </section>
    );
};

export default Services;
