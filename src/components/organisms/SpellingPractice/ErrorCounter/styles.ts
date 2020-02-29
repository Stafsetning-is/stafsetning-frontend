import styled from "styled-components";

export const Outer = styled.div`
	position: absolute;
	width: 70px;
	height: 59px;
	right: 0;
	top: 250px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	background: #ff0066;
	box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.15);
	color: #f8f8f8;
	@media (min-width: 900px) {
		left: 50%;
		margin-left: 380px;
	}
`;

export const Text = styled.span`
	font-weight: 500;
	font-size: 18px;
	line-height: 38px;
	margin-left: 20px;s
`;
