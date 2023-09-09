import React, { useContext } from "react";
import logoIcon from "../../assets/images/logo-sidebar.png";
import { Link, useLocation } from "react-router-dom";
import {
    DividerLine,
    LinkContainer,
    LinkIcon,
    LinkLable,
    NavigateLink,
    SLogo,
    SidebarSection,
    Theme,
    ThemeLabel,
    ThemeToggler,
    ToggleThumb,
} from "./sidebarStyles";

import { ThemeContext } from "../../App.js"

export default function ReceptionistSidebar() {

    const { setTheme, theme } = useContext(ThemeContext);
    const { pathname } = useLocation();

    return (
        <SidebarSection>

            <SLogo>
                <Link to="/receptionist">
                    <img src={logoIcon} alt="LOGO" />
                </Link>
            </SLogo>

            <DividerLine />

            {linksArray.map(({ icon, label, to }) => (
                <LinkContainer key={label} $isActive={pathname === to}>
                    <NavigateLink to={to} >
                        <LinkIcon $isActive={pathname === to}>{icon}</LinkIcon>
                        <LinkLable $isActive={pathname === to}>{label}</LinkLable>
                    </NavigateLink>
                </LinkContainer>
            ))}

            <DividerLine />

            <Theme>
                <ThemeLabel>Dark Mode</ThemeLabel>
                <ThemeToggler
                    $isActive={theme === "dark"}
                    onClick={() =>
                        setTheme((p) => (p === "light" ? "dark" : "light"))
                    }
                >
                    <ToggleThumb
                        style={theme === "dark" ? { right: "1px" } : {}}
                    />
                </ThemeToggler>
            </Theme>
        </SidebarSection>
    );
}

const linksArray = [
    {
        label: "Home",
        icon: <i className="fa-solid fa-house-user"></i>,
        to: "/receptionist",
    },
    
    {
        label: "Nurse",
        icon: <i className="fa-solid fa-user-nurse"></i>,
        to: "/receptionist/addNurse",
    },

    {
        label: "Doctor",
        icon: <i className="fa-solid fa-user-doctor"></i>,
        to: "/receptionist/addDoctor",
    },
];
