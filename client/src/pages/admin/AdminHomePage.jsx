import React from 'react'
import AdminLayout from '../../components/layouts/AdminLayout'
import EmpHeader from '../../components/header/EmpHeader';

export default function AdminHomePage() {
    return (
        <AdminLayout>
            <EmpHeader pageName={"DashBoard"} />
            
        </AdminLayout>
    );
}
