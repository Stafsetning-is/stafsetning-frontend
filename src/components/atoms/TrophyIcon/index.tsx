import React from "react";
import { IProps } from "./interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DEFAULT_ICON } from "./utils";
import * as fa from "@fortawesome/free-solid-svg-icons";

/**
 *
 * @param DEFAULT_ICON set from the fortawesome package
 */
export const TrophyIcon = ({ icon }: IProps) => {
    // @ts-ignore due to bad declerations in external module
    const iconProp = fa[icon] ? fa[icon] : fa[DEFAULT_ICON];
    return <FontAwesomeIcon icon={iconProp} />;
};
