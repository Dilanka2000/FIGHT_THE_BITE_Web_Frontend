import React, { useEffect, useState } from "react";
import GramasewakaLayOut from "../../components/layouts/GramasewakaLayOut";
import EmpHeader from "../../components/header/EmpHeader";
import BottomSlider from "../../components/slider/BottomSlider";
import {
    AddButton,
    Contact,
    DeleteButton,
    MainContainerBG,
    Modal,
    ModalContent,
    SearchBar,
    TableContainer,
    TopContainer,
    UpdateButton,
} from "../../assets/styles/globalStyls";
import useFetch from "../../hooks/fetch-hook";
import PageNotFound from "../PageNotFound";
import RegisterSuccess from "../../components/popup/RegisterSuccess";
import DeleteUser from "../../components/popup/DeleteUser";
import OrganizationsAddAndUpdate from "./popup/OrganizationsAddAndUpdate";
import UpdateSuccess from "../../components/popup/UpdateSuccess";
import DeleteSuccess from "../../components/popup/DeleteSuccess";
import Loading from "../../components/popup/Loading";

export default function GsOrganizations() {
    const [{ apiData, serverError, isLoading }] = useFetch("getUsers/ORG");

    const sliderValue = 5;
    const [index, setIndex] = useState(0);
    let length = 0;
    if (!isLoading) {
        length = apiData.length;
    }
    const x = index + sliderValue > length ? length : index + sliderValue;

    const [eventData, setEventData] = useState("");
    const [addModal, setAddModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);

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
            content.push(
                <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.nic[2] < 5 ? "Mr. " : "Ms. " }{item.boardName}</td>
                    <td>
                        <Contact>
                            {item.contact}
                            <div>
                                <i className="fa-regular fa-envelope"></i>
                            </div>
                        </Contact>
                    </td>
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
    };
    if (serverError) return <PageNotFound />;
    return (
        <GramasewakaLayOut>
            <EmpHeader pageName={"Organizations"} />

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
                                <th>Organization Name</th>
                                <th>Organizer</th>
                                <th>Contact</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>{getDataContent(apiData)}</tbody>
                    </table>
                </TableContainer>

                {length > 5 && <BottomSlider
                    length={length}
                    index={index}
                    setIndex={setIndex}
                    x={x}
                    sliderValue={sliderValue}
                />}
            </MainContainerBG>

            {/* ======================= Add & Update organizations ========================= */}
            {/* 888888888888888888888888888888888888888888888888888888888888888888888888888888 */}

            <OrganizationsAddAndUpdate
                addModal={addModal}
                updateModal={updateModal}
                setAddModal={setAddModal}
                setUpdateModal={setUpdateModal}
                eventData={eventData}
                setEventData={setEventData}
                setRegisterSuccess={setRegisterSuccess}
                setUpdateSuccess={setUpdateSuccess}
                setLoading={setLoading}
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

            {/* ========================== Delete organization ============================ */}
            {/* 888888888888888888888888888888888888888888888888888888888888888888888888888888 */}
            {deleteModal && (
                <DeleteUser
                    eventData={eventData}
                    setEventData={setEventData}
                    setDeleteModal={setDeleteModal}
                    setDeleteSuccess={setDeleteSuccess}
                    setLoading={setLoading}
                />
            )}
            {deleteSuccess && (
                <Modal>
                    <ModalContent>
                        <DeleteSuccess />
                    </ModalContent>
                </Modal>
            )}
        </GramasewakaLayOut>
    );
}