import "./headerSocials.css";

import { ReactElement } from "react";
import { IconType } from "react-icons";

interface HeaderSocialsProps {
    socialsDetailsObjects: Array<{
        icon: IconType;
        link: string;
        openInNewTab: boolean;
    }>;
}

const HeaderSocials: React.FC<HeaderSocialsProps> = ({ socialsDetailsObjects }): ReactElement<any, any> => {
    return (
        <div className="header__socials">
            {socialsDetailsObjects.map((eachObject, index) => (
                <a
                    key={index}
                    href={eachObject.link}
                    {...(eachObject.openInNewTab !== undefined && eachObject.openInNewTab
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                >
                    <eachObject.icon />
                </a>
            ))}
        </div>
    );
};

export default HeaderSocials;
