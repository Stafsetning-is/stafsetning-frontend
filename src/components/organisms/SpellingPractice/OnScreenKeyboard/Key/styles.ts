import styled from "styled-components";

export const Outer = styled.div`
	height: 49px;
	width: 49px;
	border: 2px solid #666;
	border-radius: 4px;
	margin-left: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 22px;
	user-select: none;
	-moz-user-select: none;
	-khtml-user-select: none;
	-webkit-user-select: none;
	-o-user-select: none;
	transition: 0.2s;
	${(props) =>
		props.theme.higlight
			? `
			color: #f8f8f8;
			background: #333;
			
		`
			: `
			color: #666;
			background: none;
			
		`}
	${(props) => `padding: ${props.theme.padding}`};
`;
