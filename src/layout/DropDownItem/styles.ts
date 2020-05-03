import styled from "styled-components";

export const Outer = styled.div`
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
	background: #eee;
	border-bottom: 1px dashed #dedede;
	:last-child {
	}
	:hover {
		background: #e1e1e1;
	}
	display: flex;
	color: #333;
	font-weight: 400;
`;

export const Text = styled.p``;

export const Icon = styled.p`
	font-size: 20px;
	width: 35px;
	display: flex;
	color: #999;
`;
