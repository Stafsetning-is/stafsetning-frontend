import styled from "styled-components";

export const Plus = styled.div`
	position: inline-block;
	height: 100%;
	width: 50px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #cecece;
	transition: 0.3s;
	font-size: 15px;
	:hover {
		color: #f8f8f8;
	}
`;

export const Info = styled.p`
	height: 100%;
	display: flex;
	align-items: center;
	color: #cecece;
	margin-left: 20px;
`;

export const Outer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	cursor: pointer;
	:hover,
	:hover ${Info}, :hover ${Plus} {
		color: #f8f8f8 !important;
	}
`;
