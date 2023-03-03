import React from "react";
import { NewsLetter } from "../../Shared/Components/NewsLetter";
import { Footer } from "../../Shared/Footer/Footer";
import { AllBlogs } from "./AllBlogs";
import { BlogHeader } from "./BlogHeader";

export const Blog = () => {
    return (
        <div>
            <BlogHeader />
            <AllBlogs />
            <NewsLetter />
            <Footer />
        </div>
    );
};
