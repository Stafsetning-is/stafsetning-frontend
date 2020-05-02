import styled from "styled-components";

export const TextSpan = styled.span``;

export const PreviewSpan = styled.span`
	opacity: 0.4;
`;

export const Block = styled.div`
	padding: 20px 0;
`;

export const TypedTextContainer = styled.div`
	padding: 20px 20px 125px 20px;
	border: 1px solid #c3c3c3;
	border-radius: 3px;
	transition: 0.3s;
	font-size: ${(props) => props.theme.fontSize}px;
	background-color: ${(props) => props.theme.textBackground};
	font-weight: 200;
	color: #333;
	line-height: 1.5;
	font-family: roboto;
`;

export const ToggleSeperator = styled.div`
	height: 25px;
	border-left: 1px solid #999;
	display: inline;
	margin: 5px 15px 0 0;
`;
