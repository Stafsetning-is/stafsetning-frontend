import * as React from "react";
import { InputObject, InputElementRecipe } from "../../../../services";
import { FormGenerator, BasicButton, Modal } from "../../../";

export default () => {
	return (
		<Modal onBackgroundClick={() => {}}>
			<FormGenerator fields={loginForm} label={"Log in"} />
			<BasicButton text={"Signup"} onClick={() => {}} type="secondary" />
		</Modal>
	);
};

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

/**
 * get key for form
 * @param signupForm is signup form displaid or not
 */
export const formKey = (signupForm: boolean) =>
	signupForm ? "signup" : "login";

/**
 * get button text beneath form
 * @param signupForm  is signup form displaid or not
 */
export const extraButtonText = (signupForm: boolean) =>
	signupForm ? "Til baka" : "Búa til aðgang";

/**
 * get button text for submit button
 * @param signupForm  is signup form displaid or not
 */
export const submitButtonText = (signupForm: boolean) =>
	signupForm ? "Búa til" : "Skrá inn";
