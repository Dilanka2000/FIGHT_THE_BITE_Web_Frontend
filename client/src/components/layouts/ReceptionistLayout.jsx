import React from "react";
import { BSection, SLayout, SMain } from "./layoutStyles";
import ReceptionistSidebar from "../sidebar/ReceptionistSidebar";

export default function ReceptionistLayout({ children }) {
    return (
        <SLayout>
            <ReceptionistSidebar />
            <BSection>
                <SMain>{children}</SMain>
            </BSection>
        </SLayout>
    );
}
