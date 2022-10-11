import "./nav.css";

import { ReactElement, useState } from "react";

import { AiOutlineHome, AiOutlineUser, AiFillProject, AiFillContacts } from "react-icons/ai";
// import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { BsListStars } from "react-icons/bs";

const Nav = (): ReactElement<any, any> => {
    const [activeNav, setActiveNav] = useState<string>("#");

    return (
        <nav>
            <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>
                <AiOutlineHome />
            </a>
            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}>
                <AiOutlineUser />
            </a>
            <a
                href="#experience"
                onClick={() => setActiveNav("#experience")}
                className={activeNav === "#experience" ? "active" : ""}
            >
                <BsListStars />
            </a>
            <a
                href="#expertise"
                onClick={() => setActiveNav("#expertise")}
                className={activeNav === "#expertise" ? "active" : ""}
            >
                <GiSkills />
            </a>
            <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={activeNav === "#portfolio" ? "active" : ""}
            >
                <AiFillProject />
            </a>
            <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? "active" : ""}
            >
                <AiFillContacts />
            </a>
        </nav>
    );
};

export default Nav;
