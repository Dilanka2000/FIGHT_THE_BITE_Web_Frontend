import { styled } from "styled-components";
import { v } from "../../assets/styles/variables";


export const SelectButton = styled.div`
    min-width: 207px;
    height: 50px;
    padding: 0 ${v.lgSpacing};
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.bg};
    font-size: 16px;

    i {
        color: ${({ theme }) => theme.primary};
        font-size: 30px;
        margin-left: ${v.lgSpacing};
        cursor: pointer;
    }
`;

// ================================ Village Officer ================================
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888

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

        img{
            width: 100%;
        }
    }

    span {
        font-weight: 600;
    }
`;



// ====================================== PHI ======================================
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888

export const ProfileName = styled.div`
    font-size: 18px;
    font-weight: 800;
`

export const ProfileContact = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${v.mdSpacing};

    div {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-left: ${v.mdSpacing};
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fdeded;
        cursor: pointer;
    }

    i {
        color: ${({ theme }) => theme.primary};
        font-size: 16px;
        font-weight: 500;
    }
`;

export const MultyInputs = styled.div`
    width: 350px;
    max-height: 150px;
    padding: ${v.mdSpacing};
    border: 1px solid ${({ theme }) => theme.text};
    border-radius: ${v.borderRadius};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow-y: scroll;

    div {
        margin-bottom: ${v.smSpacing};
    }

    input {
        width: 145px;
        height: 30px;
    }

    i {
        font-size: ${v.lgSpacing}!important;
    }

    /* Define the scrollbar style */
    &::-webkit-scrollbar {
        width: 10px;
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



// ====================================== Map ======================================
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888

export const MapContainer = styled.div`
    width: 68%;
    background: ${({ theme }) => theme.bg};
    border-radius: ${v.borderRadius};
    height: 800px;
`;

export const DivisionContainer = styled.div`
    width: 30%;
    background: ${({ theme }) => theme.bg};
    border-radius: ${v.borderRadius};
    height: 800px;
`;



// =================================== Campaigns ===================================
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888





// ================================= Announcement ==================================
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888

export const Title = styled.div`
    font-size: 24px;
    font-weight: 800;
    padding-top: ${v.lgSpacing};
    padding-left: ${v.xxlSpacing};
    padding-bottom: ${v.xlSpacing};
    margin-top: ${v.lgSpacing};
`

export const TableTitle = styled.div`
    font-size: 16px;
    font-weight: 800;
    width: 450px;
`

export const DotContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ReceiverDot = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${({ $color }) => $color};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 800;
    color: ${({ theme }) => theme.bg};
`;

export const ReceiverDot0 = styled(ReceiverDot)`
    margin-left: -10px;
`;