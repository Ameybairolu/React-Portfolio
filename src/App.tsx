import Header from "features/header/containers";
import NavContainer from "features/nav/containers";
import About from "features/about/containers";
import Expertise from "features/expertise/containers";
// import Services from "features/services/containers";
import Portfolio from "features/portfolio/containers";
import Experience from "features/experience/containers";
import Contact from "features/contact/containers";
import Footer from "features/footer/containers";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <NavContainer />
            <About />
            <Experience />
            <Expertise />
            {/* <Services /> */}
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
