import React from "react";
import { Modal, ModalContent, ModalTitle, Overlay } from "../../../assets/styles/globalStyls";

export default function ViewVillagers({setViewData, eventData, setEventData}) {
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
                    <div>{eventData.name}</div>
                    <i
                        className="fa-solid fa-circle-xmark"
                        onClick={() => {
                            setViewData(false);
                            setEventData("");
                        }}
                    ></i>
                </ModalTitle>
                <div>{eventData.name}</div>
            </ModalContent>
        </Modal>
    );
}
