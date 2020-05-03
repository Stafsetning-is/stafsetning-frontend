import styled from "styled-components";

export const Outer = styled.div`
	margin: 20px 0 10px;
	position: relative;
	z-index: 30;
`;

export const Inner = styled.div`
	padding: 10px;
	font-size: 16px;
	margin: 10px 0 20px 0;
	border-radius: 3px;
	border: 1px solid #cecece;
	background: #f8f8f8;
	outline: none;
	display: flex;
	align-items: center;
	position: relative;
	cursor: pointer;
	z-index: 30;
`;

export const Text = styled.div`
	color: #666;
`;

export const ColorBox = styled.div`
	background-color: ${(props) => props.theme.color};
	height: 45px;
	width: 45px;
	border: 1px solid #cecece;
	border-radius: 23px;
	cursor: pointer;
`;

export const PickedColor = styled.div`
	margin-right: 20px;
	${ColorBox} {
		height: 20px;
		width: 20px;
		cursor: default;
	}
`;

export const DefaultColor = styled.div`
	width: 100%;
	height: 30px;
`;

export const Selections = styled.div`
	position: absolute;
	width: 330px;
	padding: 20px;
	box-sizing: border-box;
	top: 40px;
	background-color: #eee;
	border: 1px dashed #d1d1d1;
	z-index: 10;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
`;
