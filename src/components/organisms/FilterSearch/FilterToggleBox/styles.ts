import styled from "styled-components";

export const CheckBox = styled.div`
	height: 30px;
	width: 30px;
	background-color: ${(props) =>
		props.theme.selected ? "#6600ff !important" : "#cecece"};
	margin-right: 5px;
	:hover {
	}
	box-sizing: border-box;
	transition: 0.3s;
`;

export const Outer = styled.div`
	border: 1px solid
		${(props) => (props.theme.selected ? "#6600ff !important" : "#cecece")};
	border-radius: 3px;
	display: flex;
	padding: 0;
	display: flex;
	position: relative;
	margin-bottom: 5px;
	align-items: center;
	cursor: pointer;
	box-shadow: 0px 0px 15px rgba(102, 0, 255, 0.1);
	:hover {
		border-color: rgba(102, 0, 255, 0.3);
		box-shadow: 8px 8px 15px rgba(102, 0, 255, 0.1);
	}
	:hover ${CheckBox} {
		background: rgba(102, 0, 255, 0.3);
	}
	transition: 0.3s;
`;

export const Text = styled.span`
	padding: 5px;
	color: #666;
`;
