import { ReactElement } from "react";
import PortfolioCards from "../components/portfolioCards";

import IMG1 from "assets/portfolioImage.png";
import IMG2 from "assets/dishPollImage.png";
import IMG3 from "assets/chatAppImage.png";
import IMG4 from "assets/contactListImage.png";
import IMG5 from "assets/adminImage.png";
import IMG6 from "assets/forkifyImage.png";

const Portfolio: React.FC = (): ReactElement<any, any> => {
    const portfolioData = [
        {
            id: 1,
            image: IMG1,
            title: "Portfolio using ReactJS and TypeScript",
            github: "https://github.com/Ameybairolu/React-Portfolio",
            demo: "https://ameybairolu.github.io/React-Portfolio"
        },
        {
            id: 2,
            image: IMG2,
            title: "Dish Poll App using ReactJS, Reater Router DOM and Redux",
            github: "https://github.com/Ameybairolu/DishPoll",
            demo: "https://ameybairolu.github.io/DishPoll/"
        },
        {
            id: 3,
            image: IMG3,
            title: "Chat App UI using ReactJS, Reater Router DOM and Redux",
            github: "https://github.com/Ameybairolu/ChatApp",
            demo: "https://ameybairolu.github.io/ChatApp/"
        },
        {
            id: 4,
            image: IMG4,
            title: "Contacts App UI using ReactJS",
            github: "https://github.com/Ameybairolu/ContactList",
            demo: "https://ameybairolu.github.io/ContactList/"
        },
        {
            id: 5,
            image: IMG5,
            title: "Admin UI using ReactJS",
            github: "https://github.com/Ameybairolu/AdminUI",
            demo: "https://ameybairolu.github.io/AdminUI/"
        },
        {
            id: 6,
            image: IMG6,
            title: "Forkify Recipe App using Vanilla JS",
            github: "https://github.com/Ameybairolu/forkify",
            demo: "https://forkifybyamey.netlify.app/"
        }
    ];

    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                <PortfolioCards portfolioData={portfolioData} />
            </div>
        </section>
    );
};

export default Portfolio;
