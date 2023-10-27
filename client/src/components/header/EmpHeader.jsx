import React, { useState } from "react";
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
import UserProfile from "./popup/UserProfile";

export default function EmpHeader({ pageName }) {
    const navigate = useNavigate();
    const [profile,setProfile] = useState(false);

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
                            <img onClick={() =>setProfile(true)} src={profileImg} alt="Profile 4to" />
                        </AccImage>
                    </AccProfile>
                </AccDetails>
                <LogoutButton onClick={userLogout}>Logout</LogoutButton>
            </ACC>

            <UserProfile
                profile = {profile}
                setProfile = {setProfile}
                
            />
        </Heading>
    );
}
