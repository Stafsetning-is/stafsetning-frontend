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
