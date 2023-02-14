import React from "react";

export const ProxyCard = () => {
    return (
        <div className="bg-white max-w-[350px] mx-auto px-[30px] py-[35px] rounded-[6px]">
            <h6 className="text-gray text-[14px] font-normal tracking-[-1.5%]">22 june 2020</h6>
            <div className="mt-[20px] flex flex-col gap-y-[16px]">
                <h3 className="text-[20px] font-mono font-bold tracking-[-1.5%] text-black">Sed ut perspiciatis unde omnis at </h3>
                <p className="text-gray font-normal font-open-sans tracking-[-1.5%]">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti...{" "}
                </p>
                <div className="flex gap-x-[27px]">
                    <button className="text-primary text-[14px] font-manrope tracking-[-1.5%] font-bold">Proxy</button>
                    <button className="text-primary text-[14px] font-manrope tracking-[-1.5%] font-bold">VPN</button>
                </div>
            </div>
        </div>
    );
};
