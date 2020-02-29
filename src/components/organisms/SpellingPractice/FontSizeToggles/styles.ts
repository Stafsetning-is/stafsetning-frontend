import styled from "styled-components";

export const Button = styled.button`
	padding: 5px;
	background: ${(props) => (props.theme.selected ? "#6600cc" : "none")};
	border: 2px solid #6600cc;
	outline: none;
	display: inline-block;
	margin-right: 15px;
	border-radius: 3px;
	color: ${(props) => (props.theme.selected ? "#f8f8f8" : "#6600cc")};
	opacity: ${(props) => (props.theme.fade ? "0.4" : "1")};
`;
