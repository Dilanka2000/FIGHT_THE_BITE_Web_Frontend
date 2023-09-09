import React, { useEffect, useState } from 'react'
import GramasewakaLayOut from '../../components/layouts/GramasewakaLayOut'
import EmpHeader from '../../components/header/EmpHeader';
import { AddButton, ButtonContainer, DeleteButton, MainContainer, MainContainerBG, MainGridContainer, Modal, ModalContent, SearchBar, TopContainer, UpdateButton } from '../../assets/styles/globalStyls';
import { GridTableContainerScroll, GridTitle, ScrollContainer } from './z-gsStyle';
import ViewVillagers from './popup/ViewVillagers';
import VillagesAddAndUpdate from './popup/VillagesAddAndUpdate';
import RegisterSuccess from '../../components/popup/RegisterSuccess';
import UpdateSuccess from '../../components/popup/UpdateSuccess';
import useFetch from '../../hooks/fetch-hook';
import PageNotFound from '../PageNotFound';
import Loading from '../../components/popup/Loading';
// import BottomSlider from '../../components/slider/BottomSlider';



export default function GsVillagers() {

    const [{ apiData, serverError, isLoading }] = useFetch("getFammily/123AS");

    const [eventData, setEventData] = useState('');
    const [viewData, setViewData] = useState(false);
    const [loading, setLoading] = useState(false);
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

    if (serverError) return <PageNotFound />;
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
                                    {!isLoading
                                        ? apiData.map((item) => (
                                              <tr
                                                  key={item._id}
                                                  onClick={() => {
                                                      setEventData(item);
                                                      setViewData(true);
                                                  }}
                                              >
                                                  <td>
                                                      {item.members[0].name}
                                                  </td>
                                                  <td>{item.houseHoldNo}</td>
                                                  <td>
                                                      <ButtonContainer>
                                                          <DeleteButton
                                                              onClick={() => {
                                                                  setEventData(
                                                                      item
                                                                  );
                                                                  setViewData(
                                                                      true
                                                                  );
                                                              }}
                                                          >
                                                              Details
                                                          </DeleteButton>
                                                      </ButtonContainer>
                                                  </td>
                                              </tr>
                                          ))
                                        : null}
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
        </GramasewakaLayOut>
    );
}


const data1 = [
    {
        _id: 51,
        name: "Sunil Perera",
        gmn: "207/A",
    },
    {
        _id: 12,
        name: "Kalum Chandana",
        gmn: "225/4/A",
    }
];
