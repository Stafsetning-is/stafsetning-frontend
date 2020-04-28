import styled from 'styled-components';

export const TopBar = styled.div`
	background: #00ffaa;
	height: 60px;
	width: 100%;
	box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.15);
	display: flex;
	align-items: center;
	p {
		margin: 0 20px;
		color: #333;
	}
	margin: 20px 0 40px 0;
	padding-left: 10px;
`;

export const TitleText = styled.div`
	padding: 20px 0 5px 0;
	color: #666;
	* {
		margin: 0 20px 0 0;
		color: #666;
		font-size: 16px;
	}
`;

export const SecondaryTitle = styled.div`
	scolor: #666;
	* {
		margin: 0 20px 0 0;
		color: #999;
	}
`;

export const TitleElement = styled.span``;

export const PositiveElement = styled.div`
	scolor: #666;
	* {
		margin: 0 20px 0 0;
		color: #999;
	}
`;

export const OverviewContainer = styled.div`
	display: flex;
	margin-bottom: 50px;
`;

export const SuggestionTitle = styled.div`
	margin: 20px 0;
`;

export const Outer = styled.div`
	margin: 0 20px 20px 0l;
`;

export const ErrorCount = styled.p`
	font-weight: bold;
	color: #ff0066;
	font-size: 30px;
	text-shadow: 0px 0px 10px rgba(255, 0, 102, 0.25);
	margin-bottom: 10px;
`;

export const TimeText = styled.p`
	color: #999999;
	font-size: 30px;
	text-shadow: 0px 0px 10px rgba(153, 153, 153, 0.15);
`;

export const feedBack = styled.div`
	margin: 0 20px 20px 0l;
`;
