import styled from "styled-components";
import { BACKGROUND } from "../../../../static";
/* ... */

const noSelect = `
	user-select: none;
	-webkit-touch-callout: none;
	-webkit-user-select: none; 
   	-moz-user-select: none; 
	-ms-user-select: none; 
`;

export const Heading = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 200px;
	background-color: #6600ff;
	opacity: 0.8;
	margin-bottom: 20px;
	color: white;
	font-size: 190px;
	background-image: url(${BACKGROUND});
	${noSelect}
`;

export const Content = styled.p`
	margin-bottom: 20px;
	line-height: 1.45;
	color: #525252;
	font-size: 18px;
	font-width: 400;
`;

export const MailtoLink = styled.a`
	color: #0000ee;
	color: #333;
	font-weight: 500;
	transition: 0.3s;
	text-decoration: underline;
	:hover {
		color: #60f;
	}
`;

export const DeveloperImage = styled.div`
	border-radius: 50%;
	width: 170px;
	height: 170px;
	background-image: url(${(props) => props.theme});
	background-size: cover;
	${noSelect}
	:hover {
		transform: rotateY(180deg);
	}
	margin-bottom: 20px;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const DeveloperWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Developer = styled.p`
	line-height: 35px;
	color: #525252;
	font-size: 20px;
`;
