import React from "react";
import { ServiceHeader } from "./ServiceHeader";
import { ServiceNeedHelp } from "./ServiceNeedHelp";
import { ServiceOverview } from "./ServiceOverview";
import { ServicesCompanies } from "./ServicesCompanies";
import { ServicesContainer } from "./ServicesContainer";

export const Service = () => {
    return (
        <div>
            <ServiceHeader />
            <ServicesContainer />
            <ServiceOverview />
            <ServicesCompanies />
            <ServiceNeedHelp />
        </div>
    );
};
