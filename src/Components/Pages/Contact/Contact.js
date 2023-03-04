import React from "react";
import useDocumentTitle from "../../../util/useDocumentTitle";
import { ShortLinks } from "../../Shared/Components/ShortLinks";
import { Footer } from "../../Shared/Footer/Footer";
import { ContactForm } from "./ContactForm";
import { ContactMap } from "./ContactMap";

export const Contact = () => {
    // Document Title
    useDocumentTitle("Contact");
    return (
        <div>
            <div className="max-w-[1500px] mx-auto px-[16px]">
                <ShortLinks page="Contact" />
            </div>
            <ContactForm />
            <ContactMap />
            <Footer bgColor="secondary" />
        </div>
    );
};
