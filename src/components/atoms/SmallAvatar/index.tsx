import React from "react";
import { IProps } from "./interface";
import { Outer } from "./styles";

export const SmallAvatar = ({ url, xs }: IProps) => {
	return <Outer theme={{ url, xs }} />;
};
