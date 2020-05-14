import React from "react";
import { IProps } from "./interface";
import { ShakeHorizontal } from "reshake";

/**
 *
 * Component that shakes its children
 */
export const Shaky = ({ shake, children }: IProps) => {
    if (shake)
        return <ShakeHorizontal fixed={true}>{children}</ShakeHorizontal>;
    else return <React.Fragment>{children}</React.Fragment>;
};
