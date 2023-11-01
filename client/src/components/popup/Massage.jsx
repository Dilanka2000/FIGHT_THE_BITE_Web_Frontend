import React from 'react'
import { Modal, ModalContent, ModalTitle, Overlay, SendButton } from '../../assets/styles/globalStyls'
import profileImg from "../../assets/images/profile.png";
import { MassageContainer, PopImageAndText, PopInputTextArea, PopTital } from './popupStyle';

export default function Massage({eventData, setEventData, setMassageModal}) {
    return (
        <Modal>
            <Overlay
                onClick={() => {
                    setMassageModal(false);
                    setEventData("");
                }}
            />
            <ModalContent>
                <ModalTitle>
                    <PopImageAndText>
                        <div>
                            <img src={profileImg} alt="Profile 4to" />
                        </div>
                        <span>
                            {eventData.nic[2] < 5 ? "Mr. " : "Ms. "}
                            {eventData.name}
                        </span>
                    </PopImageAndText>
                    <i
                        className="fa-solid fa-circle-xmark"
                        onClick={() => {
                            setMassageModal(false);
                            setEventData("");
                        }}
                    ></i>
                </ModalTitle>
                <MassageContainer>
                    <PopTital>Write Your Contenet</PopTital>
                    <PopInputTextArea>
                        <textarea type="text" placeholder="Massage" />
                    </PopInputTextArea>
                    <SendButton>
                        <div>
                            Send
                            <i className="fa-solid fa-paper-plane"></i>
                        </div>
                    </SendButton>
                </MassageContainer>
            </ModalContent>
        </Modal>
    );
}