import React from "react";
import iconRight from "../../../Assets/icons/icon_arrow_right.png";

export const BlogCard = ({ blog }) => {
    const { title, description, img, time, link } = blog || {};
    return (
        <div className="w-full  md:w-[540px] h-auto shadow-card3 rounded-[6px]">
            <img src={img} className="w-full h-[230px] md:h-[300px] rounded-tl-[6px] rounded-tr-[6px]" alt="img" />
            <div className="px-[35px] flex flex-col gap-y-[12px] md:gap-y-[17px] items-start pt-[30px] pb-[33px]">
                <p className="text-[14px] text-gray font-open-sans font-normal">{time}</p>
                <h3 className="text-black text-[22px] font-manrope font-bold">{title}</h3>
                <p className="text-[16px] font-normal text-gray hidden md:block">{description}</p>
                <a
                    className="mt-[20px] text-primary text-[14px] font-manrope font-semibold flex items-center group"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className="group-hover:mr-2 duration-300">Read more</span>
                    <img src={iconRight} alt="iconREight" />
                </a>
            </div>
        </div>
    );
};
