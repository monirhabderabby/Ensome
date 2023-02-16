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

export const Testmonials = () => {
    const navigationNextRef = useRef(null);
    const navigationPrevRef = useRef(null);
    return (
        <div className="h-auto py-[100px] w-full max-w-[1200px] mx-auto pb-[100px]">
            <div className="w-full flex justify-between items-center">
                <h1 className="text-[46px] text-black font-extrabold font-manrope text-left w-[430px]">Trusted by the best in the business</h1>
            </div>
            <Swiper
                spaceBetween={30}
                slidesPerView={2}
                navigation={{
                    nextEl: navigationNextRef.current,
                    prevEl: navigationPrevRef.current,
                }}
                modules={[Navigation]}
                style={{
                    paddingTop: "100px",
                    paddingBottom: "100px",
                    paddingLeft: "30px",
                    paddingRight: "20px",
                }}
                className="flex items-center"
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
                <SwiperSlide>
                    <TestmonialCard />
                </SwiperSlide>
                <SwiperSlide>
                    <TestmonialCard />
                </SwiperSlide>
                <SwiperSlide>
                    <TestmonialCard />
                </SwiperSlide>
                <div className="flex items-center gap-x-[16px] mt-[30px] absolute top-[0px] right-0 z-50">
                    <button
                        className="w-[110px] h-[60px] bg-Tertiary rounded-[20px] flex justify-center items-center button-prev-slide"
                        ref={navigationPrevRef}
                    >
                        <img src={leftArror} alt="left" />
                    </button>
                    <button
                        className="w-[110px] h-[60px] bg-Tertiary rounded-[20px] flex justify-center items-center button-next-slide"
                        ref={navigationNextRef}
                    >
                        <img src={rightArror} alt="right" />
                    </button>
                </div>
            </Swiper>
        </div>
    );
};
