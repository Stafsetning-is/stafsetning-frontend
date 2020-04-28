import React from "react";
import { Outer } from "./styles";
import { IPRops } from "./interface";

export const Table = ({ children }: IPRops) => {
	return <Outer>{children}</Outer>;
};
