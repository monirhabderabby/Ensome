import React from "react";
import logo1 from "../../../Assets/HomePageImages/clientLogos/logo_1.png";
import logo2 from "../../../Assets/HomePageImages/clientLogos/logo_2.png";
import logo3 from "../../../Assets/HomePageImages/clientLogos/logo_3.png";
import logo4 from "../../../Assets/HomePageImages/clientLogos/logo_4.png";
import logo5 from "../../../Assets/HomePageImages/clientLogos/logo_5.png";
import logo6 from "../../../Assets/HomePageImages/clientLogos/logo_6.png";

export const ServicesCompanies = () => {
    const logos = [
        {
            id: 1,
            logo: logo1,
        },
        {
            id: 2,
            logo: logo2,
        },
        {
            id: 3,
            logo: logo3,
        },
        {
            id: 4,
            logo: logo4,
        },
        {
            id: 5,
            logo: logo5,
        },
        {
            id: 6,
            logo: logo6,
        },
    ];
    return (
        <div className="mt-[120px] max-w-[1500px] mx-auto px-[16px]">
            <div className="flex flex-wrap items-center justify-center">
                {logos?.map(item => (
                    <img src={item.logo} key={item.id} alt="companiesLogo" />
                ))}
            </div>
        </div>
    );
};
