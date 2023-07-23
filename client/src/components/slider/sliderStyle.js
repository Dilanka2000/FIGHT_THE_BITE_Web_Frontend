import { styled } from "styled-components";
import { v } from "../../assets/styles/variables";

export const BottomContainer = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${v.mdSpacing} ${v.xxlSpacing};
`;

export const BottomLeft = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.text};

    span {
        color: ${({ theme }) => theme.textMain};
        font-weight: 600;
    }
`;

export const BottomRight = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.text};
    margin-right: ${v.mdSpacing};

    i {
        font-size: 40px;
        cursor: pointer;
    }
`;

export const Slider = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 0 ${v.smSpacing};
`;

export const SliderObject = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 2px solid
        ${({ theme, $isActive }) => (!$isActive ? theme.text : theme.primary)};
    background: ${({ theme, $isActive }) =>
        !$isActive ? theme.bg : theme.primary};
    color: ${({ theme, $isActive }) => (!$isActive ? theme.text : theme.bg)};
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
