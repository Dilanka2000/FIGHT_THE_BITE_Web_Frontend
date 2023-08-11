import React, { useState } from 'react'
import GramasewakaLayOut from '../../components/layouts/GramasewakaLayOut'
import { MainContainerBG, DeleteButton, UpdateButton, Contact, TableContainer, TableTitle } from './z-gsStyle';
import EmpHeader from '../../components/header/EmpHeader';
import BottomSlider from '../../components/slider/BottomSlider';

export default function GsCampaigns() {

    const sliderValue = 5;
    const [index, setIndex] = useState(0);
    const length = data.length;
    const x = index + sliderValue > length ? length : index + sliderValue;

    const getDataContent = data => {
        let content = [];
        for (let i = index; i < x; i++) {
            const item = data[i];
            content.push(
                <tr key={item.Campaign}>
                    <td><TableTitle>{item.Campaign}</TableTitle></td>
                    <td><TableTitle>{item.Date}</TableTitle></td>
                    <td>
                        <Contact>
                            {item.contact}
                            <div>
                                <i className="fa-regular fa-envelope"></i>
                            </div>
                            <div>
                                <i className="fa-regular fa-envelope"></i>
                            </div>
                        </Contact>
                    </td>
                    <td>
                        <DeleteButton>Accept</DeleteButton>
                        <UpdateButton>Reject</UpdateButton>
                    </td>
                </tr >
            );
        }
        return content;
    }
    return (
        <GramasewakaLayOut>
            <EmpHeader pageName={"Organizations"} />
            <MainContainerBG>

                <TableContainer>
                    <table>
                        <thead>
                            <tr>
                                <th>Campaign</th>
                                <th>Date</th>
                                <th>Contact</th>
                                <th>Action</th>
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
        Campaign: "Kalum Chandana",
        Date: "2023/9/02",

    },
    {
        Campaign: "Kalum Chandana",
        Date: "2023/9/02",

    },
    {
        Campaign: "Kalum Chandana",
        Date: "2023/9/02",

    },
    {
        Campaign: "Kalum Chandana",
        Date: "2023/9/02",

    },
    {
        Campaign: "Kalum Chandana",
        Date: "2023/9/02",

    },
    {
        Campaign: "Kalum Chandana",
        Date: "2023/9/02",

    },
    {
        Campaign: "Kalum Chandana",
        Date: "2023/9/02",

    },



]