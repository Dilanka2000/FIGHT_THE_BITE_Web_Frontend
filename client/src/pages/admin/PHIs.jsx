import React, { useState } from 'react'
import AdminLayout from '../../components/layouts/AdminLayout'
import { AddButton, ButtonContainer, DeleteButton, ListContainer, ListItem, MainContainer, ProfileImage, SearchBar, TopContainer, UpdateButton } from "../../assets/styles/globalStyls";
import { ProfileContact, ProfileName } from './z-adminStyle'
import EmpHeader from '../../components/header/EmpHeader';
import BottomSlider from '../../components/slider/BottomSlider';

export default function PHIs() {

    const sliderValue = 8;
    const [index, setIndex] = useState(0);
    const length = data.length;
    const x = index + sliderValue > length ? length : index + sliderValue;

    const getDataContent = (data) => {
        let content = [];
        for (let i = index; i < x; i++) {
            const item = data[i];
            content.push(
                <ListItem key={item.DviNumber}>
                    <ProfileImage>
                        <img
                            src="https://starsunfolded.com/wp-content/uploads/2017/07/Sai-Pallavi.jpg"
                            alt="Profile"
                        />
                    </ProfileImage>
                    <ProfileName>{item.name}</ProfileName>
                    <ProfileContact>
                        {item.contact}
                        <div>
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                    </ProfileContact>
                    <ButtonContainer>
                        <DeleteButton>Delete</DeleteButton>
                        <UpdateButton>Update</UpdateButton>
                    </ButtonContainer>
                </ListItem>
            );
        }
        return content;
    };

    return (
        <AdminLayout>
            <EmpHeader pageName={"Public Health Officers"} />

            <TopContainer>
                <AddButton>Add new</AddButton>
                <SearchBar>
                    <input type="text" placeholder="Search here..." />
                </SearchBar>
            </TopContainer>

            <MainContainer>
                <ListContainer>{getDataContent(data)}</ListContainer>

                <BottomSlider
                    length={length}
                    index={index}
                    setIndex={setIndex}
                    x={x}
                    sliderValue={sliderValue}
                />
                
            </MainContainer>
        </AdminLayout>
    );
}



const data = [
    {
        name: "Sunil Perera",
        division: "Ramboda",
        DviNumber: 10,
        contact: "0714523258",
    },
    {
        name: "Kalum Chandana",
        division: "Tangalle",
        DviNumber: 11,
        contact: "0714523258",
    },
    {
        name: "Sampath Sreemal",
        division: "Padalangala",
        DviNumber: 12,
        contact: "0714523258",
    },
    {
        name: "Dasith Chalaka",
        division: "Daulagala",
        DviNumber: 13,
        contact: "0714523258",
    },
    {
        name: "Nilum Dakshina",
        division: "Weeraketiya",
        DviNumber: 14,
        contact: "0714523258",
    },
    {
        name: "Sandun Perera",
        division: "Ramboda",
        DviNumber: 15,
        contact: "0714523258",
    },
    {
        name: "Nadun Viduranga",
        division: "Ramboda",
        DviNumber: 16,
        contact: "0714523258",
    },
    {
        name: "Janith Heshara",
        division: "Ramboda",
        DviNumber: 17,
        contact: "0714523258",
    },
    {
        name: "Dilanka Hesara",
        division: "Ramboda",
        DviNumber: 18,
        contact: "0714523258",
    },
    {
        name: "Janith Heshara",
        division: "Ramboda",
        DviNumber: 19,
        contact: "0714523258",
    },
    {
        name: "Dilanka Hesara",
        division: "Ramboda",
        DviNumber: 20,
        contact: "0714523258",
    },
    {
        name: "Sunil Perera",
        division: "Ramboda",
        DviNumber: 21,
        contact: "0714523258",
    },
    {
        name: "Kalum Chandana",
        division: "Tangalle",
        DviNumber: 22,
        contact: "0714523258",
    },
    {
        name: "Sampath Sreemal",
        division: "Padalangala",
        DviNumber: 23,
        contact: "0714523258",
    },
    {
        name: "Dasith Chalaka",
        division: "Daulagala",
        DviNumber: 24,
        contact: "0714523258",
    },
    {
        name: "Nilum Dakshina",
        division: "Weeraketiya",
        DviNumber: 25,
        contact: "0714523258",
    },
    {
        name: "Sandun Perera",
        division: "Ramboda",
        DviNumber: 26,
        contact: "0714523258",
    },
    {
        name: "Nadun Viduranga",
        division: "Ramboda",
        DviNumber: 27,
        contact: "0714523258",
    },
    {
        name: "Janith Heshara",
        division: "Ramboda",
        DviNumber: 28,
        contact: "0714523258",
    },
    {
        name: "Dilanka Hesara",
        division: "Ramboda",
        DviNumber: 29,
        contact: "0714523258",
    },
    {
        name: "Janith Heshara",
        division: "Ramboda",
        DviNumber: 30,
        contact: "0714523258",
    },
    {
        name: "Dilanka Hesara",
        division: "Ramboda",
        DviNumber: 31,
        contact: "0714523258",
    },
];