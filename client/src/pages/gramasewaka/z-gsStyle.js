import { styled } from "styled-components";
import { v } from "../../assets/styles/variables";
import {
    FormTextInput,
    MainContainerBG,
    ModalFormContainer,
    ModalContent,
    ModalTitle,
} from "../../assets/styles/globalStyls";

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
`;

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
        width: 80px;
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
    border: 1px solid ${({ theme }) => theme.bg3};
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

    input {
        width: 15px;
        margin: 0 10px 0 25px;
    }
`;

//----------------organizatoin----------------------------------------------

export const PopUpContentHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0px;

    div {
        width: 39%;
        height: 1px;
        background: ${({ theme }) => theme.text};
    }

    span {
        padding: 0 20px;
        color: ${({ theme }) => theme.text};
    }
`;

export const TextInputField = styled(FormTextInput)`
    display: block;
    padding: 0px 25px;
`;

export const TextInputFieldParts = styled.div`
    display: flex;
`;

// ------------------------ Villager Detail View Popup-----------------------------

export const MainContainerView = styled.div`
    display: flex;
`;

export const ModalFormContainerNew = styled(ModalFormContainer)`
    padding: 0px 60px 60px 60px;
`;

export const ModalContentNew = styled(ModalContent)`
    width: 1300px;
`;

export const AddVillagerPopUpBack = styled.div`
    width: 37%;
    background: ${({ theme }) => theme.primary};
    padding: 75px 0px;
    border-radius: 10px 0px 0px 10px;
`;

export const AddVillagerPopUpBackHouseHolderInfo = styled.div`
    padding: 5px 30px 25px 60px;
    color: ${({ theme }) => theme.bg};

    h5 {
        font-weight: 900;
        font-size: 18px;
    }

    p {
        font-size: 16px;
        margin: 8px 40px;
    }
`;

export const PopUpContentHeaderNew = styled(PopUpContentHeader)`
    padding: 30px 0px;

    div {
        width: 33%;
    }
`;

export const PopUpContainerHeaderNewContainer = styled.div`
    width: 100%;
`;

export const MemberDetailsTble = styled.div`
    width: 100%;

    table {
        width: 100%;
        /* padding: 0px 60px; */
    }

    tr {
        padding: 2.5px;
    }

    td{
        width: 50%;
    }
`;
export const AddVillagerPopUpBackHouseHolderInfoNew = styled.div`
    display: flex;
    margin: 5px 5px 5px 75px;
    /* justify-content: center; */

    h5 {
        font-weight: 900;
        font-size: 18px;
        width: 150px;
        color: ${({ theme }) => theme.textMain};
    }

    p {
        font-size: 18px;
        color: ${({ theme }) => theme.text};
    }
`;

export const LineInMemberDetails = styled.div`
    width: 86%;
    height: 1px;
    background: ${({ theme }) => theme.text};
    margin: 30px auto;
`;

export const ModalTitleNew = styled(ModalTitle)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-radius: 10px 10px 0 0;
    font-size: 25px;
    font-weight: 600;
    padding: 25px 25px 0px 0px;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.bg};
`;
