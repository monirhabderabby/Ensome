import React from "react";
import iconRight from "../../../Assets/icons/icon_arrow_right.png";

export const ServiceCard = ({ service }) => {
    const { icon, title, description } = service || {};
    return (
        <div className="flex flex-col items-start mx-auto">
            <img src={icon} alt="icon" />
            <h3 className="mt-[40px] font-manrope font-bold text-[22px]">{title}</h3>
            <p className="mt-[16px] font-open-sans text-gray text-[16px] max-w-[470px]">{description}</p>
            <button className="mt-[20px] text-primary text-[14px] font-manrope font-semibold flex items-center group">
                <span className="group-hover:mr-2 duration-300">Read more</span>
                <img src={iconRight} alt="iconREight" />
            </button>
        </div>
    );
};
