import { styled } from "styled-components";
import { v } from "../../assets/styles/variables";


export const CalenderHeaderContainer = styled.div`
    width: 100%;
    height: 115px;
    padding-top: ${v.smSpacing};
`;

export const SelectButton = styled.div`
    min-width: 180px;
    height: 50px;
    padding: 0 ${v.lgSpacing};
    border-radius: 25px;
    color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${({ theme }) => theme.primary};
    font-size: 16px;
    font-weight: 500;

    i {
        color: ${({ theme }) => theme.primary};
        font-size: 30px;
        margin-left: ${v.lgSpacing};
        cursor: pointer;
    }
`;

export const DayNameContainer = styled.div`
    margin-top: ${v.smSpacing};
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    grid-template-rows: repeat(1, minmax(0, 50px));
    gap: ${v.mdSpacing};
`;

export const DayName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    font-weight: 500;
`;

export const MonthContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    /* grid-template-rows: repeat(6, minmax(0, 115px)); */
    grid-template-rows: ${({$row}) => ($row===5 ? "repeat(5, minmax(0, 115px))" : "repeat(6, minmax(0, 95px))")};
    gap: ${v.mdSpacing};
`;

export const DayContainer = styled.div`
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.text};
    padding: 2px;
    background: ${({ theme, $isDeactive }) => (!$isDeactive ? "" : theme.bg3)};
`;

export const Date = styled.div`
    width: 100%;
    height: 100%;
    font-weight: 800;
    border-radius: 8px;
    background: ${({ theme, $isActive }) => (!$isActive ? "" : theme.primary)};
    padding: ${v.smSpacing} ${v.mdSpacing};
`;


