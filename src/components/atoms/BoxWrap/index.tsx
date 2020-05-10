import React from "react";
import { IProps } from "./interface";
import { BoxWrap as Container } from "./styles";

//padded BoxWrap with shadow on hover used for exercise boxes
export const BoxWrap = ({ children, padding }: IProps) => {
    return <Container theme={{ padding }}>{children}</Container>;
};
