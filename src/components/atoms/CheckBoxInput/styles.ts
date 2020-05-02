import styled from "styled-components";

export const Outer = styled.div`
	border: 2px #cecece solid;
	${(props) => (props.theme.selected ? `background-color: #6600ff;` : ``)}
	height: 20px;
	width: 20px;
	border-radius: 3px;
	margin-top: 5px;
`;
