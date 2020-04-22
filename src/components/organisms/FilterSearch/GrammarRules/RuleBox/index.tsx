import React from "react";
import { IProps } from "./interface";
import { Outer, CheckBox } from "./styles";
export default ({ name, onClick, selected, id }: IProps) => {
	return (
		<Outer theme={{ selected }} onClick={() => onClick(id)}>
			<CheckBox />
			<span>{name}</span>
		</Outer>
	);
};
