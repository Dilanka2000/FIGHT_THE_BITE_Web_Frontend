import React, { useState } from 'react'
import GramasewakaLayOut from '../../components/layouts/GramasewakaLayOut'
import { MainContainerBG, Contact, TableContainer, TableTitle } from './z-gsStyle';
import EmpHeader from '../../components/header/EmpHeader';
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
                    <td><TableTitle>{item.Patientname}</TableTitle></td>
                    <td><TableTitle>{item.address}</TableTitle></td>
                    <td>
                        <Contact>
                            {item.contact}
                            <div>
                                <i className="fa-regular fa-envelope"></i>
                            </div>
                            <div>
                                <i class="fa-regular fa-envelope"></i>
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

                <BottomSlider length={length}
                    index={index}
                    setIndex={setIndex}
                    x={x}
                    sliderValue={sliderValue} />

            </MainContainerBG>

        </GramasewakaLayOut>
    );
}




const data = [

    {
        Patientname: "Kalum Chandana",
        address: "Abc",

    },
    {
        Patientname: "Kalum Chandana",
        address: "Tangalle",

    },
    {
        Patientname: "Kalum Chandana",
        address: "Tangalle",

    },
    {
        Patientname: "Kalum Chandana",
        address: "Tangalle",

    },
    {
        Patientname: "Kalum Chandana",
        address: "Tangalle",

    },
    {
        Patientname: "Kalum Chandana",
        address: "Tangalle",

    },
    {
        Patientname: "Kalum Chandana",
        address: "Tangalle",

    },



]