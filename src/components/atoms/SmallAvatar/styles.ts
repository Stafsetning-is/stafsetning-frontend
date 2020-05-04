import styled from "styled-components";

const SIZE = 50;

export const Outer = styled.div`
	height: ${(props) => (props.theme.xs ? SIZE * 0.6 : SIZE)}px;
	width: ${(props) => (props.theme.xs ? SIZE * 0.6 : SIZE)}px;
	border-radius: ${SIZE / 2}px;
	background-image: url(${(props) => props.theme.url});
	background-size: cover;
	:hover {
		transform: rotateY(180deg);
	}
`;
