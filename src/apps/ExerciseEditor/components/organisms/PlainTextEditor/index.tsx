import React from "react";
import { EditorOuter } from "./styles";
import Header from "./Header";
import EditText from "./EditText";

export const PlainTextEditor = () => {
	return (
		<EditorOuter>
			<Header />
			<EditText />
		</EditorOuter>
	);
};
