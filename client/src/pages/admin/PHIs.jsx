import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/layouts/AdminLayout'
import { AddButton, ButtonContainer, CancleButton, DeleteButton, DeleteListItem, DeleteProfile, DeleteProfileImage, DeleteProfileName, ListContainer, ListItem, MainContainer, Modal, ModalContent, ProfileImage, SearchBar, TopContainer, UpdateButton } from "../../assets/styles/globalStyls";
import { ProfileContact, ProfileName } from './z-adminStyle'
import profileImg from "../../assets/images/profile.png";
import EmpHeader from '../../components/header/EmpHeader';
import BottomSlider from '../../components/slider/BottomSlider';
import useFetch from '../../hooks/fetch-hook';
import PageNotFound from '../PageNotFound';
import Loading from '../../components/popup/Loading';
import RegisterSuccess from '../../components/popup/RegisterSuccess';
import UpdateSuccess from '../../components/popup/UpdateSuccess';
import PHIAddAndUpdate from './popup/PHIAddAndUpdate';
import { deleteData } from '../../helper/helper';
import DeleteSuccess from '../../components/popup/DeleteSuccess';
import Massage from '../../components/popup/Massage';

export default function PHIs() {

    const [{ apiData, serverError, isLoading }] = useFetch("getUsers/PHI");

    const sliderValue = 8;
    const [index, setIndex] = useState(0);
    let length = 0;
    if(!isLoading){length = apiData.length;}
    const x = index + sliderValue > length ? length : index + sliderValue;

    const [eventData, setEventData] = useState("");
    const [addModal, setAddModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const [memberCount, setMemberCount] = useState(1);
    const [massageModel, setMassageModel] = useState(false);


    async function hadelDelete(id, setDeleteSuccess, setLoading) {
        setLoading(true);
        let promise = await deleteData({ id });
        if (promise === "Delete Successfully") {
            setLoading(false);
            setDeleteSuccess(true);
            window.location.reload();
        }
    }

    useEffect(() => {
        if (registerSuccess) {
            window.location.reload();
            const slideIntaval = setInterval(() => {
                setRegisterSuccess(false);
            }, 2000);
            return () => clearInterval(slideIntaval);
        } else if (updateSuccess) {
            window.location.reload();
            const slideIntaval = setInterval(() => {
                setUpdateSuccess(false);
            }, 2000);
            return () => clearInterval(slideIntaval);
        } else if (deleteSuccess) {
            window.location.reload();
            const slideIntaval = setInterval(() => {
                setDeleteSuccess(false);
            }, 2000);
            return () => clearInterval(slideIntaval);
        }
    }, [registerSuccess, updateSuccess, deleteSuccess]);

    const getDataContent = (data) => {
        let content = [];
        for (let i = index; i < x; i++) {
            const item = data[i];
            if (deleteModal && eventData._id === item._id) {
                content.push(
                    <DeleteListItem key={item._id}>
                        <DeleteProfile>
                            <DeleteProfileImage>
                                <img src={profileImg} alt="Profile" />
                            </DeleteProfileImage>
                            <DeleteProfileName>{item.nic[2] < 5 ? "Mr. " : "Ms. " }{item.name}</DeleteProfileName>
                        </DeleteProfile>
                        <center>
                            <h4>
                                Do you want to delete this user from the System
                            </h4>
                            <p>
                                (All user data according to this user will be
                                permanently delete from the system)
                            </p>
                        </center>
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
                    </DeleteListItem>
                );
            } else {
                content.push(
                    <ListItem key={item._id}>
                        <ProfileImage>
                            <img src={profileImg} alt="Profile" />
                        </ProfileImage>
                        <ProfileName>
                            {item.nic[2] < 5 ? "Mr. " : "Ms. "}
                            {item.name}
                        </ProfileName>
                        <ProfileContact>
                            {item.contact}
                            <div
                                onClick={() => {
                                    setMassageModel(true);
                                    setEventData(item);
                                }}
                            >
                                <i className="fa-regular fa-envelope"></i>
                            </div>
                        </ProfileContact>
                        <ButtonContainer>
                            <DeleteButton
                                onClick={() => {
                                    setEventData(item);
                                    setDeleteModal(true);
                                }}
                            >
                                Delete
                            </DeleteButton>
                            <UpdateButton
                                onClick={() => {
                                    console.log(item);
                                    setEventData(item);
                                    setMemberCount(item.gsDivisions.length);
                                    setUpdateModal(true);
                                    setAddModal(false);
                                }}
                            >
                                Update
                            </UpdateButton>
                        </ButtonContainer>
                    </ListItem>
                );
            }
        }
        return content;
    };

    if (serverError) return <PageNotFound />;
    return (
        <AdminLayout>
            <EmpHeader pageName={"Public Health Officers"} />

            <TopContainer>
                <AddButton
                    onClick={() => {
                        setAddModal(true);
                        setUpdateModal(false);
                    }}
                >
                    Add new
                </AddButton>
                <SearchBar>
                    <input type="text" placeholder="Search here..." />
                </SearchBar>
            </TopContainer>

            <MainContainer>
                <ListContainer>{getDataContent(apiData)}</ListContainer>

                {length > 8 && (
                    <BottomSlider
                        length={length}
                        index={index}
                        setIndex={setIndex}
                        x={x}
                        sliderValue={sliderValue}
                    />
                )}
            </MainContainer>

            {/* ======================= Add & Update village officer ========================= */}
            {/* 888888888888888888888888888888888888888888888888888888888888888888888888888888 */}
            <PHIAddAndUpdate
                addModal={addModal}
                updateModal={updateModal}
                setAddModal={setAddModal}
                setUpdateModal={setUpdateModal}
                eventData={eventData}
                setEventData={setEventData}
                setRegisterSuccess={setRegisterSuccess}
                setUpdateSuccess={setUpdateSuccess}
                setLoading={setLoading}
                memberCount={memberCount}
                setMemberCount={setMemberCount}
            />

            {loading && (
                <Modal>
                    <ModalContent>
                        <Loading />
                    </ModalContent>
                </Modal>
            )}

            {registerSuccess && (
                <Modal>
                    <ModalContent>
                        <RegisterSuccess />
                    </ModalContent>
                </Modal>
            )}

            {updateSuccess && (
                <Modal>
                    <ModalContent>
                        <UpdateSuccess />
                    </ModalContent>
                </Modal>
            )}

            {/* ========================== Delete village officer ============================ */}
            {/* 888888888888888888888888888888888888888888888888888888888888888888888888888888 */}
            {deleteSuccess && (
                <Modal>
                    <ModalContent>
                        <DeleteSuccess />
                    </ModalContent>
                </Modal>
            )}

            {/* ======================= Massaging to village officer ========================= */}
            {/* 888888888888888888888888888888888888888888888888888888888888888888888888888888 */}
            {massageModel && (
                <Massage
                    eventData={eventData}
                    setEventData={setEventData}
                    setMassageModal={setMassageModel}
                />
            )}
        </AdminLayout>
    );
}
