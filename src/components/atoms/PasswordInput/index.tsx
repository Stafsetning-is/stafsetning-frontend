import * as React from "react";
import { InputComponent } from "../../../services";
import { FormLabel } from "../FormLabel/index";

/**
 * Password input that takes in value and onChange function
 * This is for the form functionality
 */
export const PasswordInput = ({
	value,
	onChange,
	label,
	placeholder,
	validationMessage
}: InputComponent) => {
	/**
	 * Returns validation message
	 */
	const getValidationMessage = () => {
		if (!value) return "";
		return validationMessage ?? "";
	};
	return (
		<React.Fragment>
			<p>{label}</p>
			<p>{getValidationMessage()}</p>
			<input
				type="password"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={placeholder}
			/>
		</React.Fragment>
	);
            <FormLabel text={label} />
};
