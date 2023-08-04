import React, { useState } from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import EmpHeader from "../../components/header/EmpHeader";
import { AddButton, DeleteButton, MainContainerBG, SearchBar, TableContainer, TopContainer, UpdateButton } from "../../assets/styles/globalStyls";
import { Contact, ImageAndText } from "./z-adminStyle";
import BottomSlider from "../../components/slider/BottomSlider";


export default function VillageOfficers() {

    const sliderValue = 5;
    const [index, setIndex] = useState(0);
    const length = data.length;
    const x = index + sliderValue > length ? length : index + sliderValue;

    const getDataContent = data => {
        let content = [];
        for (let i = index; i < x; i++) {
            const item = data[i];
            content.push(
                <tr key={item.DviNumber}>
                    <td>
                        <ImageAndText>
                            <div></div>
                            <span>{item.name}</span>
                        </ImageAndText>
                    </td>
                    <td>{item.division}</td>
                    <td>{item.DviNumber}</td>
                    <td>
                        <Contact>
                            {item.contact}
                            <div>
                                <i className="fa-regular fa-envelope"></i>
                            </div>
                        </Contact>
                    </td>
                    <td>
                        <DeleteButton>Delete</DeleteButton>
                        <UpdateButton>Update</UpdateButton>
                    </td>
                </tr>
            );
        }
        return content;
    }

    return (
        <AdminLayout>
            <EmpHeader pageName={"Village Officers"} />

            <TopContainer>
                <AddButton>Add new</AddButton>
                <SearchBar>
                    <input type="text" placeholder="Search here..." />
                </SearchBar>
            </TopContainer>

            <MainContainerBG>
                <TableContainer>
                    <table>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>GS Division</th>
                                <th>Division Number</th>
                                <th>Contact</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>{getDataContent(data)}</tbody>
                    </table>
                </TableContainer>

                <BottomSlider length={length} index={index} setIndex={setIndex} x={x} sliderValue={sliderValue}/>

            </MainContainerBG>
        </AdminLayout>
    );
}


const data = [
    {
        name: "Sunil Perera",
        division: "Ramboda",
        DviNumber: 10,
        contact: "0714523258"
    },
    {
        name: "Kalum Chandana",
        division: "Tangalle",
        DviNumber: 11,
        contact: "0714523258"
    },
    {
        name: "Sampath Sreemal",
        division: "Padalangala",
        DviNumber: 12,
        contact: "0714523258"
    },
    {
        name: "Dasith Chalaka",
        division: "Daulagala",
        DviNumber: 13,
        contact: "0714523258"
    },
    {
        name: "Nilum Dakshina",
        division: "Weeraketiya",
        DviNumber: 14,
        contact: "0714523258"
    },
    {
        name: "Sandun Perera",
        division: "Ramboda",
        DviNumber: 15,
        contact: "0714523258"
    },
    {
        name: "Nadun Viduranga",
        division: "Ramboda",
        DviNumber: 16,
        contact: "0714523258"
    },
    {
        name: "Janith Heshara",
        division: "Ramboda",
        DviNumber: 17,
        contact: "0714523258"
    },
    {
        name: "Dilanka Hesara",
        division: "Ramboda",
        DviNumber: 18,
        contact: "0714523258"
    },
    {
        name: "Janith Heshara",
        division: "Ramboda",
        DviNumber: 19,
        contact: "0714523258"
    },
    {
        name: "Dilanka Hesara",
        division: "Ramboda",
        DviNumber: 20,
        contact: "0714523258"
    },
    {
        name: "Sunil Perera",
        division: "Ramboda",
        DviNumber: 21,
        contact: "0714523258"
    },
    {
        name: "Kalum Chandana",
        division: "Tangalle",
        DviNumber: 22,
        contact: "0714523258"
    },
    {
        name: "Sampath Sreemal",
        division: "Padalangala",
        DviNumber: 23,
        contact: "0714523258"
    },
    {
        name: "Dasith Chalaka",
        division: "Daulagala",
        DviNumber: 24,
        contact: "0714523258"
    },
    {
        name: "Nilum Dakshina",
        division: "Weeraketiya",
        DviNumber: 25,
        contact: "0714523258"
    },
    {
        name: "Sandun Perera",
        division: "Ramboda",
        DviNumber: 26,
        contact: "0714523258"
    },
    {
        name: "Nadun Viduranga",
        division: "Ramboda",
        DviNumber: 27,
        contact: "0714523258"
    },
    {
        name: "Janith Heshara",
        division: "Ramboda",
        DviNumber: 28,
        contact: "0714523258"
    },
    {
        name: "Dilanka Hesara",
        division: "Ramboda",
        DviNumber: 29,
        contact: "0714523258"
    },
    {
        name: "Janith Heshara",
        division: "Ramboda",
        DviNumber: 30,
        contact: "0714523258"
    },
    {
        name: "Dilanka Hesara",
        division: "Ramboda",
        DviNumber: 31,
        contact: "0714523258"
    },
]