import styled from "styled-components";

const WIDTH = 350;

export const FilterOuter = styled.div`
	display: flex;
	:last-child {
		border-width: 0;
	}
	margin-bottom: 20px;
	top: 50%;
	transform: translateY(-50%);
	position: fixed;
	flex-direction: column;
	background: #f8f8f8;
	width: ${WIDTH}px;
	border-radius: 0px 4px 4px 0;
	box-shadow: 0px 0px 25px rgba(102, 0, 255, 0.15);
	z-index: 6;
	transition: 0.7s;
	${(props) =>
		props.theme.open
			? `
		left: 0;
		opacity: 1
	
	`
			: `
		left: -${WIDTH}px;
		opacity: 0
	`}
`;

export const Header = styled.div`
	width: 100%;
	background: #6600ff;
	height: 50px;
	border-radius: 0px 4px 0 0;
	color: #f8f8f8;
	font-size: 20px;
	font-weight: 450;
	display: flex;
	align-items: center;
	padding: 0 20px 0 20px;
	box-sizing: border-box;
	justify-content: space-between;
	svg {
		transition: 0.3s;
		cursor: pointer;
		:hover {
			opacity: 0.7;
		}
	}
`;

export const OpenFilter = styled.div`
	height: 50px;
	width: 50px;
	background: #6600ff;
	border-radius: 0px 4px 4px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #f8f8f8;
	cursor: pointer;
	position: fixed;
	left: 0px;
	z-index: 5;
`;

export const FilterTitle = styled.span``;
