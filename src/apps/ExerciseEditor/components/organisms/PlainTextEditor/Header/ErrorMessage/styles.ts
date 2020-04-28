import styled from "styled-components";

export const Outer = styled.div`
	width: 100%;
	height: 0px;
	background: #ff0066;
	position: absolute;
	top: 50px;
	color: #f8f8f8;
	display: flex;
	box-sizing: border-box;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	transition: 0.3s;
	p {
		opacity: 0;
	}
	${(props) =>
		props.theme.hasMessage
			? `
			height: 50px;
			p {
				opacity: 1
			}
	
		`
			: ` 
			opacity: 0;
	`}
`;
