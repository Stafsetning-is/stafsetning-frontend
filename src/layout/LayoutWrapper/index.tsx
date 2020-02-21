import React from "react";
import { IProps } from "./interface";
import Header from "../header";
import BackDrop from "../backdrop";

export const LayoutWrapper = ({ children }: IProps) => {
	return (
		<BackDrop>
			<Header />
			{children}
		</BackDrop>
	);
};
