import React from "react";
import { IProps } from "./interface";
import { BoxWrap as Container } from "./styles";

export const BoxWrap = ({ children }: IProps) => {
	return <Container>{children}</Container>;
};
