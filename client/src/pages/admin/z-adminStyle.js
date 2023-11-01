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



// =================================== Dashboard ===================================
// 888888888888888888888888888888888888888888888888888888888888888888888888888888888

export const DashboardLeftContainer = styled.div`
    width: 73%;
    border-radius: ${v.borderRadius};
    min-height: 800px;
`;

export const DashboardRightContainer = styled.div`
    width: 25%;
    background: ${({ theme }) => theme.bg};
    border-radius: ${v.borderRadius};
    min-height: 800px;
    box-shadow: 0 7px 25px 0 rgba(0, 0, 0, 0.08);
`;

export const Cards = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 20px;
`;

export const Card = styled.div`
    padding: 15px 25px;
    background: ${({ theme }) => theme.bg};
    border-radius: 10px;
    box-shadow: 0 7px 25px 0 rgba(0, 0, 0, 0.08);
`;

export const CardTitle = styled.div`
    color: ${({ theme }) => theme.textMain};
    font-size: 22px;
    font-weight: 800;
`;

export const AffectedRate = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 0 0 10px 0; */

    div {
        color: ${({ theme }) => theme.primary};
        font-size: 56px;
        font-weight: 800;
    }
    span {
        color: ${({ theme }) => theme.textMain};
        font-size: 32px;
        font-weight: 800;
    }
`;

export const CardRoles = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const Role = styled.div`
    display: flex;
    align-items: center;
`;
export const RoleIcon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};

    img {
        width: 100%;
    }
`;
export const RoleDesc = styled.div`
    margin-left: 10px;
    h4 {
        color: ${({ theme }) => theme.text};
        font-weight: 400;
    }
    div {
        font-size: 28px;
        font-weight: 800;
    }
`;

export const Charts = styled.div`
    margin-top: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    grid-gap: 20px;
`;

export const Chart = styled.div`
    background: ${({ theme }) => theme.bg};
    padding: 25px 20px;
    border-radius: 10px;
    box-shadow: 0 7px 25px 0 rgba(0, 0, 0, 0.08);
    width: 100%;
`;

export const ChartTitle = styled.div`
    color: ${({ theme }) => theme.textMain};
    font-size: 22px;
    font-weight: 800;
    padding: 0 0 30px 35px;
`;

export const CalenderTitle = styled.div`
    color: ${({ theme }) => theme.textMain};
    font-size: 22px;
    font-weight: 800;
    padding-left: 20px;
`;

export const LineChartContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    background: ${({ theme }) => theme.bg};
    padding: 25px 20px;
    border-radius: 10px;
    box-shadow: 0 7px 25px 0 rgba(0, 0, 0, 0.08);
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
export const SubTitle = styled(Title)`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
    padding-top: 0;
    margin-top: -${v.lgSpacing};
`;

export const RolleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    font-size: 14px;
    font-weight: 500;
`
export const RolleButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 40px;
    border-radius: 20px;
    border: 2px solid ${({ theme }) => theme.primary};
    color: ${({ theme, $isActive }) => (!$isActive ? theme.primary : theme.bg)};
    background: ${({ theme, $isActive }) => (!$isActive ? "" : theme.primary)};
    cursor: pointer;

    i {
        font-size: 16px;
        margin-right: ${v.smSpacing};
    }
`;

export const MassageContainer = styled.div`
    padding: 0 ${v.xxlSpacing};
`
export const AnnouncementTitle = styled.div`
    width: 100%;

    input {
        font-size: 18px;
        width: 100%;
        height: 60px;
        padding: 20px;
        border: 2px dashed ${({ theme }) => theme.text};
        border-radius: ${v.borderRadius};
    }
`;

export const AnnouncementMassage = styled.div`
    padding: 20px 0;

    textarea {
        font-size: 18px;
        width: 100%;
        height: 250px;
        padding: 20px;
        border: 2px dashed ${({ theme }) => theme.text};
        border-radius: ${v.borderRadius};
    }

    textarea:focus {
        outline: none;
    }
`;

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