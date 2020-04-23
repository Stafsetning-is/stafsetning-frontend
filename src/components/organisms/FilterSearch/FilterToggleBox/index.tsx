import React from "react";
import { IProps } from "./interface";
import { Outer, CheckBox, Text } from "./styles";

/**
 * Simple UI box to display
 * grammar rules;
 */
export default ({ name, onClick, selected }: IProps) => {
	return (
		<Outer theme={{ selected }} onClick={() => onClick()}>
			<CheckBox theme={{ selected }} />
			<Text>{name}</Text>
		</Outer>
	);
};
