import { InputElementRecipe, InputObject } from "../../../services";

const username: InputElementRecipe = {
	label: "Notandanafn",
	type: "text-input",
	placeholder: "Notandanafn",
	validation: {
		minLength: 5,
		trim: true,
		forbiddenCharacterTypes: ["symbols", "white-space", "upper-case"],
	},
	value: "",
	passProps: {},
};

const password: InputElementRecipe = {
	label: "Lykilorð",
	type: "password-input",
	placeholder: "Lykilorð",
	validation: {
		minLength: 5,
		trim: true,
		requiredCharacterTypes: [],
	},
	value: "",
	passProps: {},
};

export const loginForm: InputObject = {
	username,
	password,
};
