import styled from "styled-components";

export const Outer = styled.div`
	width: 100%;
	height: 280px;
	position: absolute;
	left: 0;
	bottom: 0;
	margin: 0 auto;
`;

export const Line = styled.div`
	width: 100%;
	display: flex;
	:nth-child(2) {
		margin-left: 25px;
	}
	:nth-child(3) {
		margin-left: 40px;
	}
	:nth-child(4) {
		margin-left: 5px;
	}
	:nth-child(5) {
		margin: 0 100px;
	}
	margin-bottom: 3px;
`;
