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
	left: 0;
	border-radius: 0px 4px 4px 0;
	box-shadow: px 0px 25px rgba(102, 0, 255, 0.25);
`;

export const Header = styled.div`
	width: 100%;
	background: #6600ff;
	height: 50px;
	border-radius: 0px 4px 4px 0;
`;
