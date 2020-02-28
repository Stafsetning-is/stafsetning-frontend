import styled from "styled-components";

export const Cursor = styled.div`
	width: 9px;
	height 18px;
	border-bottom: #999 2px solid;
	display: inline-block;
	margin: 0 0 -2px 1px;
    transition: 0.1s;
    opacity: ${(props) => props.theme.opacity}
`;
