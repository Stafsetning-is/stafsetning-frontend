import styled from "styled-components";

export const Outer = styled.div`
	margin-top: 5px;
`;

export const Button = styled.div`
	border: 1px solid #cecece;
	border-radius: 3px;
	height: 40px;
	width: 100%;
	cursor: pointer;
	padding: 10px;
	font-size: 16px;
	box-sizing: border-box;
	border-radius: 3px;
	border: 1px solid #cecece;
	background: #f8f8f8;
	outline: none;
	color: #777;
`;

export const Choices = styled.div`
	border-right: 1px solid #aaa;
	border-left: 1px solid #aaa;
	position: absolute;
	width: 100%;
	box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
	height: 200px;
	overflow-y: scroll;
	cursor: pointer;
`;
