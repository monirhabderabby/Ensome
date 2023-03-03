import React from "react";
import phoneIcon from "../../../Assets/icons/icon_call.png";
import locationIcon from "../../../Assets/icons/icon_location.png";
import emailIcon from "../../../Assets/icons/icon_mail.png";
import { PrimaryButton } from "../../Shared/buttons/PrimaryButton";

export const ContactForm = () => {
    return (
        <div className="max-w-[1500px] mx-auto px-[16px]">
            <div className="w-full flex items-start justify-between">
                <div className="text-[black] text-[80px] font-manrope font-extrabold flex-1">
                    How can we <br /> <span className="text-primary">help you?</span>
                </div>
                <div className="flex-1">
                    <form className="w-full">
                        <div className="grid grid-cols-2 gap-x-[32px]  gap-y-[22px]">
                            <input
                                type="text"
                                placeholder="Your email"
                                className="text-gray border-[1px] border-gray rounded-[6px] py-[15px] px-[25px]"
                            />
                            <input
                                type="text"
                                placeholder="Your name"
                                className="text-gray border-[1px] border-gray rounded-[6px] py-[15px] px-[25px]"
                            />
                            <input
                                type="text"
                                placeholder="Theme"
                                className="text-gray border-[1px] border-gray rounded-[6px] py-[15px] px-[25px] col-span-2"
                            />
                            <textarea
                                type="text"
                                placeholder="Your message"
                                className="text-gray border-[1px] border-gray rounded-[6px] py-[15px] px-[25px] col-span-2"
                                rows={5}
                            ></textarea>
                        </div>
                        <div className="w-full flex justify-end">
                            <PrimaryButton>Send</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex items-center gap-x-[47px]">
                <div className="flex flex-col justify-start">
                    <div className="flex items-center gap-x-[14px]">
                        <img src={emailIcon} alt="email" />
                        <span>Email</span>
                    </div>
                    <p className="text-gray text-[16px] font-normal font-open-sans">ensome@info.co.us</p>
                </div>
                <div className="flex flex-col justify-start">
                    <div className="flex items-center gap-x-[14px]">
                        <img src={phoneIcon} alt="email" />
                        <span>Phone</span>
                    </div>
                    <p className="text-gray text-[16px] font-normal font-open-sans">+1 601-201-5580</p>
                </div>
                <div className="flex flex-col justify-start">
                    <div className="flex items-center gap-x-[14px]">
                        <img src={locationIcon} alt="email" />
                        <span>Address</span>
                    </div>
                    <p className="text-gray text-[16px] font-normal font-open-sans">1642 Washington Ave, Jackson, MS</p>
                </div>
            </div>
        </div>
    );
};
