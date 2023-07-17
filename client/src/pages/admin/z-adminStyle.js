import { styled } from "styled-components";
import { v } from "../../assets/styles/variables";


export const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
`;

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
    }
`;

export const MainContainer = styled.div`
    background: ${({ theme }) => theme.bg};
    border-radius: 10px;
`;

export const TableContainer = styled.div`
    width: 100%;
    height: 600px;
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

    tbody > tr:hover {
        border-left: 5px solid ${({ theme }) => theme.primary};
    }
`;

export const ImageAndText = styled.div`
    display: flex;
    align-items: center;
    padding-left: ${v.xxlSpacing};

    div {
        margin-right: ${v.lgSpacing};
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background: ${({ theme }) => theme.bg2};
    }

    span {
        font-weight: 600;
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
        background: ${({ theme }) => theme.bg2};
    }

    i {
        color: ${({ theme }) => theme.primary};
        font-size: 18px;
        font-weight: 500;
    }
`;

export const DeleteButton = styled.button`
    width: 125px;
    height: 40px;
    border-radius: 20px;
    background: ${({ theme }) => theme.primary};
    color: white;
    border: none;
    margin: 0 ${v.mdSpacing};
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

export const BottomContainer = styled.div`
    width: 100%;
    height: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${v.mdSpacing} ${v.xxlSpacing};
`;

export const BottomLeft = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.text};

    span {
        color: ${({ theme }) => theme.textMain};
        font-weight: 600;
    }
`;

export const BottomRight = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.text};
    margin-right: ${v.mdSpacing};

    i {
        font-size: 40px;
        cursor: pointer;
    }
`;

export const Slider = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 0 ${v.smSpacing};
`;

export const SliderObject = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 2px solid ${({ theme, $isActive }) => (!$isActive ? theme.text : theme.primary)};
    background: ${({ theme, $isActive }) => (!$isActive ? theme.bg : theme.primary)};
    color: ${({ theme, $isActive }) => (!$isActive ? theme.text : theme.bg)};
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;