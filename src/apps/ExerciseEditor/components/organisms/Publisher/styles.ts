import styled from "styled-components";

export const ButtonContainer = styled.div`
	float: right;
	margin-top: 70px;
`;

export const ErrorText = styled.p`
	padding: 5px 10px;
	background: #ff0066;
	color: #f8f8f8;
	font-size: 16px;
	position: absolute;
	right: 0;
	margin-top: 20px;
	font-style: italic;
	transition: 0.3s;
	${(props) => (props.theme.hasError ? "opacity: 1;" : "opacity: 0;")}
`;

export const Outer = styled.div`
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-o-user-select: none;
	user-select: none;
`;
