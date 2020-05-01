import styled from "styled-components";

const SIZE = 110;

export const Outer = styled.div`
	border: 1px dotted rgba(199, 135, 8, 0.6);
	border-radius: ${SIZE / 2}px;
	width: ${SIZE}px;
	height: ${SIZE}px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: rgba(199, 135, 8, 0.12);
	position: relative;
	box-shadow: 0px 0px 15px rgba(102, 0, 255, 0.1);
	transition: 0.55s;
	:hover {
		box-shadow: 0px 0px 25px rgba(102, 0, 255, 0.15);
	}
`;

export const Title = styled.div`
	color: #333;
	font-weight: 200;
`;

export const Icon = styled.div`
	color: #e8bd00;
	opacity: 0.6;
	font-size: 40px;
	margin-bottom: 8px;
`;
