import React from "react";
import { IProps } from "./interface";
import { BoxWrap as Container } from "./styles";

export const BoxWrap = ({ children, padding }: IProps) => {
	return <Container theme={{ padding }}>{children}</Container>;
};
