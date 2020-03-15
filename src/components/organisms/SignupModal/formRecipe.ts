import { InputElementRecipe, InputObject } from "../../../services";

const mobile: InputElementRecipe = {
	label: "Farsímanúmer",
	type: "text-input",
	placeholder: "GSM númer",
	validation: {
		pattern: {
			regex: new RegExp(/[6,8]\d{2}[-\s]?\d{4}$/, "g"),
			message: "Símanúmer ekki rétt"
		}
	},
	value: ""
};

const name: InputElementRecipe = {
	label: "Fullt nafn",
	type: "text-input",
	placeholder: "Fullt nafn",
	validation: {
		minLength: 6
	},
	value: ""
};

const password1: InputElementRecipe = {
	label: "Lykilorð",
	type: "password-input",
	placeholder: "Lykilorð",
	validation: {
		minLength: 6,
		trim: true
	},
	value: ""
};

const password2: InputElementRecipe = {
	label: "Lykilorð (aftur)",
	type: "password-input",
	placeholder: "Lykilorð (aftur)",
	value: ""
};

export const signupForm: InputObject = {
	name,
	mobile,
	password1,
	password2
};
