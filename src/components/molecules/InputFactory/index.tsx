import * as React from "react";
import { InputComponent } from "../../../services";
import { TextInput, PasswordInput as PwInput, DropDown } from "../../";

/**
 * This functional component takes in input component props and
 * returns the specified component needed.
 */
export const InputFactory = (props: InputComponent) => {
	const { type, onChange, label, passProps } = props;
	switch (type) {
		case "text-input":
			return (
				<TextInput {...props} onChange={(val) => onChange(val)} key={label} />
			);
		case "password-input":
			return (
				<PwInput {...props} onChange={(val) => onChange(val)} key={label} />
			);
		case "drop-down":
			return (
				<DropDown
					{...props}
					onChange={(val) => onChange(val)}
					key={label}
					selections={passProps.selections}
				/>
			);
		default:
			return null;
	}
};
