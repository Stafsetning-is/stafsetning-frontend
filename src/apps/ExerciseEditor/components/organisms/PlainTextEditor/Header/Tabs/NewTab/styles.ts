import styled from "styled-components";

export const Outer = styled.div`
	position: inline-block;
	height: 100%;
	width: 30px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #cecece;
	cursor: pointer;
	transition: 0.3s;
	font-size: 15px;
	:hover {
		color: #f8f8f8;
		margin-left: 2px;
	}
`;
