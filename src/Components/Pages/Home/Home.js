// Configuration
import React from "react";

// Components
import Navbar from "../../Shared/Navbar/Navbar";
import { Banner } from "./Banner";
import { GladToHelp } from "./GladToHelp";
import { NewestBusinessPlatform } from "./NewestBusinessPlatform";
import { RadicallyData } from "./RadicallyData";
import { Testmonials } from "./Testmonials";
import { WhyChooseEnsome } from "./WhyChooseEnsome";

export const Home = () => {
    return (
        <div className="pb-[300px]">
            <Navbar />
            <Banner />
            <WhyChooseEnsome />
            <NewestBusinessPlatform />
            <RadicallyData />
            <GladToHelp />
            <Testmonials />
        </div>
    );
};
