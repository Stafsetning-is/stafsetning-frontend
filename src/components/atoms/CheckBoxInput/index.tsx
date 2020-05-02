import * as React from "react";
import { InputComponent } from "../../../services";
import { FormLabel } from "..";
import { Outer } from "./styles";
/**
 * Password input that takes in value and onChange function
 * This is for the form functionality
 */
export const CheckBoxInput = ({
	value,
	onChange,
	label,
	placeholder,
	validationMessage,
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
			<FormLabel text={label} errorMessage={getValidationMessage()} />
			<Outer
				theme={{ selected: value }}
				onClick={() => onChange(!value)}
				placeholder={placeholder}
			/>
		</React.Fragment>
	);
};
