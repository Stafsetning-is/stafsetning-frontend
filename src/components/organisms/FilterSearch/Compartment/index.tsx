import React from "react";
import { IProps } from "./interface";
import { Container, Inner } from "./styles";
import { FormLabel } from "../../../";
/**
 * A compartment for each section of the filter search
 */
export default ({ children, label }: IProps) => {
    return (
        <Container>
            <FormLabel text={label} />
            <Inner>{children}</Inner>
        </Container>
    );
};
