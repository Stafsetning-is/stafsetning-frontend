import React from "react";
import { ButtonOuter } from "./styles";
import { IProps } from "./interface";
import { getTheme } from "./utils";

export const BasicButton = ({ text, onClick, type }: IProps) => {
	return (
		<ButtonOuter onClick={onClick} theme={getTheme(type)}>
			{text}
		</ButtonOuter>
	);
};
