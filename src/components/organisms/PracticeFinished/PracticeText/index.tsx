import React from "react";
import { IProps } from "./interface";
import Char from "../Character";
import { Outer } from "./styles";

export default ({ errors, exerciseString }: IProps) => {
	const charArray = exerciseString.split("");

	const getErrorAtIndex = (index: number) => {
		const errorItem = errors.find((error) => error.charAt === index);
		if (errorItem === undefined) return "";
		return errorItem.error;
	};

	const characterJSX = charArray.map((char, index) => {
		const errorChar = getErrorAtIndex(index);
		return <Char char={char} error={errorChar} />;
	});

	return <Outer>{characterJSX}</Outer>;
};
