import { InputAdornmentClassKey } from "@material-ui/core";

export type FormElements =
	| "check-box"
	| "text-input"
	| "password-input"
	| "number-input"
	| "radio-button"
	| "drop-down";

export type CharacterTypes =
	| "letters"
	| "numbers"
	| "white-space"
	| "symbols"
	| "lower-case"
	| "upper-case";

interface InputBase {
	type: FormElements;
	label: string;
	placeholder?: string;
	key?: string;
	valid?: boolean;
	validationMessage?: string;
	value: any;
	passProps: any;
}

export interface InputElementValidation {
	minLength?: number;
	pattern?: {
		regex: RegExp;
		message: string;
	};
	forbiddenCharacterTypes?: CharacterTypes[];
	requiredCharacterTypes?: CharacterTypes[];
	trim?: boolean;
	equalOtherField?: string;
}

export interface InputElementRecipe extends InputBase {
	validation?: InputElementValidation;
}

export type InputObject = {
	[keys: string]: InputElementRecipe;
};

export type LiveInputObject = {
	[keys: string]: LiveInputElementRecipe;
};

export interface InputComponent extends InputBase {
	onChange: (newValue: any) => void;
}

interface DropDownSelection {
	text: string;
	value: any;
}

export interface DropDownComponent extends InputComponent {
	selections: DropDownSelection[];
}

export interface DropDownFactoryElement extends InputComponent {
	selections: DropDownSelection[];
}

export interface LiveInputElementRecipe extends InputElementRecipe {
	modified: boolean;
}
