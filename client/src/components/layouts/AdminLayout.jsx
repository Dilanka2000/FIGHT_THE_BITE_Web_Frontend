import React from "react";
import { BSection, SLayout, SMain } from "./layoutStyles";
import AdminSidebar from "../sidebar/AdminSidebar";

export default function AdminLayout({ children }) {
    return (
        <SLayout>
            <AdminSidebar />
            <BSection>
                <SMain>{children}</SMain>
            </BSection>
        </SLayout>
    );
}
