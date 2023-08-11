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
        color: ${({ theme }) => theme.textMain};
    }
`;

export const MainContainerBG = styled.div`
    background: ${({ theme }) => theme.bg};
    border-radius: 10px;
`;
export const MainContainer = styled.div`
`;

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
    button{
        margin: 0 ${v.smSpacing};
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
        background: #fdeded;
        cursor: pointer;
    }

    i {
        color: ${({ theme }) => theme.primary};
        font-size: 18px;
        font-weight: 500;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: ${v.mdSpacing};
`

export const DeleteButton = styled.button`
    width: 125px;
    height: 40px;
    border-radius: 20px;
    background: ${({ theme }) => theme.primary};
    color: white;
    border: none;
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


// ==================================================================================================
// ==================================================================================================

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

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`;

export const ProfileImage = styled.div`
    width: 100px;
    height: 100px;
    margin-bottom: ${v.mdSpacing};
`

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



// ====================================== Map ==========================================
// =====================================================================================

export const MapMAinContainer = styled.div`
    margin-top: ${v.lgSpacing};
    display: flex;
    justify-content: space-between;
`
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






//------------------------------gramasewaka_villager----------------------------------------------------------------
export const Title = styled.div`
 font-size:20px;
 font-weight:800;
 background: rgb(245, 245, 245);
 
 `

export const TableTitle = styled.div`
    font-size:16px;
    font-weight:800;
    `;

export const ViewButton = styled.button`
    width: 125px;
    height: 40px;
    border-radius: 20px;
    background: #FCC43E;
    color: white;
    border: none;
    cursor: pointer;
`;
export const MainContainerBG1 = styled.div`
    
    margin-top:10%
    width : 50%;
    height:200px;
`;

export const MainContainerBG2 = styled.div`
    background: ${({ theme }) => theme.bg};
    border-radius: 10px;
    width : 50%;
    margin-left:40%;
    margin-top:-10%
   
`;


export const LableList = styled.div`
   
   width:50%;
`;
export const ListName = styled.div`
    width: 300px;
    gap: ${v.xlSpacing};
    background-color:white;
    margin-top:4%;
    height:80px;
    display:flex;
    

    
`;

// 2 tables side by side
export const MainTableContainer = styled.div`
    display:flex;
   
`


export const TableContainer1 = styled.div`
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
    button{
        margin: 0 ${v.smSpacing};
    }

    tbody > tr:hover {
        border-left: 5px solid ${({ theme }) => theme.primary};
    }
`;


//----------------organizatoin----------------------------------------------

