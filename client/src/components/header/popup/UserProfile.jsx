import React from "react";

import { AddButton, Modal, ModalContent, Overlay} from "../../../assets/styles/globalStyls";
import { HrLine, ProfilePic, Column, DetailContainer, LeftContainer, RightContainer, ButtonSection, ProfilePic1, ProfilePic2 } from "../../../pages/receptionist/z-recepStyle";


export default function UserProfile({profile,setProfile}){
    return(
        <>
        {profile && (
            <Modal>
                <Overlay
                onClick={()=>{setProfile(false);
                }}
                
                />

                <ModalContent>
                        <ProfilePic1><div></div></ProfilePic1>
                        <ProfilePic2><div></div></ProfilePic2>
                        <HrLine><div></div></HrLine>
                        <DetailContainer>
                            <LeftContainer>
                                <div>Name</div>
                                <div>Address</div>
                                <div>NIC Number</div>
                                <div>Contact Number</div>
                                <div>Email</div>
                                <div>Division Name</div>
                                <div>Gramasewa Division</div>
                            </LeftContainer>
                            <RightContainer>
                                <div>{data.name}</div>
                                <div>{data.address}</div>
                                <div>{data.nic}</div>
                                <div>{data.contact}</div>
                                <div>{data.email}</div>
                                <div>{data.dName}</div>
                                <div>{data.gsDivision}</div>
                            </RightContainer>
                           
                        </DetailContainer>
                        
                            <ButtonSection><AddButton>Edit Profile</AddButton></ButtonSection>
                            
                    
                </ModalContent>
            </Modal>
        )}
        
        </>
    )
}


const data = 
    {
        name:"P.K.S.Shermila",
        address:"No:4/34,walasm,ulla,kirama",
        nic:"997678905V",
        contact:"076-4556789",
        email:"shermula@gmail.com",
        dName:"walasmulla",
        gsDivision:"88",

    }
