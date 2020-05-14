import styled from "styled-components";

export const Container = styled.div`
	@media (min-width: 1000px) {
		width: 100%;
		height: 59px;
		background-color: #6600ff;
		box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
		span {
			color: white;
		}
		margin-bottom: 100px;
		z-index: 5;
	}
`;
export const FlexHeader = styled.div`
	display: flex;
	flex: 1;
	height: 100%;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	height: 100%;
	height: 59px;
`;

export const Image = styled.img`
	height: 20px;
	cursor: hover;
`;

export const RightSide = styled.div`
	display: flex;
`;

export const ImageContainer = styled.div`
	margin: 12px 5px 0 10px;
`;
