import styled from "styled-components";

const DisplayTextBase = `
	font-weight: 200;
	color: #333;
	line-height: 1.5;
`;

export const TextSpan = styled.span`
	${DisplayTextBase}
	font-family: "${(props) => props.theme.fontFamily}";
	font-size: ${(props) => props.theme.fontSize};
	transition: 0.3s;
`;

export const PreviewSpan = styled.span`
	${DisplayTextBase}	
	font-family: "${(props) => props.theme.fontFamily}";
	font-size: ${(props) => props.theme.fontSize};
	opacity: 0.4;
`;

export const Block = styled.div`
	padding: 20px 0;
`;

export const TypedTextContainer = styled.div`
	background: ${(props) =>
		props.theme.dislexic
			? "#EDD1B0"
			: props.theme.error
			? "rgba(255, 0, 102, 0.1)"
			: "#F8F8F8"};
	padding: 20px 20px 125px 20px;
	border: 1px solid #c3c3c3;
	border-radius: 3px;
	transition: 0.3s;
`;

export const ToggleSeperator = styled.div`
	height: 25px;
	border-left: 1px solid #999;
	display: inline;
	margin: 5px 15px 0 0;
`;
