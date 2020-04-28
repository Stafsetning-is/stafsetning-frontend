import styled from "styled-components";

export const EditorOuter = styled.div`
	border-radius: 4px;
	position: fixed;
	height: 550px;
	right: 20px;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
	transition: 0.3s;
	background: #f8f8f8;
	width: 500px;
	display: flex;
	box-sizing: border-box;
	flex-direction: column;
	z-index: 10;
	${(props) =>
		props.theme.minimized
			? `
		top: calc(100% - 50px);
		
	`
			: `
		top: calc(100% - 550px);
		${
			props.theme.expanded
				? `
				height: 600px;
				top: 40%;
				margin-top: -250px;

				left: 50%;
				width: 1000px;
				margin-left: -500px;;

		`
				: ``
		} 

	`}
`;
