import * as React from "react";
import { InputComponent } from "../../../services";
import {
	TextInput,
	PasswordInput as PwInput,
	DropDown,
	CheckBoxInput,
	SliderInput,
	ColorPickerInput,
} from "../../";

/**
 * This functional component takes in input component props and
 * returns the specified component needed.
 */
export const InputFactory = (props: InputComponent) => {
	if (props.hidden) return null;

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
					selections={passProps ? passProps.selections : []}
				/>
			);
		case "drop-down":
			return (
				<DropDown
					{...props}
					onChange={(val) => onChange(val)}
					key={label}
					selections={passProps ? passProps.selections : []}
				/>
			);
		case "check-box":
			return (
				<CheckBoxInput
					{...props}
					onChange={(val) => onChange(val)}
					key={label}
				/>
			);
		case "slider":
			return (
				<SliderInput {...props} onChange={(val) => onChange(val)} key={label} />
			);
		case "color-picker":
			return (
				<ColorPickerInput
					{...props}
					onChange={(val) => onChange(val)}
					key={label}
					colors={passProps ? passProps.colors ?? [] : []}
				/>
			);
		default:
			return null;
	}
};
