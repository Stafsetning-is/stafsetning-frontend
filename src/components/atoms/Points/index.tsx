import React from "react";
import { Outer, Points as Text, Coin } from "./styles";
import { IProps } from "./interface";

export const Points = ({ points }: IProps) => {
	return (
		<Outer>
			<Coin />
			<Text>{points}</Text>
		</Outer>
	);
};
