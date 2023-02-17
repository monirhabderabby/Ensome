import React from "react";

export const CompanyOverView = () => {
    return (
        <div className="h-auto lg:h-[244px] w-full bg-primary">
            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center h-full gap-x-[63px]">
                <div className="grid grid-cols-1 lg:grid-cols-4 w-full py-[35px] lg:py-0">
                    <div className=" h-[168px] lg:h-auto text-white text-center mx-auto border-r-[0.2px] w-full">
                        <h1 className="text-[56px] font-open-sans font-bold">1830+</h1>
                        <p className="text-[16px] tracking-[-1.5%] font-open-sans font-bold mt-[10px]">Project executed</p>
                    </div>
                    <div className="h-[168px] lg:h-auto text-white text-center mx-auto border-r-[0.2px] w-full">
                        <h1 className="text-[56px] font-open-sans font-bold">220</h1>
                        <p className="text-[16px] tracking-[-1.5%] font-open-sans font-bold mt-[10px]">Data analytics</p>
                    </div>
                    <div className="h-[168px] lg:h-auto text-white text-center mx-auto border-r-[0.2px] w-full">
                        <h1 className="text-[56px] font-open-sans font-bold">390</h1>
                        <p className="text-[16px] tracking-[-1.5%] font-open-sans font-bold mt-[10px]">Data management</p>
                    </div>
                    <div className="h-[168px] lg:h-auto text-white text-center mx-auto w-full">
                        <h1 className="text-[56px] font-open-sans font-bold">834</h1>
                        <p className="text-[16px] tracking-[-1.5%] font-open-sans font-bold mt-[10px]">Satisfied customer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
