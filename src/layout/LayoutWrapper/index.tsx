import React from "react";
import { IProps } from "./interface";
import Header from "../Header";
import BackDrop from "../Backdrop";
import CenterBlock from "../CenterBlock";
import AuthModal from "../AuthModal";

export const LayoutWrapper = ({ children }: IProps) => {
	return (
		<BackDrop>
			<Header />
			<CenterBlock>{children}</CenterBlock>
			<AuthModal open={true} />
		</BackDrop>
	);
};
