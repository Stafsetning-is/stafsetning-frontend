import React from "react";
import { LayoutWrapper } from "../../../../layout";
import { FormGenerator, Modal } from "../../../";
import { InputObject } from "../../../../services";

export default () => {
	return (
		<LayoutWrapper>
			<Modal>
				<FormGenerator fields={formElements} />
			</Modal>
		</LayoutWrapper>
	);
};

const formElements: InputObject = {
	userName: {
		label: "Your username",
		type: "text-input",
		value: "",
		placeholder: "whhaa",
		key: "",
		validation: {
			minLength: 5,
			trim: true,
			forbiddenCharacterTypes: ["symbols", "white-space", "upper-case"]
		}
	},
	password1: {
		label: "Future password",
		type: "password-input",
		value: "",
		placeholder: "your password",
		key: "",
		validation: {
			minLength: 5,
			trim: true,
			requiredCharacterTypes: ["upper-case", "numbers", "symbols"]
		}
	},
	password2: {
		label: "Future password (again)",
		type: "password-input",
		value: "",
		placeholder: "your password (again)",
		key: ""
	},
	mobile: {
		label: "Your mobile number",
		type: "text-input",
		value: "",
		placeholder: "Mobile number",
		key: "",
		validation: {
			pattern: {
				regex: new RegExp(/[6,8]\d{2}[-\s]?\d{4}$/, "g"),
				message: "Símanúmer ekki rétt"
			}
		}
	}
};
