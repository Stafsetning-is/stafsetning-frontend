import React from "react";
import { Outer } from "./styles";
import { IProps } from "./interface";

export const InfoBox = ({ children }: IProps) => {
	return <Outer>{children}</Outer>;
};
