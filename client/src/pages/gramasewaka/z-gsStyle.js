import { styled } from "styled-components";
import { v } from "../../assets/styles/variables";
import { FormTextInput, MainContainerBG } from "../../assets/styles/globalStyls";


export const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
`;

// ==================================== Villages ===================================
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888

export const GridTitle = styled.div`
    font-size: 20px;
    font-weight: 800;
    padding-top: ${v.lgSpacing};
    padding-bottom: ${v.mdSpacing};
`

export const GridTableContainerScroll = styled.div`
    width: 100%;
    height: 655px;
    background: ${({ theme }) => theme.bg};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        border-radius: 10px;
    }

    thead {
        width: 100%;
    }
    th {
        padding: ${v.xlSpacing} 0 35px 0;
        font-size: 16px;
        position: sticky;
        top: 0;
        background: ${({ theme }) => theme.bg};
    }
    tr {
        border-left: 5px solid ${({ theme }) => theme.bg};
        border-right: 10px solid ${({ theme }) => theme.bg2};
    }
    tbody > tr {
        height: 80px;
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
        width: 8px;
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

export const ScrollContainer = styled.div`
    width: 100%;
    height: 655px;
    display: flex;
    flex-direction: column;
    gap: ${v.lgSpacing};
    padding-right: ${v.smSpacing};
    overflow-y: scroll;

    div {
        width: 100%;
        border-radius: 5px;
        background: ${({ theme }) => theme.bg};
        padding: ${v.lgSpacing} ${v.xxlSpacing};
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-left: 5px solid ${({ theme }) => theme.bg};
        border-right: 5px solid ${({ theme }) => theme.bg};
    }
    div:hover {
        border-left: 5px solid ${({ theme }) => theme.primary};
    }
    p:first-child {
        width: 250px;
    }

    /* Define the scrollbar style */
    &::-webkit-scrollbar {
        width: 8px;
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

// ============================= popup ==========================
export const Grid40x60 = styled.div`
    width: 70vw;
    display: grid;
    grid-template-columns: 0.8fr 2fr;
    gap: ${v.xlSpacing};
`;

export const InputScrollContainer = styled.div`
    width: 100%;
    max-height: 600px;
    /* border: 1px solid ${({ theme }) => theme.primary}; */
    overflow-y: scroll;
    padding-right: ${v.smSpacing};

    /* Define the scrollbar style */
    &::-webkit-scrollbar {
        width: 8px;
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

export const FormTextInput2 = styled(FormTextInput)`
    label {
        width: 100px;
    }
    input {
        width: 320px;
    }
`;

export const SpaceDiv = styled.div`
    width: 100%;
    height: 25px;
`;

export const MainContainerBG2 = styled(MainContainerBG)`
    padding: ${v.mdSpacing};
    border: 1px solid ${({ theme }) => theme.primary};
`;

export const AddAndUndu = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: ${v.lgSpacing};

    i {
        font-size: 50px;
    }
`;

export const RadioButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    input{
        width: 25px;
        margin-right: 25px;
    }
`
