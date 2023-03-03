import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./Components/Pages/About/About";
import { Blog } from "./Components/Pages/Blog/Blog";
import { Contact } from "./Components/Pages/Contact/Contact";
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
                <Route path="/blog" element={<Blog />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;
