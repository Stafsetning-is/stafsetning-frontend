import styled from "styled-components";

export const EditorOuter = styled.div`
	border: 1px solid #343a40;
	border-radius: 4px;
	position: fixed;
	height: 550px;
	right: 20px;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
	transition: 0.3s;
	background: #f8f8f8;
	width: 500px;
	${(props) =>
		props.theme.minimized
			? `
		top: calc(100% - 50px);
		
	`
			: `
		top: calc(100% - 500px);
		${
			props.theme.expanded
				? `
				height: 500px;
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
