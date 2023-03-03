import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PrimaryButton = ({ children, redirect }) => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);
    return (
        <button
            className="bg-[#185CFF] text-[#FFFFFF] text-[15px] tracking-[-0.01em] rounded-[6px] w-full md:w-[190px] h-[54px] flex justify-center items-center"
            onClick={() => navigate(`/${redirect}`)}
        >
            {children}
        </button>
    );
};
