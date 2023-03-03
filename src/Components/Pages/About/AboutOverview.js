import React from "react";
import img10 from "../../../Assets/HomePageImages/img_10.png";

export const AboutOverview = () => {
    return (
        <div className="bg-Background mt-[30px]">
            <img src={img10} className="h-[210px] md:h-[590px]" alt="img10" />
            <div className="pt-[50px] md:pt-[120px] px-[16px] max-w-[1500px] mx-auto pb-[50px]">
                <h1 className="text-[38px] font-manrope font-extrabold tracking-[-1.5%] text-black text-center">
                    We provide services that guarantee your success
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[31px] mt-[50px]">
                    <div className="flex">
                        <div className="w-full flex justify-center md:justify-end">
                            <div className="flex flex-col  items-center md:items-start">
                                <h1 className="text-primary font-extrabold text-[30px] md:text-[50px] font-open-sans tracking-[-2.5%]">1830+</h1>
                                <span className="text-[16px] font-normal font-open-sans tracking-[-1.5%] text-gray">Project executed</span>
                            </div>
                        </div>
                        <div className="w-full flex justify-center md:justify-end">
                            <div className="flex flex-col  items-center md:items-start">
                                <h1 className="text-primary font-extrabold text-[30px] md:text-[50px] font-open-sans tracking-[-2.5%]">834+</h1>
                                <span className="text-[16px] font-normal font-open-sans tracking-[-1.5%] text-gray text-center md:text-left">
                                    Satisfied customers
                                </span>
                            </div>
                        </div>
                        <div className="w-full flex justify-center md:justify-end">
                            <div className="flex flex-col  items-center md:items-start">
                                <h1 className="text-primary font-extrabold text-[30px] md:text-[50px] font-open-sans tracking-[-2.5%]">390+</h1>
                                <span className="text-[16px] font-normal font-open-sans tracking-[-1.5%] text-gray text-center md:text-left">
                                    Data management
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[540px] mt-[22px] md:mt-0">
                        <p className=" text-[14px] md:text-[20px] font-open-sans text-gray font-normal text-center md:text-left">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium, totam rem aperiam, eaque
                            ipsa quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam finibus nec.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
