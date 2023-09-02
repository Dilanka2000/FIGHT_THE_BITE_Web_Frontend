import React from 'react'
import ReceptionistLayout from '../../components/layouts/ReceptionistLayout'
import EmpHeader from '../../components/header/EmpHeader';


export default function AddDoctor() {
    return (
        <ReceptionistLayout>
            <EmpHeader pageName={"Manage Doctor"} />

        </ReceptionistLayout>
    );
}
