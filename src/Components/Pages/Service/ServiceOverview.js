import React from "react";

export const ServiceOverview = () => {
    return (
        <div className="mt-[140px] max-w-[1500px] mx-auto px-[16px]">
            <h3 className="text-[38px] font-manrope font-extrabold tracking-[-1.5%] text-black text-center">
                We provide services that guarantee your success
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[31px] mt-[50px]">
                <div className="flex items-center justify-end">
                    <div className="w-full flex justify-center md:justify-end">
                        <div className="flex flex-col  items-start">
                            <h1 className="text-primary font-extrabold text-[30px] md:text-[50px] font-open-sans tracking-[-2.5%]">1830+</h1>
                            <span className="text-[16px] font-normal font-open-sans tracking-[-1.5%] text-gray">Project executed</span>
                        </div>
                    </div>
                    <div className="w-full flex justify-center md:justify-end">
                        <div className="flex flex-col items-start">
                            <h1 className="text-primary font-extrabold text-[30px] md:text-[50px] font-open-sans tracking-[-2.5%]">834+</h1>
                            <span className="text-[16px] font-normal font-open-sans tracking-[-1.5%] text-gray">Satisfied customers</span>
                        </div>
                    </div>
                    <div className="w-full flex justify-center md:justify-end">
                        <div className="flex flex-col items-start">
                            <h1 className="text-primary font-extrabold text-[30px] md:text-[50px] font-open-sans tracking-[-2.5%]">390+</h1>
                            <span className="text-[16px] font-normal font-open-sans tracking-[-1.5%] text-gray">Data management</span>
                        </div>
                    </div>
                </div>
                <div className="max-w-[540px] mt-[22px] md:mt-0">
                    <p className=" text-[14px] md:text-[20px] font-open-sans text-gray font-normal text-center md:text-left">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam finibus nec.
                    </p>
                </div>
            </div>
        </div>
    );
};
