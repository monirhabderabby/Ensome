import React from "react";
import iconRight from "../../../Assets/icons/icon_arrow_right.png";
import { default as iconBook, default as iconDatabase } from "../../../Assets/icons/icon_book_database.png";
import iconCalender from "../../../Assets/icons/icon_calendar_data.png";
import iconClipbord from "../../../Assets/icons/icon_clipboard_data.png";
import iconPie from "../../../Assets/icons/icon_data_pie.png";
import iconWhisker from "../../../Assets/icons/icon_data_whisker.png";

export const SolutionCards = () => {
    const data = [
        {
            id: 1,
            title: "Data intregation",
            des: "Getting ready for your success, we provide truly outstanding IT solutions.",
            icon: iconBook,
        },
        {
            id: 2,
            title: "Data intregation",
            des: "Data preparation and management; machine learning (ML); designing and implanting artificial intelligence (AI) solutions.",
            icon: iconCalender,
        },
        {
            id: 3,
            title: "Big Data",
            des: "Big data infrastructure setup and support.; big data quality and security management; big data capture, analysis and reporting.",
            icon: iconClipbord,
        },
        {
            id: 4,
            title: "Data warehousing",
            des: "The process of constructing and using a data warehouse. Data warehouse and data marts design and implementation.",
            icon: iconDatabase,
        },
        {
            id: 5,
            title: "Big data",
            des: "Business intelligence; data analytics infrastructure design and implementation; scheduled analytics querying and reporting.",
            icon: iconWhisker,
        },
        {
            id: 6,
            title: "Data visualization",
            des: "Interactive dashboarding; custom and pre-built visuals; multiple visualization techniques (symbol maps, line charts, pie charts...)",
            icon: iconPie,
        },
    ];
    return (
        <div className="mt-[50px] md:mt-[120px] max-w-[1110px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-[20px]  md:gap-y-[40px] gap-x-[30px] px-[16px]">
            {data?.map(item => {
                return (
                    <div className="shadow-card3 max-w-[540px] h-auto px-[20px] md:px-[35px] py-[30px] rounded-[6px]">
                        <div>
                            <img src={item?.icon} alt="icon" />
                            <h3 className="mt-[20px] md:mt-[23px] font-manrope font-bold text-black text-[22px]">{item?.title}</h3>
                            <p className="mt-[10px] md:mt-[16px] text-gray text-[16px] font-open-sans font-normal">{item?.des}</p>
                            <button className="mt-[20px] text-primary text-[14px] font-manrope font-semibold flex items-center group">
                                <span className="group-hover:mr-2 duration-300">Read more</span>
                                <img src={iconRight} alt="iconREight" />
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
