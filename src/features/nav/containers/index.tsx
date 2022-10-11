import "./nav.css";

import { ReactElement } from "react";
import NavOptions from "../components/navOptions";

import { AiOutlineHome, AiOutlineUser, AiFillProject, AiFillContacts } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { BsListStars } from "react-icons/bs";

const NavContainer = (): ReactElement<any, any> => {
    const navOptionsData = [
        { link: "#", icon: AiOutlineHome },
        { link: "#about", icon: AiOutlineUser },
        { link: "#experience", icon: BsListStars },
        { link: "#expertise", icon: GiSkills },
        { link: "#portfolio", icon: AiFillProject },
        { link: "#contact", icon: AiFillContacts }
    ];

    return (
        <nav>
            <NavOptions data={navOptionsData} />
        </nav>
    );
};

export default NavContainer;
