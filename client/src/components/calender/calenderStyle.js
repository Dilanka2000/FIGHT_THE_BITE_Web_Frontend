import { styled } from "styled-components";
import { v } from "../../assets/styles/variables";


export const CalenderHeaderContainer = styled.div`
    width: 100%;
    height: 115px;
    padding-top: ${v.smSpacing};
`;

export const SelectButton = styled.div`
    width: 320px;
    height: 50px;
    border-radius: 25px;
    color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${({ theme }) => theme.primary};

    div {
        width: 310px;
        font-size: 20px;
        font-weight: 800;
    }
    span {
        padding-left: ${v.mdSpacing};
        font-size: 24px;
        color: ${({ theme }) => theme.textMain};
    }

    i {
        color: ${({ theme }) => theme.primary};
        font-size: 30px;
        margin: 0 ${v.lgSpacing};
        cursor: pointer;
    }
`;

export const SmallMonthChanger = styled.div`
    height: 30px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: ${v.lgSpacing};

    div {
        padding-right: ${v.mdSpacing};
        font-size: 18px;
        font-weight: 500;
    }

    i {
        font-size: 25px;
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

export const SmallDayNameContainer = styled.div`
    width: 100%;
    padding: 0 10px;
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 65px));
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

export const SmallMonthContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 65px));
    grid-template-rows: ${({$row}) => ($row===5 ? "repeat(5, minmax(0, 75px))" : "repeat(6, minmax(0, 62.5px))")};
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

export const DayEvents = styled.div`
    width: 100%;
    padding-top: ${v.smSpacing};
    display: flex;
    justify-content: center;
    cursor: pointer;

    div {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: ${({ $col }) => $col};
    }
`;

export const SmallDayContainer = styled.div`
    border: 1px solid ${({ theme }) => theme.bg2};
    color: ${({ theme, $isDeactive }) => (!$isDeactive ? "" : theme.text)};
`;

export const SmallDate = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme, $isActive }) => (!$isActive ? "" : theme.bg2)};
`;


