// Configuration
import React from "react";

// Components
import Navbar from "../../Shared/Navbar/Navbar";
import { Banner } from "./Banner";
import { NewestBusinessPlatform } from "./NewestBusinessPlatform";
import { RadicallyData } from "./RadicallyData";
import { WhyChooseEnsome } from "./WhyChooseEnsome";

export const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <WhyChooseEnsome />
            <NewestBusinessPlatform />
            <RadicallyData />
        </div>
    );
};
