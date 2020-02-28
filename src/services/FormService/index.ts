export type FormElements =
	| "check-box"
	| "text-input"
	| "password-input"
	| "number-input"
	| "radio-button";

interface InputBase {
	value: any;
	type: FormElements;
	label: string;
	placeholder: string;
	key: string;
}

export interface InputElementRecipe extends InputBase {}

export interface InputComponent extends InputBase {
	onChange: (newValue: any) => void;
}

export interface InputFactory extends InputBase {
	onChange: (key: string, newValue: any) => void;
}
