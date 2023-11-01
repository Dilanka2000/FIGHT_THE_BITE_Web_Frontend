import React from "react";
import { ButtonContainer, DeleteContainer, DeleteContainerLeft, DeleteContainerRight } from "./popupStyle";
import { CancleButton, DeleteButton, Modal, ModalContent, ProfileImage } from "../../assets/styles/globalStyls";
import { deleteData } from "../../helper/helper";
import ProfilePic from "../../assets/images/profile.png"

async function hadelDelete(id, setDeleteSuccess, setLoading) {
    setLoading(true);
    let promise = await deleteData({ id });
    if (promise === "Delete Successfully") {
        setLoading(false);
        setDeleteSuccess(true);
        window.location.reload();
    }
}

export default function DeleteUser({ eventData, setEventData, setDeleteModal, setDeleteSuccess, setLoading }) {

    return (
        <Modal>
            <ModalContent>
                <DeleteContainer>
                    <DeleteContainerLeft>
                        <ProfileImage>
                            <img
                                src={ProfilePic}
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
                                hadelDelete(eventData._id, setDeleteSuccess, setLoading);
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
