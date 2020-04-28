import styled from "styled-components";

export const Outer = styled.div`
	font-size: 14px;
	color: #f8f8f8;
	font-weight: 200;
	cursor: pointer;
	padding: 20px 0 20px 30px;
	position: relative;
`;

export const NotificationBubble = styled.div`
	height: 16px;
	width: 16px;
	border-radius: 8px;
	position: absolute;
	top: 9px;
	right: -10px;
	background-color: #00ffcc;
	color: #333;
	box-shadow: 2.5px 2.5px 5px rgba(0, 0, 0, 0.3);
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	font-weight: 500;
`;
