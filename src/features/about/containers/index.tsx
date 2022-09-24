import { ReactElement } from "react";
import About from "../components/about";

import ME from "assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const AboutContainer = (): ReactElement<any, any> => {
    const cardDetailsObjects = [
        { title: "Experience", description: "3+ Years Working", icon: FaAward },
        { title: "Clients", description: "200+ Worldwide", icon: FiUsers },
        { title: "Projects", description: "80+ Completed", icon: VscFolderLibrary }
    ];

    const aboutDescription =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo autem iste minima vero eius nam dignissimos ab harum natus eveniet rem mollitia ut asperiores at, doloremque, optio voluptate repellendus corporis.";
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <About cardDetailsObjects={cardDetailsObjects} aboutDescription={aboutDescription} myPicture={ME} />
            </div>
        </section>
    );
};

export default AboutContainer;
