import React, { useState } from 'react'
import GramasewakaLayOut from '../../components/layouts/GramasewakaLayOut'
import { } from './z-gsStyle';
import EmpHeader from '../../components/header/EmpHeader';
import { AddButton, Contact, MainContainerBG, SearchBar, TableContainer, TopContainer } from '../../assets/styles/globalStyls';
import BottomSlider from '../../components/slider/BottomSlider';

export default function GsPatients() {

    const sliderValue = 5;
    const [index, setIndex] = useState(0);
    const length = data.length;
    const x = index + sliderValue > length ? length : index + sliderValue;

    const getDataContent = data => {
        let content = [];
        for (let i = index; i < x; i++) {
            const item = data[i];
            content.push(
                <tr key={item.Organizer}>
                    <td>{item.Patientname}</td>
                    <td>{item.address}</td>
                    <td>
                        <Contact>
                            {item.contact}
                            <div>
                                <i className="fa-regular fa-envelope"></i>
                            </div>
                        </Contact>
                    </td>
                    {/* <td>
                        <DeleteButton>Delete</DeleteButton>
                        <UpdateButton>Update</UpdateButton>
                    </td> */}
                </tr >
            );
        }
        return content;
    }
    return (
        <GramasewakaLayOut>
            <EmpHeader pageName={"Patient"} />

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
                                <th>Patient name</th>
                                <th>Organizer</th>
                                <th>Contact</th>
                                {/* <th>Action</th> */}
                            </tr>
                        </thead>
                        <tbody>{getDataContent(data)}</tbody>
                    </table>
                </TableContainer>

                <BottomSlider
                    length={length}
                    index={index}
                    setIndex={setIndex}
                    x={x}
                    sliderValue={sliderValue}
                />
            </MainContainerBG>
        </GramasewakaLayOut>
    );
}




const data = [

    {
        _id: 1,
        Patientname: "Kalum Chandana",
        address: "Abc",
        contact: "0764412558"
    },
    {
        _id: 2,
        Patientname: "Kalum Chandana",
        address: "Tangalle",
        contact: "0764412558"
    },
    {
        _id: 3,
        Patientname: "Kalum Chandana",
        address: "Tangalle",
        contact: "0764412558"
    },
    {
        _id: 4,
        Patientname: "Kalum Chandana",
        address: "Tangalle",
        contact: "0764412558"
    },
    {
        _id: 5,
        Patientname: "Kalum Chandana",
        address: "Tangalle",
        contact: "0764412558"
    },
    {
        _id: 6,
        Patientname: "Kalum Chandana",
        address: "Tangalle",
        contact: "0764412558"
    },
    {
        _id: 7,
        Patientname: "Kalum Chandana",
        address: "Tangalle",
        contact: "0764412558"
    },



]