import React from "react";
import { ServiceHeader } from "./ServiceHeader";
import { ServiceOverview } from "./ServiceOverview";
import { ServicesContainer } from "./ServicesContainer";

export const Service = () => {
    return (
        <div className="px-[16px] pb-[200px] max-w-[1500px] mx-auto">
            <ServiceHeader />
            <ServicesContainer />
            <ServiceOverview />
        </div>
    );
};
