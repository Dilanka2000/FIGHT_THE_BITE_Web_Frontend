import React, { useState } from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import EmpHeader from "../../components/header/EmpHeader";
import { CalenderContainer, DeatailConainer, MAinFlexContainer } from "../../assets/styles/globalStyls";

import { getMonth } from "../../components/calender/util";
import CalenderHeader from "../../components/calender/CalenderHeader";
import Month from "../../components/calender/Month";

export default function Campaigns() {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    return (
        <AdminLayout>
            <EmpHeader pageName={"Campaigns"} />

            <MAinFlexContainer>
                <CalenderContainer>
                    <CalenderHeader />
                    <Month month={currentMonth} />
                </CalenderContainer>
                <DeatailConainer></DeatailConainer>
            </MAinFlexContainer>
        </AdminLayout>
    );
}
