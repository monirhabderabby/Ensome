import React from "react";
import useDocumentTitle from "../../../util/useDocumentTitle";
import { NewsLetter } from "../../Shared/Components/NewsLetter";
import { Footer } from "../../Shared/Footer/Footer";
import { AllBlogs } from "./AllBlogs";
import { BlogHeader } from "./BlogHeader";

export const Blog = () => {
    // Document Title
    useDocumentTitle("Blog");

    return (
        <div>
            <BlogHeader />
            <AllBlogs />
            <NewsLetter />
            <Footer />
        </div>
    );
};
