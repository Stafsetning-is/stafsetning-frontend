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

const username: InputElementRecipe = {
	label: "Notendanafn",
	type: "text-input",
	placeholder: "Notendanafn",
	validation: {
		minLength: 6
	},
	value: ""
};

const password: InputElementRecipe = {
	label: "Lykilorð",
	type: "password-input",
	placeholder: "Lykilorð",
	validation: {
		minLength: 6,
		trim: true
	},
	value: ""
};

export const signupForm: InputObject = {
	name,
	username,
	mobile,
	password
};
