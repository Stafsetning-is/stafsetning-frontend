import styled from "styled-components";

export const Outer = styled.div`
	@media (min-width: 1000px) {
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
		height: 70px;
	}
	@media (max-width: 999px) {
		* {
			display: none;
		}
	}
`;

export const Inner = styled.div`
	color: #f8f8f8;
	display: flex;
	align-items: center;
	height: 70px;
`;

export const Item = styled.span`
	margin-right: 40px;
	cursor: pointer;
`;
