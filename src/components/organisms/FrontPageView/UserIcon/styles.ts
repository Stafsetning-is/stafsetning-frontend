import styled from "styled-components";

const OFFSET = 30;

export const Wrapper = styled.div`
	position: absolute;
	left: ${(props) => props.theme.index * OFFSET}px;
	border: 3px solid #f8f8f8;
	background: #cecece;
	box-sizing: border-box;
	border-radius: 30px;
`;
