import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(${(props) => props.theme.itemsInRow}, 1fr);
	grid-gap: 30px;
`;
