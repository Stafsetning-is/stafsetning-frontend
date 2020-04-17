import styled from "styled-components";

export const Button = styled.button`
	position: absolute;
	width: 70px;
	height: 59px;
	right: 0;
	top: 320px;
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
	@media (min-width: 900px) {
		left: 50%;
		margin-left: 380px;
	}
	&:hover {
		box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.15);
	}
	transition: 0.3s box-shadow;
`;
