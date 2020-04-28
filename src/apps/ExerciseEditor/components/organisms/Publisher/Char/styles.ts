import styled from "styled-components";
import { SplitType } from "../interface";

export const Outer = styled.span`
	position: relative;
	height: 17px;
	width: 20px;
	font-size: 30px;
	padding: 0 1px;
	color: #666;
	margin-bottom: 5px;
	border-left: solid;
	border-left: 3px
		${(props) =>
			((split: SplitType) => {
				switch (split) {
					case "none":
						return "none";
					case "not-closed":
						return "#6600ff dotted";
					case "closed-split":
						return "#6600ff solid";
					default:
						return "";
				}
			})(props.theme.split)};
	cursor: pointer;
	box-sizing: border-box;
`;

export const RemoveSplit = styled.div`
	height: 20px;
	width: 20px;
	background-color: #ff0066;
	border-radius: 10px;
	box-shadow: 0px 0px 5px rgba(102, 0, 255, 0.4);
	font-size: 12px;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #f8f8f8;
	margin-top: -4px;
	opacity: 0;
	transition: 0.2s;
	left: 0;
	top: -5px;
`;

export const Split = styled.span`
	border-left: 4px
		${(props) =>
			((split: SplitType) => {
				switch (split) {
					case "none":
						return "none";
					case "not-closed":
						return "#6600ff dotted";
					case "closed-split":
						return "#6600ff solid; border-radius: 2px";
					default:
						return "";
				}
			})(props.theme.split)};
	:hover ${RemoveSplit} {
		opacity: 1 !important;
	}
`;

export const LeftOverlay = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 50%;
	height: 100%;
`;

export const RightOverlay = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	width: 50%;
	height: 100%;
`;
