import styled from "styled-components";

const OFFSET = 30;

export const Outer = styled.div`
	margin: 30px 0;
`;

export const Inner = styled.div`
	height: 50px;
	position: relative;
`;

export const Text = styled.div`
	margin-left: ${(props) => 70 - OFFSET + props.theme.count * OFFSET}px;
	height: 100%;
	display: flex;
	align-items: center;
	color: #666;
`;
