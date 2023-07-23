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

import {ThemeContext} from "../../App.js"

export default function AdminSidebar() {

    const { setTheme, theme } = useContext(ThemeContext);
    const { pathname } = useLocation();

    return (
        <SidebarSection>

            <SLogo>
                <Link to="/admin">
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
        label: "Dashboard",
        icon: <i className="fa-solid fa-house-user"></i>,
        to: "/admin",
    },
    {
        label: "Village Officers",
        icon: <i className="fa-solid fa-user-tie"></i>,
        to: "/admin/village-officers",
    },
    {
        label: "PHI",
        icon: <i className="fa-solid fa-user-nurse"></i>,
        to: "/admin/phis",
    },
    {
        label: "View Map",
        icon: <i className="fa-solid fa-location-dot"></i>,
        to: "/admin/view-map",
    },
    {
        label: "Campaigns",
        icon: <i className="fa-solid fa-person-digging"></i>,
        to: "/admin/campaigns",
    },
    {
        label: "Announcement",
        icon: <i className="fa-solid fa-volume-high"></i>,
        to: "/admin/announcements",
    },
    {
        label: "Organization",
        icon: <i className="fa-solid fa-people-line"></i>,
        to: "/admin/organizations",
    },
    {
        label: "Reports",
        icon: <i className="fa-solid fa-user"></i>,
        to: "/admin/view-reports",
    },
];
