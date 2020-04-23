import React from "react";
import { IProps } from "./interface";
import { Container, Inner } from "./styles";
import { FormLabel } from "../../../";
/**
 * Compartment for each section of filter search
 */
export default ({ children, label }: IProps) => {
	return (
		<Container>
			<FormLabel text={label} />
			<Inner>{children}</Inner>
		</Container>
	);
};
