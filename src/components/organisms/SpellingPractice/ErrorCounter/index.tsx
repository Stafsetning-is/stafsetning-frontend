import React from "react";
import { IProps } from "./interface";
import { Outer, Text } from "./styles";

export default ({ count }: IProps) => {
	return (
		<Outer>
			<Text>{count}</Text>
		</Outer>
	);
};
