import styled from "styled-components";

export const Cursor = styled.div`
	width: 12px;
	height 18px;
	border-bottom: #666 2px solid;
	background: #999;
	display: inline-block;
	margin: 0 0 -2px 1px;
    transition: 0.1s opacity;
	opacity: ${(props) => props.theme.opacity}
`;
