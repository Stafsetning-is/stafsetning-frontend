import React from "react";
import { EditorHeader } from "./styles";
import Tabs from "./Tabs";
import ErrorMessage from "./ErrorMessage";

export default () => {
	return (
		<EditorHeader>
			<ErrorMessage />
			<Tabs />
		</EditorHeader>
	);
};
