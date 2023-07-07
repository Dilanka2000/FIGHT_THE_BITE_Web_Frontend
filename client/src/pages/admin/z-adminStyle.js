import { styled } from "styled-components";

export const Heading = styled.div`
    color: ${({ theme }) => theme.headingText};
    font-weight: bold;
    font-size: 25px;
`;