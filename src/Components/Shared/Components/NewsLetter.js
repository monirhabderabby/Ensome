import React from "react";

export const NewsLetter = () => {
    return (
        <div className="bg-primary w-full h-[398px] lg:h-[306px] text-white">
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-center gap-[20px] lg:justify-evenly items-center h-full px-[16px]">
                <div className="flex flex-col justify-start max-w-[511px] gap-y-[12px] lg:gap-y-[24px]">
                    <h3 className="text-[26px] lg:text-[38px] font-manrope font-bold">Subscribe to our newsletter</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                </div>
                <div className="bg-[#C9DCEC] h-[54px] w-full lg:w-[445px] lg:flex flex-col lg:flex-row gap-y-[10px] rounded-[6px]">
                    <input type="text" className="bg-transparent h-[54px] lg:flex-1 px-[25px] outline-none text-black" placeholder="Your email" />
                    <button className="bg-white px-[46px] py-[11px] text-black font-manrope text-[16px] tracking-[-1.5%] rounded-tr-[6px] rounded-br-[6px] w-full lg:w-auto mt-[10px] lg:mt-0 rounded-tl-[6px] lg:rounded-tl-[0px] rounded-bl-[6px] lg:rounded-bl-[0px]">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};
