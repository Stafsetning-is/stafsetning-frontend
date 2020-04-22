import styled from "styled-components";

export const Outer = styled.div`
	display: flex;
	border: 1px solid ${(props) => (props.theme.selected ? "#ff00cc" : "#cecece")};
	border-radius: 3px;
	padding: 5px;
	display: flex;
	position: relative;
	float: left;
	margin-bottom: 5px;
	align-items: center;
	cursor: pointer;
`;

export const CheckBox = styled.div`
	height: 10px;
	width: 10px;
	border: 1px solid #cecece;
	border-radius: 3px;
	margin-right: 5px;
`;
