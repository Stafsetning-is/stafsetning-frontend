import React from "react";
import { IProps } from "./interface";
import Header from "../Header";
import BackDrop from "../BackDrop";
import CenterBlock from "../CenterBlock";

export const LayoutWrapper = ({ children }: IProps) => {
	return (
		<BackDrop>
			<Header />
			<CenterBlock>{children}</CenterBlock>
		</BackDrop>
	);
};
