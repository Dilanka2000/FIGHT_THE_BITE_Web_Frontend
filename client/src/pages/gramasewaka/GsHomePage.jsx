import React from 'react'
import GramasewakaLayOut from '../../components/layouts/GramasewakaLayOut'
import { Heading, MainContainerBG, AddButton } from './z-gsStyle';
import EmpHeader from '../../components/header/EmpHeader';


export default function GsHomePage() {
    return (
        <GramasewakaLayOut>
            <EmpHeader pageName={"Home"} />
            < MainContainerBG>
                <AddButton>add</AddButton>

            </MainContainerBG>

        </GramasewakaLayOut>
    );
}
