import styled from "styled-components";

export const FilterOuter = styled.div`
	display: flex;
	:last-child {
		border-width: 0;
	}
	margin-bottom: 20px;
	position: fixed;
	flex-direction: column;
	background: #f8f8f8;
	width: 350px;
	border-radius: 0px 4px 4px 0;
	box-shadow: px 0px 25px rgba(102, 0, 255, 0.25);
	border: 1px solid #cecece;
	left: 0;
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
