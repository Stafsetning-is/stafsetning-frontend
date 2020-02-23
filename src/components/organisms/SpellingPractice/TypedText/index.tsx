import React, { forwardRef, useImperativeHandle, useState } from "react";

export default forwardRef((props, ref) => {
	const [text, setText] = useState("");

	/**
	 * Adds character to visibled text
	 * @param char
	 */
	const addCharacter = (char: string) => {
		setText((t) => t + char);
	};

	useImperativeHandle(ref, () => ({
		addCharacter
	}));

	return <span>{text}</span>;
});

export const refObject = {
	addCharacter: (c: string) => {}
};
