import React from "react";
import useDocumentTitle from "../../../util/useDocumentTitle";
import { NewsLetter } from "../../Shared/Components/NewsLetter";
import { Footer } from "../../Shared/Footer/Footer";
import { Testmonials } from "../Home/Testmonials";
import { ServiceNeedHelp } from "../Service/ServiceNeedHelp";
import { SolutionCards } from "./SolutionCards";
import { SolutionHeader } from "./SolutionHeader";
import { SolutionWhyChooseUs } from "./SolutionWhyChooseUs";

export const Solution = () => {
    // Document Title
    useDocumentTitle("Solution");

    return (
        <div>
            <SolutionHeader />
            <SolutionCards />
            <SolutionWhyChooseUs />
            <Testmonials />
            <div className="mt-[50px] md:mt-[120px]">
                <ServiceNeedHelp />
            </div>
            <NewsLetter />
            <Footer />
        </div>
    );
};
