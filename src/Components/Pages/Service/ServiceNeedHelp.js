import React from "react";
import { PrimaryButton } from "../../Shared/buttons/PrimaryButton";

export const ServiceNeedHelp = () => {
    return (
        <div className="h-[426px] bg-Background flex flex-col justify-center items-center gap-y-[30px]">
            <h3 className="text-black text-[38px] tracking-[-1.5%] font-extrabold">Do you need help?</h3>
            <p className="text-gray font-normal font-open-sans text-[16px] tracking-[-1.5%] w-[540px] text-center">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
            </p>
            <PrimaryButton>Contact Us</PrimaryButton>
        </div>
    );
};
