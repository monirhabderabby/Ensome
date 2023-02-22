import React from "react";

// Third party packages
import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";

export const GetTouch = () => {
    return (
        <div className="bg-background_gray">
            <div className="max-w-[1500px] mx-auto lg:px-16 md:px-10 px-3 md:py-[120px] py-6">
                <div className="w-full mx-auto grid md:grid-cols-2 grid-cols-1 justify-between lg:gap-10 md:gap-8 gap-6 py-[]">
                    <div className="w-full">
                        <h1 className="text-[38px] leading-[56px] text-xl font-bold text-[#292D33] font-Manrope">
                            Wanna translate your idea into a reality?
                        </h1>
                        <p className="text-[#9497A1] text-[16px] leading-[28px] font-normal font-open-sans mb-[80px]">
                            We'd love to know more about your ideas. Drop your thoughts to our email address or, just fill out the form and we will
                            reach out to you as soon as possible.
                        </p>
                        <Stack spacing={3}>
                            <div className="flex flex-col">
                                <span className="text-[16px] font-normal leading-[28px] tracking-[-0.015em] text-[#9497A1]">Email address</span>
                                <span className="text-[16px] ">contact@softwrapper.com</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[16px] font-normal leading-[28px] tracking-[-0.015em] text-[#9497A1]">Phone number</span>
                                <span className="text-[16px] ">+880 1956-306002</span>
                            </div>
                        </Stack>
                    </div>
                    <section className="w-full flex justify-center">
                        <div className="bg-white w-full lg:w-[445px] h-[493px] lg:h-[593px] rounded-[6px] contact__shadow">
                            <form className="p-[30px] lg:p-[50px] w-full">
                                <p className="font-Manrope font-bold text-[30px] leading-[40px] tracking-[-1.5%] text-[#292D33] mb-[30px]">
                                    Contact Us
                                </p>
                                <Stack spacing={3}>
                                    <TextField id="standard-basic" name="name" label="Name" variant="standard" className="w-full" />
                                    <TextField id="standard-basic" name="email" label="Email" variant="standard" className="w-full" />
                                    <FormControl variant="standard">
                                        <InputLabel id="demo-simple-select-standard-label">Service You Provide</InputLabel>
                                        <Select labelId="demo-simple-select-standard-label">
                                            <MenuItem value={undefined}>
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value="fashion">Fashion</MenuItem>
                                            <MenuItem value="ecommerce">E-commerce</MenuItem>
                                            <MenuItem value="service">Service</MenuItem>
                                            <MenuItem value="portfolio">Portfolio</MenuItem>
                                            <MenuItem value="travel">Travel</MenuItem>
                                            <MenuItem value="finance">Finance</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField id="standard-basic" name="message" label="Message" variant="standard" className="w-full" />
                                </Stack>

                                <div className="mt-[53px] lg:mt-[83px] float-right">
                                    <input
                                        type="submit"
                                        value="Send"
                                        className="bg-[#185CFF] text-[14px] leading-[14px] tracking-[-1%] text-white gap-[10px] px-[24px] py-[10px] rounded-[6px]"
                                    />
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
