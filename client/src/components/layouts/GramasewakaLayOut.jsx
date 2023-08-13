import React from "react";
import { BSection, SLayout, SMain } from "./layoutStyles";
import GramasewakaSidebar from "../sidebar/GramasewakaSidebar";

export default function GramasewakaLayout({ children }) {
    return (
        <SLayout>
            <GramasewakaSidebar />
            <BSection>
                <SMain>{children}</SMain>
            </BSection>
        </SLayout>
    );
}
