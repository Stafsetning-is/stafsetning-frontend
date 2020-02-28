import * as React from "react";
import { InputComponent } from "../../../services";

/**
 * Password input that takes in value and onChange function
 * This is for the form functionality
 */
export const PasswordInput = ({ value, onChange, label }: InputComponent) => {
	return (
		<React.Fragment>
			<p>{label}</p>
			<input
				type="password"
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</React.Fragment>
	);
};
