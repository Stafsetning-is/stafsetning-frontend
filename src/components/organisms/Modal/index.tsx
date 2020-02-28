import * as React from "react";
import { IProps } from "./interface";
import { Container } from "./styles";
import { BoxWrap } from "../../";

export const Modal = ({ children }: IProps) => {
	return (
		<Container>
			<BoxWrap>{children}</BoxWrap>
		</Container>
	);
};
