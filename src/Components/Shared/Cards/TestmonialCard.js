import React from "react";
import { SwiperSlide } from "swiper/react";

export const TestmonialCard = () => {
    return (
        <SwiperSlide className="max-w-[540px] min-h-[309px] rounded-[6px] shadow-card3 relative">
            <img
                src="https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                alt="profilePhoto"
                className="w-[80px] h-[80px] rounded-full absolute top-[-40px] left-[35px] z-30"
            />
            <div className=" pt-[75px] px-[35px] pb-[35px]">
                <p className="text-gray text-[16px] font-open-sans tracking-[-1.5%]">
                    “Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.”{" "}
                </p>
                <div className="mt-[35px] text-[16px] tracking-[-1.5%] font-manrope">
                    <h3 className="text-black font-semibold">Alex Bern</h3>
                    <p className="text-gray font-open-sans font-normal">CEO by pixelPerfect</p>
                </div>
            </div>
        </SwiperSlide>
    );
};
