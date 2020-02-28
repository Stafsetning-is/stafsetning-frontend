import React from "react";
import { IProps } from "./interface";
import { Button } from "./styles";

export default ({ onClick }: IProps) => {
	return <Button onClick={onClick}>Sjá texta aftur</Button>;
};
