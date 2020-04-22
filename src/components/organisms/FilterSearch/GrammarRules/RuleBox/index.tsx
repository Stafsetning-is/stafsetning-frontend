import React from "react";
import { IProps } from "./interface";
import { Outer, CheckBox, Text } from "./styles";
export default ({ name, onClick, selected, id }: IProps) => {
	return (
		<Outer theme={{ selected }} onClick={() => onClick(id)}>
			<CheckBox theme={{ selected }} />
			<Text>{name}</Text>
		</Outer>
	);
};
