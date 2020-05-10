import React from "react";
import { Row } from "./styles";
import { IPRops } from "./interface";
/*Table row used for other components encapsulated within it*/
export const TableRow = ({ children }: IPRops) => {
    return <Row>{children}</Row>;
};
