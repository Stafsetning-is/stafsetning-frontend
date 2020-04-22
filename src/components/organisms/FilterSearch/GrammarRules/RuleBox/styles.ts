import styled from "styled-components";

export const Outer = styled.div`
	border: 1px solid ${(props) => (props.theme.selected ? "#6600ff" : "#cecece")};
	border-radius: 3px;
	display: flex;
	padding: 0;
	display: flex;
	position: relative;
	float: left;
	margin-bottom: 5px;
	align-items: center;
	cursor: pointer;
`;

export const CheckBox = styled.div`
	height: 28px;
	width: 28px;
	border: 1px solid ${(props) => (props.theme.selected ? "#6600ff" : "#cecece")};
	background-color: ${(props) =>
		props.theme.selected ? "#6600ff" : "#cecece"};
	margin-right: 5px;
`;

export const Text = styled.span`
	padding: 5px;
`;
