import React from "react";
import { ButtonContainer, DeleteContainer, DeleteContainerLeft, DeleteContainerRight } from "./popupStyle";
import { CancleButton, DeleteButton, Modal, ModalContent, ProfileImage } from "../../assets/styles/globalStyls";
import { deleteData } from "../../helper/helper";

async function hadelDelete(id) {
    let promise = await deleteData({ id });
    if (promise === "Delete Successfully") window.location.reload();
}

export default function DeleteUser({ eventData, setEventData, setDeleteModal }) {

    return (
        <Modal>
            <ModalContent>
                <DeleteContainer>
                    <DeleteContainerLeft>
                        <ProfileImage>
                            <img
                                src="https://starsunfolded.com/wp-content/uploads/2017/07/Sai-Pallavi.jpg"
                                alt="Profile"
                            />
                        </ProfileImage>
                        <div>{eventData.name}</div>
                        <p>{eventData.gsDivision}</p>
                    </DeleteContainerLeft>
                    <DeleteContainerRight>
                        <div>
                            Do you want to delete this user from the System
                        </div>
                        <p>
                            (All user data according to this user will be
                            permanently delete from the system)
                        </p>
                        <ButtonContainer>
                            <CancleButton onClick={() => {
                                setEventData("");
                                setDeleteModal(false);
                            }}>Cancle</CancleButton>
                            <DeleteButton onClick={() => {
                                hadelDelete(eventData._id);
                                setEventData("");
                                setDeleteModal(false);
                            }}>Delete</DeleteButton>
                        </ButtonContainer>
                    </DeleteContainerRight>
                </DeleteContainer>
            </ModalContent>
        </Modal>
    );
}
