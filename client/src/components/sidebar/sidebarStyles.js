import styled from "styled-components";

import { btnReset, v } from "../../assets/styles/variables";
import { Link } from "react-router-dom";

export const SidebarSection = styled.div`
    height: 100vh;
    width: ${v.sidebarWidth};
    background: ${({ theme }) => theme.bg};
    padding: ${v.lgSpacing} 0 ${v.lgSpacing} ${v.lgSpacing};
    color: ${({ theme }) => theme.text};

    position: fixed;
`;

export const SLogo = styled.div`
    margin-bottom: ${v.lgSpacing};
    padding-right: ${v.lgSpacing};

    img {
        max-width: 100%;
        height: auto;
    }
`;

export const DividerLine = styled.div`
    height: 2px;
    width: 90%;
    background: ${({ theme }) => theme.bg3};
    margin: ${v.xlSpacing} 0;
`;

export const LinkContainer = styled.div`
    background: ${({ theme, $isActive }) => (!$isActive ? "" : theme.primary)};
    border-radius: 50px 0 0 50px;

    :hover {
        background: ${({ theme }) => theme.primary};
        color: white;
    }
`;

export const NavigateLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(${v.smSpacing} - 2px) 0;
    border-radius: 50px 0 0 50px;
    margin: 8px 0;
`;

export const LinkIcon = styled.div`
    color: ${({ $isActive }) => (!$isActive ? "" : "white")};
    padding: ${v.smSpacing};
    margin-left: ${v.mdSpacing};
    display: flex;

    i {
        font-size: 20px;
    }
`;

export const LinkLable = styled.span`
    color: ${({ $isActive }) => (!$isActive ? "" : 'white')};
    display: block;
    font-weight: 500;
    flex: 1;
    margin-left: ${v.smSpacing};
`;

export const Theme = styled.div`
    padding-right: ${v.lgSpacing};
    display: flex;
    align-items: center;
    font-size: 16px;
`;

export const ThemeLabel = styled.span`
    display: block;
    flex: 1;
`;

export const ThemeToggler = styled.button`
    ${btnReset};
    margin: 0 auto;
    cursor: pointer;
    width: 36px;
    height: 20px;
    border-radius: 10px;
    background: ${({ theme, $isActive }) => (!$isActive ? theme.bg3 : theme.primary)};

    position: relative;
`;

export const ToggleThumb = styled.div`
    height: 18px;
    width: 18px;
    position: absolute;
    top: 1px;
    bottom: 1px;
    transition: 0.2s ease right;
    right: calc(100% - 18px - 1px);
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
`;