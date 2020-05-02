import styled from "styled-components";

export const Outer = styled.div`
	position: fixed;
	top: 50%;
	height: 300px;
	width: 500px;
	margin-top: -250px;
	left: 50%;
	margin-left: -250px;
	z-index: 10;
	perspective: 1000px;
	> * {
		text-align: center;
	}
`;

export const Inner = styled.div`
	display; flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	position: relative;
`;

export const TopHeading = styled.div`
	color: #333;
	font-size: 24px;
	width: 100%;
	margin-bottom: 2px;
	display: flex;
	justify-content: center;
`;

export const SubHeading = styled.div`
	height: 20px;
	color: #666;
	font-size: 16px;
	width: 100%;
`;

export const TitleText = styled.div`
	padding: 0 8px;
`;

export const DescriptionText = styled.div`
	color: #666;
	font-size: 18px;
	width: 100%;
	line-height: 1.45;
	width: 80%;
	margin: 0 auto;
	margin-top: 15px;
`;

export const BottomText = styled.div`
	color: #666;
	font-size: 13px;
	line-height: 1.45;
	width: 80%;
	position: absolute;
	bottom: 30px;
	width: 80%;
	left: 50%;
	margin-left: -40%;
`;

export const CloseIcon = styled.div`
	position: absolute;
	right: 5px;
	top: 5px;
	padding: 3px;
	color: #bbb;
	cursor: pointer;
	transition: 0.3s;
	:hover {
		color: #666;
	}
`;
