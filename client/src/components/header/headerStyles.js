import { styled } from "styled-components";
import { v } from "../../assets/styles/variables";

export const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
`;

export const PageName = styled.div`
    font-weight: bold;
    font-size: 25px;
`;

export const ACC = styled.div`
    display: flex;
    align-items: center;
    gap: ${v.xlSpacing};
`;

export const AccDetails = styled.div`
    display: flex;
`;

export const AccProfile = styled.div`
    display: flex;
`;

export const AccName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: end;
    margin-right: ${v.mdSpacing};

    div {
        font-weight: bold;
        font-size: 14px;
    }
    p {
        font-size: 12px;
        color: ${({ theme }) => theme.text};
    }
`;

export const AccImage = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: white;

    img{
        width: 100%;
    }
`;

export const LogoutButton = styled.button`
    width: 100px;
    height: 35px;
    border-radius: 20px;
    background: ${({ theme }) => theme.primary};
    color: white;
    font-size: 16px;
    border: none;
    cursor: pointer;
`;
