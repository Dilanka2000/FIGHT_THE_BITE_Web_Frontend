import React, { useContext } from 'react'
import { DayName, SmallDayNameContainer, SmallMonthChanger } from './calenderStyle';
import GlogalContext from '../../context/GlobalContext';
import dayjs from 'dayjs';

export default function SmallCalenderHeader() {
    const { monthIndex, setMonthIndex } = useContext(GlogalContext);
    const day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return (
        <>
            <SmallMonthChanger>
                <div>
                    { dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY") }
                </div>
                <i
                    className="fa-solid fa-caret-left"
                    onClick={() => setMonthIndex(monthIndex - 1)}
                ></i>
                <i
                    className="fa-solid fa-caret-right"
                    onClick={() => setMonthIndex(monthIndex + 1)}
                ></i>
            </SmallMonthChanger>
            
            <SmallDayNameContainer>
                {day.map((day, index) => (
                    <DayName key={index}>{day}</DayName>
                ))}
            </SmallDayNameContainer>
        </>
    );
}
