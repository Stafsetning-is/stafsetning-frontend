import React, { useState, useMemo } from "react";
import { IProps } from "./interface";
import { FormGenerator, BasicButton, Modal } from "../../components";
import { loginForm, signupForm } from "./formRecipe";
import { formKey, extraButtonText, submitButtonText } from "./utils";
/**
 * Authentication modal
 */
export default ({ open }: IProps) => {
	const [showSignup, setShowSignup] = useState(false);
	if (!open) return null;

	return (
		<Modal>
			<FormGenerator
				fields={showSignup ? signupForm : loginForm}
				key={formKey(showSignup)}
			/>
			<BasicButton
				text={extraButtonText(showSignup)}
				onClick={() => setShowSignup(!showSignup)}
				type="secondary"
			/>
		</Modal>
	);
};
