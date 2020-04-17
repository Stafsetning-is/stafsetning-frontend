import React, { Children } from "react";
import { IProps } from "./interface";
import { Loader } from "../..";

/**
 * Wrapper around rendered items e.g. boxes mapped from an array of objects
 * if there are no children, e.g. boxes to render then it shows the loading
 * animation instaed
 * @param needs props.children
 */
export const LoadChildrenWrapper = ({ children }: IProps) => {
	if (Children.count(children) === 0) return <Loader loading={true} />;
	else return children;
};
