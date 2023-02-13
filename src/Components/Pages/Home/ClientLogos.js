import React from "react";

// Third party packages
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Images
import logo1 from "../../../Assets/HomePageImages/clientLogos/logo_1.png";
import logo2 from "../../../Assets/HomePageImages/clientLogos/logo_2.png";
import logo3 from "../../../Assets/HomePageImages/clientLogos/logo_3.png";
import logo4 from "../../../Assets/HomePageImages/clientLogos/logo_4.png";
import logo5 from "../../../Assets/HomePageImages/clientLogos/logo_5.png";
import logo6 from "../../../Assets/HomePageImages/clientLogos/logo_6.png";

// CSS
import "swiper/css";
import "swiper/css/pagination";

export const ClientLogos = () => {
    const clientLogos = [logo1, logo2, logo3, logo4, logo5, logo6, logo1, logo2, logo3, logo4, logo5, logo6];
    return (
        <>
            <Swiper
                loop={true}
                slidesPerView={4}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper max-w-[1400px] mx-auto"
            >
                {clientLogos?.map((logo, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={logo} alt="logo" />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
};
