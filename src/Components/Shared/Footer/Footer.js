import React from "react";
import FooterBottom from "./FooterBottom";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

export const Footer = ({ bgColor }) => {
    return (
        <div
            className={`${bgColor?.includes("secondary") ? "text-white" : "text-black"} ${
                bgColor?.includes("secondary") ? "bg-Secondary" : "bg-background_gray"
            }`}
        >
            <div className="max-w-[1400px] mx-auto">
                <div className="w-[90%] mx-auto grid lg:grid-cols-2 grid-cols-1 lg:gap-28 md:gap-16 gap-10 lg:py-32 py-14 ">
                    <div>
                        <FooterLeft bgColor="secondary" />
                    </div>
                    <div className="whitespace-nowrap">
                        <FooterRight bgColor={bgColor} />
                    </div>
                </div>
                <div className="border-t-[1px] border-[#607D94] backdrop-blur-[0.2px]"></div>
                <div className="w-[90%] mx-auto">
                    <FooterBottom />
                </div>
            </div>
        </div>
    );
};
