import React from "react";
import { Modal, ModalTitle, Overlay } from "../../../assets/styles/globalStyls";
import { AddVillagerPopUpBack, AddVillagerPopUpBackHouseHolderInfo, AddVillagerPopUpBackHouseHolderInfoNew, LineInMemberDetails, MainContainerView, MemberDetailsTble, ModalContentNew, ModalTitleNew, PopUpContainerHeaderNewContainer, PopUpContentHeader, PopUpContentHeaderNew } from "../z-gsStyle";

export default function ViewVillagers({setViewData, eventData, setEventData}) {
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
                <p>Dasith Chalaka</p>
              </AddVillagerPopUpBackHouseHolderInfo>
              <AddVillagerPopUpBackHouseHolderInfo>
                <h5>House Holder Name</h5>
                <p>Dasith Chalaka</p>
              </AddVillagerPopUpBackHouseHolderInfo>
              <AddVillagerPopUpBackHouseHolderInfo>
                <h5>House Holder Name</h5>
                <p>Dasith Chalaka</p>
              </AddVillagerPopUpBackHouseHolderInfo>
              <AddVillagerPopUpBackHouseHolderInfo>
                <h5>House Holder Name</h5>
                <p>Dasith Chalaka</p>
              </AddVillagerPopUpBackHouseHolderInfo>
              <AddVillagerPopUpBackHouseHolderInfo>
                <h5>House Holder Name</h5>
                <p>Dasith Chalaka</p>
              </AddVillagerPopUpBackHouseHolderInfo>
              <AddVillagerPopUpBackHouseHolderInfo>
                <h5>House Holder Name</h5>
                <p>Dasith Chalaka</p>
              </AddVillagerPopUpBackHouseHolderInfo>
              <AddVillagerPopUpBackHouseHolderInfo>
                <h5>House Holder Name</h5>
                <p>Dasith Chalaka</p>
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
                <table>
                  <tr>
                    <td>
                      <AddVillagerPopUpBackHouseHolderInfoNew>
                        <h5>Name</h5>
                        <p>Dasith Chalaka</p>
                      </AddVillagerPopUpBackHouseHolderInfoNew>
                    </td>
                    <td>
                      <AddVillagerPopUpBackHouseHolderInfoNew>
                        <h5>Name</h5>
                        <p>Dasith Chalaka</p>
                      </AddVillagerPopUpBackHouseHolderInfoNew>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <AddVillagerPopUpBackHouseHolderInfoNew>
                        <h5>Name</h5>
                        <p>Dasith Chalaka</p>
                      </AddVillagerPopUpBackHouseHolderInfoNew>
                    </td>
                    <td>
                      <AddVillagerPopUpBackHouseHolderInfoNew>
                        <h5>Name</h5>
                        <p>Dasith Chalaka</p>
                      </AddVillagerPopUpBackHouseHolderInfoNew>
                    </td>
                  </tr>
                  <tr>
                    <AddVillagerPopUpBackHouseHolderInfoNew>
                      <h5>Name</h5>
                      <p>Dasith Chalaka</p>
                    </AddVillagerPopUpBackHouseHolderInfoNew>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <LineInMemberDetails></LineInMemberDetails>
                    </td>
                  </tr>
                </table>
              </MemberDetailsTble>
            </PopUpContainerHeaderNewContainer>
          </MainContainerView>
        </ModalContentNew>
      </Modal>
    );
}

const data = [
  {
    _id: 1,
    name: "Sunil Perera",
    age: "56",
    contact: "0712171549",
    hhd: "65/1",
    address: "No 45, Peradeniya, Kandy",
    nic: "557814562V",
    gender: "Male",
    member: [
      {
        _id: 2,
        name: "Sunil Perera",
        age: "56",
        contact: "0712171549",
        nic: "557814562V",
        gender: "Male",
      },
      {
        _id: 3,
        name: "Sunil Perera",
        age: "56",
        contact: "0712171549",
        nic: "557814562V",
        gender: "Male",
      },
      {
        _id: 4,
        name: "Sunil Perera",
        age: "56",
        contact: "0712171549",
        nic: "557814562V",
        gender: "Male",
      },
      {
        _id: 5,
        name: "Sunil Perera",
        age: "56",
        contact: "0712171549",
        nic: "557814562V",
        gender: "Male",
      },
    ],
  },
];