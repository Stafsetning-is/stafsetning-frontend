import styled from "styled-components";

export const CloseButton = styled.div`
	position: absolute;
	right: 10px;
	opacity: 0;
	transition: 0.3s;
	:hover {
		opacity: 1 !important;
	}
`;

export const Outer = styled.div`
	position: inline-block;
	height: 90%;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 40px 0 15px;
	margin: 0 3px 0 3px;
	border-bottom: 0px;
	color: #cecece;
	border-right: 1px solid #666;
	cursor: pointer;
	position: relative;
	${(props) =>
		props.theme.selected
			? `
			background: #f8f8f8;
			border-radius: 5px 5px 0 0;
			border-right: none;
			color: #666 !important;
			${CloseButton} {
				opacity: 0.2;
			}
			`
			: ``}
	:hover ${CloseButton} {
		opacity: 0.5;
	}
	:hover {
		color: #f8f8f8;
	}
`;

export const Text = styled.span`
	padding: 10px;
`;
