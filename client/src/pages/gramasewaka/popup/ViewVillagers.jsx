import React from "react";
import { Modal, Overlay } from "../../../assets/styles/globalStyls";
import { AddVillagerPopUpBack, AddVillagerPopUpBackHouseHolderInfo, AddVillagerPopUpBackHouseHolderInfoNew, LineInMemberDetails, MainContainerView, MemberDetailsTble, ModalContentNew, ModalTitleNew, PopUpContainerHeaderNewContainer, PopUpContentHeaderNew } from "../z-gsStyle";

export default function ViewVillagers({ setViewData, eventData, setEventData }) {
  console.log(eventData)
    return (
      <Modal>
        <Overlay
          onClick={() => {
            setViewData(false);
            setEventData("");
          }}
        />

            <ModalContentNew>
                <MainContainerView>
                    <AddVillagerPopUpBack>
                        <AddVillagerPopUpBackHouseHolderInfo>
                            <h5>House Holder Name</h5>
                            <p>{eventData.members[0].name}</p>
                        </AddVillagerPopUpBackHouseHolderInfo>
                        <AddVillagerPopUpBackHouseHolderInfo>
                            <h5>House Holder Age</h5>
                            <p>{eventData.members[0].age}</p>
                        </AddVillagerPopUpBackHouseHolderInfo>
                        <AddVillagerPopUpBackHouseHolderInfo>
                            <h5>House Holder Contact</h5>
                            <p>{eventData.members[0].contact}</p>
                        </AddVillagerPopUpBackHouseHolderInfo>
                        <AddVillagerPopUpBackHouseHolderInfo>
                            <h5>House Holder Number</h5>
                            <p>{eventData.houseHoldNo}</p>
                        </AddVillagerPopUpBackHouseHolderInfo>
                        <AddVillagerPopUpBackHouseHolderInfo>
                            <h5>Address</h5>
                            <p>{eventData.address}</p>
                        </AddVillagerPopUpBackHouseHolderInfo>
                        <AddVillagerPopUpBackHouseHolderInfo>
                            <h5>House Holder NIC</h5>
                            <p>{eventData.members[0].nic}</p>
                        </AddVillagerPopUpBackHouseHolderInfo>
                        <AddVillagerPopUpBackHouseHolderInfo>
                            <h5>House Holder Gender</h5>
                            <p>{eventData.members[0].gender}</p>
                        </AddVillagerPopUpBackHouseHolderInfo>
                    </AddVillagerPopUpBack>
                    <PopUpContainerHeaderNewContainer>
                        <ModalTitleNew>
                            <i
                                className="fa-solid fa-circle-xmark"
                                onClick={() => {
                                    setViewData(false);
                                    setEventData("");
                                }}
                            ></i>
                        </ModalTitleNew>
                        <PopUpContentHeaderNew>
                            <div></div>
                            <span>Member Details</span>
                            <div></div>
                        </PopUpContentHeaderNew>
                        <MemberDetailsTble>
                            {eventData.members.map((item) => (
                                <table key={item._id}>
                                    <tr>
                                        <td>
                                            <AddVillagerPopUpBackHouseHolderInfoNew>
                                                <h5>Name</h5>
                                                <p>{item.name}</p>
                                            </AddVillagerPopUpBackHouseHolderInfoNew>
                                        </td>
                                        <td>
                                            <AddVillagerPopUpBackHouseHolderInfoNew>
                                                <h5>NIC</h5>
                                                <p>
                                                    {item.nic
                                                        ? item.nic
                                                        : "-----------"}
                                                </p>
                                            </AddVillagerPopUpBackHouseHolderInfoNew>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <AddVillagerPopUpBackHouseHolderInfoNew>
                                                <h5>Age</h5>
                                                <p>{item.age}</p>
                                            </AddVillagerPopUpBackHouseHolderInfoNew>
                                        </td>
                                        <td>
                                            <AddVillagerPopUpBackHouseHolderInfoNew>
                                                <h5>Contact</h5>
                                                <p>
                                                    {item.contact
                                                        ? item.contact
                                                        : "-----------"}
                                                </p>
                                            </AddVillagerPopUpBackHouseHolderInfoNew>
                                        </td>
                                    </tr>
                                    <tr>
                                        <AddVillagerPopUpBackHouseHolderInfoNew>
                                            <h5>Gender</h5>
                                            <p>{item.gender ? item.gender : "male"}</p>
                                        </AddVillagerPopUpBackHouseHolderInfoNew>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <LineInMemberDetails></LineInMemberDetails>
                                        </td>
                                    </tr>
                                </table>
                            ))}
                        </MemberDetailsTble>
                    </PopUpContainerHeaderNewContainer>
                </MainContainerView>
            </ModalContentNew>
        </Modal>
    );
}