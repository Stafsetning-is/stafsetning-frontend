import React from "react";
import { LayoutWrapper } from "../../../../layout";
import { FormGenerator, Modal } from "../../../";
import { InputElementRecipe } from "../../../../services";

export default () => {
	return (
		<LayoutWrapper>
			<Modal>
				<FormGenerator fields={formElements} />
			</Modal>
		</LayoutWrapper>
	);
};

const formElements: { [key: string]: InputElementRecipe } = {
	userName: {
		label: "Your username",
		type: "text-input",
		value: "asdf",
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
		placeholder: "your password (again)",
		key: ""
	}
};
