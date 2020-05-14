import styled from "styled-components";

export const IconWrapper = styled.div`
	font-size: 40px;
	margin-right: 20px;
	color: #333;
`;

export const Comment = styled.p`
	color: #333;
	font-size: 18px;
	margin: -5px 0 5px 0;
`;

export const Link = styled.p`
	color: #6600ff;
`;

export const Outer = styled.div`
	@media (max-width: 999px) {
		display: none;
		> * {
			display: none;
		}
	}
`;
