import * as React from "react";
import { IProps } from "./interface";
import { Container } from "./styles";
import { BoxWrap, Backdrop } from "../../";

export const Modal = ({ children, onBackgroundClick }: IProps) => {
	return (
		<React.Fragment>
			<Backdrop onClick={onBackgroundClick} />
			<Container>
				<BoxWrap>{children}</BoxWrap>
			</Container>
		</React.Fragment>
	);
};
