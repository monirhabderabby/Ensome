import React from "react";
import img1 from "../../../Assets/teams/001_img_person_1.png";
import img2 from "../../../Assets/teams/002_img_person_2.png";
import img3 from "../../../Assets/teams/003_img_person_3.png";
import img4 from "../../../Assets/teams/004_img_person_4.png";
import img6 from "../../../Assets/teams/006_img_person_6.png";
import img5 from "../../../Assets/teams/008_img_person_8.png";

export const TeamIntroduce = () => {
    const data = [
        {
            id: 1,
            name: "Sargis Grigor",
            title: "Data analyst",
            img: img1,
        },
        {
            id: 2,
            name: "Bagrat Leo",
            title: "Data engineer",
            img: img2,
        },
        {
            id: 3,
            name: "Gor Sargis",
            title: "Data analyst",
            img: img3,
        },
        {
            id: 4,
            name: "Maral Mari",
            title: "Data analyst",
            img: img4,
        },
        {
            id: 5,
            name: "Hakbor Jirari",
            title: "Data analyst",
            img: img5,
        },
        {
            id: 6,
            name: "Eva Vosgi",
            title: "Data scientist",
            img: img6,
        },
    ];
    return (
        <div className="mt-[120px] w-full grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[60px] max-w-[1110px] mx-auto mb-[50px] md:mb-[140px] px-[16px]">
            {data?.map(person => {
                return (
                    <div key={person?.id}>
                        <img src={person?.img} alt="profile" />
                        <div className="mt-[20px] flex flex-col items-start">
                            <span className="text-[20px] text-black font-bold font-manrope">{person?.name}</span>
                            <span className="mt-[7px] text-[16px] font-open-sans font-normal text-gray">{person?.title}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
