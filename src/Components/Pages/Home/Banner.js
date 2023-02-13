// Configuration
import React from "react";

// Third party packgaes
import Divider from "@mui/material/Divider";
import { FiPlayCircle } from "react-icons/fi";

// Images
import illustration1 from "../../../Assets/HomePageImages/001_illustration.png";
import { ClientLogos } from "./ClientLogos";

export const Banner = () => {
    return (
        <div className="h-auto md:h-[calc(100vh-80px)] w-full flex flex-col">
            <section className="h-full w-full flex flex-col-reverse md:flex-row flex-end justify-end md:justify-center md:items-center flex-1">
                <div className="w-full md:w-[540px] flex flex-col gap-y-[20px] md:gap-y-[30px] px-[16px] mt-[30px] md:mt-0">
                    <h1 className="text-[30px] md:text-[46px] text-black font-extrabold tracking-[-1.5%]">
                        Find true power in your data with Ensome
                    </h1>
                    <p className="font-normal text-[14px] md:text-[20px] tracking-[-1.5%] text-gray">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium, totam rem aperiam, eaque
                        ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <div className="flex gap-x-[26px] flex-col md:flex-row gap-y-[20px] md:gap-y-0">
                        <button className="bg-[#185CFF] text-[#FFFFFF] text-[15px] tracking-[-0.01em] rounded-[6px] w-full md:w-[190px] h-[54px] flex justify-center items-center ">
                            Learn more
                        </button>
                        <button className="text-primary border-[1px] border-primary md:border-0 md:text-black text-[15px] tracking-[-0.01em] rounded-[6px] w-full md:w-[190px] h-[54px] flex justify-center items-center gap-x-[10px]">
                            <FiPlayCircle className="text-[31px]" />
                            Watch now
                        </button>
                    </div>
                </div>
                <div>
                    <img src={illustration1} alt="illistration" className="animate-pulse w-[345px] md:w-full mx-auto" />
                </div>
            </section>
            <section className="h-[72px] md:h-[132px] w-full mt-[30px] md:mt-0">
                <Divider light />
                <ClientLogos />
            </section>
        </div>
    );
};
