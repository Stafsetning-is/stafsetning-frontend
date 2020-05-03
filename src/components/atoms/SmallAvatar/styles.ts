import styled from "styled-components";

const SIZE = 50;

export const Outer = styled.div`
	height: ${SIZE}px;
	width: ${SIZE}px;
	border-radius: ${SIZE / 2}px;
	background-image: url(${(props) => props.theme.url});
	background-size: cover;
`;
