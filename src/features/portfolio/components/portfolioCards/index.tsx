import "./portfolioCards.css";

import { ReactElement } from "react";

interface PortfolioCardsProps {
    portfolioData: Array<{
        id: number;
        image: string;
        title: string;
        github: string;
        demo: string;
    }>;
}

const PortfolioCards: React.FC<PortfolioCardsProps> = ({ portfolioData }): ReactElement<any, any> => {
    return (
        <>
            {portfolioData.map(({ id, image, title, github, demo }) => {
                return (
                    <article key={id} className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={image} alt="" />
                        </div>
                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                            <a href={github} className="btn" target="_blank" rel="noreferrer">
                                Github
                            </a>
                            <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                                Live Demo
                            </a>
                        </div>
                    </article>
                );
            })}
        </>
    );
};

export default PortfolioCards;
