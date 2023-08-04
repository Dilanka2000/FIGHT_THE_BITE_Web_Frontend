import { createGlobalStyle, styled } from "styled-components";
import { v } from "./variables"

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background: ${({ theme }) => theme.bg2};
        color: ${({ theme }) => theme.textMain};
        font-family: 'Poppins', sans-serif;
        letter-spacing: .6px;
    }
`;


/** ============================= Main Styling ============================= */
// 8888888888888888888888888888888888888888888888888888888888888888888888888888

export const TopContainer = styled.div`
    margin: ${v.lgSpacing} 0 ${v.xlSpacing} 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const AddButton = styled.button`
    width: 207px;
    height: 50px;
    border-radius: 25px;
    background: ${({ theme }) => theme.primary};
    color: white;
    font-size: 16px;
    border: none;
    cursor: pointer;
`;

export const SearchBar = styled.div`
    input {
        width: 824px;
        height: 50px;
        background: ${({ theme }) => theme.bg};
        border: none;
        border-radius: 25px;
        box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.02);
        padding: 0 ${v.xlSpacing};
    }

    input:focus {
        outline: none;
        color: ${({ theme }) => theme.textMain};
    }
`;

// ==================== Main container Stylings ====================
// 88888888888888888888888888888888888888888888888888888888888888888
export const MainContainerBG = styled.div`
    background: ${({ theme }) => theme.bg};
    border-radius: 10px;
`;
export const MainContainer = styled.div``;

export const MAinFlexContainer = styled.div`
    margin-top: ${v.lgSpacing};
    display: flex;
    justify-content: space-between;
`;

// ==================== Table container Stylings ====================
// 888888888888888888888888888888888888888888888888888888888888888888
export const TableContainer = styled.div`
    width: 100%;
    height: 620px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;

    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        border-radius: 10px;
    }
    td:first-child {
        width: 370px;
    }
    td:last-child {
        width: 400px;
    }
    th {
        padding-bottom: ${v.lgSpacing};
        font-size: 16px;
    }
    tr {
        border-left: 5px solid ${({ theme }) => theme.bg};
        border-right: 5px solid ${({ theme }) => theme.bg};
    }
    tbody > tr {
        height: 100px;
        border-top: 1px solid ${({ theme }) => theme.bg3};
    }
    td {
        text-align: center;
        font-size: 14px;
    }
    button {
        margin: 0 ${v.smSpacing};
    }

    tbody > tr:hover {
        border-left: 5px solid ${({ theme }) => theme.primary};
    }
`;

export const TableContainerScroll = styled.div`
    width: 100%;
    height: 720px;
    background: ${({ theme }) => theme.bg};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
    }
    td:first-child {
        width: 370px;
    }
    td:last-child {
        width: 400px;
    }
    thead {
        width: 100%;
    }
    th {
        padding: ${v.xxlSpacing} 0 45px 0;
        font-size: 16px;
        position: sticky;
        top: 0;
        background: ${({ theme }) => theme.bg};
    }
    tr {
        border-left: 5px solid ${({ theme }) => theme.bg};
        border-right: 30px solid ${({ theme }) => theme.bg2};
    }
    tbody > tr {
        height: 100px;
        border-top: 1px solid ${({ theme }) => theme.bg3};
    }
    td {
        text-align: center;
        font-size: 14px;
    }
    button {
        margin: 0 ${v.smSpacing};
    }

    tbody > tr:hover {
        border-left: 5px solid ${({ theme }) => theme.primary};
    }

    /* Define the scrollbar style */
    &::-webkit-scrollbar {
        width: 15px;
        height: 15px;
    }

    /* Define the thumb style */
    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.primary};
        border-radius: 5px;
    }

    /* Define the track style */
    &::-webkit-scrollbar-track:horizontal {
        background-color: white;
        box-shadow: inset 0 0 2px 2px gainsboro;
    }
`;

// ==================== Button container Stylings ====================
// 8888888888888888888888888888888888888888888888888888888888888888888
export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${v.mdSpacing};
`;

export const DeleteButton = styled.button`
    width: 125px;
    height: 40px;
    border-radius: 20px;
    background: ${({ theme }) => theme.primary};
    color: white;
    border: none;
    cursor: pointer;
`;

export const UpdateButton = styled.button`
    width: 125px;
    height: 40px;
    border-radius: 20px;
    background: #fcc43e;
    color: white;
    border: none;
    cursor: pointer;
`;

export const Button = styled.button`
    width: 125px;
    height: 40px;
    border-radius: 20px;
    background: ${({ $color }) => $color};
    color: white;
    border: none;
    cursor: pointer;
`;

// ==================== List container Stylings ====================
// 88888888888888888888888888888888888888888888888888888888888888888
export const ListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: ${v.xlSpacing};
`;

export const ListItem = styled.div`
    width: 365px;
    height: 294px;
    background: ${({ theme }) => theme.bg};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`;