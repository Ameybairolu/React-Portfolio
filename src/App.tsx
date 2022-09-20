import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "features/banner/components/banner";
import NavigationBarContainer from "features/navigationBar/containers";

const App: React.FC = () => {
    return (
        <div className="App">
            <NavigationBarContainer />
            <Banner />
        </div>
    );
};

export default App;
