import React from "react";
import { Outer } from "./styles";
import { IProps } from "./interface";

export default ({ character, higlight, padding }: IProps) => {
	return <Outer theme={{ higlight, padding }}>{character}</Outer>;
};
