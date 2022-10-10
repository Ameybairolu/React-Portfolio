import Header from "features/header/containers";
import NavContainer from "features/nav/containers";
import About from "features/about/containers";
import Experience from "features/experience/containers";
// import Services from "features/services/containers";
import PortfolioContainer from "features/portfolio/containers";
import TestimonialsContainer from "features/testimonials/containers";
import Contact from "features/contact/containers";
import Footer from "features/footer/containers";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <NavContainer />
            <About />
            <Experience />
            {/* <Services /> */}
            <PortfolioContainer />
            <TestimonialsContainer />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
