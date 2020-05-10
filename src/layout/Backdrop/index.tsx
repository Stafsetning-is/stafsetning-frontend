import React from "react";
import { IProps } from "./interface";
import { Backdrop } from "./styles";

/**
 * the background color behind the layout
 */
export default ({ children }: IProps) => {
	return <Backdrop>{children}</Backdrop>;
};
