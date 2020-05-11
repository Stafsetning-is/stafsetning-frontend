import styled from "styled-components";
import { BACKGROUND } from "../../../../static";
/* ... */

export const Heading = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-color: #6600ff;
    opacity: 0.8;
    margin-bottom: 20px;
    color: white;
    font-size: 190px;
    background-image: url(${BACKGROUND});
`;

export const Content = styled.p`
    margin-bottom: 20px;
    line-height: 35px;
    color: #525252;
    justify-content: center;
    font-size: 25px;
`;

export const Mailto = styled.a`
    color: #0000ee;
    text-decoration: underline;
    :visited {
        color: #551a8b;
    }
`;

export const DeveloperImage = styled.img`
    width: 30%;
    height: 30%;
    display: block;
    align-self: center;
    border-radius: 50%;
    margin-bottom: 20px;
`;

export const DeveloperImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
