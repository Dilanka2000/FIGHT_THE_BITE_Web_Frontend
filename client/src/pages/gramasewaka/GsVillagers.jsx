import React, { useEffect, useState } from 'react'
import GramasewakaLayOut from '../../components/layouts/GramasewakaLayOut'
import EmpHeader from '../../components/header/EmpHeader';
import { AddButton, ButtonContainer, DeleteButton, MainContainer, MainContainerBG, MainGridContainer, Modal, ModalContent, SearchBar, TopContainer, UpdateButton } from '../../assets/styles/globalStyls';
import { GridTableContainerScroll, GridTitle, ScrollContainer } from './z-gsStyle';
import ViewVillagers from './popup/ViewVillagers';
import VillagesAddAndUpdate from './popup/VillagesAddAndUpdate';
import RegisterSuccess from '../../components/popup/RegisterSuccess';
import UpdateSuccess from '../../components/popup/UpdateSuccess';
// import BottomSlider from '../../components/slider/BottomSlider';



export default function GsVillagers() {

    const [eventData, setEventData] = useState('');
    const [viewData, setViewData] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    // const [deleteModal, setDeleteModal] = useState(false);
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const [updateSuccess, setUpdateSuccess] = useState(false);

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
        }
    }, [registerSuccess, updateSuccess]);

    return (
        <GramasewakaLayOut>
            <EmpHeader pageName={"Villagers"} />

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

            <MainGridContainer>
                <MainContainer>
                    <GridTitle>New login requests</GridTitle>
                    <ScrollContainer>
                        {data1.map(({ _id, name, gmn }) => (
                            <div key={_id}>
                                <p>{name}</p>
                                <p>{gmn}</p>
                                <UpdateButton>View</UpdateButton>
                            </div>
                        ))}
                    </ScrollContainer>
                </MainContainer>

                <MainContainer>
                    <GridTitle>Existing villagers</GridTitle>
                    <MainContainerBG>
                        <GridTableContainerScroll>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Household No</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item) => (
                                        <tr
                                            key={item._id}
                                            onClick={() => {
                                                setEventData(item);
                                                setViewData(true);
                                            }}
                                        >
                                            <td>{item.name}</td>
                                            <td>{item.gmn}</td>
                                            <td>
                                                <ButtonContainer>
                                                    <DeleteButton
                                                        onClick={() => {
                                                            setEventData(item);
                                                            setViewData(true);
                                                        }}
                                                    >
                                                        Details
                                                    </DeleteButton>
                                                </ButtonContainer>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </GridTableContainerScroll>
                    </MainContainerBG>
                </MainContainer>
            </MainGridContainer>

            {viewData && (
                <ViewVillagers
                    setViewData={setViewData}
                    setEventData={setEventData}
                    eventData={eventData}
                />
            )}

            {/* ======================= Add & Update village officer ========================= */}
            {/* 888888888888888888888888888888888888888888888888888888888888888888888888888888 */}
            <VillagesAddAndUpdate
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
        </GramasewakaLayOut>
    );
}


const data = [
    {
        _id: 1,
        name: "Sunil Perera",
        gmn: "207/A",
    },
    {
        _id: 2,
        name: "Kalum Chandana",
        gmn: "207/A",
    },
    {
        _id: 3,
        name: "Sampath Sreemal",
        gmn: "207/A",
    },
    {
        _id: 4,
        name: "Dasith Chalaka",
        gmn: "207/A",
    },
    {
        _id: 5,
        name: "Nilum Dakshina",
        gmn: "207/A",
    },
    {
        _id: 6,
        name: "Sandun Perera",
        gmn: "207/A",
    },
    {
        _id: 7,
        name: "Nadun Viduranga",
        gmn: "207/A",
    },
    {
        _id: 8,
        name: "Janith Heshara",
        gmn: "207/A",
    },
    {
        _id: 9,
        name: "Dilanka Hesara",
        gmn: "207/A",
    },
    {
        _id: 10,
        name: "Janith Heshara",
        gmn: "207/A",
    },
    {
        _id: 11,
        name: "Dilanka Hesara",
        gmn: "207/A",
    },
];


const data1 = [
    {
        _id: 51,
        name: "Sunil Perera",
        gmn: "207/A",
    },
    {
        _id: 12,
        name: "Kalum Chandana",
        gmn: "207/A",
    },
    {
        _id: 13,
        name: "Sampath Sreemal",
        gmn: "207/A",
    },
    {
        _id: 14,
        name: "Dasith Chalaka",
        gmn: "207/A",
    },
    {
        _id: 15,
        name: "Nilum Dakshina",
        gmn: "207/A",
    },
    {
        _id: 16,
        name: "Sandun Perera",
        gmn: "207/A",
    },
    {
        _id: 17,
        name: "Nadun Viduranga",
        gmn: "207/A",
    },
    {
        _id: 18,
        name: "Janith Heshara",
        gmn: "207/A",
    },
    {
        _id: 19,
        name: "Dilanka Hesara",
        gmn: "207/A",
    },
    {
        _id: 110,
        name: "Dilanka Hesara",
        gmn: "207/A",
    },
    {
        _id: 91,
        name: "Dilanka Hesara",
        gmn: "207/A",
    },
    {
        _id: 92,
        name: "Dilanka Hesara",
        gmn: "207/A",
    },
    {
        _id: 93,
        name: "Dilanka Hesara",
        gmn: "207/A",
    },
];
