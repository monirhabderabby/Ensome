import React from "react";
import Logo from "../../../Assets/Logo/logo.png";

const FooterLeft = () => {
    const handleSubscribe = e => {
        e.preventDefault();
        const email = e.target.email.value;

        const Subscribe = {
            email,
        };
        console.log(Subscribe);
    };
    return (
        <div>
            <img src={Logo} alt="logo" />
        </div>
    );
};

export default FooterLeft;
