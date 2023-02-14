import React from "react";

export const FeatureCard = ({ feature }) => {
    const { title, icon, description } = feature || {};
    return (
        <div className="max-w-[350px] px-[32px] lg:px-[46px] py-[35px] bg-white shadow-card2 rounded-[6px] flex flex-col items-start gap-y-[16px]">
            <img src={icon} alt="icon" />
            <h3 className="text-[22px] font-manrope text-black tracking-[-0.015em] font-bold mt-[32px]">{title}</h3>
            <p className="font-normal font-open-sans text-[16px] tracking-[-1.5%] text-gray">{description}</p>
        </div>
    );
};
