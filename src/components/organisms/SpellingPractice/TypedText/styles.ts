import styled from "styled-components";

export const TextSpan = styled.span`
	font-weight: 200;
	color: #333;
	font-family: "${(props) => props.theme.fontFamily}";
	font-size: 18px;
`;

export const PreviewSpan = styled.span`
	font-weight: 550;
	color: #999;
	font-family: "${(props) => props.theme.fontFamily}";
	font-size: 18px;
`;

export const Block = styled.div`
	padding: 20px 0;
`;