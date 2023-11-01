import React from 'react'
import { Modal, ModalContent, ModalTitle, Overlay } from '../../../assets/styles/globalStyls'
import { MainContainerView } from '../z-gsStyle';

export default function NewVillagerRequest({ setViewData, eventData, setEventData }) {
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
                    <div>New login requests</div>
                    <i
                        className="fa-solid fa-circle-xmark"
                        onClick={() => {
                            setViewData(false)
                            setEventData("");
                        }}
                    ></i>
                </ModalTitle>

                <MainContainerView>
                    
                </MainContainerView>
            </ModalContent>
        </Modal>
    );
}
