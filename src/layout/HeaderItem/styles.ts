import styled from "styled-components";

export const DropDownContainer = styled.div`
	display: none;
	top: 57px;
	left: 0;
	transform: translateX(-20%);
	width: 120%;
	position: absolute;
	border: 1px solid #cecece;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
	z-index: 20;
	border-top: none;
`;

export const Outer = styled.div`
	font-size: 14px;
	color: #f8f8f8;
	font-weight: 200;
	cursor: pointer;
	padding: 20px 25px 20px 5px;
	position: relative;
	:hover ${DropDownContainer} {
		display: block;
	}
`;

export const DropDownItem = styled.div`
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
	background: #eee;
	border-bottom: 1px dashed #dedede;
	:last-child {
	}
	:hover {
		background: #e1e1e1;
	}
	color: #333;
	font-weight: 400;
`;

export const NotificationBubble = styled.div`
	height: 16px;
	width: 16px;
	border-radius: 8px;
	position: absolute;
	top: 9px;
	right: 15px;
	background-color: #00ffcc;
	color: #333;
	box-shadow: 2.5px 2.5px 5px rgba(0, 0, 0, 0.3);
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	font-weight: 500;
`;
