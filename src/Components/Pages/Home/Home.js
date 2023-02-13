// Configuration
import React from "react";

// Components
import Navbar from "../../Shared/Navbar/Navbar";
import { Banner } from "./Banner";
import { WhyChooseEnsome } from "./WhyChooseEnsome";

export const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <WhyChooseEnsome />
        </div>
    );
};
