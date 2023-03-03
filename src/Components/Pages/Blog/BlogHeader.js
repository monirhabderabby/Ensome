import React from "react";
import { CustomHeader } from "../../Shared/Components/CustomHeader";

export const BlogHeader = () => {
    return (
        <div className="max-w-[1500px] mx-auto px-[16px]">
            <CustomHeader
                page="Blog"
                title="Discover new things with Ensome blog"
                des="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore."
            />
        </div>
    );
};
