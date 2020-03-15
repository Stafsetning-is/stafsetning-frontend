import styled from "styled-components";

export const ButtonOuter = styled.button`
	height: 45px;
	background-color: ${(props) => props.theme.bg};
	color: #f8f8f8;
	font-size: 16px;
	padding: 10px;
	margin-top: 15px;
	border-radius: 3px;
	outline: none;
	width: 100%;
	border: ${(props) => props.theme.border};
	color: ${(props) => props.theme.color};
`;
