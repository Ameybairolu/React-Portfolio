import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavigationBarContainer from "features/navigationBar/containers";
import BannerContainer from "features/banner/containers";

const App: React.FC = () => {
    return (
        <div className="App">
            <NavigationBarContainer />
            <BannerContainer />
        </div>
    );
};

export default App;
