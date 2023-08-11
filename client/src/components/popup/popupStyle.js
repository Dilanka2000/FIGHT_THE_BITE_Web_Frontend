import { styled } from "styled-components";
import { v } from "../../assets/styles/variables";

export const FlashContainer = styled.div`
    width: 600px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 10px 10px 10px rgba(0, 0, 0, 0.12);
    border-radius: ${v.borderRadius};
    padding: ${v.xlSpacing};

    i {
        font-size: 100px;
        color: green;
        margin-bottom: ${v.lgSpacing};
    }
`;

export const DeleteContainer = styled.div`
    width: 860px;
    height: 280px;
    display: flex;
    background: ${({ theme }) => theme.bg3};
    /* box-shadow: 0 5px 10px 5px ${({ theme }) => theme.bgAlpha}; */
    border-radius: ${v.borderRadius};
`;

export const DeleteContainerLeft = styled.div`
    width: 280px;
    height: 280px;
    background: ${({ theme }) => theme.primary};
    border-radius: ${v.borderRadius};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
        font-size: 18px;
        font-weight: 600;
        color: ${({ theme }) => theme.bg};
    }
    p {
        color: ${({ theme }) => theme.bg};
    }
`;

export const DeleteContainerRight = styled.div`
    width: 580px;
    height: 280px;
    padding: ${v.xlSpacing};

    div {
        font-size: 20px;
        font-weight: 800;
        margin: ${v.lgSpacing} 0;
    }
`;

export const ButtonContainer = styled.div`
    padding-top: ${v.lgSpacing};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${v.mdSpacing};

    button {
        box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.12);
    }
`;