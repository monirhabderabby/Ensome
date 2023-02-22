// Configuration
import React from "react";
import { NewsLetter } from "../../Shared/Components/NewsLetter";
import { Footer } from "../../Shared/Footer/Footer";

// Third party packages

// Components
import Navbar from "../../Shared/Navbar/Navbar";
import { Banner } from "./Banner";
import { CompanyOverView } from "./CompanyOverView";
import { GetTouch } from "./GetTouch";
import { GladToHelp } from "./GladToHelp";
import { NewestBusinessPlatform } from "./NewestBusinessPlatform";
import { RadicallyData } from "./RadicallyData";
import { Testmonials } from "./Testmonials";
import { WhyChooseEnsome } from "./WhyChooseEnsome";

export const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <WhyChooseEnsome />
            <NewestBusinessPlatform />
            <RadicallyData />
            <GladToHelp />
            <Testmonials />
            <CompanyOverView />
            <GetTouch />
            <NewsLetter />
            <Footer />
        </div>
    );
};
