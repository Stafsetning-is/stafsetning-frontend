import React from "react";
import { Element } from "./styles";
import { IProps } from "./interface";

/**
 * Selection element in drop down
 */
export default ({ text, value, onClick }: IProps) => {
	return <Element onClick={() => onClick(value)}>{text}</Element>;
};
