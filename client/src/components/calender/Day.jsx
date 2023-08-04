import React from "react";
import dayjs from "dayjs";
import { Date, DayContainer } from "./calenderStyle";

export default function Day({ day, rowIndex, length }) {

    function currentDate() {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY");
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

            <Date $isActive={currentDate()}>{day.format("DD")}</Date>
        </DayContainer>
    );
}
