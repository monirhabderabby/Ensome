import React from "react";
import { ShortLinks } from "./ShortLinks";

export const CustomHeader = ({ page, title, des }) => {
    return (
        <div className="max-w-[1500px] mx-auto px-[16px]">
            <ShortLinks page={page} />
            <div className=" mt-[40px] md:mt-[56px] w-full flex flex-col justify-center items-center font-manrope tracking-[-1.5%] gap-y-[15px]">
                <h4 className="text-primary text-[16px] font-bold ">{page}</h4>
                <h2 className="text-[30px] md:text-[46px] font-extrabold text-black text-center">{title}</h2>
                <p className="max-w-[700px] text-center text-[14px] md:text-[20px] font-normal text-gray">{des}</p>
            </div>
        </div>
    );
};
