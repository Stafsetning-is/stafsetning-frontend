import React from "react";
import { IProps } from "./interface";
import Char from "../Character";
import { Outer } from "./styles";

/**
 * Component that receives text and displays its errors accordingly
 */

export default ({ errors, exerciseString }: IProps) => {
    const charArray = exerciseString.split("");

    /**
     * GetErrorAtIndex function takes an index
     * It returns error if it's an error and returns "" (empty string) if it's not and error
     */

    const getIndexOfError = (index: number) => {
        const errorItem = errors.find((error) => error.charAt === index);
        if (errorItem === undefined) return "";
        return errorItem.error;
    };

    /**
     * characterJSX essentially calls getErrorAtIndex and sets itself as that return value along with the index
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
