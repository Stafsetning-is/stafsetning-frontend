import * as React from "react";
import { InputFactory as IInputfactory } from "../../../services";
import { TextInput, PasswordInput } from "../../";

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
				<PasswordInput
					{...props}
					onChange={(val) => onChange(val)}
					key={label}
				/>
			);
		default:
			return null;
	}
};
