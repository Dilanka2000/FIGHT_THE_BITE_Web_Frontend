import React, { useEffect, useState } from "react";
import ReceptionistLayout from "../../components/layouts/ReceptionistLayout";
import EmpHeader from "../../components/header/EmpHeader";
import { AddButton, Contact, DeleteButton, MainContainerBG, Modal, ModalContent, SearchBar, TableContainer, TopContainer, UpdateButton } from "../../assets/styles/globalStyls";
import { ImageAndText } from "../admin/z-adminStyle";
import BottomSlider from "../../components/slider/BottomSlider";
import RegisterSuccess from "../../components/popup/RegisterSuccess";
import useFetch from "../../hooks/fetch-hook";
import PageNotFound from "../PageNotFound";
import profileImg from "../../assets/images/profile.png";
import UpdateSuccess from "../../components/popup/UpdateSuccess";
import DeleteUser from "../../components/popup/DeleteUser";
import DoctorAddAndUpdate from "./PopUp/DoctorAddAndUpdate";
import { getUserByEmail } from "../../helper/helper";


export default function AddDoctor() {

    const [{ apiData, serverError, isLoading }] = useFetch("getUsers/DR");     
    
    const sliderValue = 5;
    const [index, setIndex] = useState(0);
    let length = 0;
    if(!isLoading){length = apiData.length;}
    const x = index + sliderValue > length ? length : index + sliderValue;
    
    const [eventData, setEventData] = useState('');
    const [addModal, setAddModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const [updateSuccess, setUpdateSuccess] = useState(false);
    // const [deleteSuccess, setDeleteSuccess] = useState(false);
    
    
    useEffect(() => {
        if (registerSuccess) {
            window.location.reload();
            const slideIntaval = setInterval(() => {
                setRegisterSuccess(false);
            }, 2000);
            return () => clearInterval(slideIntaval);
        }
        else if (updateSuccess) {
            window.location.reload();
            const slideIntaval = setInterval(() => {
                setUpdateSuccess(false);
            }, 2000);
            return () => clearInterval(slideIntaval);
        }
        
    }, [registerSuccess, updateSuccess]);
    
    const getDataContent = data => {
        let content = [];
        for (let i = index; i < x; i++) {
            const item = data[i];
            content.push(
                <tr key={item._id}>
                    <td>
                        <ImageAndText>
                            <div>
                                <img src={profileImg} alt="Profile 4to" />
                            </div>
                            <span>{item.registrationNumber}</span>
                        </ImageAndText>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    
                    <td>
                        <Contact>
                            {item.contact}
                            
                        </Contact>
                    </td>
                    <td>{item.wardNo}</td>
                    <td>
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
                                setEventData(item);
                                setUpdateModal(true);
                                setAddModal(false);
                            }}
                        >
                            Update
                        </UpdateButton>
                    </td>
                </tr>
            );
        }
        return content;
    }
    
    if (serverError) return <PageNotFound />;
    return (
        <ReceptionistLayout>
            <EmpHeader pageName={"Manage Doctors"} />

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

            <MainContainerBG>
                <TableContainer>
                    <table>
                        <thead>
                            <tr>
                                <th>Registration Number</th>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>Contact</th>
                                <th>Ward No</th>
                            </tr>
                        </thead>
                        <tbody>{getDataContent(apiData)}</tbody>
                    </table>
                </TableContainer>

                <BottomSlider
                    length={length}
                    index={index}
                    setIndex={setIndex}
                    x={x}
                    sliderValue={sliderValue}
                />
            </MainContainerBG>

            {/* ======================= Add & Update village officer ========================= */}
            {/* 888888888888888888888888888888888888888888888888888888888888888888888888888888 */}
            <DoctorAddAndUpdate
                addModal={addModal}
                updateModal={updateModal}
                setAddModal={setAddModal}
                setUpdateModal={setUpdateModal}
                eventData={eventData}
                setEventData={setEventData}
                setRegisterSuccess={setRegisterSuccess}
                setUpdateSuccess={setUpdateSuccess}
            />

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
            {deleteModal && <DeleteUser
                eventData={eventData}
                setEventData={setEventData}
                setDeleteModal={setDeleteModal}
            />}
            {/* {deleteSuccess && (
                <Modal>
                    <ModalContent>
                        <UpdateSuccess />
                    </ModalContent>
                </Modal>
            )} */}
        </ReceptionistLayout>
    );
}

