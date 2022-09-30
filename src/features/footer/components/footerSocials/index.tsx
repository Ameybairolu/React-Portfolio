import "./footerSocials.css";

import { ReactElement } from "react";

import { IconType } from "react-icons";

interface FooterSocialsProps {
    socialsDetails: Array<{
        link: string;
        icon: IconType;
    }>;
}

const FooterSocials: React.FC<FooterSocialsProps> = ({ socialsDetails }): ReactElement<any, any> => {
    return (
        <div className="footer__socials">
            {socialsDetails.map((eachDetail, index) => (
                <a key={index} href={eachDetail.link}>
                    <eachDetail.icon />
                </a>
            ))}
        </div>
    );
};

export default FooterSocials;
