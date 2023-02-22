import React from "react";
import { SwiperSlide } from "swiper/react";

export const TestmonialCard = () => {
    return (
        <SwiperSlide className="max-w-[540px] min-h-[309px] rounded-[6px] shadow-card3 relative">
            <img
                src="https://scontent.frjh5-1.fna.fbcdn.net/v/t39.30808-6/285722642_3283246311936540_7816692518925760812_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEaTv9acgXhHvkaa3jnO1reUx5aig2fxHZTHlqKDZ_Edm2XxW825x9K_KYJBPJjT4yZFZxj7jYl3GE4-6p7aNzt&_nc_ohc=9rS4pqF8UOoAX88NMHD&tn=5Af7VWSQfe-WPdJS&_nc_ht=scontent.frjh5-1.fna&oh=00_AfAcOBwQ_u4NTAu38AlWKySrP2dastPd0vCfyWmhhmm5oQ&oe=63F1FD8D"
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
