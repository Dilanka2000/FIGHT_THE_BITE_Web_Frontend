import React, { useContext } from 'react'
import { CalenderHeaderContainer, DayName, DayNameContainer, SelectButton } from './calenderStyle'
import GlogalContext from '../../context/GlobalContext';
import dayjs from 'dayjs';

export default function CalenderHeader() {

    const { monthIndex, setMonthIndex } = useContext(GlogalContext);

    const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
    return (
        <CalenderHeaderContainer>
            <SelectButton>
                <i
                    className="fa-solid fa-caret-left"
                    onClick={() => setMonthIndex(monthIndex - 1)}
                ></i>
                <div>
                    { dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM") }<span>{ dayjs(new Date(dayjs().year(), monthIndex)).format("YYYY") }</span>
                </div>
                <i
                    className="fa-solid fa-caret-right"
                    onClick={() => setMonthIndex(monthIndex + 1)}
                ></i>
            </SelectButton>

            <DayNameContainer>
                {day.map((day, index) => (
                    <DayName key={index}>{day}</DayName>
                ))}
            </DayNameContainer>
        </CalenderHeaderContainer>
    );
}
