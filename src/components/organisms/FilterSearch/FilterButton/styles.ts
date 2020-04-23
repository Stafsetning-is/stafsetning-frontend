import styled from "styled-components";

export const Button = styled.div`
	color: ${(props) => (props.theme.selected ? "#6600ff" : "#999")};
	:hover {
		color: ${(props) => (props.theme.selected ? "#6600ff" : "#666")};
	}
	cursor: pointer;
	padding: 7.5px 0;
	transition: 0.2s;
`;
