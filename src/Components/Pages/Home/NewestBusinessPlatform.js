import React from "react";
import illustration1 from "../../../Assets/HomePageImages/001_illustration.png";
import { PrimaryButton } from "../../Shared/buttons/PrimaryButton";

export const NewestBusinessPlatform = () => {
    return (
        <div className="bg-transparent max-w-[1400px] mx-auto flex flex-col-reverse md:flex-row items-center gap-x-[95px] mt-[50px] md:mt-[90px] px-[16px]">
            <div className="flex flex-col justify-center items-start w-full gap-y-[20px] md:gap-y-[30px]  lg:w-[540px]">
                <h1 className="text-[30px] lg:text-[46px] text-black font-extrabold tracking-[-1.5%] mt-[30px]">
                    The newest business analytics platform
                </h1>
                <p className="font-normal text-[14px] lg:text-[20px] tracking-[-1.5%] text-gray">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <PrimaryButton>Learn more</PrimaryButton>
            </div>
            <div className="flex-auto">
                <img src={illustration1} alt="" />
            </div>
        </div>
    );
};
