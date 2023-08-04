import React from 'react'
import { CalenderHeaderContainer, DayName, DayNameContainer, SelectButton } from './calenderStyle'
import { ButtonContainer } from '../../assets/styles/globalStyls'

export default function CalenderHeader() {

    const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
    return (
        <CalenderHeaderContainer>
            <ButtonContainer>
                <SelectButton>
                    January
                    <i className="fa-solid fa-caret-down"></i>
                </SelectButton>
                <SelectButton>
                    2023
                    <i className="fa-solid fa-caret-down"></i>
                </SelectButton>
            </ButtonContainer>

            <DayNameContainer>
                {day.map((day, index) => (
                    <DayName key={index}>{day}</DayName>
                ))}
            </DayNameContainer>
        </CalenderHeaderContainer>
    );
}
