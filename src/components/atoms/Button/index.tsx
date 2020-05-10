import React from "react";
import { ButtonOuter } from "./styles";
import { IProps } from "./interface";
import { getTheme } from "./utils";

/**
 * This is a basic button used throughout the system and has the ability to change color when clicked
 * @param text appears inside the button
 * @param onClick listens for when the button is clicked
 * @param type refers to what color the button will be
 */
export const BasicButton = ({ text, onClick, type }: IProps) => {
    return (
        <ButtonOuter onClick={onClick} theme={getTheme(type)}>
            {text}
        </ButtonOuter>
    );
};
