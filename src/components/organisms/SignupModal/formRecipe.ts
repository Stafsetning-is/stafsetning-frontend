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
	}
};

const password: InputElementRecipe = {
	label: "Lykilorð",
	type: "password-input",
	placeholder: "Lykilorð",
	validation: {
		minLength: 5,
		trim: true,
		requiredCharacterTypes: ["upper-case", "numbers", "symbols"]
	}
};

const userName: InputElementRecipe = {
	label: "Notendanafn",
	type: "text-input",
	placeholder: "Notendanafn",
	validation: {
		minLength: 5,
		trim: true,
		forbiddenCharacterTypes: ["symbols", "white-space", "upper-case"]
	}
};

const password2: InputElementRecipe = {
	label: "Lykilorð (aftur)",
	type: "password-input",
	placeholder: "Lykilorð (aftur)"
};

export const signupForm: InputObject = {
	userName,
	mobile,
	password,
	password2
};
