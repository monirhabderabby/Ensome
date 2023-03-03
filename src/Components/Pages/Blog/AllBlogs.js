import React from "react";
import { PrimaryButton } from "../../Shared/buttons/PrimaryButton";
import { BlogCard } from "../../Shared/Cards/BlogCard";
import blogsContent from "../../Shared/content/blogsContent";

export const AllBlogs = () => {
    return (
        <div className="px-[16px]">
            <div className="max-w-[1200px] bg-white mx-auto mt-[220px] grid grid-cols-1 md:grid-cols-2 gap-y-[40px]">
                {blogsContent?.map(blog => {
                    return <BlogCard key={blog?.id} blog={blog} />;
                })}
            </div>
            <div className="mt-[30px] md:mt-[50px] w-full flex justify-center mb-[50px] md:mb-[120px]">
                <PrimaryButton>More articles</PrimaryButton>
            </div>
        </div>
    );
};
