// Configuration
import React from "react";

// components
import lineIcon from "../../../Assets/icons/icon_arrow_trending_lines.png";
import brainIcon from "../../../Assets/icons/icon_brain_circuit.png";
import keyIcon from "../../../Assets/icons/icon_key.png";
import { FeatureCard } from "../../Shared/Cards/FeatureCard";

export const WhyChooseEnsome = () => {
    const features = [
        {
            id: 1,
            icon: brainIcon,
            title: "Machine learning",
            description:
                "Revolutionize your data analysis with our machine learning product. Drive better decision making with accurate insights and predictive analytics.",
        },
        {
            id: 2,
            icon: lineIcon,
            title: "Embed analytics",
            description:
                "Unlock the full potential of your data with our embed analytics product. Empower your team with powerful insights and drive business growth. Try it today.",
        },
        {
            id: 3,
            icon: keyIcon,
            title: "Access control",
            description:
                "Secure your organization with our access control product. Customizable, scalable, and reliable solution to protect your data.",
        },
    ];
    return (
        <div className={`w-full h-auto lg:h-[852px] flex flex-col justify-center items-center bg-Background py-[40px] px-[16px] md:px-0`}>
            <div className="max-w-[540px]">
                <h1 className="text-[30px] md:text-[46px] font-manrope font-bold tracking-[-1.5%] text-black text-center">
                    Why our clients <br /> choose Ensome?
                </h1>
                <p className="mt-[30px] text-center text-[14px] md:text-[20px] text-gray tracking-[-1.5%] font-open-sans">
                    Choose Ensome for innovative digital solutions that drive growth. Skilled developers, customer focus, and exceptional results.
                    Join us today.
                </p>
            </div>
            <div className="mt-[50px] grid grid-cols-1  md:grid-cols-3 gap-[30px] px-[16px]">
                {features?.map(item => {
                    return <FeatureCard key={item.id} feature={item} />;
                })}
            </div>
        </div>
    );
};
