import React from "react";
import { EditorHeader } from "./styles";
import Tabs from "./Tabs";
import ErrorMessage from "./ErrorMessage";

/**
 * The header of the editor
 * returns the error message
 * and the tabs
 */
export default () => {
	return (
		<EditorHeader>
			<ErrorMessage />
			<Tabs />
		</EditorHeader>
	);
};
