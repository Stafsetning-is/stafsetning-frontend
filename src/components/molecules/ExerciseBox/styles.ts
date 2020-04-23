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
	transition: 0.4s;
`;

export const InfoBox = styled.div``;

export const TopLine = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	svg {
		color: ${(props) =>
			props.theme.isSaved
				? `
			rgba(255, 238, 34, 0.9);
			text-shadow: 0px 0px 5px rgba(0,0,0,0.2)`
				: "#cecece"};
		cursor: pointer;
	}
`;
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
	border: 1px solid #cecece;
	border-radius: 4px;
`;

export const InfoContainer = styled.div`
	height: 110px;
`;
