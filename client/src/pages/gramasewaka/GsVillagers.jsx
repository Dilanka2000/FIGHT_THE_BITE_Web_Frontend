import React, { useState } from 'react'
import GramasewakaLayOut from '../../components/layouts/GramasewakaLayOut'
import { MainContainerBG1, MainContainerBG2, ListName, Title, TableContainer1, ViewButton, DeleteButton, TableTitle, AddButton, SearchBar, TopContainer } from './z-gsStyle';
import EmpHeader from '../../components/header/EmpHeader';
// import BottomSlider from '../../components/slider/BottomSlider';



export default function GsVillagers() {


    const getDataContent1 = data1 => {
        let content = [];
        for (let i = index; i < x; i++) {
            const item = data1[i];
            content.push(
                <ListName key={item.name}>
                    <TableTitle>{item.name}</TableTitle>


                    <ViewButton>View</ViewButton>


                </ListName>
            );
        }
        return content;
    }

    const sliderValue = 5;
    const [index, setIndex] = useState(0);
    const length = data.length;
    const x = index + sliderValue > length ? length : index + sliderValue;


    const getDataContent = data => {
        let content = [];
        for (let i = index; i < x; i++) {
            const item = data[i];
            content.push(
                <tr key={item.name}>
                    <td><TableTitle>{item.name}</TableTitle></td>

                    <td>
                        <DeleteButton>Details</DeleteButton>

                    </td>
                </tr>
            );
        }
        return content;
    }



    return (
        <GramasewakaLayOut>
            <EmpHeader pageName={"Villagers"} />

            <TopContainer>
                <AddButton>Add new</AddButton>
                <SearchBar>
                    <input type="text" placeholder="Search here..." />
                </SearchBar>
            </TopContainer>



            < MainContainerBG1>
                <br />

                <Title>New login requests</Title>

                <>{getDataContent1(data1)}</>

            </MainContainerBG1>

            <MainContainerBG2>
                <Title>Existing villagers</Title>

                <TableContainer1>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>{getDataContent(data)}</tbody>
                    </table>
                </TableContainer1>
            </MainContainerBG2>
            {/* <BottomSlider length={length} index={index} setIndex={setIndex} x={x} sliderValue={sliderValue} /> */}







        </GramasewakaLayOut>
    );
}


const data = [
    {
        name: "Sunil Perera",

    },
    {
        name: "Kalum Chandana",

    },
    {
        name: "Sampath Sreemal",

    },
    {
        name: "Dasith Chalaka",

    },
    {
        name: "Nilum Dakshina",

    },
    {
        name: "Sandun Perera",

    },
    {
        name: "Nadun Viduranga",

    },
    {
        name: "Janith Heshara",

    },
    {
        name: "Dilanka Hesara",

    },
    {
        name: "Janith Heshara",

    },
    {
        name: "Dilanka Hesara",

    },
    {
        name: "Sunil Perera",

    },
    {
        name: "Kalum Chandana",

    },
    {
        name: "Sampath Sreemal",

    },
    {
        name: "Dasith Chalaka",

    },
    {
        name: "Nilum Dakshina",

    },
    {
        name: "Sandun Perera",

    },
    {
        name: "Nadun Viduranga",

    },
    {
        name: "Janith Heshara",

    },
    {
        name: "Dilanka Hesara",

    },
    {
        name: "Janith Heshara",

    },
    {
        name: "Dilanka Hesara",

    },
]


const data1 = [
    {
        name: "Sunil Perera",

    },
    {
        name: "Kalum Chandana",

    },
    {
        name: "Sampath Sreemal",

    },
    {
        name: "Dasith Chalaka",

    },
    {
        name: "Nilum Dakshina",

    },
    {
        name: "Sandun Perera",

    },
    {
        name: "Nadun Viduranga",

    },
    {
        name: "Janith Heshara",

    },
    {
        name: "Dilanka Hesara",

    },
    {
        name: "Janith Heshara",

    },
    {
        name: "Dilanka Hesara",

    },
    {
        name: "Sunil Perera",

    },
    {
        name: "Kalum Chandana",

    },
    {
        name: "Sampath Sreemal",

    },
    {
        name: "Dasith Chalaka",

    },
    {
        name: "Nilum Dakshina",

    },
    {
        name: "Sandun Perera",

    },
    {
        name: "Nadun Viduranga",

    },
    {
        name: "Janith Heshara",

    },
    {
        name: "Dilanka Hesara",

    },
    {
        name: "Janith Heshara",

    },
    {
        name: "Dilanka Hesara",

    },
]