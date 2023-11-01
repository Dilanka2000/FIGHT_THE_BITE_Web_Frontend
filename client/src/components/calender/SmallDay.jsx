import dayjs from 'dayjs';
import React from 'react'
import { SmallDate, SmallDayContainer } from './calenderStyle';

export default function SmallDay({ day, rowIndex, length }) {
    function currentDate() {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY");
    }

    function currentMonth() {
        return (
            (rowIndex === 0 && day.format("DD") > 7) ||
            (rowIndex === length - 1 && day.format("DD") < 7)
        );
    }

    return (
        <SmallDayContainer $isDeactive={currentMonth()}>
            <SmallDate $isActive={currentDate()}>{day.format("DD")}</SmallDate>
        </SmallDayContainer>
    );
}