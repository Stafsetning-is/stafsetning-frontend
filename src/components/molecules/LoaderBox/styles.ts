import styled from "styled-components";

export const Container = styled.div`
    width: 100%
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: ${(props) => props.theme.height ?? "auto"};
`;
