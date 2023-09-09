import React from 'react'
import ReceptionistLayout from '../../components/layouts/ReceptionistLayout'
import EmpHeader from '../../components/header/EmpHeader';


export default function RcHomePage() {
    return (
        <ReceptionistLayout>
            <EmpHeader pageName={"Home"} />

        </ReceptionistLayout>
    );
}
