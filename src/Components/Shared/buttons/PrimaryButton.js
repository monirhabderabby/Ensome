import React from "react";

export const PrimaryButton = ({ children }) => {
    return (
        <button className="bg-[#185CFF] text-[#FFFFFF] text-[15px] tracking-[-0.01em] rounded-[6px] w-full md:w-[190px] h-[54px] flex justify-center items-center">
            {children}
        </button>
    );
};
