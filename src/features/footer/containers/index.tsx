import "./footer.css";

import { ReactElement } from "react";

import FooterPermalinks from "../components/footerPermalinks";
import FooterSocials from "../components/footerSocials";

import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import FooterCopyright from "../components/footerCopyright";

const Footer = (): ReactElement<any, any> => {
    const permalinksDetails = [
        { link: "#", linkText: "Home" },
        { link: "#about", linkText: "About" },
        { link: "#experience", linkText: "Experience" },
        { link: "#services", linkText: "Services" },
        { link: "#portfolio", linkText: "Portfolio" },
        { link: "#testimonials", linkText: "Testimonials" },
        { link: "#contact", linkText: "Contact" }
    ];

    const socialsDetails = [
        { link: "https://facebook.com", icon: FaFacebookF },
        { link: "https://instagram.com", icon: FiInstagram },
        { link: "https://twitter.com", icon: IoLogoTwitter }
    ];

    const brandName = "Amey Bairolu";

    return (
        <footer>
            <FooterPermalinks permalinksDetails={permalinksDetails} />
            <FooterSocials socialsDetails={socialsDetails} />
            <FooterCopyright brandName={brandName} />
        </footer>
    );
};

export default Footer;
