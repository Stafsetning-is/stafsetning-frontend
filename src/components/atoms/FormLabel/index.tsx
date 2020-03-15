import * as React from "react";
import { IProps } from "./interface";
import { Container, LabelText, ErrorText } from "./styles";

export const FormLabel = ({ text, errorMessage }: IProps) => {
	return (
		<Container>
			<LabelText>{text}</LabelText>
			<ErrorText> {errorMessage}</ErrorText>
		</Container>
	);
};
