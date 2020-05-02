import React from "react";
import { Outer, Points as Text, Coin } from "./styles";
import { IProps } from "./interface";

export const Points = ({ points, whiteBG }: IProps) => {
	return (
		<Outer>
			<Coin />
			<Text theme={{ darkText: !!whiteBG }}>{points}</Text>
		</Outer>
	);
};
