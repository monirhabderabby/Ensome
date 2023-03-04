import React from "react";
import useDocumentTitle from "../../../util/useDocumentTitle";
import { Footer } from "../../Shared/Footer/Footer";
import { ServiceHeader } from "./ServiceHeader";
import { ServiceNeedHelp } from "./ServiceNeedHelp";
import { ServiceOverview } from "./ServiceOverview";
import { ServicesCompanies } from "./ServicesCompanies";
import { ServicesContainer } from "./ServicesContainer";

export const Service = () => {
    // Document Title
    useDocumentTitle("Service");

    return (
        <div>
            <ServiceHeader />
            <ServicesContainer />
            <ServiceOverview />
            <ServicesCompanies />
            <ServiceNeedHelp />
            <Footer bgColor="secondary" />
        </div>
    );
};
