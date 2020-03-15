import * as React from "react";
import { InputFactory as IInputfactory } from "../../../services";
import { TextInput, PasswordInput as PwInput } from "../../";

/**
 * This functional component takes in input component props and
 * returns the specified component needed.
 */
export const InputFactory = (props: IInputfactory) => {
	const { type, onChange, label } = props;
	switch (type) {
		case "text-input":
			return (
				<TextInput {...props} onChange={(val) => onChange(val)} key={label} />
			);
		case "password-input":
			return (
				<PwInput {...props} onChange={(val) => onChange(val)} key={label} />
			);
		default:
			return null;
	}
};
