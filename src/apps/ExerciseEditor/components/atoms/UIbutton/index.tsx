import React from "react";
import { Button } from "./styles";
import { IProps } from "./interface";

/**
 * a simple UI button to be used
 * in windows
 */
export const UIButton = ({ label, onClick }: IProps) => {
	return <Button onClick={onClick}>{label}</Button>;
};
