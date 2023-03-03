import React from "react";

export const ServiceOverview = () => {
    return (
        <div className="mt-[140px]">
            <h3 className="text-[38px] font-manrope font-extrabold tracking-[-1.5%] text-black text-center">
                We provide services that guarantee your success
            </h3>
            <div className="grid grid-cols-2 gap-x-[31px] mt-[50px]">
                <div className="flex items-center gap-x-[30px] justify-end">
                    <div className="flex flex-col items-start">
                        <h1 className="text-primary font-extrabold text-[50px] font-open-sans tracking-[-2.5%]">1830+</h1>
                        <span className="text-[16px] font-normal font-open-sans tracking-[-1.5%] text-gray">Project executed</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <h1 className="text-primary font-extrabold text-[50px] font-open-sans tracking-[-2.5%]">834+</h1>
                        <span className="text-[16px] font-normal font-open-sans tracking-[-1.5%] text-gray">Satisfied customers</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <h1 className="text-primary font-extrabold text-[50px] font-open-sans tracking-[-2.5%]">390+</h1>
                        <span className="text-[16px] font-normal font-open-sans tracking-[-1.5%] text-gray">Data management</span>
                    </div>
                </div>
                <div className="max-w-[540px]">
                    <p className="text-[20px] font-open-sans text-gray font-normal">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam finibus nec.
                    </p>
                </div>
            </div>
        </div>
    );
};
