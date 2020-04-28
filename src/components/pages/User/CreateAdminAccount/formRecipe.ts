import { InputElementRecipe, InputObject } from "../../../../services";

const mobile: InputElementRecipe = {
	label: "Farsímanúmer",
	type: "text-input",
	placeholder: "GSM númer",
	validation: {
		pattern: {
			regex: new RegExp(/[6,8]\d{2}[-\s]?\d{4}$/, "g"),
			message: "Símanúmer ekki rétt",
		},
	},
	value: "",
	passProps: {},
};

const name: InputElementRecipe = {
	label: "Fullt nafn",
	type: "text-input",
	placeholder: "Fullt nafn",
	validation: {
		minLength: 6,
	},
	value: "",
	passProps: {},
};

const username: InputElementRecipe = {
	label: "Notendanafn",
	type: "text-input",
	placeholder: "Notendanafn",
	validation: {
		minLength: 6,
	},
	value: "",
	passProps: {},
};

const password: InputElementRecipe = {
	label: "Lykilorð",
	type: "password-input",
	placeholder: "Lykilorð",
	validation: {
		minLength: 6,
		trim: true,
	},
	value: "",
	passProps: {},
};

const difficulty: InputElementRecipe = {
	label: "",
	type: "drop-down",
	placeholder: "Veldu námstig",
	hidden: true,
	value: 5,
	passProps: {
		selections: [],
	},
};

const requestAdmin: InputElementRecipe = {
	label: "",
	type: "check-box",
	placeholder: "",
	value: true,
	hidden: true,
	passProps: {},
};

export const signupForm: InputObject = {
	name,
	username,
	mobile,
	password,
	difficulty,
	requestAdmin,
};
