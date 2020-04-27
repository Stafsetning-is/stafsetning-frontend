import styled from "styled-components";

export const Outer = styled.div`
	height: 70px;
	width: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 40px;
	color: #0066ff;
	flex-direction: column;
	padding: 10px;
	border-radius: 5px;
	transition: 0.3s;
	cursor: pointer;
	:hover {
		background: #e1e1e1;
	}
	${(props) => (props.theme.selected ? "background: #e1e1e1;" : "")}
`;

export const Name = styled.p`
	font-size: 12px;
	color: #666;
	margin-top: 5px;
	height: 15px;
	width: 100%;
	text-align: center;
`;
