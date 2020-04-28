import React from "react";
import { Button } from "./styles";
import { IProps } from "./interface";

export const UIButton = ({ label, onClick }: IProps) => {
	return <Button onClick={onClick}>{label}</Button>;
};
