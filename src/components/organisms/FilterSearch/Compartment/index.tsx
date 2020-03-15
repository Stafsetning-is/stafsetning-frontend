import React from "react";
import { IProps } from "./interface";
import { Container } from "./styles";
/**
 * Compartment for each section of filter search
 */
export default ({ children }: IProps) => {
	return <Container>{children}</Container>;
};
