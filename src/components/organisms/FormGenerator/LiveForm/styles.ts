import styled from "styled-components";

export const InputElementOuter = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	height: 40px;
`;

export const Outer = styled.div`
	width: 100%;
	padding: 40px 40px;
	> ${InputElementOuter} {
		margin-bottom: 35px;
	}
`;

export const Feedback = styled.div`
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 15px;
`;

export const InputerElementInner = styled.div`
	width: 100%;
`;
