import React, { useState } from "react";
import dayjs from "dayjs";
import { Date, DayContainer, DayEvents } from "./calenderStyle";
import AcceptCompaign from "../../pages/gramasewaka/popup/AcceptCompaign";

export default function Day({ day, rowIndex, length, events, setLoading, setUpdateSuccess }) {

    function currentDate() {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY");
    }

    const [eventData, setEventData] = useState('');
    const [acceptCampaign, setAcceptCampaign] = useState(false);
    let eventColor = '';
    let eventDt = '';
    function dayEvent() {
        events.forEach((e) => {
            if (e.date.substring(0, 10) === day.format("YYYY-MM-DD")) {
                if (e.status) {
                    eventColor = "#5A96E3";
                }
            }
            if (e.createdAt.substring(0, 10) === day.format("YYYY-MM-DD")) {
                if (!e.status) {
                    eventDt = e;
                    eventColor = "#FCC43E";
                }
            }
        })
        return eventColor;   
    }

    function currentMonth() {
        return (
            (rowIndex === 0 && day.format("DD") > 7) ||
            (rowIndex === length-1 && day.format("DD") < 7)
        );
    }

    return (
        <DayContainer $isDeactive={currentMonth()}>
            {/* {rowIndex === 0 && (
                <DayName>{day.format("ddd").toUpperCase()}</DayName>
            )} */}

            <Date $isActive={currentDate()}>
                {day.format("DD")}
                {dayEvent() && (
                    <DayEvents
                        $col={eventColor}
                        onClick={() => {
                            setEventData(eventDt);
                            setAcceptCampaign(true);
                            console.log(eventDt);
                        }}
                    >
                        <div></div>
                    </DayEvents>
                )}
            </Date>

            {acceptCampaign && eventData && (
                <AcceptCompaign
                    setViewData={setAcceptCampaign}
                    setEventData={setEventData}
                    eventData={eventData}
                    setLoading={setLoading}
                    setUpdateSuccess={setUpdateSuccess}
                />
            )}
        </DayContainer>
    );
}
