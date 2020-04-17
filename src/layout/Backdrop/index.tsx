import React from "react";
import { IProps } from "./interface";
import { Backdrop } from "./styles";

export default ({ children }: IProps) => {
	return <Backdrop>{children}</Backdrop>;
};
