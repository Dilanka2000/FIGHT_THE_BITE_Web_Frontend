import React, { useState } from "react";
import GramasewakaLayout from "../../components/layouts/GramasewakaLayOut";
import EmpHeader from "../../components/header/EmpHeader";
import {
    CalenderContainer,
    DeatailConainer,
    MAinFlexContainer,
} from "../../assets/styles/globalStyls";

import { getMonth } from "../../components/calender/util";
import CalenderHeader from "../../components/calender/CalenderHeader";
import Month from "../../components/calender/Month";

export default function GsCampaigns() {
    const [currentMonth, setCurrentMonth] = useState(getMonth());

    return (
        <GramasewakaLayout>
            <EmpHeader pageName={"Campaigns"} />

            <MAinFlexContainer>
                <CalenderContainer>
                    <CalenderHeader />
                    <Month month={currentMonth} />
                </CalenderContainer>
                <DeatailConainer></DeatailConainer>
            </MAinFlexContainer>
        </GramasewakaLayout>
    );
}
