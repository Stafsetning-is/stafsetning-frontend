import React from "react";
import { Outer } from "./styles";
import { IProps } from "./interface";

//Simple infoBox used for subtext within exercise box form

export const InfoBox = ({ children }: IProps) => {
    return <Outer>{children}</Outer>;
};
