import styled from "styled-components";

const subTitleBase = `
	margin: 0 0 5px 0;
	display: block;
	font-weight: 200;
`;

export const Button = styled.div`
	height: 40px;
	border-top: 1px solid #cecece;
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #6600ff;
	cursor: pointer;
`;

export const InfoBox = styled.div``;

export const TitleText = styled.span`
	color: #333;
	margin: 5px 0 5px 0;
	display: block;
`;

export const SecondaryTitle = styled.span`
	${subTitleBase}
	color: #aaa;
`;

export const BestPracticeTitle = styled.span`
	${subTitleBase}
	color: #00d855;
	font-weight: 500;
`;

export const Container = styled.div`
	padding: 5px 17.5px 0 17.5px;
`;

export const InfoContainer = styled.div`
	height: 110px;
`;
