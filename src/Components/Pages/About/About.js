import React from "react";
import { Footer } from "../../Shared/Footer/Footer";
import { Testmonials } from "../Home/Testmonials";
import { ServiceNeedHelp } from "../Service/ServiceNeedHelp";
import { ServicesCompanies } from "../Service/ServicesCompanies";
import { AboutHeader } from "./AboutHeader";
import { AboutOverview } from "./AboutOverview";
import { WhyPeopleCooseEnsome } from "./WhyPeopleCooseEnsome";

export const About = () => {
    return (
        <div>
            <AboutHeader />
            <AboutOverview />
            <WhyPeopleCooseEnsome />
            <Testmonials />
            <ServicesCompanies />
            <ServiceNeedHelp />
            <Footer bgColor="secondary" />
        </div>
    );
};
