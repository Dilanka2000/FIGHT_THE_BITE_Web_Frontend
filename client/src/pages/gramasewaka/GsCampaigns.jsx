import React, { useContext, useEffect, useState } from "react";
import GramasewakaLayout from "../../components/layouts/GramasewakaLayOut";
import EmpHeader from "../../components/header/EmpHeader";
import {
    CalenderContainer,
    DCTitle,
    DeatailConainer,
    MAinFlexContainer,
    Modal,
    ModalContent,
    ScheduleCompaign,
    ScheduleCompaignDeatail,
} from "../../assets/styles/globalStyls";

import { getMonth } from "../../components/calender/util";
import CalenderHeader from "../../components/calender/CalenderHeader";
import Month from "../../components/calender/Month";
import GlogalContext from "../../context/GlobalContext";
import dayjs from "dayjs";
import useFetch from "../../hooks/fetch-hook";
import { loginUser } from "../../helper/helper";
import PageNotFound from "../PageNotFound";
import Loading from "../../components/popup/Loading";
import UpdateSuccess from "../../components/popup/UpdateSuccess";

export default function GsCampaigns() {
    const [userData, setUserData] = useState("");
    const user = async function () {
        setUserData(await loginUser());
    };
    if (!userData) {
        user();
    }

    const [{ apiData, serverError, isLoading }] = useFetch("getCampaignsGND/" + userData.divisionNumber);

    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex } = useContext(GlogalContext);

    const [loading, setLoading] = useState(false);
    const [updateSuccess, setUpdateSuccess] = useState(false);

    useEffect(() => {
        if (updateSuccess) {
            window.location.reload();
            const slideIntaval = setInterval(() => {
                setUpdateSuccess(false);
            }, 2000);
            return () => clearInterval(slideIntaval);
        }
    }, [updateSuccess]);
    
    
    let content = [];
    if (!isLoading) {
        apiData.forEach ((item) => {
            if (parseInt(item.date.substring(5, 7)) === (monthIndex + 1) % 12 && item.status === 1) {
                content.push(item);
            }
        })
    }

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);

    if (serverError) return <PageNotFound />;
    return (
        <GramasewakaLayout>
            <EmpHeader pageName={"Campaigns"} />

            <MAinFlexContainer>
                <CalenderContainer>
                    <CalenderHeader />
                    {!isLoading ? (
                        <Month month={currentMonth} events={apiData} setLoading={setLoading} setUpdateSuccess={setUpdateSuccess} />
                    ) : null}
                </CalenderContainer>
                <DeatailConainer>
                    <DCTitle>
                        <div>Schedule Details</div>
                        <p>
                            {dayjs(new Date(dayjs().year(), monthIndex)).format(
                                "MMMM YYYY"
                            )}
                        </p>
                    </DCTitle>
                    {!isLoading
                        ? content.map((item) => (
                              <ScheduleCompaign key={item._id} $col={"#5A96E3"}>
                                  <p>{item.name}</p>
                                  <ScheduleCompaignDeatail $col={"#FB7D5B"}>
                                      <i className="fa-regular fa-calendar"></i>
                                      {item.date.substring(0, 10)}
                                  </ScheduleCompaignDeatail>
                                  <ScheduleCompaignDeatail $col={"#FCC43E"}>
                                      <i className="fa-regular fa-clock"></i>
                                      {item.time}
                                  </ScheduleCompaignDeatail>
                                  <ScheduleCompaignDeatail $col={"#393E46"}>
                                      <i className="fa-solid fa-location-arrow"></i>
                                      {item.location}
                                  </ScheduleCompaignDeatail>
                              </ScheduleCompaign>
                          ))
                        : null}
                </DeatailConainer>
            </MAinFlexContainer>

            {loading && (
                <Modal>
                    <ModalContent>
                        <Loading />
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
        </GramasewakaLayout>
    );
}



// const data = [
//     {
//         _id: 1,
//         name: "Peradeniya welfare organization",
//         date: "05-10-2023",
//         time: "09.00 - 10.00 AM",
//         color: "#FB7D5B",
//     },
//     {
//         _id: 2,
//         name: "Peradeniya welfare organization",
//         date: "10-10-2023",
//         time: "09.00 - 10.00 AM",
//         color: "#5A96E3",
//     },
//     {
//         _id: 3,
//         name: "Peradeniya welfare organization",
//         date: "21-10-2023",
//         time: "09.00 - 10.00 AM",
//         color: "#FCC43E",
//     },
//     {
//         _id: 4,
//         name: "Peradeniya welfare organization",
//         date: "25-10-2023",
//         time: "09.00 - 10.00 AM",
//         color: "#393E46",
//     },
// ];