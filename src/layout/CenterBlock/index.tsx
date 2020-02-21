import React from "react";
import { IProps } from "./interface";
import { Centered } from "./styles";

export default ({ children }: IProps) => {
	return <Centered>{children} </Centered>;
};
