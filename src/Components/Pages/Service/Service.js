import React from "react";
import { ServiceHeader } from "./ServiceHeader";
import { ServicesContainer } from "./ServicesContainer";

export const Service = () => {
    return (
        <div className="px-[16px]">
            <ServiceHeader />
            <ServicesContainer />
        </div>
    );
};
