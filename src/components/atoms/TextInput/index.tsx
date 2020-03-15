import * as React from "react";
import { InputComponent } from "../../../services";
import { FormLabel } from "../../";
import { Input } from "./styles";
/**
 * Text input that takes in value and onChange function
 * This is for the form functionality
 */
export const TextInput = ({
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
			<FormLabel text={label} errorMessage={getValidationMessage()} />
			<Input
				type="text"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={placeholder}
			/>
		</React.Fragment>
	);
};
