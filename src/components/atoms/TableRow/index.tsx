import React from "react";
import { Row } from "./styles";
import { IPRops } from "./interface";

export const TableRow = ({ children }: IPRops) => {
	return <Row>{children}</Row>;
};
