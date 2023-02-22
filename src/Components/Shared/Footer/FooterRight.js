import React from "react";
import { Link } from "react-router-dom";
import pagesLink from "./FooterPageLink";

const FooterRight = () => {
    const { primaryPages, pages, templates } = pagesLink;

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:gap-32 gap-20">
            <div>
                <h3 className="text-[16px] leading-[24px] tracking-[-1.5%] font-Manrope whitespace-nowrap font-bold mb-[31px]">Primary Pages</h3>
                <ul>
                    {primaryPages.map((primaryPage, index) => (
                        <Link key={index + 1} to={primaryPage.path}>
                            <li className="font-open-sans font-normal text-[14px] leading-[24px] tracking-[-1.5%] text-black mb-[12px] hover:text-primary transition-[0.3s] whitespace-nowrap">
                                {primaryPage.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-[16px] leading-[24px] tracking-[-1.5%] font-Manrope whitespace-nowrap font-bold mb-[31px]">Pages</h3>
                <ul>
                    {pages.map((page, index) => (
                        <Link key={index + 1} to={page.path}>
                            <li className="font-open-sans font-normal text-[14px] leading-[24px] tracking-[-1.5%] text-black mb-[12px] hover:text-primary transition-[0.3s]">
                                {page.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-[16px] leading-[24px] tracking-[-1.5%] font-Manrope whitespace-nowrap font-bold mb-[31px]">Template</h3>
                <ul>
                    {templates.map((template, index) => (
                        <Link key={index + 1} to={template.path}>
                            <li className="font-open-sans font-normal text-[14px] leading-[24px] tracking-[-1.5%] text-black mb-[12px] hover:text-primary transition-[0.3s]">
                                {template.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FooterRight;
