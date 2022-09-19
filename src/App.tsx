import "./App.css";
import NavigationBar from "features/navigationBar/components/navigationBar";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
    return (
        <div className="App">
            <NavigationBar />
        </div>
    );
};

export default App;
