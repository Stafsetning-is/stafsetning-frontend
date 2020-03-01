import { InputObject, InputElementRecipe } from "../../services";

const mobile: InputElementRecipe = {
	label: "Your mobile number",
	type: "text-input",
	placeholder: "Mobile number",
	validation: {
		pattern: {
			regex: new RegExp(/[6,8]\d{2}[-\s]?\d{4}$/, "g"),
			message: "Símanúmer ekki rétt"
		}
	}
};

const password: InputElementRecipe = {
	label: "Future password",
	type: "password-input",
	placeholder: "your password",
	validation: {
		minLength: 5,
		trim: true,
		requiredCharacterTypes: ["upper-case", "numbers", "symbols"]
	}
};

const userName: InputElementRecipe = {
	label: "Your username",
	type: "text-input",
	placeholder: "whhaa",
	validation: {
		minLength: 5,
		trim: true,
		forbiddenCharacterTypes: ["symbols", "white-space", "upper-case"]
	}
};

const password2: InputElementRecipe = {
	label: "Future password (again)",
	type: "password-input",
	placeholder: "your password (again)"
};

export const loginForm: InputObject = {
	mobile,
	password
};

export const signupForm: InputObject = {
	userName,
	mobile,
	password,
	password2
};
