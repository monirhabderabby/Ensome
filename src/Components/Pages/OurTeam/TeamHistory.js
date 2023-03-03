import React from "react";
import img from "../../../Assets/HomePageImages/img.png";

export const TeamHistory = () => {
    return (
        <div className="max-w-[1110px] mx-auto mt-[120px]">
            <img src={img} alt="banner" />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-[30px] mt-[50px] px-[16px]">
                <div className="font-normal text-[14px] md:text-[20px] text-gray font-open-sans">
                    Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit,
                    tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero.
                </div>
                <div className="font-normal text-[14px] md:text-[20px] text-gray font-open-sans mt-[12px] md:mt-0">
                    Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit,
                    tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero.
                </div>
            </div>
        </div>
    );
};
