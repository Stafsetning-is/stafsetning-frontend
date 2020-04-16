import React from "react";
import { IProps } from "./interface";
import Char from "../Character";
import { Practice } from "./interface";
import { Outer } from "./styles";

/**
 * Component that receives text and displays its errors accordingly
 */

export default ({ errors, exerciseString }: IProps) => {
    const charArray = exerciseString.split("");

    /**
     * GetErrorAtIndex function takes an index
     * It returns error if its an error and returns "" (empty string) if it is not and error
     */

    const getIndexOfError = (index: number) => {
        const errorItem = errors.find((error) => error.charAt === index);
        if (errorItem === undefined) return "";
        return errorItem.error;
    };

    /**
     * characterJSX essentially calls getErrorAtIndex and sets itself as that return value
     */
    const characterJSX = charArray.map((char, index) => {
        const errorChar = getIndexOfError(index);
        return <Char char={char} error={errorChar} />;
    });
    /**
     * Here we return the characterJSX
     */
    return <Outer>{characterJSX} </Outer>;
};
