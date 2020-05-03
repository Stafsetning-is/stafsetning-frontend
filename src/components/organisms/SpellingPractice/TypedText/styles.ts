import styled from "styled-components";

export const TextSpan = styled.span`
	font-family: "Roboto Mono", monospace;
`;

export const PreviewSpan = styled.span`
	font-family: "Roboto Mono", monospace;
	opacity: 0.4;
	position: relative;
	::first-letter {
		color: #333;
	}
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
	color: #000;
	line-height: 1.5;

	width: 100%;
	margin-left: 50px;
	margin-top: 67px;
`;

export const ToggleSeperator = styled.div`
	height: 25px;
	border-left: 1px solid #999;
	display: inline;
	margin: 5px 15px 0 0;
`;

export const Cursor = styled.div`
	width: ${(props) => props.theme.fontSize * 0.625}px;
	height ${(props) => props.theme.fontSize}px;
	border-bottom: #666 2px solid;
	background: rgba(0,0,0,0.3);
	position: absolute;
	left: 0;
	top: 0;
	margin: 3px 0 0px 1px;
    transition: 0.1s opacity;
	float: left;
	animation: blink-animation 1s steps(5, start) infinite;
	-webkit-animation: blink-animation 2s steps(5, start) infinite;
	@keyframes blink-animation {
		to {
			visibility: hidden;
		}
	}
	@-webkit-keyframes blink-animation {
		to {
			visibility: hidden;
		}
	}
`;
