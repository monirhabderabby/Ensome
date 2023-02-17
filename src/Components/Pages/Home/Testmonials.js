import React, { useRef } from "react";

// Third party packages
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// components
import rightArror from "../../../Assets/icons/icon_arrow_right.png";
import leftArror from "../../../Assets/icons/icon_arrow__left.png";
import { TestmonialCard } from "../../../Components/Shared/Cards/TestmonialCard";

// css
import "swiper/css";
import "swiper/css/navigation";
import "./css/Testmonial.css";

export const Testmonials = () => {
    const navigationNextRef = useRef(null);
    const navigationPrevRef = useRef(null);
    return (
        <div className="h-auto py-[100px] w-full max-w-[1200px] mx-auto pb-[100px]">
            <Swiper
                spaceBetween={30}
                breakpoints={{
                    640: {
                        width: 640,
                        slidesPerView: 1,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                }}
                navigation={{
                    nextEl: navigationNextRef.current,
                    prevEl: navigationPrevRef.current,
                }}
                modules={[Navigation]}
                style={{
                    paddingBottom: "100px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    paddingTop: "200px",
                }}
                className="pt-[200px]"
                onSwiper={swiper => {
                    // Delay execution for the refs to be defined
                    setTimeout(() => {
                        // Override prevEl & nextEl now that refs are defined
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;

                        // Re-init navigation
                        swiper.navigation.destroy();
                        swiper.navigation.init();
                        swiper.navigation.update();
                    });
                }}
            >
                <h1 className="text-[30px] xl:text-[46px] text-black font-extrabold font-manrope xl:text-left xl:w-[430px] absolute top-0 left-0 px-[16px] xl:px-0">
                    Trusted by the best in the business
                </h1>
                <SwiperSlide>
                    <TestmonialCard />
                </SwiperSlide>
                <SwiperSlide>
                    <TestmonialCard />
                </SwiperSlide>
                <SwiperSlide>
                    <TestmonialCard />
                </SwiperSlide>
                <div className="flex items-center gap-x-[16px] mt-[30px] absolute top-[70px] xl:top-0 right-0 z-50 px-[16px]">
                    <button
                        className="w-[48px] h-[40px] xl:w-[110px] xl:h-[60px] bg-Tertiary rounded-[14px] xl:rounded-[20px] flex justify-center items-center button-prev-slide"
                        ref={navigationPrevRef}
                    >
                        <img src={leftArror} alt="left" />
                    </button>
                    <button
                        className="w-[48px] h-[40px] xl:w-[110px] xl:h-[60px] bg-Tertiary rounded-[14px] xl:rounded-[20px] flex justify-center items-center button-next-slide"
                        ref={navigationNextRef}
                    >
                        <img src={rightArror} alt="right" />
                    </button>
                </div>
            </Swiper>
        </div>
    );
};
