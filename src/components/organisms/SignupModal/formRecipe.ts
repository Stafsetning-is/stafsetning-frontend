import { InputElementRecipe, InputObject } from "../../../services";

const mobile: InputElementRecipe = {
	label: "Símanúmer",
	type: "text-input",
	placeholder: "Símanúmer",
	validation: {
		pattern: {
			regex: new RegExp(/^[6-8]\d{2}[-\s]?\d{4}$/g),
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
		forbiddenCharacterTypes: ["numbers", "symbols"],
		pattern: {
			regex: new RegExp(/.*\s..*/, "g"),
			message: "Verður að vera for- og eftirnafn",
		},
	},
	value: "",
	passProps: {},
};

const username: InputElementRecipe = {
	label: "Notandanafn",
	type: "text-input",
	placeholder: "Notandanafn",
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
	label: "Námsstig",
	type: "drop-down",
	placeholder: "Veldu námsstig",
	validation: {
		minLength: 6,
		trim: true,
	},
	value: "",
	passProps: {
		selections: [
			{
				text: "1. bekkur",
				value: 1,
			},
			{
				text: "2. bekkur",
				value: 2,
			},
			{
				text: "3. bekkur",
				value: 3,
			},
			{
				text: "4. bekkur",
				value: 4,
			},
			{
				text: "5. bekkur",
				value: 5,
			},
			{
				text: "6. bekkur",
				value: 6,
			},
			{
				text: "7. bekkur",
				value: 7,
			},
			{
				text: "8. bekkur",
				value: 8,
			},
			{
				text: "9. bekkur",
				value: 9,
			},
			{
				text: "10. bekkur",
				value: 10,
			},
			{
				text: "Framhaldsskóli",
				value: 11,
			},
		],
	},
};

export const signupForm: InputObject = {
	name,
	username,
	mobile,
	password,
	difficulty,
};
