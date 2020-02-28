import React, { useState, useEffect } from "react";
import { LayoutWrapper } from "../../../../layout";
import { FormGenerator } from "../../../";
import { InputElementRecipe } from "../../../../services";

export default () => {
	return (
		<LayoutWrapper>
			<FormGenerator fields={formElements} />
		</LayoutWrapper>
	);
};

const formElements: { [key: string]: InputElementRecipe } = {
	userName: {
		label: "Your username",
		type: "text-input",
		value: "",
		placeholder: "whhaa",
		key: ""
	},
	password1: {
		label: "Future password",
		type: "password-input",
		value: "",
		placeholder: "your password",
		key: ""
	},
	password2: {
		label: "Future password (again)",
		type: "password-input",
		value: "",
		placeholder: "your password",
		key: ""
	}
};
