import React, { useState } from "react";
import { FormGenerator, BasicButton, Modal } from "../../components";
import { loginForm, signupForm } from "./formRecipe";
import { formKey, extraButtonText, submitButtonText } from "./utils";
import { IProps } from "./interface";
import { connect } from "react-redux";
import { StoreState } from "../../reducers";
/**
 * Authentication modal
 */
const AuthModal = ({ open }: IProps) => {
	const [showSignup, setShowSignup] = useState(false);
	if (!open) return null;

	return (
		<Modal>
			<FormGenerator
				fields={showSignup ? signupForm : loginForm}
				key={formKey(showSignup)}
				label={submitButtonText(showSignup)}
			/>
			<BasicButton
				text={extraButtonText(showSignup)}
				onClick={() => setShowSignup(!showSignup)}
				type="secondary"
			/>
		</Modal>
	);
};

const mapStateToProps = (state: StoreState) => ({
	open: state.auth.showAuthModal
});

export default connect(mapStateToProps, {})(AuthModal);
