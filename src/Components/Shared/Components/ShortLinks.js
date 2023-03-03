import React from "react";

export const ShortLinks = ({ page }) => {
    return (
        <div className=" mt-[30px] md:mt-[40px] px-0 md:px-[53px]">
            Home | <span className="font-medium">{page}</span>
        </div>
    );
};
