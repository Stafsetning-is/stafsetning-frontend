import React from "react";
import { IProps } from "./interface";
import { Centered } from "./styles";

/**
 * Component that sets the component
 * to a specified global with
 * and centers the item
 */
export default ({ children }: IProps) => {
	return <Centered>{children} </Centered>;
};
