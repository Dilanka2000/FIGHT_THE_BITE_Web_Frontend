import React from "react";
import {
    AddButton,
    ButtonContainer,
    Modal,
    ModalContent,
    ModalTitle,
    Overlay,
} from "../../assets/styles/globalStyls";
import {
    AnnounsmentContent,
    ContentTop,
    MainContainerViewContent,
    Receivers,
} from "./popupStyle";
import {
    DotContainer,
    ReceiverDot,
    ReceiverDot0,
} from "../../pages/admin/z-adminStyle";

export default function ViewAnnouncement({
    setViewData,
    eventData,
    setEventData,
}) {
    const color = {
        A: "#E74646",
        P: "#FB7D5B",
        V: "#4CBC9A",
    };

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
                    <div>{eventData.title}</div>
                    <i
                        className="fa-solid fa-circle-xmark"
                        onClick={() => {
                            setViewData(false);
                            setEventData("");
                        }}
                    ></i>
                </ModalTitle>

                <MainContainerViewContent>
                    <ContentTop>
                        <div>Date : {eventData.date}</div>
                        <Receivers>
                            <span>Receivers :</span>
                            <DotContainer>
                                {eventData.receivers[0] && (
                                    <ReceiverDot
                                        $color={color[eventData.receivers[0]]}
                                    >
                                        {eventData.receivers[0]}
                                    </ReceiverDot>
                                )}
                                {eventData.receivers[1] && (
                                    <ReceiverDot0
                                        $color={color[eventData.receivers[1]]}
                                    >
                                        {eventData.receivers[1]}
                                    </ReceiverDot0>
                                )}
                                {eventData.receivers[2] && (
                                    <ReceiverDot0
                                        $color={color[eventData.receivers[2]]}
                                    >
                                        {eventData.receivers[2]}
                                    </ReceiverDot0>
                                )}
                            </DotContainer>
                        </Receivers>
                    </ContentTop>
                    <AnnounsmentContent>{eventData.massage}</AnnounsmentContent>
                    <ButtonContainer>
                        <AddButton
                            onClick={() => {
                                setViewData(false);
                                setEventData("");
                            }}
                        >
                            OK
                        </AddButton>
                    </ButtonContainer>
                </MainContainerViewContent>
            </ModalContent>
        </Modal>
    );
}
