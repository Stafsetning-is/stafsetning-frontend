import React from "react";
import { IProps } from "./interface";
import { Outer, Text } from "./styles";

export default ({ count }: IProps) => {
	return (
		<Outer theme={{ count }}>
			<Text>{count}</Text>
		</Outer>
	);
};
