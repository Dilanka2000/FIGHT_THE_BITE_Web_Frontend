import React from 'react'
import {
    AcceptButton,
    ButtonContainer,
    CampaignContainer,
    CampaignData,
    CampaignDataLeft,
    CampaignDataRight,
    Modal,
    ModalContent,
    ModalTitle,
    Overlay,
    RejectButton,
} from "../../../assets/styles/globalStyls";
import { acceptCampaignStatus } from '../../../helper/helper';

export default function AcceptCompaign({ setViewData, eventData, setEventData, setLoading, setUpdateSuccess }) {
    async function acceptCampaign() {
        setLoading(true);
        let promise = await acceptCampaignStatus(eventData._id);
        if (promise === "Update Successfully") {
            setLoading(false);
            setViewData(false);
            setEventData("");
            setUpdateSuccess(true);
        } else {
            setLoading(false);
        }
    }

    return (
        <Modal>
            <Overlay
                onClick={() => {
                    setViewData(false);
                    setEventData("");
                }}
            />
            <ModalContent>
                <ModalTitle>
                    <div>Campaign Request</div>
                    <i
                        className="fa-solid fa-circle-xmark"
                        onClick={() => {
                            setViewData(false);
                            setEventData("");
                        }}
                    ></i>
                </ModalTitle>

                <CampaignContainer>
                    <CampaignData>
                        <CampaignDataLeft>
                            <div>Organization Name</div>
                            <div>Campaign Title</div>
                            <div>Date</div>
                            <div>Venue</div>
                            <div>Start Time</div>
                        </CampaignDataLeft>
                        <CampaignDataRight>
                            <div>{eventData.orgname}</div>
                            <div>{eventData.name}</div>
                            <div>{eventData.date.substring(0, 10)}</div>
                            <div>{eventData.location}</div>
                            <div>{eventData.time}</div>
                        </CampaignDataRight>
                    </CampaignData>
                    <ButtonContainer>
                        <AcceptButton onClick={acceptCampaign}>Accept</AcceptButton>
                        <RejectButton>Reject</RejectButton>
                    </ButtonContainer>
                </CampaignContainer>
            </ModalContent>
        </Modal>
    );
}
