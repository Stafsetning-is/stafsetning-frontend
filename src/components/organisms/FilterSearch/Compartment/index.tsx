import React from "react";
import { IProps } from "./interface";
import { Container } from "./styles";
import { FormLabel } from "../../../";
/**
 * Compartment for each section of filter search
 */
export default ({ children, label }: IProps) => {
	return (
		<Container>
			<FormLabel text={label} />
			{children}
		</Container>
	);
};
