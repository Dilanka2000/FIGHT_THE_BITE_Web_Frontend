import React, { useState } from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import { DotContainer, ReceiverDot, ReceiverDot0, TableTitle, Title } from "./z-adminStyle";
import EmpHeader from "../../components/header/EmpHeader";
import { Button, MainContainerBG, TableContainer } from "../../assets/styles/globalStyls";
import BottomSlider from "../../components/slider/BottomSlider";

export default function Announcement() {

    const sliderValue = 5;
    const [index, setIndex] = useState(0);
    const length = data.length;
    const x = index + sliderValue > length ? length : index + sliderValue;
    const color = {
        A: "#E74646",
        P: "#FB7D5B",
        V: "#4CBC9A",
        G: "#5A96E3",
    };

    const getDataContent = (data) => {
        let content = [];
        for (let i = index; i < x; i++) {
            const item = data[i];
            content.push(
                <tr key={item.id}>
                    <td>
                        <TableTitle>{item.title}</TableTitle>
                    </td>
                    <td>{item.date}</td>
                    <td>
                        <DotContainer>
                            {item.receiver[0] && (
                                <ReceiverDot $color={color[item.receiver[0]]}>
                                    {item.receiver[0]}
                                </ReceiverDot>
                            )}
                            {item.receiver[1] && (
                                <ReceiverDot0 $color={color[item.receiver[1]]}>
                                    {item.receiver[1]}
                                </ReceiverDot0>
                            )}
                            {item.receiver[2] && (
                                <ReceiverDot0 $color={color[item.receiver[2]]}>
                                    {item.receiver[2]}
                                </ReceiverDot0>
                            )}
                        </DotContainer>
                    </td>
                    <td>
                        <Button $color={"#fcc43e"}>View</Button>
                    </td>
                </tr>
            );
        }
        return content;
    };

    return (
        <AdminLayout>
            <EmpHeader pageName={"Announcement"} />

            <MainContainerBG></MainContainerBG>

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
                        <tbody>{getDataContent(data)}</tbody>
                    </table>
                </TableContainer>

                {data.length > 5 && <BottomSlider
                    length={length}
                    index={index}
                    setIndex={setIndex}
                    x={x}
                    sliderValue={sliderValue}
                />}
            </MainContainerBG>
        </AdminLayout>
    );
}




const data = [
    {
        id: 1,
        title: "New gramasewaka for peradeniya",
        date: "12/05/2023",
        receiver: ["A"],
    },
    {
        id: 2,
        title: "Campaign postponed to 2023.05.28",
        date: "12/05/2023",
        receiver: ["G", "P", "V"],
    },
    {
        id: 3,
        title: "New gramasewaka for peradeniya",
        date: "12/05/2023",
        receiver: ["V"],
    },
    {
        id: 4,
        title: "New gramasewaka for peradeniya",
        date: "12/05/2023",
        receiver: ["G"],
    },
    {
        id: 5,
        title: "New gramasewaka for peradeniya",
        date: "12/05/2023",
        receiver: ["P", "G"],
    },
];