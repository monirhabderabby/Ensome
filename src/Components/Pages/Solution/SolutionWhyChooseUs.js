import React from "react";
import img from "../../../Assets/HomePageImages/img_0011.png";
import iconCheckMark from "../../../Assets/icons/icon_checkmark.png";

export const SolutionWhyChooseUs = () => {
    const data = [
        {
            id: 1,
            title: "Machine learning",
            des: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
        },
        {
            id: 2,
            title: "Embed analytics",
            des: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
        },
        {
            id: 3,
            title: "Access control",
            des: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
        },
    ];
    return (
        <div className="mt-[120px] w-full grid grid-cols-1 md:grid-cols-2 bg-transparent md:bg-Background mb-[50px] md:mb-[120px]">
            <img src={img} alt="img" />
            <div className="h-full px-[16px] md:px-[46px] flex flex-col justify-center">
                <h3 className="text-black font-extrabold font-manrope text-[38px] mt-[50px] md:mt-0">Why choose us?</h3>
                <div className="flex flex-col items-start gap-y-[30px] mt-[50px]">
                    {data?.map(item => {
                        return (
                            <div key={item?.id} className="flex flex-col items-start gap-y-[15px]">
                                <div className="flex items-center gap-x-[11px]">
                                    <img src={iconCheckMark} alt="icon" />
                                    <h4 className="text-black text-[16px] font-manrope font-bold">{item?.title}</h4>
                                </div>
                                <p className="text-[16px] text-gray font-open-sans font-normal max-w-[540px]">
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                                    corrupti quos dolores.
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
