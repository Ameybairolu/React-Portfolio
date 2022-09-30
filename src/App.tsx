import "./App.css";

import HeaderContainer from "features/header/containers";
import NavContainer from "features/nav/containers";
import About from "features/about/containers";
import ExperienceContainer from "features/experience/containers";
import ServicesContainer from "features/services/containers";
import PortfolioContainer from "features/portfolio/containers";
import TestimonialsContainer from "features/testimonials/containers";
import Contact from "features/contact/containers";
import FooterContainer from "features/footer/containers";

const App: React.FC = () => {
    return (
        <div className="App">
            <HeaderContainer />
            <NavContainer />
            <About />
            <ExperienceContainer />
            <ServicesContainer />
            <PortfolioContainer />
            <TestimonialsContainer />
            <Contact />
            <FooterContainer />
        </div>
    );
};

export default App;
