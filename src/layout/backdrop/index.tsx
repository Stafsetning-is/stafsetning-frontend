import React from "react";
import { IProps } from "./interface";
import { Backdrop } from "./styles";

export default (props: IProps) => {
	return <Backdrop>{props.children}</Backdrop>;
};
