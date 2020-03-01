import * as React from "react";
import { InputComponent } from "../../../services";

/**
 * Text input that takes in value and onChange function
 * This is for the form functionality
 */
export const TextInput = ({
	value,
	onChange,
	label,
	placeholder
}: InputComponent) => {
	return (
		<React.Fragment>
			<p>{label}</p>
			<input
				type="text"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={placeholder}
			/>
		</React.Fragment>
	);
};
