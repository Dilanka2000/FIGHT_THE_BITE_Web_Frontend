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

export const ProfileImage = styled.div`
    width: 100px;
    height: 100px;
    margin-bottom: ${v.mdSpacing};

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
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

export const MainGridContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${v.mdSpacing};
`;

export const RowContainer = styled.div`
    width: 100%;
    display: flex;
    gap: ${v.xxlSpacing};
    margin-bottom: ${v.mdSpacing};
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

export const Contact = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        margin-left: ${v.lgSpacing};
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fdeded;
        cursor: pointer;
    }

    i {
        color: ${({ theme }) => theme.primary};
        font-size: 18px;
        font-weight: 500;
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

export const CancleButton = styled.button`
    width: 125px;
    height: 40px;
    border-radius: 20px;
    background: ${({ theme }) => theme.bg3};
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
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

    
`;


// =========================== Calender ============================
// 88888888888888888888888888888888888888888888888888888888888888888

export const CalenderContainer = styled.div`
    width: 70%;
    padding: ${v.lgSpacing} ${v.xlSpacing} ${v.mdSpacing} ${v.xlSpacing};
    background: ${({ theme }) => theme.bg};
    border-radius: ${v.borderRadius};
    /* height: 800px; */
`;

export const DeatailConainer = styled.div`
    width: 28%;
    /* background: ${({ theme }) => theme.bg}; */
    border-radius: ${v.borderRadius};
    /* height: 800px; */
`;


// ========================== Popup Modal ==========================
// 88888888888888888888888888888888888888888888888888888888888888888
export const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
`;

export const Overlay = styled(Modal)`
    background: rgba(49, 49, 49, 0.5);
`;

export const ModalContent = styled.div`
    position: absolute;
    background: ${({ theme }) => theme.bg};
    min-width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${v.borderRadius};
`;

export const ModalTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.primary};
    border-radius: 10px 10px 0 0;
    color: white;
    font-size: 20px;
    font-weight: 600;
    padding: ${v.smSpacing} ${v.lgSpacing};

    i {
        cursor: pointer;
    }
`;

export const ModalFormContainer = styled.div`
    padding: ${v.xxlSpacing};

    button{
        margin-top: ${v.lgSpacing};
    }
`

export const FormTextInput = styled.div`
    display: flex;
    gap: ${v.smSpacing};
    margin-bottom: ${v.mdSpacing};
    align-items: center;

    label {
        width: 200px;
        font-size: 14px;
        font-weight: 600;
    }
    input {
        width: 350px;
        height: 35px;
        border-radius: 5px;
        border: 1px solid ${({ theme }) => theme.text};
        padding: 0 ${v.lgSpacing};
        color: ${({ theme }) => theme.text};
        font-size: 14px;
        ${({ $error }) => ($error ? "border: 2px solid #fc8181" : "")};
    }
    input:focus {
        outline: none;
    }
    p {
        font-size: 12px;
        font-weight: 500;
        color: red;
    }
`;

export const FormTextInputBlock = styled(FormTextInput)`
    flex-direction: column;
    align-items: flex-start;

    label{
        width: 100%;
    }
`;

