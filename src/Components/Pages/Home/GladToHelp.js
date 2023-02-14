import React from "react";
import { ProxyCard } from "../../Shared/Cards/ProxyCard";

export const GladToHelp = () => {
    const arr = [1, 2, 3];
    return (
        <div className="w-full px-[16px] h-auto lg:h-[745px] bg-Tertiary">
            <h3 className="text-black font-manrope font-bold text-center text-[30px] lg:text-[46px] tracking-[-1.5%] pt-[40px] lg:pt-[100px]">
                Glad to help your success
            </h3>
            <div className="mt-[50px] flex flex-wrap gap-[30px] justify-center max-w-[1150px] mx-auto">
                {arr.map(item => {
                    return <ProxyCard />;
                })}
            </div>
        </div>
    );
};
