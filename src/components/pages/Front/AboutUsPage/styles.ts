import styled from "styled-components";
import { BACKGROUND } from "../../../../static";
/* ... */

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
`;

export const Content = styled.p`
	margin-bottom: 20px;
	line-height: 35px;
	color: #525252;
	font-size: 20px;
	font-width: 400;
`;

export const MailtoLink = styled.a`
	color: #0000ee;
	text-decoration: underline;
	:visited {
		color: #551a8b;
	}
`;

export const DeveloperImage = styled.img`
	border-radius: 50%;
	width: 170px;
	height: 170px;
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
