import "./contactOptions.css";

import { ReactElement } from "react";

import { IconType } from "react-icons";

interface ContactOptionsProps {
    optionsDetailsObjects: Array<{
        icon: IconType;
        title: string;
        description: string;
        link: string;
        linkMessage: string;
        openInNewTab?: boolean;
    }>;
}

const ContactOptions: React.FC<ContactOptionsProps> = ({ optionsDetailsObjects }): ReactElement<any, any> => {
    return (
        <>
            <div className="contact__options">
                {optionsDetailsObjects.map((eachOptionDetail, index) => (
                    <article key={index} className="contact__option">
                        <eachOptionDetail.icon className="contact__option-icon" />
                        <h4>{eachOptionDetail.title}</h4>
                        <h5>{eachOptionDetail.description}</h5>
                        <a
                            href={eachOptionDetail.link}
                            {...(eachOptionDetail.openInNewTab !== undefined && eachOptionDetail.openInNewTab
                                ? { target: "_blank", rel: "noreferrer" }
                                : {})}
                        >
                            {eachOptionDetail.linkMessage}
                        </a>
                    </article>
                ))}
            </div>
        </>
    );
};

export default ContactOptions;
