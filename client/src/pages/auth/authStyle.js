import { styled } from "styled-components";
import { v } from "../../assets/styles/variables";
import { Link } from "react-router-dom";

export const AuthBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background: white;
    color: ${({ theme }) => theme.text};
`;

export const AuthContainer = styled.div`
    background: ${({ theme }) => theme.bg};
    width: 868px;
    height: 582px;
    margin: auto;
    margin-top: 100px;
    border-radius: 10px;
    box-shadow: 5px 10px 10px 0 rgba(0, 0, 0, 0.12);
    display: flex;
`;

export const AuthContainerLeft = styled.div`
    width: 50%;
    background: ${({ theme }) => theme.bg2};
    height: 100%;
    border-radius: 10px 0 0 10px;
    padding: ${v.xlSpacing};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AuthContainerRight = styled.div`
    width: 50%;
    height: 100%;
    border-top: 1px solid ${({ theme }) => theme.bg3};
    border-radius: 0 10px 10px 0;
    padding: ${v.xlSpacing};
`;

export const CancelIcon = styled.div`
    text-align: right;

    i{
        font-size: 25px;
    }
`

export const AuthTital = styled.div`
    color: ${({ theme }) => theme.textMain};
    font-size: 30px;
    font-weight: 600;
    width: 100%;
    text-align: center;
    margin: ${v.xlSpacing} 0 ${v.xxlSpacing} 0;
`;

export const AuthInput = styled.div`
    margin-bottom: ${v.lgSpacing};

    input {
        width: 100%;
        height: 37px;
        border-radius: 5px;
        border: 1px solid ${({ theme }) => theme.text};
        padding: 0 ${v.lgSpacing};
    }

    input:focus{
        outline: none;
    }

    p{
        font-size: 12px;
    }
`;

export const AuthNavigateLinkA = styled(Link)`
    color: ${({ theme }) => theme.primary};
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
`;
export const AuthNavigateLinkB = styled(Link)`
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    font-weight: 800;
    text-decoration: none;
`;

export const AuthNavigate = styled.div`
    width: 100%;
    text-align: center;
    font-size: 14px;
    margin-top: ${v.mdSpacing};
`

export const AuthButton = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 20px;
    background: ${({ theme }) => theme.primary};
    color: white;
    font-size: 16px;
    border: none;
    cursor: pointer;
    margin: ${v.xlSpacing} 0;
`;

export const AuthImage = styled.div`
    width: 225px;
    height: 225px;
    background: ${({ theme }) => theme.primary};
    border-radius: 50%;
    margin-top: ${v.xxlSpacing};

    img{
        width: 180px;
        height: auto;
        margin-left: 30px;
        margin-top: -10px;
    }
`;

export const AuthCaro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AuthCaroDesc = styled.div`
    color: ${({ theme }) => theme.textMain};
    font-size: 18px;
    font-weight: 600;
    margin: ${v.xlSpacing} 0;
`;

export const AuthCaroContent = styled.div`
    font-size: 14px;
    text-align: center;
`
export const AuthCaroDot = styled.div`
    display: flex;
    gap: 5px;
    margin-top: ${v.xxlSpacing};
`
export const AuthCroDotMin = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ theme, $isActive }) => (!$isActive ? theme.secondary : theme.primary)};
    cursor: pointer;
`;