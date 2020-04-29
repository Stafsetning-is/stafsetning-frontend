import styled from "styled-components";

const BASE_WIDTH = 200;

export const Outer = styled.div`
	height: 30px;
	width: ${BASE_WIDTH}px;
	float: right;
`;

export const Inner = styled.div`
	background: #ff6600;
	float: right;
	height: 100%;
	width: ${(props) => props.theme.ratio * BASE_WIDTH}px;
	transition: 0.5s;
`;
