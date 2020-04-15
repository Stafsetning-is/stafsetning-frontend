import React from "react";
import { IProps } from "./interface";

/**
 * This Character component will descibe the error in more detail
 * This relates to the way each individual character that was wrongly typed is shown
 */

export default ({ char, error }: IProps) => {
    return <span>{char}</span>;
};
