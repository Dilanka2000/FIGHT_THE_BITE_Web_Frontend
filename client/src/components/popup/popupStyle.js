import { styled } from "styled-components";
import { v } from "../../assets/styles/variables";
import { ImageAndText } from "../../pages/admin/z-adminStyle";

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

export const PopImageAndText = styled(ImageAndText)`
    padding-left: 0;
    height: 70px;
    padding-bottom: 10px;
`

export const MassageContainer = styled.div`
    padding: ${v.mdSpacing} ${v.lgSpacing};
    border-radius: ${v.borderRadius};
    background: ${({ theme }) => theme.bg};
    margin-top: -10px;
`;

export const PopTital = styled.div`
    padding-left: 20px;
    font-size: 22px;
    font-weight: 800;
`

export const PopInputTextArea = styled.div`
    padding: 20px;

    textarea {
        font-size: 18px;
        width: 45vw;
        height: 250px;
        padding: 20px;
        border: 2px dashed ${({ theme }) => theme.text};
        border-radius: ${v.borderRadius};

    }

    textarea:focus {
        outline: none;
    }
`;

// ------------------------ Announsment View Popup-----------------------------

export const MainContainerViewContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 1150px;
    padding: ${v.xlSpacing} ${v.xxlSpacing};
`;
export const ContentTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
`;
export const Receivers = styled.div`
    display: flex;
    align-items: center;

    span{
        padding-right: ${v.mdSpacing};
    }
`
export const AnnounsmentContent = styled.div`
    width: 100%;
    padding: ${v.mdSpacing};
    border: 2px dashed ${({ theme }) => theme.text};
    border-radius: ${v.borderRadius};
`;