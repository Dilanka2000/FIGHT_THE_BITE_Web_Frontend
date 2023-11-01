import React from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import EmpHeader from "../../components/header/EmpHeader";
import { SearchBar, TopContainer, MainContainer, TableContainerScroll, Contact } from "../../assets/styles/globalStyls";
import useFetch from "../../hooks/fetch-hook";
import PageNotFound from "../PageNotFound";

export default function Organizations() {

    const [{ apiData, serverError, isLoading }] = useFetch("getUsers/ORG");
    let length = 0;
    if(!isLoading){length = apiData.length;}

    if (serverError) return <PageNotFound />;
    return (
        <AdminLayout>
            <EmpHeader pageName={"Organizations"} />

            <TopContainer>
                <SearchBar>
                    <input type="text" placeholder="Search here..." />
                </SearchBar>
            </TopContainer>

            <MainContainer>
                <TableContainerScroll $row={length > 6}>
                    <table>
                        <thead>
                            <tr>
                                <th>GS Division No</th>
                                <th>GS Division</th>
                                <th>Organization Name</th>
                                <th>Organizer</th>
                                <th>Contact Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!isLoading && apiData.map(({ _id, divisionNumber, nic, gsDivision, name, boardName, contact }) => (
                                <tr key={_id}>
                                    <td>{divisionNumber}</td>
                                    <td>{gsDivision}</td>
                                    <td>{name}</td>
                                    <td>{nic[2] < 5 ? "Mr. " : "Ms. " }{boardName}</td>
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