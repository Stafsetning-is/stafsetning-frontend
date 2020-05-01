import styled from "styled-components";

export const Frame = styled.div`
	height: 100px;
	border-top: 2px solid rgba(102, 0, 255, 1);
	text-align: center;
	margin-bottom: 1em;
`;

export const Button = styled.div`
	height: 40px;
	flex: 1;
	display: inline-block;
	justify-content: center;

	cursor: pointer;
	margin: 0.5em 3em;
	padding: 0.5em 1em;
	transition: 0.5s;
	${(props) =>
		props.theme.selected
			? ` 
                color: #6600ff;
                font-weight: 500;
        `
			: `
            color: #666;
            font-weight: 300;
         `}
`;
