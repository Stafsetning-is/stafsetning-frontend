import React from "react";
import { IProps } from "./interface";
import { Outer, CheckBox } from "./styles";
export default ({ name, onClick }: IProps) => {
	return (
		<Outer>
			<CheckBox />
			<span>{name}</span>
		</Outer>
	);
};
