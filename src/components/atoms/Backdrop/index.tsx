import React from "react";
import { IProps } from "./interface";
import { Screen } from "./styles";

/**
 *
 * Grey, transcluscent backdrop that
 * fills screen and is absolu positioned
 */
export const Backdrop = ({ onClick }: IProps) => {
	const cb = onClick ?? (() => {});
	return <Screen onClick={cb} />;
};
