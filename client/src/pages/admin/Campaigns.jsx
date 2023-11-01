import React, { useContext, useEffect, useState } from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import EmpHeader from "../../components/header/EmpHeader";
import { CalenderContainer, DCTitle, DeatailConainer, MAinFlexContainer, ScheduleCompaign } from "../../assets/styles/globalStyls";

import { getMonth } from "../../components/calender/util";
import CalenderHeader from "../../components/calender/CalenderHeader";
import Month from "../../components/calender/Month";
import GlogalContext from "../../context/GlobalContext";
import dayjs from "dayjs";

export default function Campaigns() {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex } = useContext(GlogalContext);

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex])

    const getDataContent = (data) => {
        let content = [];
        for (let i = 0; i < 4; i++) {
            const item = data[i];
            content.push(
                <ScheduleCompaign key={item._id} $col={item.color}>
                    <div>{item.name}</div>
                </ScheduleCompaign>
            );
        }
        return content;
    };

    return (
        <AdminLayout>
            <EmpHeader pageName={"Campaigns"} />

            <MAinFlexContainer>
                <CalenderContainer>
                    <CalenderHeader />
                    <Month month={currentMonth} events={data} />
                </CalenderContainer>
                <DeatailConainer>
                    <DCTitle>
                        <div>Schedule Details</div>
                        <p>{ dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY") }</p>
                    </DCTitle>
                    {getDataContent(data)}
                </DeatailConainer>
            </MAinFlexContainer>
        </AdminLayout>
    );
}


const data = [
    {
        _id: 1,
        name: "Peradeniya welfare organization",
        date: "05-10-2023",
        time: "09.00 - 10.00 AM",
        color: "#FB7D5B",
    },
    {
        _id: 2,
        name: "Peradeniya welfare organization",
        date: "10-10-2023",
        time: "09.00 - 10.00 AM",
        color: "#5A96E3",
    },
    {
        _id: 3,
        name: "Peradeniya welfare organization",
        date: "21-10-2023",
        time: "09.00 - 10.00 AM",
        color: "#FCC43E",
    },
    {
        _id: 4,
        name: "Peradeniya welfare organization",
        date: "25-10-2023",
        time: "09.00 - 10.00 AM",
        color: "#393E46",
    },
    {
        _id: 4,
        name: "Peradeniya welfare organization",
        date: "18-11-2023",
        time: "09.00 - 10.00 AM",
        color: "#5A96E3",
    },
    {
        _id: 4,
        name: "Peradeniya welfare organization",
        date: "28-11-2023",
        time: "09.00 - 10.00 AM",
        color: "#FCC43E",
    },
];