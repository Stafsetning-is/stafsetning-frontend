import styled from "styled-components";

export const Centered = styled.div`
	@media (min-width: 1000px) {
		width: 1000px;
		margin: auto;
		padding-bottom: 115px;
		position: relative;
	}
	@media (max-width: 999px) {
		> * {
			display: none;
		}
	}
`;
