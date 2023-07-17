import React from "react";

import { useNavigate } from "react-router-dom";
import {
    ACC,
    AccDetails,
    AccImage,
    AccName,
    AccProfile,
    Heading,
    LogoutButton,
    PageName,
} from "./headerStyles";

export default function EmpHeader({ pageName }) {
    const navigate = useNavigate();

    // logout handler function
    function userLogout() {
        localStorage.removeItem("token");
        navigate("/");
    }

    return (
        <Heading>
            <PageName>{pageName}</PageName>
            <ACC>
                <AccDetails>
                    <AccProfile>
                        <AccName>
                            <div>Nabila A.</div>
                            <p>admin</p>
                        </AccName>
                        <AccImage></AccImage>
                    </AccProfile>
                </AccDetails>
                <LogoutButton onClick={userLogout}>Logout</LogoutButton>
            </ACC>
        </Heading>
    );
}
