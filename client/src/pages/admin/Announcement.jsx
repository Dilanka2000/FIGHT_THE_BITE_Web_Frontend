import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import { AnnouncementMassage, AnnouncementTitle, DotContainer, MassageContainer, ReceiverDot, ReceiverDot0, RolleButton, RolleContainer, SubTitle, TableTitle, Title } from "./z-adminStyle";
import EmpHeader from "../../components/header/EmpHeader";
import { Button, MainContainerBG, Modal, ModalContent, SendButton, TableContainer } from "../../assets/styles/globalStyls";
import BottomSlider from "../../components/slider/BottomSlider";
import { addAnnouncement } from "../../helper/helper";
import Loading from "../../components/popup/Loading";
import SendSuccess from "../../components/popup/SendSuccess";
import useFetch from "../../hooks/fetch-hook";
import PageNotFound from "../PageNotFound";
import ViewAnnouncement from "../../components/popup/ViewAnnouncement";

export default function Announcement() {

    const [{ apiData, serverError, isLoading }] = useFetch("getAnnouncements");

    const sliderValue = 5;
    const [index, setIndex] = useState(0);
    let length = 0;
    if(!isLoading){length = apiData.length;}
    
    const x = index + sliderValue > length ? length : index + sliderValue;
    const color = {
        A: "#E74646",
        P: "#FB7D5B",
        V: "#4CBC9A",
        G: "#5A96E3",
    };
    const [gn, setGN] = useState(false);
    const [phi, setPHI] = useState(false);
    const [villager, setVillager] = useState(false);
    const [all, setAll] = useState(false);

    const [title, setTitle] = useState("");
    const [massage, setMassage] = useState("");
    const [errors, setErrors] = useState("");

    const [loading, setLoading] = useState(false);
    const [sendSuccess, setSendSuccess] = useState(false);

    const [eventData, setEventData] = useState("");
    const [viewAnnounsment, setViewAnnounsment] = useState("");

    useEffect(() => {
        if (sendSuccess) {
            window.location.reload();
            const slideIntaval = setInterval(() => {
                setSendSuccess(false);
            }, 2000);
            return () => clearInterval(slideIntaval);
        }
    }, [sendSuccess]);

    const setRecevers = (res) => {
        if (res === "gn") {
            all ? setAll(false) : setAll(false);
            gn ? setGN(false) : setGN(true);
        }
        else if (res === "phi") {
            all ? setAll(false) : setAll(false);
            phi ? setPHI(false) : setPHI(true);
        }
        else if (res === "villager") {
            all ? setAll(false) : setAll(false);
            villager ? setVillager(false) : setVillager(true);
        }
        else if (res === "all") {
            if (!all) {
                setAll(true);
                setGN(true);
                setPHI(true);
                setVillager(true);
            } else {
                setAll(false);
                setGN(false);
                setPHI(false);
                setVillager(false);
            }
        }
    }

    // Send Announcement
    const sendAnnouncement = async (event) => {
        event.preventDefault();

        const values = {
            sender: "admin",
            title: "",
            massage: "",
            receivers: [],
        };
        const error = {
            title: "",
            massage: "",
            receivers: "",
        };
        title ? (values.title = title) : (error.title = "Filed Requierd");
        massage
            ? (values.massage = massage)
            : (error.massage = "Filed Requierd");
        if (all || gn || phi || villager) {
            gn && phi && villager ? setAll(true) : setAll(false);
            if (gn && phi && villager) {
                values.receivers.push("A");
            } else {
                if (gn) {
                    values.receivers.push("G");
                }
                if (phi) {
                    values.receivers.push("P");
                }
                if (villager) {
                    values.receivers.push("V");
                }
            }
        } else {
            error.receivers = "Select Recevers";
        }

        if (error.title || error.massage || error.receivers) {
            setErrors(error);
            console.log(errors);
        } else {
            setErrors("");
            setLoading(true);
            let promise = await addAnnouncement(values);
            if (promise === "Send Successfully") {
                setLoading(false);
                setSendSuccess(true);
            }
            else {
                setLoading(false);
                console.log(promise);
            }
        }
    };

    const getDataContent = (data) => {
        let content = [];
        for (let i = index; i < x; i++) {
            const item = data[i];
            if (item.sender === "admin") {
                content.push(
                    <tr key={item._id}>
                        <td>
                            <TableTitle>{item.title}</TableTitle>
                        </td>
                        <td>{item.date}</td>
                        <td>
                            <DotContainer>
                                {item.receivers[0] && (
                                    <ReceiverDot
                                        $color={color[item.receivers[0]]}
                                    >
                                        {item.receivers[0]}
                                    </ReceiverDot>
                                )}
                                {item.receivers[1] && (
                                    <ReceiverDot0
                                        $color={color[item.receivers[1]]}
                                    >
                                        {item.receivers[1]}
                                    </ReceiverDot0>
                                )}
                                {item.receivers[2] && (
                                    <ReceiverDot0
                                        $color={color[item.receivers[2]]}
                                    >
                                        {item.receivers[2]}
                                    </ReceiverDot0>
                                )}
                            </DotContainer>
                        </td>
                        <td>
                            <Button
                                $color={"#fcc43e"}
                                onClick={() => {
                                    setEventData(item);
                                    setViewAnnounsment(true);
                                }}
                            >
                                View
                            </Button>
                        </td>
                    </tr>
                );
            }
        }
        return content;
    };

    if (serverError) return <PageNotFound />;
    return (
        <AdminLayout>
            <EmpHeader pageName={"Announcement"} />

            <MainContainerBG>
                <Title>Define Your Audience</Title>
                <SubTitle>Who should receive this announcement?</SubTitle>
                <RolleContainer>
                    <RolleButton
                        $isActive={gn}
                        onClick={() => {
                            setRecevers("gn");
                        }}
                    >
                        <i className="fa-solid fa-check"></i>
                        Grama Niladhari
                    </RolleButton>
                    <RolleButton
                        $isActive={phi}
                        onClick={() => {
                            setRecevers("phi");
                        }}
                    >
                        <i className="fa-solid fa-check"></i>
                        PHI
                    </RolleButton>
                    <RolleButton
                        $isActive={villager}
                        onClick={() => {
                            setRecevers("villager");
                        }}
                    >
                        <i className="fa-solid fa-check"></i>
                        Villager
                    </RolleButton>
                    <RolleButton
                        $isActive={all}
                        onClick={() => {
                            setRecevers("all");
                        }}
                    >
                        <i className="fa-solid fa-check"></i>
                        All
                    </RolleButton>
                </RolleContainer>
                <center>{errors.receivers && <p>{errors.receivers}</p>}</center>
                <Title>Write Your Contenet</Title>
                <MassageContainer>
                    <AnnouncementTitle>
                        <input
                            type="text"
                            placeholder="Headline"
                            onChange={(inputTitle) => {
                                setTitle(inputTitle.target.value);
                            }}
                        />
                        {errors.title && <p>{errors.title}</p>}
                    </AnnouncementTitle>
                    <AnnouncementMassage>
                        <textarea
                            type="text"
                            placeholder="Massage"
                            onChange={(inputMassage) => {
                                setMassage(inputMassage.target.value);
                            }}
                        />
                        {errors.massage && <p>{errors.massage}</p>}
                    </AnnouncementMassage>
                    <SendButton>
                        <div onClick={sendAnnouncement}>
                            Send
                            <i className="fa-solid fa-paper-plane"></i>
                        </div>
                    </SendButton>
                </MassageContainer>
            </MainContainerBG>

            <MainContainerBG>
                <Title>Previous Announcement</Title>
                <TableContainer>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Published Date</th>
                                <th>Receiver</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>{getDataContent(apiData)}</tbody>
                    </table>
                </TableContainer>

                {length > 5 && (
                    <BottomSlider
                        length={length}
                        index={index}
                        setIndex={setIndex}
                        x={x}
                        sliderValue={sliderValue}
                    />
                )}
            </MainContainerBG>

            {loading && (
                <Modal>
                    <ModalContent>
                        <Loading />
                    </ModalContent>
                </Modal>
            )}
            {sendSuccess && (
                <Modal>
                    <ModalContent>
                        <SendSuccess />
                    </ModalContent>
                </Modal>
            )}

            {viewAnnounsment && (
                <ViewAnnouncement
                    setViewData={setViewAnnounsment}
                    setEventData={setEventData}
                    eventData={eventData}
                />
            )}
        </AdminLayout>
    );
}

