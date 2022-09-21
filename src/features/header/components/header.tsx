import "./header.css";

import { ReactElement } from "react";

import CTA from "./cta";
import ME from "assets/me.png";
import HeaderSocials from "./headerSocials";

const Header = (): ReactElement<any, any> => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I&apos;m</h5>
                <h1>Amey Bairolu</h1>
                <h5 className="text-light">Front-end Developer</h5>
                <CTA />
                <HeaderSocials />
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
