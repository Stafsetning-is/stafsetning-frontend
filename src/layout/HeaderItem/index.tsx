import * as React from "react";
import { Outer } from "./styles";
import { IProps } from "./interface";

/**
 * Single header item
 */
export default ({ onClick, text }: IProps) => {
	onClick = onClick ? onClick : () => {};
	return <Outer onClick={onClick}>{text}</Outer>;
};
