import React from "react";
import Logo from "../../../Assets/Logo/logo.png";
import Logosvg from "../../../Assets/Logo/Logo.svg";

const FooterLeft = ({ bgColor }) => {
    return (
        <div>
            <img src={`${bgColor?.includes("secondary") ? Logosvg : Logo}`} alt="logo" />
        </div>
    );
};

export default FooterLeft;
