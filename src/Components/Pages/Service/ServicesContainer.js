import React from "react";
import iconBot from "../../../Assets/icons/icon_bot _isometric_3d.png";
import icon_brain_isometric_3d from "../../../Assets/icons/icon_brain_isometric_3d.png";
import icon_data_area_isometric_3d from "../../../Assets/icons/icon_data_area_isometric_3d.png";
import icon_data_pie_isometric_3d from "../../../Assets/icons/icon_data_pie _isometric_3d.png";
import icon_key_isometric_3d from "../../../Assets/icons/icon_key_isometric_3d.png";
import icon_trending_lines_isometric_3d from "../../../Assets/icons/icon_trending_lines_isometric_3d.png";
import { ServiceCard } from "../../Shared/Cards/ServiceCard";

export const ServicesContainer = () => {
    const data = [
        {
            id: 1,
            title: "Machine learning",
            description:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.",
            icon: icon_brain_isometric_3d,
        },
        {
            id: 2,
            title: "Embed analytics",
            description:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.",
            icon: icon_trending_lines_isometric_3d,
        },
        {
            id: 3,
            title: "Access control",
            description:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.",
            icon: icon_key_isometric_3d,
        },
        {
            id: 4,
            title: "Data analytics",
            description:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.",
            icon: icon_data_area_isometric_3d,
        },
        {
            id: 5,
            title: "Big data consulting",
            description:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.",
            icon: icon_data_pie_isometric_3d,
        },
        {
            id: 6,
            title: "Artificial intelligence",
            description:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.",
            icon: iconBot,
        },
    ];
    return (
        <div className="mt-[153px] px-[41px] max-w-[1500px] mx-auto">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-[83px]">
                {data?.map(service => {
                    return <ServiceCard key={service.id} service={service} />;
                })}
            </div>
        </div>
    );
};
