import React, { useState } from 'react'
import GramasewakaLayOut from '../../components/layouts/GramasewakaLayOut'
import EmpHeader from '../../components/header/EmpHeader';
import BottomSlider from '../../components/slider/BottomSlider';
import { AddButton, Contact, DeleteButton, MainContainerBG, SearchBar, TableContainer, TopContainer, UpdateButton } from '../../assets/styles/globalStyls';

export default function GsOrganizations() {

    const sliderValue = 5;
    const [index, setIndex] = useState(0);
    const length = data.length;
    const x = index + sliderValue > length ? length : index + sliderValue;

    const getDataContent = data => {
        let content = [];
        for (let i = index; i < x; i++) {
            const item = data[i];
            content.push(
                <tr key={item._id}>
                    <td>{item.Organizationname}</td>
                    <td>{item.Organizer}</td>
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
                </tr >
            );
        }
        return content;
    }
    return (
        <GramasewakaLayOut>
            <EmpHeader pageName={"Organizations"} />

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
                                <th>Organizationname</th>
                                <th>Organizer</th>
                                <th>Contact</th>
                                <th>Action</th>
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
        _id: 11,
        Organizer: "Kalum Chandana",
        Organizationname: "Abc",
        contact: "0767726558"
    },
    {
        _id: 12,
        Organizer: "Kalum Chandana",
        Organizationname: "Tangalle",
        contact: "0767726558"
    },
    {
        _id: 13,
        Organizer: "Kalum Chandana",
        Organizationname: "Tangalle",
        contact: "0767726558"
    },
    {
        _id: 14,
        Organizer: "Kalum Chandana",
        Organizationname: "Tangalle",
        contact: "0767726558"
    },
    {
        _id: 15,
        Organizer: "Kalum Chandana",
        Organizationname: "Tangalle",
        contact: "0767726558"
    },
    {
        _id: 16,
        Organizer: "Kalum Chandana",
        Organizationname: "Tangalle",
        contact: "0767726558"
    },
    {
        _id: 17,
        Organizer: "Kalum Chandana",
        Organizationname: "Tangalle",
        contact: "0767726558"
    },



]