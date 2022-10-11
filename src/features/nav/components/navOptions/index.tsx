import "./navOptions.css";

import { ReactElement, useState } from "react";
import { IconType } from "react-icons";

interface NavOptionsProps {
    data: Array<{ link: string; icon: IconType }>;
}

const NavOptions: React.FC<NavOptionsProps> = ({ data }): ReactElement<any, any> => {
    const [activeNav, setActiveNav] = useState<string>("#");

    return (
        <>
            {data.map((eachOption, index) => (
                <a
                    key={index}
                    href={eachOption.link}
                    onClick={() => setActiveNav(eachOption.link)}
                    className={activeNav === eachOption.link ? "active" : ""}
                >
                    <eachOption.icon />
                </a>
            ))}
        </>
    );
};

export default NavOptions;
