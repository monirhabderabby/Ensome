import React from "react";
import rightArror from "../../../Assets/icons/icon_arrow_right.png";
import leftArror from "../../../Assets/icons/icon_arrow__left.png";
export const Testmonials = () => {
    return (
        <div className="h-auto py-[100px] w-full max-w-[1200px] mx-auto">
            <div className="w-full flex justify-between items-center">
                <h1 className="text-[46px] text-black font-extrabold font-manrope text-left w-[430px]">Trusted by the best in the business</h1>
                <div className="flex items-center gap-x-[16px]">
                    <button className="w-[110px] h-[60px] bg-Tertiary rounded-[20px] flex justify-center items-center">
                        <img src={leftArror} alt="left" />
                    </button>
                    <button className="w-[110px] h-[60px] bg-Tertiary rounded-[20px] flex justify-center items-center">
                        <img src={rightArror} alt="right" />
                    </button>
                </div>
            </div>
        </div>
    );
};
