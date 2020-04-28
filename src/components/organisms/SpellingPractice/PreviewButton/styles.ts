import styled from "styled-components";

export const Button = styled.button`
	position: absolute;
	width: 70px;
	height: 59px;
	top: 170px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	background: #00ffaa;
	box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.15);
	color: #333;
	outline: none;
	border: none;
	font-size: 14px;
	padding-left: 20px;
	left: 58%;
	margin-left: 380px;
	&:hover {
		box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.15);
	}
	transition: 0.3s box-shadow;
`;
