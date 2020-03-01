import * as React from "react";
import { IProps } from "./interface";
import { LabelText } from "./styles";

export const FormLabel = ({ text }: IProps) => {
    return <LabelText>{text}</LabelText>;
};
