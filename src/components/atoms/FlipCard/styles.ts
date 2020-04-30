import styled from "styled-components";

export const Outer = styled.div`
	transform: rotateY(90deg);
	${(props) => (props.theme.show ? "transform: rotateY(0deg);" : "")}
	transition: transform 1s;
	transform-style: preserve-3d;
	height: 100%;
	width: 100%;
	background-color: #eeeeee;
	border: 1px dashed #cecece;
	box-shadow: 5px 5px 35px rgba(0, 0, 0, 0.4);
	border-radius: 5px;
	padding: 30px;
	box-sizing: border-box;
`;
