import { styled } from "styled-components";
import { v } from "../../assets/styles/variables";
import { FormTextInput, ModalFormContainer } from "../../assets/styles/globalStyls";


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
`

export const ModalFormContainerNew = styled(ModalFormContainer)`
  padding: 0px 60px 60px 60px
`;