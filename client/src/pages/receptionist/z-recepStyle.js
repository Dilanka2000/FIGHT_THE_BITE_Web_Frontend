import { styled } from "styled-components";
import { v } from "../../assets/styles/variables";
import { ButtonContainer } from "../../assets/styles/globalStyls";


export const ProfilePic1 = styled.div`
display: flex;
align-items: center;
justify-content: center;


div {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.primary} ;
    cursor: pointer;
    margin:30px 0 0 0; 
}
`;

export const ProfilePic2 = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top:0;
left:255px;
rotate:355deg;

div {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background:#D9D9D9 ;
    cursor: pointer;
    margin:30px 0 0 0; 
}
`;


export const HrLine = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;


div{
height: 1px;
width: 80%;
background:#D9D9D9;
margin:10px 0 10px 0;

}
`;

export const DetailContainer = styled.div`
width:700px;
display: flex;
align-items: center;
justify-content: center;
padding:0 80px;
margin-bottom: 20px;

`;

export const LeftContainer = styled.div`


float: left;
width: 50%;
/* height: 300px; */
/* background:yellow; */
margin:0 0 0 50px;
font-weight:bold;
line-height:50px;
`;

export const RightContainer= styled.div`


width: 50%;
/* height: 300px; */
/* padding: 10px; */
/* background:purple; */
line-height:50px;
`;


export const ButtonSection= styled(ButtonContainer)`

margin:20px 0 40px 0;
`;

