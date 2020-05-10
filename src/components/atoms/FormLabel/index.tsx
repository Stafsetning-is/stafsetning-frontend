import * as React from "react";
import { IProps } from "./interface";
import { Container, LabelText, ErrorText } from "./styles";

/**
 *FormLabel essentially a title that is styled and encapsulated within a container
 * @param text used as the main title text
 * @param errorMessage used for error messages
 */
export const FormLabel = ({ text, errorMessage }: IProps) => {
    return (
        <Container>
            <LabelText>{text}</LabelText>
            <ErrorText> {errorMessage}</ErrorText>
        </Container>
    );
};
