import "./header.css";

import { ReactElement } from "react";

import CTA from "../components/cta";
import HeaderSocials from "../components/headerSocials";

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

import CV from "assets/cv.pdf";
import ME from "assets/me.png";

const Header = (): ReactElement<any, any> => {
    const socialsDetailsObjects = [
        { icon: BsLinkedin, link: "https://linkedin.com", openInNewTab: true },
        { icon: FaGithub, link: "https://github.com", openInNewTab: true },
        { icon: FiDribbble, link: "https://dribbble.com", openInNewTab: true }
    ];

    return (
        <header>
            <div className="container header__container">
                <h5>Hello I&apos;m</h5>
                <h1>Amey Bairolu</h1>
                <h5 className="text-light">Front-end Developer</h5>
                <CTA pdfDownload={CV} />
                <HeaderSocials socialsDetailsObjects={socialsDetailsObjects} />
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
            </div>
        </header>
    );
};

export default Header;
