import React, { useEffect, useState } from 'react'
import GramasewakaLayOut from '../../components/layouts/GramasewakaLayOut'
import EmpHeader from '../../components/header/EmpHeader';
import { AddButton, ButtonContainer, DeleteButton, MainContainer, MainContainerBG, MainGridContainer, Modal, ModalContent, SearchBar, TopContainer, UpdateButton } from '../../assets/styles/globalStyls';
import { GridTableContainerScroll, GridTitle, ScrollContainer, ScrollContainerTitle } from './z-gsStyle';
import ViewVillagers from './popup/ViewVillagers';
import VillagesAddAndUpdate from './popup/VillagesAddAndUpdate';
import RegisterSuccess from '../../components/popup/RegisterSuccess';
import UpdateSuccess from '../../components/popup/UpdateSuccess';
import useFetch, { useFetch2 } from '../../hooks/fetch-hook';
import PageNotFound from '../PageNotFound';
import Loading from '../../components/popup/Loading';
import NewVillagerRequest from './popup/NewVillagerRequest';
import { loginUser } from '../../helper/helper';
// import BottomSlider from '../../components/slider/BottomSlider';



export default function GsVillagers() {

    const [userData, setUserData] = useState("");
    const user = async function () {
        setUserData(await loginUser());
    };
    if (!userData) {
        user();
    }

    const [{ apiData, serverError, isLoading }] = useFetch("getFammily/" + userData.divisionNumber);
    const [{ apiData2, serverError2, isLoading2 }] = useFetch2("getGuestVillagers/" + userData.divisionNumber);

    const [eventData, setEventData] = useState('');
    const [viewVillagerData, setViewVillagerData] = useState(false);
    const [viewNewRequest, setViewNewRequest] = useState(false);
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

    if (serverError && serverError2) return <PageNotFound />;
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
                    <ScrollContainerTitle>
                        <p>Name</p>
                        <p>Household Number</p>
                        <p>Action</p>
                    </ScrollContainerTitle>
                    <ScrollContainer>
                        {!isLoading2
                            ? apiData2.map((item) => (
                                  <div key={item._id}>
                                      <p>{item.GuestVillager[0].name}</p>
                                      <p>{item.gmn}</p>
                                      <UpdateButton
                                          onClick={() => {
                                              setEventData(item);
                                              setViewNewRequest(true);
                                          }}
                                      >
                                          View
                                      </UpdateButton>
                                  </div>
                              ))
                            : null}
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
                                        <th>Household Number</th>
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
                                                      setViewVillagerData(true);
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
                                                                  setViewVillagerData(
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

            {viewVillagerData && (
                <ViewVillagers
                    setViewData={setViewVillagerData}
                    setEventData={setEventData}
                    eventData={eventData}
                />
            )}

            {viewNewRequest && (
                <NewVillagerRequest
                    setViewData={setViewNewRequest}
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
                userData={userData}
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

