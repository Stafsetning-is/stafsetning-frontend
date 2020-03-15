import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	padding: 20px;
	border: solid #ccc 0px;
	border-width: 0 1px 0 0;
	:last-child {
		border-width: 0;
	}
`;
