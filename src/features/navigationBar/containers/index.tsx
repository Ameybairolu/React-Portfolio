import { ReactElement, useState } from "react";
import NavigationBar from "features/navigationBar/components/navigationBar";
import navIcon1 from "assets/img/nav-icon1.svg";
import navIcon2 from "assets/img/nav-icon2.svg";
import navIcon3 from "assets/img/nav-icon3.svg";

const NavigationBarContainer: React.FC = (): ReactElement<any, any> => {
    const [activeLink, setActiveLink] = useState<string | null>("home");

    const linkOptions: Array<{ key: string; value: string }> = [
        { key: "home", value: "Home" },
        { key: "skills", value: "Skills" },
        { key: "projects", value: "Projects" }
    ];

    const navIcons: string[] = [navIcon1, navIcon2, navIcon3];

    const onUpdateActiveLink = (section: string): void => {
        setActiveLink(section);
    };

    return (
        <NavigationBar
            linkOptions={linkOptions}
            navIcons={navIcons}
            onLinkClick={onUpdateActiveLink}
            activeLink={activeLink}
        />
    );
};
export default NavigationBarContainer;
