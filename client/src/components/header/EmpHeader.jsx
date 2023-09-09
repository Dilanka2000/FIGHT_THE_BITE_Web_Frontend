import React from "react";
import jwt_decode from "jwt-decode";
import profileImg from "../../assets/images/profile.png";

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

    // To get userrole from Token
    const token = localStorage.getItem("token");
    if (!token) return Promise.reject("Cannot find Token");
    let decode = jwt_decode(token);
    let userRole;
    if (decode.role === "admin") { userRole = "Admin" }
    if (decode.role === "GN") { userRole = "Grama Niladhari" }
    

    return (
        <Heading>
            <PageName>{pageName}</PageName>
            <ACC>
                <AccDetails>
                    <AccProfile>
                        <AccName>
                            <div>{decode.name}</div>
                            <p>{userRole}</p>
                        </AccName>
                        <AccImage>
                            <img src={profileImg} alt="Profile 4to" />
                        </AccImage>
                    </AccProfile>
                </AccDetails>
                <LogoutButton onClick={userLogout}>Logout</LogoutButton>
            </ACC>
        </Heading>
    );
}
