export type FormElements =
	| "check-box"
	| "text-input"
	| "password-input"
	| "number-input"
	| "radio-button";

export type CharacterTypes =
	| "letters"
	| "numbers"
	| "white-space"
	| "symbols"
	| "lower-case"
	| "upper-case";

interface InputBase {
	value?: any;
	type: FormElements;
	label: string;
	placeholder: string;
	key?: string;
	valid?: boolean;
	validationMessage?: string;
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

export type InputObject = { [keys: string]: InputElementRecipe };

export interface InputComponent extends InputBase {
	onChange: (newValue: any) => void;
}

export interface InputFactory extends InputBase {
	onChange: (newValue: any) => void;
}
