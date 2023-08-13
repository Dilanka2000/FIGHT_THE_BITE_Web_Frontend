import React from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import EmpHeader from "../../components/header/EmpHeader";
import { SearchBar, TopContainer, MainContainer, TableContainerScroll, Contact } from "../../assets/styles/globalStyls";

export default function Organizations() {
    return (
        <AdminLayout>
            <EmpHeader pageName={"Organizations"} />

            <TopContainer>
                <SearchBar>
                    <input type="text" placeholder="Search here..." />
                </SearchBar>
            </TopContainer>

            <MainContainer>
                <TableContainerScroll>
                    <table>
                        <thead>
                            <tr>
                                <th>GS Division</th>
                                <th>Organization Name</th>
                                <th>Contact Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(({ divisionName, organizationName, contact }) => (
                                <tr key={contact}>
                                    <td>{divisionName}</td>
                                    <td>{organizationName}</td>
                                    <td>
                                        <Contact>
                                            {contact}
                                            <div>
                                                <i className="fa-regular fa-envelope"></i>
                                            </div>
                                        </Contact>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </TableContainerScroll>
            </MainContainer>
        </AdminLayout>
    );
}

const data = [
    {
        divisionName: "Mampitiya",
        organizationName: "Mampitiya - Welfare Organization",
        contact: "0712345780"
    },
    {
        divisionName: "Mampitiya",
        organizationName: "Mampitiya - Welfare Organization",
        contact: "0712345781"
    },
    {
        divisionName: "Mampitiya",
        organizationName: "Mampitiya - Welfare Organization",
        contact: "0712345782"
    },
    {
        divisionName: "Mampitiya",
        organizationName: "Mampitiya - Welfare Organization",
        contact: "0712345783"
    },
    {
        divisionName: "Mampitiya",
        organizationName: "Mampitiya - Welfare Organization",
        contact: "0712345784"
    },
    {
        divisionName: "Mampitiya",
        organizationName: "Mampitiya - Welfare Organization",
        contact: "0712345785"
    },
    {
        divisionName: "Mampitiya",
        organizationName: "Mampitiya - Welfare Organization",
        contact: "0712345786"
    },
    {
        divisionName: "Mampitiya",
        organizationName: "Mampitiya - Welfare Organization",
        contact: "0712345787"
    },
    {
        divisionName: "Mampitiya",
        organizationName: "Mampitiya - Welfare Organization",
        contact: "0712345788"
    },
    {
        divisionName: "Mampitiya",
        organizationName: "Mampitiya - Welfare Organization",
        contact: "0712345789"
    },
    {
        divisionName: "Mampitiya",
        organizationName: "Mampitiya - Welfare Organization",
        contact: "0712345719"
    },
    {
        divisionName: "Mampitiya",
        organizationName: "Mampitiya - Welfare Organization",
        contact: "0712345729"
    },
    {
        divisionName: "Mampitiya",
        organizationName: "Mampitiya - Welfare Organization",
        contact: "0712345739"
    },
]