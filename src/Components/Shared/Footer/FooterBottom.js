import React from "react";
import { FaDribbble, FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";

const FooterBottom = () => {
    const socialIcons = [
        {
            icon: <FaFacebookF />,
            link: "https://www.facebook.com/profile.php?id=100086248347896",
        },
        {
            icon: <FaDribbble />,
        },
        {
            icon: <FaInstagram />,
        },
        {
            icon: <FaGithub />,
            link: "https://github.com/softwrapper",
        },
    ];
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className="lg:flex lg:justify-between items-center py-6">
            <p className="text-center">© {year} Ensome Rights Reserved.</p>
            <div className="flex gap-3 pt-4 justify-center">
                {socialIcons.map((social, index) => (
                    <a
                        className=" bg-[#babbbb] text-black  hover:bg-primary hover:text-white p-2 rounded-full transition-[0.3s] cursor-pointer"
                        key={index}
                        rel="noreferrer"
                        href={social.link}
                        target="_blank"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FooterBottom;
