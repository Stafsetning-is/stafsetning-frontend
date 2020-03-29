import { InputElementRecipe, InputObject } from "../../../services";

const username: InputElementRecipe = {
	label: "Notendanafn",
	type: "text-input",
	placeholder: "Notendanafn",
	validation: {
		minLength: 5,
		trim: true,
		forbiddenCharacterTypes: ["symbols", "white-space", "upper-case"]
	},
	value: ""
};

const password: InputElementRecipe = {
	label: "Lykilorð",
	type: "password-input",
	placeholder: "Lykilorð",
	validation: {
		minLength: 5,
		trim: true,
		requiredCharacterTypes: []
	},
	value: ""
};

export const loginForm: InputObject = {
	username,
	password
};
