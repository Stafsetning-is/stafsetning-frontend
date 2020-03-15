import styled from "styled-components";

export const BoxWrap = styled.div`
	padding: ${(props) => (props.theme.padding ? props.theme.padding : "20px")};
	border: #999;
	box-shadow: 0px 0px 15px rgba(102, 0, 255, 0.1);
	border-radius: 3px;
`;
