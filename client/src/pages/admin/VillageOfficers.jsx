import React, { useState } from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import EmpHeader from "../../components/header/EmpHeader";
import { AddButton, BottomContainer, BottomLeft, BottomRight, Contact, DeleteButton, ImageAndText, MainContainer, SearchBar, Slider, SliderObject, TableContainer, TopContainer, UpdateButton } from "./z-adminStyle";


export default function VillageOfficers() {

    const [index, setIndex] = useState(0);
    const [slideNo, setSlideNo] = useState(1);
    const length = data.length;
    const x = index + 5 > length ? length : index + 5;

    function next() {
        setSlideNo(index >= 5 && index < (parseInt(length / 5)*5)-5 ? slideNo + 1 : slideNo);
        setIndex(index + 5 > length ? index : index + 5);
    }
    function previous() {
        setSlideNo(index < parseInt(length / 5) * 5 && index > 5 ? slideNo - 1 : slideNo );
        setIndex(index - 5 < 0 ? 0 : index - 5);
    }

    function slider1() {
        setIndex(slideNo * 5 - 5);
        setSlideNo(slideNo !== 1 ? slideNo - 1 : slideNo);
    }
    function slider2() {
        setIndex(slideNo * 5);
    }
    function slider3() {
        setIndex(slideNo * 5 + 5);
        setSlideNo(slideNo + 2 !== Math.ceil(length / 5) ? slideNo + 1 : slideNo);
    }

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

            <MainContainer>
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

                <BottomContainer>
                    <BottomLeft>
                        Showing{" "}
                        <span>
                            {index + 1} - {x}
                        </span>{" "}
                        from <span>{length}</span>
                    </BottomLeft>
                    <BottomRight>
                        <i
                            className="fa-solid fa-caret-left"
                            onClick={previous}
                        ></i>
                        <Slider>
                            <SliderObject
                                $isActive={slideNo * 5 - 5 === index}
                                onClick={slider1}
                            >
                                {slideNo}
                            </SliderObject>
                            <SliderObject
                                $isActive={slideNo * 5 === index}
                                onClick={slider2}
                            >
                                {slideNo + 1}
                            </SliderObject>
                            {length > 10 && (
                                <SliderObject
                                    $isActive={slideNo * 5 + 5 === index}
                                    onClick={slider3}
                                >
                                    {slideNo + 2}
                                </SliderObject>
                            )}
                        </Slider>
                        <i
                            className="fa-solid fa-caret-right"
                            onClick={next}
                        ></i>
                    </BottomRight>
                </BottomContainer>
            </MainContainer>
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