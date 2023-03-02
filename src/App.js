import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Pages/Home/Home";
import { Service } from "./Components/Pages/Service/Service";
import Navbar from "./Components/Shared/Navbar/Navbar";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/service" element={<Service />} />
            </Routes>
        </div>
    );
}

export default App;
