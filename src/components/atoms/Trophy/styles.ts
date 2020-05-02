import styled from "styled-components";

const SIZE = 130;

export const Title = styled.div`
	color: #333;
	font-weight: 300;
	font-size: 16px;
	color: rgba(199, 135, 8, 1);
`;

export const Icon = styled.div`
	color: rgba(199, 135, 8, 1);
	opacity: 0.6;
	font-size: 40px;
	margin-bottom: 8px;
`;

export const Inner = styled.div`
	border-radius: ${SIZE / 2}px;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	box-shadow: 0px 0px 15px rgba(199, 135, 8, 0.2);
	transition: 0.55s, transform ease-out 1.4s;
	cursor: pointer;
	${(props) =>
		props.theme.locked
			? `
			background-color: rgba(0, 0, 0, 0.05);
			border: 1px dotted rgba(0, 0, 0, 0.2);
			${Icon}, ${Title} {
				color: rgba(0, 0, 0, 0.2);
			}
			`
			: `background-color: rgba(199, 135, 8, 0.25);
		border: 1px dotted rgba(199, 135, 8, 1);`}
`;

export const Outer = styled.div`
	transform-style: preserve-3d;
	:hover ${Inner} {
		transform: rotateY(360deg);
	}
	width: ${SIZE}px;
	height: ${SIZE}px;
`;
