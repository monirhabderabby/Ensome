import React, { useEffect } from "react";
import useDocumentTitle from "../../../util/useDocumentTitle";
import { NewsLetter } from "../../Shared/Components/NewsLetter";
import { Footer } from "../../Shared/Footer/Footer";
import { OurTeamHeader } from "./OurTeamHeader";
import { TeamHistory } from "./TeamHistory";
import { TeamIntroduce } from "./TeamIntroduce";

export const OurTeam = () => {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    // Document Title
    useDocumentTitle("Our team");

    return (
        <div>
            <OurTeamHeader />
            <TeamHistory />
            <TeamIntroduce />
            <NewsLetter />
            <Footer />
        </div>
    );
};
