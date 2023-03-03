import React from "react";

export const ServiceHeader = () => {
    return (
        <div className="max-w-[1500px] mx-auto px-[16px]">
            <div className=" mt-[30px] md:mt-[40px] px-0 md:px-[53px]">
                Home | <span className="font-medium">Services</span>
            </div>
            <div className=" mt-[40px] md:mt-[56px] w-full flex flex-col justify-center items-center font-manrope tracking-[-1.5%] gap-y-[15px]">
                <h4 className="text-primary text-[16px] font-bold ">Services</h4>
                <h2 className="text-[30px] md:text-[46px] font-extrabold text-black">Data Analytics Services</h2>
                <p className="max-w-[700px] text-center text-[14px] md:text-[20px] font-normal text-gray">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quaeab illo inventore.
                </p>
            </div>
        </div>
    );
};
